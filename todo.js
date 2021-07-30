function Todo({ todo, index, remove }) {
	function removeItem() {
		remove(index);
	}
	return (
		<div className='todo'>
			{todo.text} <span onClick={removeItem}>(-)</span>
		</div>
	);
}