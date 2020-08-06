using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text;
using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MySql.Data.EntityFrameworkCore.Extensions;
using myBlog.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;
using myBlog.API.Helpers;
namespace myBlog.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureDevelopmentServices(IServiceCollection services){
            services.AddDbContext<DataContext>(x => x.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

            ConfigureServices(services);
        }

        public void ConfigureProductionServices(IServiceCollection services){
            services.AddDbContext<DataContext>(x => x.UseMySQL(Configuration.GetConnectionString("DefaultConnection")));

            ConfigureServices(services);
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddMvc();

            services.Configure<BlogDatabaseSettings>( 
                Configuration.GetSection(nameof(BlogDatabaseSettings))
            );

            services.AddSingleton<IBlogDatabaseSettings>(sp => sp.GetRequiredService<IOptions<BlogDatabaseSettings>>().Value);
            services.AddSingleton<PostRepository>();
            
            
            //specify default connection defined in appsettings.json
            services.AddControllers().AddNewtonsoftJson();
            services.AddCors();
            services.AddAutoMapper(typeof(UserInfo).Assembly);
            //TODO： Add mapper 
            services.AddScoped<IAuthRepository,AuthRepository>();
            services.AddScoped<IUserInfo,UserInfo>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
                options.TokenValidationParameters = new TokenValidationParameters{
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }else{
                app.UseExceptionHandler(builder => {
                    builder.Run(async context => {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        var error = context.Features.Get<IExceptionHandlerFeature>();
                        if(error != null){
                            context.Response.AddApplicationError(error.Error.Message);
                            await context.Response.WriteAsync(error.Error.Message);
                        }
                    });
                });
            }

            //app.UseHttpsRedirection();

            app.UseRouting();

            //add authentication 
            app.UseAuthentication();
            app.UseAuthorization();

            //add Cors
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            //utilize static files 
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapFallbackToController("Index", "Fallback");
            });
        }
    }
}
