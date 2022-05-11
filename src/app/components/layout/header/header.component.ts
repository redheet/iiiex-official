import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import {
    Location,
    LocationStrategy,
    PathLocationStrategy,
} from "@angular/common";
declare let UIkit: any;

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    providers: [
        Location,
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class HeaderComponent implements OnInit {
    location: any;
    logo: any;
    navClass: any;

    constructor(private router: Router, location: Location) {}

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.location = this.router.url;
                if (this.location === "/" || this.location === "/seo-agency") {
                    this.logo = "iiiex2.png";
                    this.navClass = "";
                } else if (this.location === "/business-startups") {
                    this.logo = "iiiex2.png";
                    this.navClass = "bg-white";
                } else {
                    this.logo = "iiiex2.png";
                    this.navClass = "uk-dark";
                }
            }
        });
    }

    closeMenu(e) {
        UIkit.offcanvas("#offcanvas-flip").hide();
    }
}
