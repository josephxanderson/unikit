// Framework imports
import React from 'react';
import PropTypes from "prop-types";

// Application imports
import './styles.scss';

const getElementProperties = () => {
	let className = "splitView";

	return [
		className,
	];
}

const SplitView = ({
	style,
	primaryColumn,
	secondaryColumn,
	compact,
}) => {
	const [className] = getElementProperties();

	const element = (
		<div className={className}>
			<div className="column-secondary">{secondaryColumn}</div>
			<div className="column-primary">{primaryColumn}</div>
			<div className="column-compact">{compact}</div>
		</div>
	);

	return element;
}

SplitView.propTypes = {
	"primaryColumn": PropTypes.element,
	"secondaryColumn": PropTypes.element,
	"compact": PropTypes.element,
}

export default SplitView;
