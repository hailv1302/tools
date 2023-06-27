import {Injectable} from '@angular/core';
import {ApiHelper} from '../core/rest/api-helper';
import {Observable} from 'rxjs';
import {Constant} from '../core/config/constant';
import {Facebook} from "../core/model/facebook";

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private apiHelper: ApiHelper) {
  }

  getClients(facebook: Facebook): Observable<any[]> {
    return this.apiHelper.post(Constant.FACEBOOK.SEND_MESSAGE, facebook);
  }
}
