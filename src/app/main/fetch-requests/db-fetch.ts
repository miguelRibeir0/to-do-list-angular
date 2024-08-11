const getTasks = async () => {
  const ans = await fetch(`https://personal-server-miguel.xyz/to-do/tasks`);

  const data = await ans.json();

  return data;
};

const newTask = async (
  taskName: string,
  taskDescription: string,
  taskDate: string,
  taskUrgency: string
) => {
  const ans = await fetch(
    `https://personal-server-miguel.xyz/to-do/tasks/new`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        taskName,
        taskDescription,
        taskDate,
        taskUrgency,
      }),
    }
  );

  const data = await ans.json();

  return data;
};

// I will implememnt this later

// const editTask = async (
//   taskId: string,
//   taskName: string,
//   taskDescription: string,
//   taskDate: string,
//   taskUrgency: string
// ) => {
//   const ans = await fetch(
//     `https://personal-server-miguel.xyz/to-do/tasks/edit`,
//     {
//       method: 'PUT',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         taskId,
//         taskName,
//         taskDescription,
//         taskDate,
//         taskUrgency,
//       }),
//     }
//   );

//   const data = await ans.json();

//   return data;
// };

const deleteTask = async (taskId: number) => {
  const ans = await fetch(
    `https://personal-server-miguel.xyz/to-do/tasks/delete`,
    {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        taskId,
      }),
    }
  );

  const data = await ans.json();

  return data;
};

const taskState = async (taskId: number) => {
  const ans = await fetch(
    `https://personal-server-miguel.xyz/to-do/tasks/state`,
    {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        taskId,
      }),
    }
  );

  const data = await ans.json();

  return data;
};

export { getTasks, newTask, deleteTask, taskState };
