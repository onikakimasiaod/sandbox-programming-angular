import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {

  @Input() trial = "";

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newTrial = new EventEmitter<string>();

  addNewTrial(value: string){
    this.newTrial.emit(value);
  }

}
