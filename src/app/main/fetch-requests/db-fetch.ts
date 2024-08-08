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

export { getTasks, newTask };
