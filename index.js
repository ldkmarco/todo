function App() {
	return (
		<>
			<header>
				<h1 className='header'>To DO's</h1>
			</header>
			<main>
				<TodoList />
			</main>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));