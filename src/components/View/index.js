// Framework imports
import React from 'react';
import PropTypes from "prop-types";

// Application imports
import './styles.scss';

const getElementProperties = (size) => {
	let className = "view";
	let styles = null;

	if (size) {
		styles = {
			"width": size.width + "%",
			"height": size.height + "%",
		};
	}

	return [
		className,
		styles,
	];
}

const View = ({
	children,
	size,
}) => {
	const [className, styles] = getElementProperties(size);

	const element = (
		<div
			className={className}
			{...(styles ? {"style": styles} : {})}
		>
			{children}
		</div>
	);

	return element;
}

View.propTypes = {
	"size": PropTypes.shape({
		"width": PropTypes.number,
		"height": PropTypes.number
	}),
}

export default View;
