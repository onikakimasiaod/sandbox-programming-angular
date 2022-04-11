import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() message: string = '';
  @Output() addNewTaskEvent = new EventEmitter<string>();

  constructor() { }

  //methods
  newTaskEvent(inputValue:string){
    this.addNewTaskEvent.emit(inputValue);
  }

}
