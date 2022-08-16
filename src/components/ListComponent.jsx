import React from 'react';

const ListComponent = ({data, renderItem, renderEmpty}) => {
	return !data.length ?
		renderEmpty
		: (
			<ul>
				{data.map((item, i) =>
					<li key={i}>{renderItem(item)}</li>
				)}
			</ul>
		);
};

export default ListComponent;