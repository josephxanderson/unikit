// Framework imports
import React, { useLayoutEffect, useRef } from 'react';

// Application imports
import "./styles.scss";
import Label from "../Label";
import StackView from "../StackView";

const getElementProperties = () => {
	let className = "header";

	return [
		className,
	];
}

const Header = ({
	accessory,
	backItemTitle,
	backItemAction,
	title,
}) => {
	const currentHeader = useRef(null);
	let parentView = null;
	const [className] = getElementProperties();

	useLayoutEffect(() => {
		if (currentHeader.current) {
			parentView = currentHeader.current.parentElement;
			parentView.style.setProperty('--header-height', `${currentHeader.current.offsetHeight}px`);
		}
	}, []);

	const element = (
		<nav className="header" ref={currentHeader}>
			<StackView alignment="leading" axis="horizontal" distribution="equalCentering">
				{
					backItemAction
					? (
						<div className="header-navigationBar-backButton" onClick={backItemAction}>
							<Label preset="body">👈🏼 {backItemTitle ? backItemTitle : "Back"}</Label>
						</div>
					)
					: null
				}

				<div className="header-navigationBar-title">
					<Label preset="title3">{title}</Label>
				</div>

				{
					accessory
					? (
						<div className="header-navigationBar-accessory">
							{React.cloneElement(accessory)}
						</div>
					)
					: null
				}
			</StackView>

			<div className="header-titleBar">
				<Label preset="largeTitle">{title}</Label>
			</div>
		</nav>
	);

	return element;
}

export default Header;
