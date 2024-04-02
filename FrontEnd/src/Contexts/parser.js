
export const parseIt = (folderList, TaskList) => {
  
  const folders = [
    { id:100, folder_name: "All Tasks", content: [] },
    { id:101, folder_name: "Completed", content: [] },
    ...folderList,
  ];
  console.log(folders,  'this is the folder listt')
  folders[0].content = TaskList;
  for (let j = 0; j < TaskList.length; ++j) {
    if (TaskList[j].completed === 1) {
      folders[1].content.push(TaskList[j]);
    }
  }
  for (let i = 2; i < folders.length; ++i) {
    const folderName = folders[i].folder_name;
    console.log(folderName, 'this is the folder')
    folders[i].content = [];
    for (let j = 0; j < TaskList.length; j++) {
      console.log(TaskList[j].folder_name===folderName, 'i need to know')
      if (
        folderName === TaskList[j].folder_name &&
        TaskList[j].completed === 0
      ) 
      {
        folders[i].content.push(TaskList[j]);
      }
    }
  }
  return folders;
};
