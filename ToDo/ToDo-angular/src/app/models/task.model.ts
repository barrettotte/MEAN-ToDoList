class Task {
    _id: string;
    title: string;
    description: string;
    date: Date;
    type: string;
    status: string;

    constructor(){
        this.title = "";
        this.description = "";
        this.date = new Date();
        this.type = "";
        this.status = "Pending";
    }
}

export default Task;