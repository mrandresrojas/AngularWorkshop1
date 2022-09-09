import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get('assets/my_data.json');
  }
}
