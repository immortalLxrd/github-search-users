import React from 'react';


const ListComponent = ({data, renderItem, renderEmpty, ...props}) => {
	return !data.length ?
		renderEmpty
		: (
			<ul className="user__list">
				{data.map((item, i) =>
					<li key={i}>{renderItem(item)}</li>
				)}
			</ul>
		);
};


export default ListComponent;