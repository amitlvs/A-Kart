import { sellerLogin, sellerSignUp } from "./../../app/entity/data-type";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SellerService {
  baseUrl = "http://localhost:8080/seller/";
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(public http: HttpClient) {}

  signUpSeller(data: sellerSignUp): Observable<any> {
    let headers = new HttpHeaders();
    return this.http.post<any>(this.baseUrl + "register", data, {
      headers: headers,
    });
  }
  loginSeller(data: sellerLogin): Observable<any> {
    return this.http.post<any>(this.baseUrl + "login", data);
  }
}
