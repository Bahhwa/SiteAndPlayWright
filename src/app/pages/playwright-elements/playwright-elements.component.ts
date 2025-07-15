import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-playwright-elements',
  template: `
    <div class="container" data-testid="playwrightElements-container">
      <h1 class="page-title" data-testid="playwrightElements-title-header">Playwright Elements</h1>
      
      <section data-testid="playwrightElements-dropdown-container">
        <h2>Dropdown</h2>
        <mat-form-field appearance="fill">
          <mat-label>Select an option</mat-label>
          <mat-select data-testid="playwrightElements-options-select">
            <mat-option value="option1" data-testid="playwrightElements-option1-option">Option 1</mat-option>
            <mat-option value="option2" data-testid="playwrightElements-option2-option">Option 2</mat-option>
            <mat-option value="option3" data-testid="playwrightElements-option3-option">Option 3</mat-option>
          </mat-select>
        </mat-form-field>
      </section>
      
      <section data-testid="playwrightElements-radio-container">
        <h2>Radio Buttons</h2>
        <mat-radio-group aria-label="Select an option" data-testid="playwrightElements-options-radioGroup">
          <mat-radio-button value="radio1" data-testid="playwrightElements-option1-radio">Radio 1</mat-radio-button>
          <mat-radio-button value="radio2" data-testid="playwrightElements-option2-radio">Radio 2</mat-radio-button>
          <mat-radio-button value="radio3" data-testid="playwrightElements-option3-radio">Radio 3</mat-radio-button>
        </mat-radio-group>
      </section>
      
      <section data-testid="playwrightElements-checkbox-container">
        <h2>Checkboxes</h2>
        <div>
          <mat-checkbox data-testid="playwrightElements-option1-checkbox">Checkbox 1</mat-checkbox>
        </div>
        <div>
          <mat-checkbox data-testid="playwrightElements-option2-checkbox">Checkbox 2</mat-checkbox>
        </div>
        <div>
          <mat-checkbox data-testid="playwrightElements-option3-checkbox">Checkbox 3</mat-checkbox>
        </div>
      </section>
      
      <section data-testid="playwrightElements-inputs-container">
        <h2>Input Fields</h2>
        <mat-form-field appearance="fill" class="input-field">
          <mat-label>Text Input</mat-label>
          <input matInput placeholder="Enter text" data-testid="playwrightElements-text-input">
        </mat-form-field>
        
        <mat-form-field appearance="fill" class="input-field">
          <mat-label>Number Input</mat-label>
          <input matInput type="number" placeholder="Enter number" data-testid="playwrightElements-number-input">
        </mat-form-field>
        
        <mat-form-field appearance="fill" class="input-field">
          <mat-label>Password Input</mat-label>
          <input matInput type="password" placeholder="Enter password" data-testid="playwrightElements-password-input">
        </mat-form-field>
      </section>
      
      <section data-testid="playwrightElements-links-container">
        <h2>Links</h2>
        <a href="https://www.google.com" target="_blank" data-testid="playwrightElements-google-link">Link to Google</a>
      </section>
      
      <section data-testid="playwrightElements-buttons-container">
        <h2>Buttons</h2>
        <button mat-raised-button color="primary" data-testid="playwrightElements-simple-button">Simple Button</button>
        <button mat-raised-button color="accent" (click)="showAlert()" data-testid="playwrightElements-alert-button">Show Alert</button>
      </section>
      
      <section data-testid="playwrightElements-datePicker-container">
        <h2>Date Picker</h2>
        <mat-form-field appearance="fill">
          <mat-label>Choose a date</mat-label>
          <input matInput [matDatepicker]="picker" data-testid="playwrightElements-date-input">
          <mat-datepicker-toggle matSuffix [for]="picker" data-testid="playwrightElements-dateToggle-button"></mat-datepicker-toggle>
          <mat-datepicker #picker data-testid="playwrightElements-datePicker-container"></mat-datepicker>
        </mat-form-field>
      </section>
      
      <section data-testid="playwrightElements-table-container">
        <h2>Table</h2>
        <table mat-table [dataSource]="tableData" class="mat-elevation-z8" data-testid="playwrightElements-data-table">
          <!-- Name Column -->
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef data-testid="playwrightElements-nameHeader-header">Name</th>
            <td mat-cell *matCellDef="let element" [attr.data-testid]="'playwrightElements-name-cell-' + element.id">{{element.name}}</td>
          </ng-container>
          
          <!-- Position Column -->
          <ng-container matColumnDef="position">
            <th mat-header-cell *matHeaderCellDef data-testid="playwrightElements-positionHeader-header">Position</th>
            <td mat-cell *matCellDef="let element" [attr.data-testid]="'playwrightElements-position-cell-' + element.id">{{element.position}}</td>
          </ng-container>
          
          <!-- Department Column -->
          <ng-container matColumnDef="department">
            <th mat-header-cell *matHeaderCellDef data-testid="playwrightElements-departmentHeader-header">Department</th>
            <td mat-cell *matCellDef="let element" [attr.data-testid]="'playwrightElements-department-cell-' + element.id">{{element.department}}</td>
          </ng-container>
          
          <tr mat-header-row *matHeaderRowDef="displayedColumns" data-testid="playwrightElements-headerRow-container"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;" [attr.data-testid]="'playwrightElements-row-container-' + row.id"></tr>
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