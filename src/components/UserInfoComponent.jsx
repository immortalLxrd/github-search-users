import React from 'react';
import FetchComponent from "./FetchComponent";
import UserRepositoriesComponent from "./UserRepositoriesComponent";
import SearchComponent from "./SearchComponent";
import useInput from "../hooks/useInput";


const GITHUB_URI = "https://api.github.com/users/"


const UserInfoComponent = () => {
	const [loginProps] = useInput('');

	let URI = `${GITHUB_URI}${loginProps.value}`

	return (
		<div className="user">
			<div className="user__inner">
				<SearchComponent searchProps={loginProps}/>
				{loginProps.value &&
					<>
						<FetchComponent
							uri={URI}
							renderSuccess={ProfilePropComponent}
						/>
						<UserRepositoriesComponent uri={URI}/>
					</>}
			</div>
		</div>
	);
};


const ProfilePropComponent = (data) => {
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
						{data.name && <li><b>Name: </b>{data.name}</li>}
						<li><b>Login: </b>{data.login}</li>
						<li><b>ID: </b>{data.id}</li>
						{data.location && <li><b>Location: </b>{data.location}</li>}
						{data.bio && <li><b>Bio: </b>{data.bio}</li>}
						<li>
							<b>Link: </b>
							<a href={'https://github.com/' + data.login} rel="noopener noreferrer" target="_blank">
								github.com/{(data.login)}
							</a>
						</li>
					</ul>
				</>)
			}
		</>
	);
}


export default UserInfoComponent;