import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.less'],
    template: `
        <app-topbar></app-topbar>
        <app-nav (navExpand)="navExpandEvent($event)"></app-nav>
        
        <div class="route-container" [class.navExpanded]="navExpanded">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {

    private navExpanded: boolean = false;

    title: string = 'Simple Beta';


    navExpandEvent(expanded): void {
        this.navExpanded = expanded;
    }
}
