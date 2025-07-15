import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header data-testid="app-header-container"></app-header>
    <main class="container" data-testid="app-content-container">
      <router-outlet></router-outlet>
    </main>
    <app-footer data-testid="app-footer-container"></app-footer>
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