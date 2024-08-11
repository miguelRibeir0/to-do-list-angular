const deleteTask = async (taskId) => {
  const ans = await fetch(`http://localhost:4242/to-do/tasks/delete`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      taskId,
    }),
  });

  const data = await ans.json();

  return data;
};

deleteTask(17)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
