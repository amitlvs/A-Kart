import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SellerService {
  baseUrl = "http://localhost:8080/seller/register";
  constructor(public http: HttpClient) {}

  signUpSeller(data: any): Observable<any> {
    let headers = new HttpHeaders();
    return this.http.post<any>(this.baseUrl, data, { headers: headers });
  }
}
