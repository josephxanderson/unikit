// Framework imports
import React from 'react';

// Application imports
import './styles.scss';

const getElementProperties = () => {
	let className = "view";

	return [
		className,
	];
}

const View = ({
	children,
}) => {
	const [className] = getElementProperties();

	const element = (
		<div className={className}>{children}</div>
	);

	return element;
}

export default View;
