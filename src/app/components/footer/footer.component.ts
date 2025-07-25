import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer data-testid="footer-container">
      <div class="container">
        <p data-testid="footer-copyright-text">&copy; 2025 My Photography. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #3f51b5;
      color: white;
      padding: 15px 0;
      text-align: center;
      margin-top: 30px;
    }
  `]
})
export class FooterComponent {}