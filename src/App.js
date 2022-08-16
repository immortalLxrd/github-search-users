import './styles/App.scss';
import UserComponent from "./components/UserComponent";


const GITHUB_URI = "https://api.github.com/users";

const App = () => {
	return (
		<div className="App">
			<UserComponent uri={GITHUB_URI}/>
		</div>
	);
};

export default App;
