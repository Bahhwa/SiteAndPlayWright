import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header data-testid="header"></app-header>
    <main class="container" data-testid="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer data-testid="footer"></app-footer>
  `,
  styles: [`
    main {
      min-height: calc(100vh - 128px);
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'photographer-portfolio';
}