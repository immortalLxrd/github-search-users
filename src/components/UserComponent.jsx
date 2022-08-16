import React from 'react';
import UserInfoComponent from "./UserInfoComponent";

const UserComponent = ({uri}) => {
	return (
		<div className="_container">
			<UserInfoComponent uri={uri}/>
		</div>
	);
};

export default UserComponent;