import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class FooterComponent implements OnInit {
    location: any;

    constructor(
        private router: Router,
        location: Location
    ) { }

    ngOnInit() {
        this.router.events
            .subscribe((event) => {
                if ( event instanceof NavigationEnd ) {
                    this.location = this.router.url;
                }
            });
    }

}
