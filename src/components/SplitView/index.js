// Framework imports
import React, { useEffect, useState } from 'react';
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
	const [windowWidth, setWindowWidth] = useState(null);
	const [className] = getElementProperties();

	let screenSizeClassCompact = getComputedStyle(document.documentElement).getPropertyValue('--size-screen-class-compact');

	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const windowResizeEventListener = window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});

		return(() => {
			window.removeEventListener('resize', windowResizeEventListener);
		})
	}, [windowWidth]);

	if (windowWidth >= parseInt(screenSizeClassCompact, 10)) {
		return (
			<div className={className}>
				<div className="column-secondary">{secondaryColumn}</div>
				<div className="column-primary">{primaryColumn}</div>
			</div>
		);
	} else {
		return (
			<div className={className}>
				<div className="column-compact">{compact}</div>
			</div>
		);
	}

}

SplitView.propTypes = {
	"primaryColumn": PropTypes.element,
	"secondaryColumn": PropTypes.element,
	"compact": PropTypes.element,
}

export default SplitView;
