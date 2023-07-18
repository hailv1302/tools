import {HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Constant} from '../config/constant';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ApiHelper {

  constructor(private http: HttpClient) {
  }

  private getUrlEndpoint(url: string): any {
    return Constant.API_ENDPOINT + url;
  }

  convertObjToHttpParams(obj: any): HttpParams {
    return new HttpParams({fromObject: obj});
  }

  getWithHttpParams(url: string, objParams: any): Observable<any> {
    const httpParams = this.convertObjToHttpParams(objParams);
    url = this.getUrlEndpoint(url);
    return this.http.get(url, {params: httpParams});
  }


  get(url: string, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.http.get(url, options);
  }

  post(url: string, body: any, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.http.post(url, body, options);
  }

  put(url: string, body: string, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.http.put(url, body, options);
  }

  delete(url: string, options?: any): Observable<any> {
    url = this.getUrlEndpoint(url);
    return this.http.delete(url, options);
  }

  request(request: any): Observable<HttpEvent<any>> {
    return this.http.request(request);
  }
}
