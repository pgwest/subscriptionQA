import { Component, OnInit } from '@angular/core';
import { PlatformToolsComponent} from '../platform-tools/platform-tools.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}





}
