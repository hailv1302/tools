import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { AppConfig } from '../core/model/authenModel/app-config.model';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    static settings: AppConfig | undefined;

    constructor(private http: HttpClient) {

    }

    async load(): Promise<void> {
        await this.getAppConfig()
            .toPromise()
            .then((data) => {
                AppConfigService.settings = data;
            });
    }

    getAppConfig(): Observable<AppConfig> {
        const jsonFile = '/assets/config.json';
        return this.http.get<AppConfig>(jsonFile).pipe(timeout(15000));
    }
}
