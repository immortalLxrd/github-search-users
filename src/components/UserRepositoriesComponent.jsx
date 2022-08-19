import React from 'react';
import FetchComponent from "./FetchComponent";
import ListComponent from "./ListComponent";


const UserRepositoriesComponent = ({uri}) => {
	return (
		<div className="user__repositories">
			<h2 className="user__title">Repositories:</h2>
			<FetchComponent
				uri={uri + '/repos'}
				renderSuccess={RepositoryPropComponent}
			/>
		</div>
	);
};


const RepositoryPropComponent = (data) => {
	return (
		<>
			<ListComponent
				data={Object.values(data)}
				renderItem={item => item.name}
				renderEmpty={<p>This list is empty</p>}
			/>
		</>
	);
};


export default UserRepositoriesComponent;