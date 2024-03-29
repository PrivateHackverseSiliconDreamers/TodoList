const sqlite3= require('sqlite3').verbose()
const db= sqlite3.Database('./TodoList.db')
class Category{

    static id=0
    constructor(name){
        this.name_cat=name
        this.id=Category.id
        Category.id++
    }

    GroupTask(tasks){
        tasks.forEach(task => {
            task.Category=this.id
            task.updateTask(task)
        }); 
        return tasks
        }

        static createCategory(name){
            const category =new Category(name,)
            db.run(
                'INSERT INTO category (id,name) VALUES (?, ?)',
          [category.id,category.name],
            )
        }
    
        static deleteTask(id){
            db.run('DELETE FROM category WHERE id = ?', [id] )
        }
    
        CompleteTask(task){
            task.state=false
            return task
        }
    
        updateTask(fields) {
            Object.assign(this, fields);
            db.run(
              'UPDATE category SET name = ? WHERE id = ?',
              [this.name, this.id]
              
            );
        }
 }
