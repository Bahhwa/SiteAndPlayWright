import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container" data-testid="home-page">
      <h1 class="page-title" data-testid="home-title">Welcome to My Photography</h1>
      
      <section data-testid="about-section">
        <h2>About Me</h2>
        <mat-card class="about-card">
          <mat-card-content>
            <p data-testid="about-text">Hello! I'm a passionate photographer who loves capturing moments that tell a story. 
            My work spans portraits, landscapes, and events. I believe in the power of imagery 
            to evoke emotion and preserve memories.</p>
          </mat-card-content>
        </mat-card>
      </section>
      
      <section data-testid="featured-section">
        <h2>Featured Photos</h2>
        <div class="photo-gallery" data-testid="featured-gallery">
          <mat-card class="photo-item" *ngFor="let photo of featuredPhotos; let i = index" [attr.data-testid]="'featured-photo-' + i">
            <img mat-card-image [src]="photo.url" [alt]="photo.title" [attr.data-testid]="'featured-img-' + i">
            <mat-card-content>
              <p [attr.data-testid]="'featured-title-' + i">{{ photo.title }}</p>
            </mat-card-content>
          </mat-card>
        </div>
        <div class="view-more">
          <a mat-raised-button color="primary" routerLink="/gallery" data-testid="view-gallery-btn">View Full Gallery</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .about-card {
      margin-bottom: 30px;
    }
    
    .photo-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .view-more {
      text-align: center;
      margin: 20px 0;
    }
  `]
})
export class HomeComponent {
  featuredPhotos = [
    { url: 'https://picsum.photos/id/10/800/600', title: 'Mountain Landscape' },
    { url: 'https://picsum.photos/id/11/800/600', title: 'Ocean Sunset' },
    { url: 'https://picsum.photos/id/12/800/600', title: 'Urban Architecture' },
    { url: 'https://picsum.photos/id/13/800/600', title: 'Wildlife Portrait' },
    { url: 'https://picsum.photos/id/14/800/600', title: 'Forest Path' }
  ];
}