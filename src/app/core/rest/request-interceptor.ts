import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class RequestInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {


    const headerConfig: any = {};
    headerConfig['Access-Control-Allow-Methods'] = 'GET, POST';
    headerConfig['Access-Control-Allow-Headers'] = 'X-Requested-With,content-type';
    headerConfig['Access-Control-Allow-Origin'] = '*';
    headerConfig['Access-Control-Allow-Credentials'] = 'true';

    request = request.clone({
      setHeaders: headerConfig
    });
    return next.handle(request);
  }
}
