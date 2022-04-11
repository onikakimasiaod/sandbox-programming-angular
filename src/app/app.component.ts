import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox-programming-angular';
  data = "data";
  list:Array<string> = [];

  addTrial(newTrial: string){
    this.list.push(newTrial);
  }
}
