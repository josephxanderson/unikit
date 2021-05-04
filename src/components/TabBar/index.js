// Framework imports
import React from 'react';

// Application imports
import './styles.scss';

const getElementProperties = () => {
	let className = "tabBar";

	return [
		className,
	];
}

const TabBar = ({
	children,
}) => {
	const [className] = getElementProperties();

	const element = (
		<div className={className}>{children}</div>
	);

	return element;
}

export default TabBar;
