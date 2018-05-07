import { Response } from '@angular/http';
import { TaskService } from './services/task.service';
import Task from './models/task.model';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

	//task service will be injected into the component by Angular Dependency Injector
	constructor(private taskService: TaskService) {}

  	//Declaring the new task Object and initilizing it
  	public newTask: Task = new Task();
	toDoList: Task[];
	editTasks: Task[] = [];

  	ngOnInit(): void {
  		this.taskService.getTasks().subscribe(tasks => {
  			this.toDoList = tasks;
	    	console.log(tasks);
	    });
  	}

  	createTask() {
  		console.log("Component: Created new Task.");
    	this.taskService.createTask(this.newTask).subscribe((res) => {
        	this.toDoList.push(res.data);
        	this.newTask = new Task();
      	});
  	}

  	editTask(task: Task) {
		console.log(task);
	    if(this.toDoList.includes(task)){
	    	if(!this.editTasks.includes(task)){
	    		this.editTasks.push(task);
	    	}
	    	else{
	    		this.editTasks.splice(this.editTasks.indexOf(task), 1);
	    		this.taskService.editTask(task).subscribe(
	    			res => {
	    				console.log('Update Succesful');
	    			}, 
	    			err => {
	    				this.editTask(task);
	    				console.error('Update Unsuccesful');
	    			}
	    		);
	    	}
	    }
  	}


  	//Set Task to Done
  	doneTask(task: Task){
  		task.status = 'Done'
  		this.taskService.editTask(task).subscribe(res => {
  			console.log('Update Succesful');
  		}, err => {
  			this.editTask(task);
  			console.error('Update Unsuccesful');
  		})
  	}


  	//If user presses enter submit task
	submitTask(event, task: Task){
		if(event.keyCode == 13){
			this.editTask(task)
		}
	}


	deleteTask(task: Task) {
		this.taskService.deleteTask(task._id).subscribe(res => {
			this.toDoList.splice(this.toDoList.indexOf(task), 1);
		});
	}


}