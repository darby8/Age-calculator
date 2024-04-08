import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
public  ageCalculator = new FormGroup({
    day: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
  });

  public days:any = "--";
  public months:any = '--';
  public years:any = '--';
  calculateAge() {
    let data= this.ageCalculator.value
    this.days=data.day;
    this.months=data.month;
    this.years=data.year;
    this.ageCalculator.reset();
  }
}
