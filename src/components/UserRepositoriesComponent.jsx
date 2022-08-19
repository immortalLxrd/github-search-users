import React from 'react';
import FetchComponent from "./FetchComponent";
import ListComponent from "./ListComponent";


const UserRepositoriesComponent = ({uri}) => {
	const userLogin = uri.split('s/')[1];

	return (
		<div className="user__repositories">
			<h2 className="user__title">Repositories:</h2>
			<FetchComponent
				uri={uri + '/repos'}
				renderSuccess={data => RepositoryPropComponent(data, userLogin)}
			/>
		</div>
	);
};


const RepositoryPropComponent = (data, userLogin) => {
	return (
		<>
			<ListComponent
				data={Object.values(data)}
				userLogin={userLogin}
				renderItem={item => <a href={`https://github.com/${userLogin}/${item.name}`}>{item.name}</a>}
				renderEmpty={<p>This list is empty</p>}
			/>
		</>
	);
};


export default UserRepositoriesComponent;