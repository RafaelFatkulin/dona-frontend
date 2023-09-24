const loadTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 1 },
  });

  const data = await response.json();

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, 1000)
  );

  return data;
};

export default async function Todos() {
    const todos = await loadTodos()

    return (
        <ul>
            {todos.map((todo: any) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}
