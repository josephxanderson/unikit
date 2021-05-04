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
	children,
}) => {
	const targetRef = useRef();
	const documentRoot = document.documentElement;

	const [className] = getElementProperties();

	useLayoutEffect(() => {
		if (targetRef.current) {
			documentRoot.style.setProperty('--tabbar-height', `${targetRef.current.offsetHeight}px`);
		}
	}, []);

	const element = (
		<nav className={className} ref={targetRef}>{children}</nav>
	);

	return element;
}

export default TabBar;
