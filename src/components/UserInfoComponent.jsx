import React from 'react';
import FetchComponent from "./FetchComponent";
import locationLogo from "../assets/images/location.png";
import UserRepositoriesComponent from "./UserRepositoriesComponent";


const UserInfoComponent = ({uri, loginProps}) => {
	return (
		<>
			{loginProps.value &&
				<>
					<FetchComponent
						uri={uri}
						renderSuccess={ProfilePropComponent}
					/>
					<UserRepositoriesComponent uri={uri}/>
				</>
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
					<ul>
						{data.name && <li className="user__title">{data.name}</li>}
						<li className="accent"><a href={"https://github.com/" + data.login}>{data.login}</a></li>
						{data.location
							&& <div className="user__location">
								<img className="user__location-logo" src={locationLogo} alt=""/>
								<li>{data.location}</li>
							</div>}
						{data.bio && <li className="user__bio">{data.bio}</li>}
					</ul>
				</>)
			}
		</>
	);
};


export default UserInfoComponent;