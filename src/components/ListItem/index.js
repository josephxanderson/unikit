// Framework imports
import React from 'react';

// Application imports
import './styles.scss';

const getElementProperties = () => {
	let className = "list--list-item";

	return [
		className,
	];
}

const ListItem = ({
	accessory,
	accessibilityLabel,
	children,
}) => {
	const [className] = getElementProperties();

	const element = (
		<li className={className}>
			{children}
		</li>
	);

	return element;
}

export default ListItem;
