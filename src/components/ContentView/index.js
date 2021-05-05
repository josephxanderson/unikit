// Framework imports
import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from "prop-types";

// Application imports
import './styles.scss';
import Label from '../Label';

const getElementProperties = (style) => {
	let className = "contentView";

	if (style) {
		// Add the style classname.
		className = className.concat(` style-${style}`);
	}

	return [
		className,
	];
}

const ContentView = ({
	children,
	style,
	title,
	backItemTitle = "Back",
}) => {
	const [className] = getElementProperties(style);
	const contentViewRef = useRef(null);
	const headerViewRef = useRef(null);

	useLayoutEffect(() => {
		if (contentViewRef.current && headerViewRef.current) {
			contentViewRef.current.style.setProperty('--header-height', `${headerViewRef.current.offsetHeight}px`);
		}
	}, []);

	const element = (
		<div className={className} ref={contentViewRef}>
			<nav className="headerView" ref={headerViewRef}>
				<Label preset="body">👈🏼 {backItemTitle}</Label>
				<Label preset="largeTitle">{title}</Label>
			</nav>

			{children}
		</div>
	);

	return element;
}

export default ContentView;
