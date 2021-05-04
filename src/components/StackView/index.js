// Framework imports
import React from 'react';
import PropTypes from "prop-types";

// Application imports
import './styles.scss';

const getElementProperties = (alignment, axis, distribution) => {
	let className = "stackView";

	if (alignment) {
		// Add the alignment classname.
		className = className.concat(` alignment-${alignment}`);
	}

	if (axis) {
		// Add the axis classname.
		className = className.concat(` axis-${axis}`);
	}

	if (distribution) {
		// Add the distribution classname.
		className = className.concat(` distribution-${distribution}`);
	}

	return [
		className,
	];
}

const StackView = ({
	alignment,
	axis,
	children,
	distribution,
}) => {
	const [className] = getElementProperties(alignment, axis, distribution);

	const element = (
		<div className={className}>{children}</div>
	);

	return element;
}

StackView.propTypes = {
	"alignment": PropTypes.oneOf([
		"leading",
		"center",
		"trailing",
	]),
	"axis": PropTypes.oneOf([
		"horizontal",
		"vertical",
	]),
	"distribution": PropTypes.oneOf([
		"equalCentering",
		"equalSpacing",
		"fill",
		"spacingBetween",
	]),
}

export default StackView;
