const sqlite3 = require('sqlite3').verbose()
const db=new sqlite3.Database('./TodoList.db')
class Task{

    static id=0;

    constructor(Title,Date,Description,prioritize){
        this.Title=Title
        this.Date=Date
        this.Description=Description
        this.prioritize=prioritize
        this.state=true
        this.Category=-1
        this.id=Task.id
        Task.id++
    }

    static createTask(Title,Date,Description,prioritize){
        const task =new Task(Title,Date,Description,prioritize)
        db.run(
            'INSERT INTO tasks (id,Title, Date, Description, prioritize, state, Category) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [task.Title, task.Date, task.Description, task.prioritize, task.state, task.Category],
        )
    }

    static deleteTask(id){
        db.run('DELETE FROM task WHERE id = ?', [id] )
    }

    CompleteTask(task){
        task.state=false
        return task
    }

    updateTask(fields) {
        Object.assign(this, fields);
        db.run(
          'UPDATE tasks SET Title = ?, Date = ?, Description = ?, prioritize = ?, state = ?, Category = ? WHERE id = ?',
          [this.Title, this.Date, this.Description, this.prioritize, this.state, this.Category, this.id]
          
        );
    }

}

