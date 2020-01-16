import { Component } from '@angular/core';

interface ITodo {
  completed: boolean;
  task: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  todoArray : ITodo[] = [
    { completed: true, task: "finish lab" },
    { completed: false, task: "sleep" },
    { completed: true, task: "work" }
  ]
  
  newTodo : string;

  addTodo(value) {
    
    if (value !== "") {
      
      this.todoArray.push({task:value, completed:false})
      console.log(this.todoArray)    
      
    }
    
    // value = ""
    this.newTodo = "";
    
  }
}