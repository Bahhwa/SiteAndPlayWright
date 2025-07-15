import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container" data-testid="contact-page">
      <h1 class="page-title" data-testid="contact-title">Contact Me</h1>
      
      <mat-card data-testid="contact-card">
        <mat-card-content>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" data-testid="contact-form">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Name</mat-label>
              <input matInput formControlName="name" required data-testid="name-input">
              <mat-error *ngIf="contactForm.get('name')?.invalid" data-testid="name-error">Name is required</mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Email</mat-label>
              <input matInput formControlName="email" required type="email" data-testid="email-input">
              <mat-error *ngIf="contactForm.get('email')?.hasError('required')" data-testid="email-required-error">Email is required</mat-error>
              <mat-error *ngIf="contactForm.get('email')?.hasError('email')" data-testid="email-format-error">Please enter a valid email</mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Message</mat-label>
              <textarea matInput formControlName="message" rows="5" required data-testid="message-input"></textarea>
              <mat-error *ngIf="contactForm.get('message')?.invalid" data-testid="message-error">Message is required</mat-error>
            </mat-form-field>
            
            <button mat-raised-button color="primary" type="submit" [disabled]="contactForm.invalid" data-testid="submit-button">Send Message</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .full-width {
      width: 100%;
      margin-bottom: 15px;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // In a real app, you would send this data to a server
      alert('Thank you for your message! I will get back to you soon.');
      this.contactForm.reset();
    }
  }
}