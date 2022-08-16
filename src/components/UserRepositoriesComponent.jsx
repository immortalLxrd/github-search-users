import React from 'react';
import FetchComponent from "./FetchComponent";

const UserRepositoriesComponent = ({uri}) => {
	return (
		<div className="user__repositories">
			<h2 className="user__title">Repositories:</h2>
			<FetchComponent
				uri={uri+'/repos'}
				renderSuccess={RepositoryComponent}
			/>
		</div>
	);
};

function RepositoryComponent(data) {
	return (
		<ul>
			{
				Object.values(data).map(item => <li key={item.id}>{item.name}</li>)
			}
		</ul>
	);
}

export default UserRepositoriesComponent;