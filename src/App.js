import React from "react";
import './styles/App.scss';
import SearchComponent from "./components/SearchComponent";
import useInput from "./hooks/useInput";
import UserComponent from "./components/UserComponent";


const GITHUB_URI = "https://api.github.com/users/";


const App = () => {
	const [loginProps] = useInput('');

	let URI = `${GITHUB_URI}${loginProps.value}`;

	return (
		<React.StrictMode>
			<div className="App">
				<header className="header">
					<div className="search">
						<SearchComponent searchProps={loginProps}/>
					</div>
				</header>
				<div className="_container">
					<UserComponent uri={URI} loginProps={loginProps}/>
				</div>
			</div>
		</React.StrictMode>
	);
};


export default App;
