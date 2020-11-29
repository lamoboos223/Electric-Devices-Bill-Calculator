import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electricity-calculator';

  public watt: number;
  public hours: number;
  public days: number;
  public result: number;

  calculate(){
    let wattPerHour = (this.watt * this.hours)/1000
    let bill = 0;
    if(wattPerHour <= 6000)
      bill = 0.18
    else
      bill = 0.30;
    this.result = ((wattPerHour* this.days) * bill);
  }
}
