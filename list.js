function TodoList() {
	const [todos, setTodos] = React.useState([
		{
			text: 'Learn React',
			isCompleted: false,
		},
		{
			text: "Develop ToDo's App",
			isCompleted: false,
		},
		{
			text: 'Commit GitHub Repository',
			isCompleted: false,
		},
	]);
	const addTodo = (text) => {
		const newTodos = [...todos, { text: text, isCompleted: false }];
		setTodos(newTodos);
	};
	const removeTodo = (index) => {
		let tempTodos = [...todos];
		tempTodos.splice(index, 1);
		setTodos(tempTodos);
	};
	return (
		<>
			<div className='app'>
				<div className='list'>
					{todos.map((todo, i) => (
						<Todo index={i} todo={todo} key={i} remove={removeTodo} />
					))}
					<TodoForm addTodo={addTodo} />
				</div>
			</div>
		</>
	);
}