import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-playwright-elements',
  template: `
    <div class="container" data-testid="playwright-elements-page">
      <h1 class="page-title" data-testid="playwright-title">Playwright Elements</h1>
      
      <section data-testid="dropdown-section">
        <h2>Dropdown</h2>
        <mat-form-field appearance="fill">
          <mat-label>Select an option</mat-label>
          <mat-select data-testid="dropdown">
            <mat-option value="option1" data-testid="dropdown-option1">Option 1</mat-option>
            <mat-option value="option2" data-testid="dropdown-option2">Option 2</mat-option>
            <mat-option value="option3" data-testid="dropdown-option3">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
      </section>
      
      <section data-testid="radio-section">
        <h2>Radio Buttons</h2>
        <mat-radio-group aria-label="Select an option" data-testid="radio-group">
          <mat-radio-button value="radio1" data-testid="radio1">Radio 1</mat-radio-button>
          <mat-radio-button value="radio2" data-testid="radio2">Radio 2</mat-radio-button>
          <mat-radio-button value="radio3" data-testid="radio3">Radio 3</mat-radio-button>
        </mat-radio-group>
      </section>
      
      <section data-testid="checkbox-section">
        <h2>Checkboxes</h2>
        <div>
          <mat-checkbox data-testid="checkbox1">Checkbox 1</mat-checkbox>
        </div>
        <div>
          <mat-checkbox data-testid="checkbox2">Checkbox 2</mat-checkbox>
        </div>
        <div>
          <mat-checkbox data-testid="checkbox3">Checkbox 3</mat-checkbox>
        </div>
      </section>
      
      <section data-testid="input-section">
        <h2>Input Fields</h2>
        <mat-form-field appearance="fill" class="input-field">
          <mat-label>Text Input</mat-label>
          <input matInput placeholder="Enter text" data-testid="text-input">
        </mat-form-field>
        
        <mat-form-field appearance="fill" class="input-field">
          <mat-label>Number Input</mat-label>
          <input matInput type="number" placeholder="Enter number" data-testid="number-input">
        </mat-form-field>
        
        <mat-form-field appearance="fill" class="input-field">
          <mat-label>Password Input</mat-label>
          <input matInput type="password" placeholder="Enter password" data-testid="password-input">
        </mat-form-field>
      </section>
      
      <section data-testid="link-section">
        <h2>Links</h2>
        <a href="https://www.google.com" target="_blank" data-testid="google-link">Link to Google</a>
      </section>
      
      <section data-testid="button-section">
        <h2>Buttons</h2>
        <button mat-raised-button color="primary" data-testid="simple-button">Simple Button</button>
        <button mat-raised-button color="accent" (click)="showAlert()" data-testid="alert-button">Show Alert</button>
      </section>
      
      <section data-testid="datepicker-section">
        <h2>Date Picker</h2>
        <mat-form-field appearance="fill">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker" data-testid="date-input">
          <mat-datepicker-toggle matSuffix [for]="picker" data-testid="date-toggle"></mat-datepicker-toggle>
          <mat-datepicker #picker data-testid="date-picker"></mat-datepicker>
        </mat-form-field>
      </section>
      
      <section data-testid="table-section">
        <h2>Table</h2>
        <table mat-table [dataSource]="tableData" class="mat-elevation-z8" data-testid="data-table">
          <!-- Name Column -->
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef data-testid="table-header-name">Name</th>
            <td mat-cell *matCellDef="let element" [attr.data-testid]="'table-cell-name-' + element.id">{{element.name}}</td>
          </ng-container>
          
          <!-- Position Column -->
          <ng-container matColumnDef="position">
            <th mat-header-cell *matHeaderCellDef data-testid="table-header-position">Position</th>
            <td mat-cell *matCellDef="let element" [attr.data-testid]="'table-cell-position-' + element.id">{{element.position}}</td>
          </ng-container>
          
          <!-- Department Column -->
          <ng-container matColumnDef="department">
            <th mat-header-cell *matHeaderCellDef data-testid="table-header-department">Department</th>
            <td mat-cell *matCellDef="let element" [attr.data-testid]="'table-cell-department-' + element.id">{{element.department}}</td>
          </ng-container>
          
          <tr mat-header-row *matHeaderRowDef="displayedColumns" data-testid="table-header-row"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;" [attr.data-testid]="'table-row-' + row.id"></tr>
        </table>
      </section>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
    }
    
    section {
      margin-bottom: 30px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
    }
    
    h2 {
      margin-top: 0;
      color: #333;
    }
    
    .mat-radio-button {
      margin-right: 15px;
    }
    
    .mat-checkbox {
      margin-bottom: 10px;
    }
    
    .input-field {
      width: 100%;
      max-width: 300px;
      margin-bottom: 15px;
      display: block;
    }
    
    a {
      color: #3f51b5;
      text-decoration: none;
      font-weight: 500;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    button {
      margin-right: 15px;
      margin-bottom: 10px;
    }
    
    table {
      width: 100%;
    }
  `]
})
export class PlaywrightElementsComponent {
  // Date picker
  date = new FormControl(new Date());
  
  // Table data
  displayedColumns: string[] = ['name', 'position', 'department'];
  tableData = [
    {id: 1, name: 'John Smith', position: 'Developer', department: 'Engineering'},
    {id: 2, name: 'Sarah Johnson', position: 'Designer', department: 'Creative'},
    {id: 3, name: 'Michael Brown', position: 'Manager', department: 'Operations'},
    {id: 4, name: 'Emily Davis', position: 'Analyst', department: 'Finance'}
  ];
  
  showAlert() {
    alert('This is an alert message!');
  }
}