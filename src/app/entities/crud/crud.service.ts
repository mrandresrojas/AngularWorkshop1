import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstans } from 'src/app.constans';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  private resourceURL = AppConstans.API_BASE_URL;
  private resourseID = AppConstans.API_ID;

  constructor(private http: HttpClient) {}

  queryCrud(): Observable<HttpResponse<any>> {
    return this.http.get<any[]>(
      this.resourceURL + '/' + this.resourseID + '/crud',
      { observe: 'response' }
    );
  }

  getCrud(id: string): Observable<HttpResponse<any>> {
    return this.http.get<any[]>(
      this.resourceURL + '/' + this.resourseID + '/crud/' + id,
      { observe: 'response' }
    );
  }

  postCrud(crud: any): Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any[]>(
      this.resourceURL + '/' + this.resourseID + '/crud',
      crud,
      { headers: httpHeaders, observe: 'response' }
    );
  }
  putCrud(crud: any,id:string): Observable<HttpResponse<any>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any[]>(
      this.resourceURL + '/' + this.resourseID + '/crud/'+id,
      crud,
      { headers: httpHeaders, observe: 'response' }
    );
  
  }
  deleteCrud(id: string): Observable<HttpResponse<any>> {
    return this.http.delete<any[]>(
      this.resourceURL + '/' + this.resourseID + '/crud/' + id,
      { observe: 'response' }
    );
  }
}
