import { Injectable } from '@angular/core';
import {ApiHelper} from "../core/rest/api-helper";
import {IUser} from "../core/model/user";
import {Observable} from "rxjs";
import {Constant} from "../core/config/constant";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiHelper: ApiHelper) { }

  accessUser(user: IUser): Observable<any> {
    return this.apiHelper.post(Constant.FACEBOOK.SEND_MESSAGE, user)
  }
}
