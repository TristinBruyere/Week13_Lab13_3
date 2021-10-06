import { Component, OnInit } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todolist: ToDo[] = [
    {task: 'Grocery Shop', completed: false},
    {task: 'Clean Kitchen', completed: true},
    {task: 'Laundry', completed: false}
  ]

  newtask: string = '';
  newcompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.todolist.push({task: this.newtask, completed: this.newcompleted});
  }

  deleteTask(task: string) {
      for(var i=0; i < this.todolist.length; i++){
        if(this.todolist[i]["task"] == task){
          this.todolist.splice(i, 1);
        }
      }
  }

}
