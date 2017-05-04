import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(public userService: UserService,
                private router: Router) {
    }

    logOut() {
        this.userService.setUser(null);
        this.router.navigate(['/']);
    }
}
