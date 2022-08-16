import React from 'react';
import FetchComponent from "./FetchComponent";
import UserRepositoriesComponent from "./UserRepositoriesComponent";
import SearchComponent from "./SearchComponent";
import useInput from "../hooks/useInput";

const UserInfoComponent = ({uri}) => {
	const [loginProps] = useInput('');

	let fullUri = `${uri}/${loginProps.value}`

	return (
		<div className="user">
			<div className="user__inner">
				<SearchComponent searchProps={loginProps}/>
				{loginProps.value &&
					<>
						<FetchComponent
							uri={fullUri}
							renderSuccess={ProfileComponent}
						/>
						<UserRepositoriesComponent uri={fullUri}/>
					</>}
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