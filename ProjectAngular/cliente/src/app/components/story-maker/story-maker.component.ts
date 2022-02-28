import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-maker',
  templateUrl: './story-maker.component.html',
  styleUrls: ['./story-maker.component.css'],
})
export class StoryMakerComponent implements OnInit {
  @Input() titulo_navbar: any;


  notes:any;
  note: string;

  constructor() {
    this.notes = [];
    this.note = '';
  }

  

  ngOnInit(): void {}

  createNote() {
    this.notes.push(this.note);
    this.note = '';
  }

  deleteSelectedTodos() {
    for(var i=(this.notes.length -1); i > -1; i--) {
      if(this.notes[i].completed) {
        this.notes.splice(i, 1);
      }
    }
  }
}
