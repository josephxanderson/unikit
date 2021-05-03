// Framework imports
import React from 'react';

// Application imports
import './styles.scss';
import Icon from '../Icon';

const getElementProperties = (color, style) => {
	let className = "button";

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

const getIcon = (icon) => {
	// Determine if the image is an application provided icon.
	// To do so, we check if the icon name provided begins with a '/'.
	// If so, that means it's not an application provided icon,
	// and we should use the Icon imagePath property.
	if (
		icon.startsWith('../') ||
		icon.startsWith('./') ||
		icon.startsWith('/')
	) {
		return (<Icon imagePath={icon}/>);
	} else {
		return (<Icon name={icon}/>);
	}
}

const Button = ({
	accessibilityLabel,
	color,
	icon,
	title,
	style,
}) => {
	const [className] = getElementProperties(color, style);

	const element = (
		<button className={className} role="button" aria-label={accessibilityLabel}>
			{
				icon
				? getIcon(icon)
				: null
			}

			<span className="button-title">{title}</span>
		</button>
	);

	return element;
}

export default Button;
