import { config } from 'dotenv';

config();

const serverUrl = process.env['SERVER_URL'];

const getTasks = async () => {
  const ans = await fetch(`${serverUrl}/to-do/tasks`);

  const data = await ans.json();

  return data;
};

const newTask = async (
  taskName: string,
  taskDescription: string,
  taskDate: string,
  taskUrgency: string
) => {
  const ans = await fetch(`${serverUrl}/to-do/tasks/new`, {
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
  });

  const data = await ans.json();

  return data;
};

export { getTasks, newTask };
