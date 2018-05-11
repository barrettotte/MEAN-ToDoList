# MEAN-ToDoList
Simple To Do List using MEAN stack and Bootstrap (MongoDB, ExpressJS, Angular CLI, NodeJS)

# Requirements
* Download project  ```git clone https://github.com/barrettotte/MEAN-ToDoList.git```
* Database Setup 
  * Download and install [MongoDB](https://www.mongodb.com/download-center#community).
  * Database should be running on 127.0.0.1:27017 by default.
  * Navigate to MongoDB Folder containing mongod.exe and create a folder named data
  * Specify data folder path ```C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe --dbpath d:\test\mongodb\data```
  * Open another Command Prompt and connect to MongoDB with ```"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"```
* Download and install both [NodeJS](https://nodejs.org/en/download/) and [Angular CLI](https://cli.angular.io/)

# Project Setup
* Open another command prompt instance
* Enter main directory  ```cd MEAN-ToDoList\ToDo```
* Install node modules ```npm install```
* Enter frontend directory ```cd ToDo-angular```
* Install angular CLI ```npm install -g @angular/cli```
* Install front end node modules ```npm install```
* Launch Angular Front End ```ng serve```
* Open new command prompt instance and navigate to directory ```cd ../```
* Launch NodeJS Back End ```npm start```
* (WindowsKey + R) Run ```chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security```
* Navigate to http://127.0.0.1:4200/

# Screenshots
![Screenshot-01](https://github.com/barrettotte/MEAN-ToDoList/blob/master/Screenshot-01-List-View.PNG)
**View after adding tasks to my ToDoList**
** **
![Screenshot-02](https://github.com/barrettotte/MEAN-ToDoList/blob/master/Screenshot-02-Edit-View.PNG)
**Editing an entry**


# TO DO
* Enumerate task type and add a dropdown for it
* Remove double clicking, I don't like it anymore
* Make tasks sortable by status/type/name
* Implement ability to move tasks up/down the list with buttons
