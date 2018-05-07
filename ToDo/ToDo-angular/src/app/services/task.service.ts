import Task from '../models/task.model';

import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

	api_url = 'http://localhost:3000';
	toDoListUrl = `${this.api_url}/api/ToDoList`;
	constructor(private http: HttpClient) {}


	//GET
	getTasks(): Observable<Task[]>{
		return this.http.get(this.toDoListUrl)
		.map(res  => { 
			return res["data"].docs as Task[]; 
		});
	}

	//POST
	createTask(task: Task): Observable<any>{
		return this.http.post(`${this.toDoListUrl}`, task);
	}

	//PUT
	editTask(task: Task){
		let editUrl = `${this.toDoListUrl}`;
		return this.http.put(editUrl, task);
	}

	//DELETE
	deleteTask(id: string): any{
		let deleteUrl = `${this.toDoListUrl}/${id}`
		return this.http.delete(deleteUrl).map(res  => {
      		return res;
      	})
  	}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}