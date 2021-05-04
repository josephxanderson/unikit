// Framework imports
import React from 'react';
import PropTypes from "prop-types";

// Application imports
import './styles.scss';

const getElementProperties = (style) => {
	let className = "rootView";

	if (style) {
		// Add the style classname.
		className = className.concat(` style-${style}`);
	}

	return [
		className,
	];
}

const RootView = ({
	children,
	style,
}) => {
	const [className] = getElementProperties(style);

	const element = (
		<div className={className}>{children}</div>
	);

	return element;
}

RootView.propTypes = {
	"style": PropTypes.oneOf([
		"withTabBar",
	]),
}

export default RootView;
