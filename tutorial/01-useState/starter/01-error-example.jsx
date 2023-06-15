const ErrorExample = () => {
	let count = 0;

	const increaseCount = () => {
		count += 1;
		console.log(count);
	};

	return (
		<div>
			<h2>Count: {count}</h2>
			<button type="button" onClick={increaseCount} className="btn">
				Increase Count
			</button>
		</div>
	);
};

export default ErrorExample;
