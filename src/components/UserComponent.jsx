import React from 'react';
import UserInfoComponent from "./UserInfoComponent";

const UserComponent = ({uri}) => {

	// function submit(event) {
	// 	event.preventDefault();
	// 	resetLogin();
	// }

	return (
		<div className="_container">
			<UserInfoComponent uri={uri}/>
		</div>
	);
};

export default UserComponent;