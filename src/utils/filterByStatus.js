function filterByStatus(filter, tasks) {
  if (filter === 'completed') {
    tasks = tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    tasks = tasks.filter((task) => !task.completed);
  }
  return tasks;
}

export default filterByStatus;
