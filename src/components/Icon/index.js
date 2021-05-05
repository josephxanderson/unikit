// Framework imports
import React from 'react';

// Application imports
import './styles.scss';
import icons from './icons';

const getElementProperties = (color, style) => {
	let className = "icon";

	if (color) {
		// Add the color classname.
		className = className.concat(` color-${color}`);
	}

	return [
		className,
	];
}

const Icon = ({
	accessibilityLabel,
	color,
	name,
	imagePath,
}) => {
	const [className] = getElementProperties(color, imagePath);

	let element = null;

	// If we have an imagePath, then this is a custom icon and we should get the
	if (imagePath) {
		element = (
			<figure
				className={className}
				role="icon"
				{...(accessibilityLabel ? {"aria-label": accessibilityLabel} : {})} // If accessibilityLabel then use aria-label.
				{...(accessibilityLabel ? {} : {"aria-hidden": true})} // If no accessibility label then set aria-hidden="true".
				style={{backgroundImage: `url(${imagePath})`}}
			/>
		);
	} else {
		element = (
			<svg
				className={className}
				role="icon"
				{...(accessibilityLabel ? {"aria-label": accessibilityLabel} : {})} // If accessibilityLabel then use aria-label.
				{...(accessibilityLabel ? {} : {"aria-hidden": true})} // If no accessibility label then set aria-hidden="true".
				width="32"
				height="32"
				viewBox="0 0 32 32"
			>
				<path d={icons[name]}></path>
			</svg>
		);
	}

	return element;
}

export default Icon;
