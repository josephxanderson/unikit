// Framework imports
import React, { useLayoutEffect, useRef, useState } from 'react';

// Application imports
import './styles.scss';

const getElementProperties = () => {
	let className = "tabBar";

	return [
		className,
	];
}

const TabBar = ({
	children
}) => {
	const currentTabBar = useRef(null);
	let parentView = null;

	const [className] = getElementProperties();

	useLayoutEffect(() => {

		if (currentTabBar.current) {
			parentView = currentTabBar.current.parentElement;
			parentView.style.setProperty('--tabbar-height', `${currentTabBar.current.offsetHeight}px`);
		}
	}, []);

	const element = (
		<nav className={className} ref={currentTabBar}>{children}</nav>
	);

	return element;
}

export default TabBar;
