import React from "react";
import './styles/App.scss';
import UserInfoComponent from "./components/UserInfoComponent";
import UserRepositoriesComponent from "./components/UserRepositoriesComponent";
import SearchComponent from "./components/SearchComponent";
import useInput from "./hooks/useInput";


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
					<div className="user">
						<div className="user__inner">
							<UserInfoComponent uri={URI} loginProps={loginProps}/>
							<UserRepositoriesComponent uri={URI}/>
						</div>
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
};


export default App;
