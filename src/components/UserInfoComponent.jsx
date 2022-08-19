import React from 'react';
import FetchComponent from "./FetchComponent";


const UserInfoComponent = ({uri, loginProps}) => {
	return (
		<>
			{loginProps.value &&
				<FetchComponent
					uri={uri}
					renderSuccess={ProfilePropComponent}
				/>
			}
		</>
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
						alt={data.name}
					/>
					<ul className="user__list">
						{data.name && <li><b>{data.name}</b></li>}
						<li className="user__text_accent">{data.login}</li>
						{data.location && <li>{data.location}</li>}
						{data.bio && <li>{data.bio}</li>}
					</ul>
				</>)
			}
		</>
	);
};


export default UserInfoComponent;