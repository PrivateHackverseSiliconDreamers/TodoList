const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./TodoList.db')

db.serialize(()=>{
    db.run('CREATE TABLE task (id INT PRIMARY KEY, title VARCHAR,id_Category,description VARCHAR, state BOOLEAN, prioritize VARCHAR, date DATE,FOREIGN KEY (id_Category) REFERENCES Category(id))');
    db.run('CREATE TABLE category (id INT PRIMARY KEY,name VARCHAR,id_task INT,FOREIGN KEY (id_task) REFERENCES Task(id))');
})