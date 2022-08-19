import React from 'react';
import Input from "./UI/Input";


const SearchComponent = ({searchProps}) => {
	return (
		<Input
			className="search__input"
			{...searchProps}
		/>
	);
};


export default SearchComponent;