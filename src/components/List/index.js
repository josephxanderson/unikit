// Framework imports
import React from 'react';

// Application imports
import './styles.scss';

const List = ({ children }) => {
	const [className] = "list";

	const element = (
		<div className={className}>{children}</div>
	);

	return element;
}

export default List;
