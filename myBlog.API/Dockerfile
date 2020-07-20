FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
COPY bin/Release/netcoreapp3.1/publish APP/
WORKDIR APP/
ENTRYPOINT ["dotnet", "myBlog.API.dll"]

