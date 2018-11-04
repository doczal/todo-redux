
const port = '3002';
const url = `http://localhost:${port}/api/todos`;

export function getTodos() {
  return fetch(url)
    .then((data) => data.json())
    .catch((err) => console.log(err));
}

export function addTodo(task) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({task: task})
  })
    .then((res) => res.json())
    .catch(err => console.log(err));
}

export function toggleTodo(todo) {
  return fetch(url+`/${todo._id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({complete: !todo.complete})
  })
    .then((res) => res.json())
    .catch(err => console.log(err));
}

export function updateTodo(id, value) {
  return fetch(url+`/${id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({task: value})
  })
    .then((res) => res.json())
    .catch(err => console.log(err));
}

export function deleteTodo(id) {
  return fetch(url+`/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .catch(err => console.log(err));
}