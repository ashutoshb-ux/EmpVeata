import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const base_url = 'http://sfa.demoplatform.simplifii.com/api/v1/';

@Injectable()
export class MyProfileService {

    constructor(private http: HttpClient) {
    }

    markAttendence(empcode, lat, lng) {
        const Bulk_Url = base_url + 'cards';
        return this.http.patch<any>(Bulk_Url, {
            'entity': 'Employee',
            'action': 'MarkAttendance',
            'card_unique_code': empcode,
            'lat': lat,
            'lng': lng
        }).map((value) => {
            console.log(value);
            return value;
        });
    }

    uploadBulk(data): Observable<any> {
        const Bulk_Url = base_url + 'cards/bulk?mode=synchronous';
        return this.http.post<any>(Bulk_Url, data).map((value) => {
            console.log(value.msg);
            return value.msg;
        });
    }
}
