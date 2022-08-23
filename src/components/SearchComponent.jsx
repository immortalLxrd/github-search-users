import React from 'react';
import Input from "./UI/Input";


const SearchComponent = ({searchProps}) => {
	return (
		<Input
			className="search__input"
			placeholder="Enter user login to search"
			{...searchProps}
		/>
	);
};


export default SearchComponent;