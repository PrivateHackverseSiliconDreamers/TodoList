 
 const sqlite3 = require("sqlite3").verbose();
 const db = new sqlite3.Database("database.db");
 
 // Crée une nouvelle entrée dans la table 'catégorie_task'
  function createFolderTask(folder_name) {
    db.run(
      `INSERT INTO Folder (folder_name) VALUES (?)`,
      [folder_name],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`Folder "${folder_name}" a été crée .`);
        }
      }
    );
  }


  // Récupère une entrée de la table 'catégorie_task' en fonction de l'ID
function getFolderByName(folder_name) {
    db.get(
      `SELECT * FROM Folder WHERE folder_name = ?`,
      [folder_name],
      function (err, row) {
        if (err) {
          console.error(err.message);
        } else {
          if (row) {
            console.log(`folder trouvée: ID ${row.id}, Nom: ${row.category}`);
          } else {
            console.log(`Aucun folder trouvée avec l'ID "${id}".`);
          }
        }
      }
    );
  }


  

  // Met à jour une entrée dans la table 'folder' en fonction du nom
function updateFolderByName(folder_name) {
    db.run(
      `UPDATE Folder SET folder_name = ?`,
      [folder_name],
      function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`folder name ${folder_name} mise à jour.`);
        }
      }
    );
  }
  
  // Récupère toutes les catégories de la table 'folder'
function getAllFolder() {
  return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Folder`, function (err, rows) {
          if (err) {
              reject(err.message);
          } else {
              const folders = rows.map(row => ({
                  id: row.id,
                  folder_name: row.folder_name
              }));
              resolve(folders);
          }
      });
  });
}

    // Supprime un folder en fonction de son nom
function deleteFolder(folder_name) {
  db.run(
    `DELETE FROM Folder WHERE title = ?`,
    [folder_name],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`folder "${folder_name}" supprimée.`);
      }
    }
  );
}
  
  

  module.exports={createFolderTask,getFolderByName,updateFolderByName,getAllFolder,deleteFolder}