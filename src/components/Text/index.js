// Framework imports
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ConfigurationContext from '../../configuration-context.js';

const Text = ({
	alignment,
	children,
	color,
	font,
	style,
}) => {
	return (
		<ConfigurationContext.Consumer>
			{value => (
				<span>{children}</span>
			)}
		</ConfigurationContext.Consumer>
	);
}

Text.propTypes = {
	alignment: PropTypes.oneOf([
		'center',
		'leading',
		'trailing',
	]),
	color: PropTypes.string,
	font: PropTypes.shape({
		name: PropTypes.string,
		size: PropTypes.number,
		weight: PropTypes.string,
	}),
	style: PropTypes.shape({
		bold: PropTypes.bool,
		italic: PropTypes.bool,
		strikethrough: PropTypes.bool,
		underline: PropTypes.bool,
	}),
}

export default Text;
