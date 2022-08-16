import React from 'react';
import FetchComponent from "./FetchComponent";
import UserRepositoriesComponent from "./UserRepositoriesComponent";

const UserInfoComponent = ({uri}) => {
	return (
		<div className="user">
			<div className="user__inner">
				<FetchComponent
					uri={uri}
					renderSuccess={ProfileComponent}
				/>

				<UserRepositoriesComponent uri={uri}/>
			</div>
		</div>
	);
};

function ProfileComponent(data) {
	return (
		<>
			{data.documentation_url
				? (<p>Something went wrong. Please check your input or try again later.</p>)
				:
				(<>
					<img
						className="user__avatar"
						src={data.avatar_url}
						alt={data.name}/>
					<ul className="user__list">
						<li><b>Name: </b>{data.name}</li>
						<li><b>Login: </b>{data.login}</li>
						<li><b>ID: </b>{data.id}</li>
						{data.location && <li><b>Country: </b>{data.location}</li>}
						{data.bio && <li><b>Bio: </b>{data.bio}</li>}
					</ul>
				</>)
			}
		</>
	);
}

export default UserInfoComponent;