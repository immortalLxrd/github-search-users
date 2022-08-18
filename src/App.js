import React from "react";
import './styles/App.scss';
import UserComponent from "./components/UserComponent";


const App = () => {
	return (
		<React.StrictMode>
			<div className="App">
				<UserComponent/>
			</div>
		</React.StrictMode>
	);
};


export default App;
