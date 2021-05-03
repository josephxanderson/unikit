// Framework imports
import React, { useContext } from 'react';

// Application imports
import './styles.scss';
import ConfigurationContext from '../../configuration-context.js';

const getElementProperties = (backgroundColor, color, type) => {
	let className = "button";

	if (backgroundColor) {
		// Add the background color classname.
		className = className.concat(` backgroundColor-${backgroundColor}`);
	}

	if (color) {
		// Add the color classname.
		className = className.concat(` color-${color}`);
	}

	if (type) {
		type.forEach((type) => {
			// Add the type classname.
			className = className.concat(` type-${type}`);
		})
	}

	return [
		className,
	];
}

const Button = ({
	accessibilityLabel,
	backgroundColor,
	color,
	image,
	title,
	type,
}) => {
	const [className] = getElementProperties(backgroundColor, color, type);

	const element = (
		<button className={className} role="button" aria-label={accessibilityLabel}>
			<span className="button-title">{title}</span>
		</button>
	);

	return element;
}

export default Button;
