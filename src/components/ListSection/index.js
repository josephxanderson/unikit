// Framework imports
import React from 'react';

// Application imports
import './styles.scss';

const ListSection = ({
	children,
	heading,
	style
}) => {
	const [className] = "list--list-section";

	const element = (<>
		{
			heading
			? (
				<div className="list--list-section-heading">

				</div>
			)
			: null
		}

		<ul className={className}>{children}</ul>
	</>);

	return element;
}

export default ListSection;
