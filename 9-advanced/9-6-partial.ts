{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  // 기존의 todo 데이터를 유지하면서, 부분적으로 데이터를 업데이트 할 때 (partial)
  function updateTodo(todo: ToDo, fidelsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fidelsToUpdate };
  }
  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const updated = updateTodo(todo, { priority: 'low' });
  console.log(updated);
  
}