import React from 'react';
import UserInfoComponent from "./UserInfoComponent";

const UserComponent = ({uri, loginProps}) => {
	return (
		<div className="user">
			<div className="user__inner">
				<UserInfoComponent uri={uri} loginProps={loginProps}/>
			</div>
		</div>
	);
};

export default UserComponent;