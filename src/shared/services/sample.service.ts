import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { todos2 } from '../mock/mocktodo';
// import * as todos from './../mock./'
// import { Todos } from './../mock/todos'


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  body = {
    "userId": 1, 
    "id": 1, 
    "title": "delectus aut autem", 
    "completed": false
  }

  constructor(private http: HttpClient) { }

  getData(): Observable<Todos> {

    // return of(todos2);
     return this.http.get<Todos>('https://jsonplaceholder.typicode.com/todos/1');

    
  }


}


export interface Todos {

  userId: number,
  id: number,
  title: string,
  completed: boolean

}
