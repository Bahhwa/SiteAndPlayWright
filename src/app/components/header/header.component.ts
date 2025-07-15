import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary" data-testid="nav-toolbar">
      <span data-testid="site-title">My Photography</span>
      <span class="spacer"></span>
      <nav data-testid="main-nav">
        <a mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" data-testid="nav-home">Home</a>
        <a mat-button routerLink="/gallery" routerLinkActive="active" data-testid="nav-gallery">Gallery</a>
        <a mat-button routerLink="/contact" routerLinkActive="active" data-testid="nav-contact">Contact</a>
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