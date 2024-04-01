const testFolders = [
  {
    folder_name: "All tasks",
    id: 1,
  },
  {
    folder_name: "Completed",
    id: 2,
  },
];

const testTasks = [
  {
    title: "pour demain",
    folder_name: "All tasks",
    text: "faire X, faire Y, faire Z",
    date: "29-01-2015",
    completed: false,
    locked: false,
    password: "0000",
  },
  {
    title: "pour aujourd'hui",
    folder_name: "All tasks",
    id: 4,
    text: "faire A, faire B, faire C",
    date: "29-01-2015",
    completed: false,
    locked: false,
    password: "0000",
  },
  {
    title: "pour le groupe",
    id: 1,
    folder_name: "Completed",
    text: "faire ceci, faire cela, faire ceci cela",
    date: "29-01-2015",
    completed: false,
    locked: false,
    password: "0000",
  },
  {
    title: "pour SMA",
    folder_name: "Completed",
    id: 2,
    text: "faire 1, faire 2, faire 3",
    date: "29-01-2015",
    completed: false,
    locked: true,
    password: "0000",
  },
];

export const parseIt = (folderList, TaskList) => {
  const folders = [...folderList];
  for (let i = 0; i < folders.length; ++i) {
    const folderName = folders[i].folder_name;
    folders[i].content = [];
    for (let j = 0; j < TaskList.length; j++) {
      if (folderName === TaskList[j].folder_name) {
        folders[i].content.push({
          title: TaskList[j].title,
          folder_name: TaskList[j].folder_name,
          text: TaskList[j].text,
          date: TaskList[j].date,
          completed: TaskList[j].completed,
          locked: TaskList[j].locked,
          password: TaskList[j].password,
        });
      }
    }
  }
  return folders;
};

/* const folders = parseIt(testFolders, testTasks);
console.log(folders);
console.log(folders[0].content);
 */