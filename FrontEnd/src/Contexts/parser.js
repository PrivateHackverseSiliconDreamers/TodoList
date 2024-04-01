const testFolders = [
  {
    folder_name: "personnel",
    id: 1,
  },
  {
    folder_name: "autre",
    id: 2,
  },
];

const testTasks = [
  {
    title: "pour demain",
    folder_name: "personnel",
    text: "faire X, faire Y, faire Z",
    date: "29-01-2015",
    completed: false,
    locked: false,
    password: "0000",
  },
  {
    title: "pour aujourd'hui",
    folder_name: "autre",
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
    folder_name: "autre",
    text: "faire ceci, faire cela, faire ceci cela",
    date: "29-01-2015",
    completed: false,
    locked: false,
    password: "0000",
  },
  {
    title: "pour SMA",
    folder_name: "personnel",
    id: 2,
    text: "faire 1, faire 2, faire 3",
    date: "29-01-2015",
    completed: true,
    locked: true,
    password: "0000",
  },
];

export const parseIt = (folderList, TaskList) => {
  const folders = [
    { folder_name: "All Tasks", content: [] },
    { folder_name: "Completed", content: [] },
    ...folderList,
  ];
  folders[0].content = TaskList;
  for (let j = 0; j < TaskList.length; ++j) {
    if (TaskList[j].completed === true) {
      folders[1].content.push(TaskList[j]);
    }
  }
  for (let i = 2; i < folders.length; ++i) {
    const folderName = folders[i].folder_name;
    folders[i].content = [];
    for (let j = 0; j < TaskList.length; j++) {
      if (
        folderName === TaskList[j].folder_name &&
        TaskList[j].completed === false
      ) {
        folders[i].content.push(TaskList[j]);
      }
    }
  }
  return folders;
};

const folders = parseIt(testFolders, testTasks);
console.log(folders);
for (let i =0;i<folders.length;++i){
    console.log(`${folders[i].folder_name} `,folders[i])
}
