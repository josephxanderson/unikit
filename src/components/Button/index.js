// Framework imports
import React, { useContext } from 'react';

// Application imports
import './styles.scss';
import ConfigurationContext from '../../configuration-context.js';

const getElementProperties = (backgroundColor, color, style) => {
	let className = "button";

	if (backgroundColor) {
		// Add the background color classname.
		className = className.concat(` backgroundColor-${backgroundColor}`);
	}

	if (color) {
		// Add the color classname.
		className = className.concat(` color-${color}`);
	}

	if (style) {
		style.forEach((style) => {
			// Add the style classname.
			className = className.concat(` style-${style}`);
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
	style,
}) => {
	const [className] = getElementProperties(backgroundColor, color, style);

	const element = (
		<button className={className} role="button" aria-label={accessibilityLabel}>
			<span className="button-title">{title}</span>
		</button>
	);

	return element;
}

export default Button;
