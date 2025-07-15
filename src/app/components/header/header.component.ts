import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" data-testid="navigationMenu-toolbar-container">
      <span data-testid="navigationMenu-title-header">My Photography</span>
      <span class="spacer"></span>
      <nav data-testid="navigationMenu-main-container">
        <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" data-testid="navigationMenu-home-link">Home</a>
        <a mat-button routerLink="/gallery" routerLinkActive="active" data-testid="navigationMenu-gallery-link">Gallery</a>
        <a mat-button routerLink="/contact" routerLinkActive="active" data-testid="navigationMenu-contact-link">Contact</a>
        <a mat-button routerLink="/playwright-elements" routerLinkActive="active" data-testid="navigationMenu-playwrightElements-link">Playwright Elements</a>
      </nav>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    
    nav a {
      margin-left: 10px;
    }
    
    .active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `]
})
export class HeaderComponent {}