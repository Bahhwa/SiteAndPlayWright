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
              <mat-label>Your Email</mat-label>
              <input matInput formControlName="email" required type="email" data-testid="email-input">
              <mat-error *ngIf="contactForm.get('email')?.hasError('required')" data-testid="email-required-error">Email is required</mat-error>
              <mat-error *ngIf="contactForm.get('email')?.hasError('email')" data-testid="email-format-error">Please enter a valid email</mat-error>
            </mat-form-field>
            
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Recipient Email</mat-label>
              <input matInput formControlName="recipientEmail" required type="email" data-testid="recipient-email-input">
              <mat-error *ngIf="contactForm.get('recipientEmail')?.hasError('required')" data-testid="recipient-email-required-error">Recipient email is required</mat-error>
              <mat-error *ngIf="contactForm.get('recipientEmail')?.hasError('email')" data-testid="recipient-email-format-error">Please enter a valid email</mat-error>
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
      
      <div *ngIf="emailSent" class="email-status success" data-testid="email-success">
        Email sent successfully!
      </div>
      
      <div *ngIf="emailError" class="email-status error" data-testid="email-error">
        Error sending email: {{emailError}}
      </div>
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
    
    .email-status {
      margin-top: 20px;
      padding: 10px;
      border-radius: 4px;
      text-align: center;
    }
    
    .success {
      background-color: #d4edda;
      color: #155724;
    }
    
    .error {
      background-color: #f8d7da;
      color: #721c24;
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  emailSent = false;
  emailError: string | null = null;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      recipientEmail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      this.emailSent = false;
      this.emailError = null;
      
      const formData = this.contactForm.value;
      
      // Create mailto link with form data
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:${formData.recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      try {
        // Open default email client with pre-filled email
        window.location.href = mailtoLink;
        this.emailSent = true;
        this.contactForm.reset();
      } catch (error) {
        this.emailError = 'Could not open email client. Please try again.';
        console.error('Email error:', error);
      }
    }
  }
}