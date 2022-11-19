import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isSellerLoggedIn: boolean = true;
  userName: String = "";
  menuType: String = "default";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        if (localStorage.getItem("sellerInfo") && res.url.includes("seller")) {
          this.menuType = "sellerMenu";
          if (localStorage.getItem("sellerInfo")) {
            let sellerInfo = localStorage.getItem("sellerInfo");
            let sellerData = sellerInfo && JSON.parse(sellerInfo);
            this.userName = sellerData.data.uname;
          }
        } else {
          this.menuType = "default";
        }
      }
    });
    if (localStorage.getItem("sellerInfo")) {
      let sellerInfo = localStorage.getItem("sellerInfo");
      this.isSellerLoggedIn = false;
      console.log(sellerInfo);
    }
  }
  logout() {
    this.isSellerLoggedIn = true;
    localStorage.clear();
    this.router.navigate(["seller-auth"]);
  }
  loginCheck() {
    if (localStorage.getItem("sellerInfo")) {
      this.router.navigate(["seller-home"]);
    } else {
      this.router.navigate(["login"]);
    }
  }
  sellerCheck() {
    if (localStorage.getItem("sellerInfo")) {
      this.router.navigate(["seller-home"]);
    } else {
      this.router.navigate(["seller-auth"]);
    }
  }
}
