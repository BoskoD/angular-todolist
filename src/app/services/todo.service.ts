import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos()
  {
    return  [
      {
      id: 1,
      title: 'Todo1',
      completed: false
      },
      {
      id: 2,
      title: 'Todo2',
      completed: true
      },
      {
      id: 3,
      title: 'Todo3',
      completed: false
      }
  ]
  }
}
