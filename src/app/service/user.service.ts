import { Injectable } from '@angular/core';
import {ApiHelper} from "../core/rest/api-helper";
import {IUser} from "../core/model/user";
import {map, Observable} from "rxjs";
import {Constant} from "../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiHelper: ApiHelper) { }

  accessUser(user: IUser): Observable<any> {
    return this.apiHelper.post(Constant.FACEBOOK.SEND_MESSAGE, user)
  }


  signIn(bodyRequest: any): Observable<any> {
    const formData = new FormData();

    for (const key in bodyRequest) {
      if (bodyRequest.hasOwnProperty(key)) {
        const value = bodyRequest[key];
        // Otherwise, convert the value to a string and append it
        formData.append(key, String(value));
      }
    }
    return this.apiHelper.post(Constant.API_SIGN_IN, formData).pipe(map(res => res.data));
  }


  getUsers(obj: any): Observable<any> {
    return this.apiHelper.getWithHttpParams(Constant.ADMIN.USERS, obj).pipe(map(res => res.data));
  }
}
