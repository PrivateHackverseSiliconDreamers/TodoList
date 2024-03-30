const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("database.db");


// Crée une nouvelle tâche dans la base de données
function createTask(title, description, completed,date,password) {
    db.run(
      `INSERT INTO task (title, description, completed, date,password) VALUES (?, ?, ?, ?, ?)`,
      [title, description, completed, date, password],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche "${title}" avec l'ID ${this.lastID} a été créée.`);
        }
      }
    );
  }
  
  // Récupère une tâche en fonction de son titre
function getTask(title) {
    db.get(
      `SELECT * FROM task WHERE title = ?`,
      [title],
      function (err, row) {
        if (err) {
          console.error(err.message);
        } else {
          if (row) {
            console.log(`Tâche trouvée: ID ${row.id}, Titre: ${row.title}`);
          } else {
            console.log(`Aucune tâche trouvée avec le titre "${title}".`);
          }
        }
      }
    );
  }
  
  // Récupère toutes les tâches
function getAllTasks() {
    db.all(`SELECT * FROM task`, function (err, rows) {
      if (err) {
        console.error(err.message);
      } else {
        rows.forEach((row) => {
          console.log(`Tâche: ID ${row.id}, Titre: ${row.title}`);
        });
      }
    });
  }

  //recupère toutes les tâches pour un dossier particulier 
  function getAllTaskFolder(folder_name) {
    db.get(
      `SELECT * FROM task WHERE folder_name= ?`,
      [folder_name],
      function (err, row) {
        if (err) {
          console.error(err.message);
        } else {
          if (row) {
            console.log(`Tâche trouvée: ID ${row.id}, Titre: ${row.title}, folder:${row.folder_name}`);
          } else {
            console.log(`Aucune tâche trouvée avec le titre "${title}".`);
          }
        }
      }
    );
  }

    //recupère toutes les tâches completed
    function getAllTaskCompleted() {
      db.get(
        `SELECT * FROM task WHERE completed= ?`,
        [true],
        function (err, row) {
          if (err) {
            console.error(err.message);
          } else {
            if (row) {
              console.log(`Tâche trouvée: ID ${row.id}, Titre: ${row.title} Etat: ${row.completed} `);
            } else {
              console.log(`Aucune tâche trouvée avec le titre ${title} completé.`);
            }
          }
        }
      );
    }
  




  // Met à jour une tâche en fonction de son ID
function updateTask(title, description, completed, date) {
    db.run(
      `UPDATE task SET title = ?, description = ?, complete = ?, date = ?`
      [title, description, completed,date],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche avec le titre ${title} mise à jour.`);
        }
      }
    );
  }
  
  

  // Supprime une tâche en fonction de son titre
function deleteTask(title) {
    db.run(
      `DELETE FROM task WHERE title = ?`,
      [title],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche "${title}" supprimée.`);
        }
      }
    );
  }

// Marque une tâche comme complétée en fonction de son titre
function completeTask(title) {
    db.run(
      `UPDATE task SET complete = ? WHERE title = ?`,
      [true, title],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Tâche "${title}" marquée comme complétée.`);
        }
      }
    );
  }

  // Filtrer les tâches en fonction de la date
function filterTaskByDate(date) {
    db.all(
      `SELECT * FROM task WHERE date = ?`,
      [date],
      function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          rows.forEach((row) => {
            console.log(`Tâche: ID ${row.id}, Titre: ${row.title}, Date: ${row.date}`);
          });
        }
      }
    );
  }
  // Filtrer les tâches en fonction du statut de complétion
function filterTaskByCompleted() {
    db.all(
      `SELECT * FROM task WHERE complete = ?`,
      [true],
      function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          rows.forEach((row) => {
            console.log(`Tâche: ID ${row.id}, Titre: ${row.title}, Complétée: ${row.complete}`);
          });
        }
      }
    );
  }
  

  // Filtrer les tâches en fonction de la priorité
/* function filterTaskByPriority(priority) {
    db.all(
      `SELECT * FROM task WHERE priority = ?`,
      [priority],
      function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          rows.forEach((row) => {
            console.log(`Tâche: ID ${row.id}, Titre: ${row.title}, Priorité: ${row.priority}`);
          });
        }
      }
    );
  }
   */
 /*  
  function prioritizeTasks() {
    db.all(
      `SELECT * FROM task ORDER BY priority DESC`,
      function (err, rows) {
        if (err) {
          console.error(err.message);
        } else {
          if (rows.length > 0) {
            console.log("Tâches triées par priorité :");
            rows.forEach(row => {
              console.log(`ID ${row.id}, Titre: ${row.title}, Priorité: ${row.priority}`);
            });
          } else {
            console.log("Aucune tâche trouvée.");
          }
        }
      }
    );
  }
  
 */



  
  
module.exports={createTask,
  deleteTask,
  updateTask,
  getAllTasks,
  getTask,filterTaskByCompleted
  ,filterTaskByDate
  //filterTaskByPriority
  ,completeTask,
  //prioritizeTasks,
  getAllTaskFolder,
  getAllTaskCompleted}