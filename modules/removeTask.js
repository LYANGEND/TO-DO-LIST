import { getTaskFromLocalStorage, setTaskIntoLocalStorage } from './localStorage.js';

const removeTask = (e) => {
  const tasks = getTaskFromLocalStorage();
  const selectedID = parseInt(e.id, 10);

  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === selectedID) {
      tasks.splice(i, 1);
      break;
    }
  }
  tasks.forEach((task, index) => { task.index = index + 1; });
  setTaskIntoLocalStorage(tasks);
};

export default removeTask;