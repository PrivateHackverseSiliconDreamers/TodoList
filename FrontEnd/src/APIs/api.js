/* const base = "http://127.0.0.1:8080/"
const task = "todo/task/"
const folder = "todo/folder/"

export const getAllFoldersAPI = `"${base}${folder}getAll"`;
export const createFoldersAPI = base+folder+"create";
export const getAllTasksAPI = base+task+"getAll";
export const createNoteAPI = base+task+"create";
export const deleteNoteAPI = base+task+"delete";
export const updateCompletedAPI = base+task+"completedTask";
export const updateSaveNoteAPI = base+task+"update/description";
export const createPasswordAPI= base+task+"update/password";

console.log(getAllFoldersAPI," ",getAllTasksAPI," ",createFoldersAPI); */

export const getAllFoldersAPI = "http://127.0.0.1:8080/todo/folder/getAll";
export const createFoldersAPI = "http://127.0.0.1:8080/todo/folder/create";
export const getAllTasksAPI = "http://127.0.0.1:8080/todo/task/getAll";
export const createNoteAPI = "http://127.0.0.1:8080/todo/task/create";
export const deleteNoteAPI = "http://127.0.0.1:8080/todo/task/delete";
export const updateCompletedAPI = "http://127.0.0.1:8080/todo/task/completedTask";
export const updateSaveNoteAPI = "http://127.0.0.1:8080/todo/task/update/description";
export const createPasswordAPI = "http://127.0.0.1:8080/todo/task/update/password";

console.log(getAllFoldersAPI, " ", getAllTasksAPI, " ", createFoldersAPI);
