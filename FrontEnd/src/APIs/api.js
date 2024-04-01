const base = "http://localhost:8080/"
const task = "/todo/task/"
const folder = "/todo/folder/"

export const getAllFoldersAPI = base+folder+"getAll";
export const createFoldersAPI = base+folder+"create";
export const getAllTasksAPI = base+task+"getAll";
export const createNoteAPI = base+task+"create";
export const deleteNoteAPI = base+task+"delete";
export const updateCompletedAPI = base+task+"completedTask";
export const updateSaveNoteAPI = base+task+"update/description";
export const createPassordAPI= base+task+"update/description";