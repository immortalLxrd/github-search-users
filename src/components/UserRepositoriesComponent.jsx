import React from 'react';
import FetchComponent from "./FetchComponent";
import ListComponent from "./ListComponent";

const UserRepositoriesComponent = ({uri}) => {
	return (
		<div className="user__repositories">
			<FetchComponent
				uri={uri + '/repos'}
				renderSuccess={RepositoryComponent}
			/>
		</div>
	);
};

function RepositoryComponent(data) {
	return (
		<>
			<h2 className="user__title">Repositories:</h2>
			<ListComponent
				data={Object.values(data)}
				renderItem={item => item.name}
				renderEmpty={<p>This list is empty</p>}
			/>
		</>
	);
}

export default UserRepositoriesComponent;