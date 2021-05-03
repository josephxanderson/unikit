// Framework imports
import React from 'react';

// Application imports
import './styles.scss';
import Icon from '../Icon';

const getElementProperties = () => {
	let className = "list--list-item";

	return [
		className,
	];
}

const getIcon = (icon) => {
	// Determine if the image is an application provided icon.
	// To do so, we check if the icon name provided begins with a '/'.
	// If so, that means it's not an application provided icon,
	// and we should use the Icon imagePath property.
	if (
		icon.startsWith('../') ||
		icon.startsWith('./') ||
		icon.startsWith('/')
	) {
		return (<Icon imagePath={icon}/>);
	} else {
		return (<Icon name={icon}/>);
	}
}

const ListItem = ({
	accessibilityLabel,
	children,
	icon,
	title,
	subtitle,
	navigable,
}) => {
	const [className] = getElementProperties();

	const element = (
		<li className={className}>
			{
				icon
				? <div className="list--list-item-icon">{getIcon(icon)}</div>
				: null
			}

			<div className="list--list-item-text">
				<span className="list--list-item-title">{title}</span>
				<span className="list--list-item-subtitle">{subtitle}</span>
			</div>

			{
				children
				? <div className="list--list-item-accessories">{children}</div>
				: null
			}

			{/* Only show the navigable chevron if there are no accessories (children). */}
			{
				navigable && !children
				? (
					<div className="list--list-item-accessories">
					chevron ya'll
					</div>
				)
				: null
			}
		</li>
	);

	return element;
}

export default ListItem;
