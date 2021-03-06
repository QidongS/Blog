import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable()
export class AlertifyService {

constructor() { }

    success(message: string) {
        alertify.success(message);
    }

    error(message: string) {
        alertify.error(message);
    }

    warning(message: string){
        alertify.warning(message);
    }

    message(message: string){
        alertify.message(message);
    }

    confirm(message: string, okCallBack: () => any){
        alertify.confirm(message, (e: any) => {
            if (e) {
                okCallBack();
            } else {

            }
        });
    }


}
