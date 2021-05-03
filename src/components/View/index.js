// Framework imports
import React from 'react';

// Application imports
import './styles.scss';

const getElementProperties = (align, justify, width, height, style) => {
	let className = "view";

	if (align) {
		// Add the align classname.
		className = className.concat(` align-${align}`);
	}

	if (justify) {
		// Add the justify classname.
		className = className.concat(` justify-${justify}`);
	}

	if (width) {
		// Add the width classname.
		className = className.concat(` size-width-${width}`);
	}

	if (height) {
		// Add the height classname.
		className = className.concat(` size-height-${height}`);
	}

	if (style) {
		// Add the style classname.
		className = className.concat(` style-${style}`);
	}

	return [
		className,
	];
}

const View = ({
	align,
	children,
	justify,
	width,
	height,
	style,
}) => {
	const [className] = getElementProperties(align, justify, width, height, style);

	const element = (
		<div className={className}>{children}</div>
	);

	return element;
}

export default View;
