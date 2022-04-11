import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sandbox-programming-angular';
  messageValue = `Message from the @Input. Write a new task in the input below: `;
  toDoList:Array<string> = ['Task1','Task2','Task3'];

  addNewTask(task: string){
    this.toDoList.push(task);
    console.log(this.toDoList);
  }
}
