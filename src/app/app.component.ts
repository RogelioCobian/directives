import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  colorRed: string = 'red';
  value: number = 1000;

  ngOnInit() {
    // if(this.value == 5) {
    //   console.log('inside first if');
    // } else if (this.value == 10) {
    //   console.log('Inside second if');
    // } else if(this.value == 100) {
    //   console.log('Third If');
    // } else {
    //   console.log('None');
    // }

    switch(this.value) {
      case 5:
        console.log('case 5');
        break;
      case 10:
        console.log('case 10');
        break;
      case 100:
        console.log('Case 100');
        break;
      default:
        console.log('None');
        break;
    }
  }
}
