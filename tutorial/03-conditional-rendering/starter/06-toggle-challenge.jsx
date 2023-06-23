import { useState } from "react";

const ToggleChallenge = () => {
	const [showAlert, setShowAlert] = useState(false);

	// const toggleAlert = () => {
	// 	if (showAlert) {
	// 		setShowAlert(false);
	// 		return;
	// 	}
	// 	setShowAlert(true);
	// };

	return (
		<div>
			{/* <button className="btn" onClick={toggleAlert}>
				toggle
			</button> */}
			<button className="btn" onClick={() => setShowAlert(!showAlert)}>
				toggle
			</button>
			{showAlert && <Alert />}
		</div>
	);
};

const Alert = () => {
	return <div className="alert alert-danger">Hello World</div>;
};

export default ToggleChallenge;
