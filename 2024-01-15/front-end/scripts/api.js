async function sessionCheck()
{
	try {
		const promise = await fetch('http://localhost/server/user/session-check', { 
			credentials: "include"})
		const answer = await promise.json()
		if(!answer.sessionValid){
			window.location.href = "http://localhost/";
		}
	} catch (error) {
		console.log(error);
	}
}

sessionCheck();

async function postNewTodo(todo) {
	try {
		const promise = await fetch("http://localhost/server/todos", {
		credentials: "include",	
		method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		});
		const result = await promise.json();

		return result;
	} catch (error) {}
}
async function getAllTodos() {
	try {
		const promise = await fetch("http://localhost/server/todos");
		const result = await promise.json();
		console.log(result);
		showAllTodos(result.filter((todo) => !todo.done));
		showAllDones(result.filter((todo) => todo.done)); //
		return result;
	} catch (error) {}
}

async function updateTodoState(todo){
	const promise = await fetch(`http://localhost/server/todos/${todo.id}`, {
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo)
	})
	const result = await promise.json();
	if(promise.ok)
	{
		console.error("Atsakymas iš endpoint /todos/id buvo nesėkmingas");
	}else{
		return result;
	}
}