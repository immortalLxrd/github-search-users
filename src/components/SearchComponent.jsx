import React from 'react';

const SearchComponent = ({searchProps}) => {

	return (
		<input
			{...searchProps}
		/>
	);
};

export default SearchComponent;