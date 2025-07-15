import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-container" data-testid="gallery-page">
      <h1 class="page-title" data-testid="gallery-title">Photo Gallery</h1>
      
      <div class="photo-gallery" data-testid="photo-gallery">
        <mat-card class="photo-item" *ngFor="let photo of galleryPhotos; let i = index" 
                 (click)="openPhoto(photo)" 
                 [attr.data-testid]="'gallery-photo-' + i">
          <img mat-card-image [src]="photo.url" [alt]="photo.title" [attr.data-testid]="'gallery-img-' + i">
          <mat-card-content>
            <p [attr.data-testid]="'gallery-title-' + i">{{ photo.title }}</p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>

    <!-- Expanded photo overlay -->
    <div class="photo-overlay" *ngIf="selectedPhoto" (click)="closePhoto()" data-testid="photo-overlay">
      <div class="overlay-content" (click)="$event.stopPropagation()" data-testid="overlay-content">
        <img [src]="selectedPhoto.url" [alt]="selectedPhoto.title" data-testid="expanded-photo">
        <h3 data-testid="expanded-title">{{ selectedPhoto.title }}</h3>
        <button mat-icon-button class="close-button" (click)="closePhoto()" data-testid="close-overlay-btn">
          <mat-icon>close</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .gallery-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .photo-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .photo-item {
      margin-bottom: 20px;
      cursor: pointer;
      transition: transform 0.2s;
    }

    .photo-item:hover {
      transform: translateY(-5px);
    }
    
    .photo-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .overlay-content {
      position: relative;
      max-width: 90%;
      max-height: 90%;
    }
    
    .overlay-content img {
      max-width: 100%;
      max-height: 80vh;
      object-fit: contain;
    }
    
    .overlay-content h3 {
      color: white;
      text-align: center;
      margin-top: 15px;
    }
    
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
    }
  `]
})
export class GalleryComponent {
  galleryPhotos = [
    { url: 'https://picsum.photos/id/10/800/600', title: 'Mountain Landscape' },
    { url: 'https://picsum.photos/id/11/800/600', title: 'Ocean Sunset' },
    { url: 'https://picsum.photos/id/12/800/600', title: 'Urban Architecture' },
    { url: 'https://picsum.photos/id/13/800/600', title: 'Wildlife Portrait' },
    { url: 'https://picsum.photos/id/14/800/600', title: 'Forest Path' },
    { url: 'https://picsum.photos/id/15/800/600', title: 'Desert Sunrise' },
    { url: 'https://picsum.photos/id/16/800/600', title: 'Autumn Colors' },
    { url: 'https://picsum.photos/id/17/800/600', title: 'Winter Scene' },
    { url: 'https://picsum.photos/id/18/800/600', title: 'Macro Photography' },
    { url: 'https://picsum.photos/id/19/800/600', title: 'Night Sky' },
    { url: 'https://picsum.photos/id/20/800/600', title: 'Street Photography' },
    { url: 'https://picsum.photos/id/21/800/600', title: 'Portrait' }
  ];
  
  selectedPhoto: {url: string, title: string} | null = null;
  
  openPhoto(photo: {url: string, title: string}): void {
    this.selectedPhoto = photo;
  }
  
  closePhoto(): void {
    this.selectedPhoto = null;
  }
}