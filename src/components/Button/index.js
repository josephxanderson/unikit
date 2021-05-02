import React, { useContext } from 'react';

import ConfigurationContext from '../../configuration-context.js';

const Button = (props) => {
	return (
		<ConfigurationContext.Consumer>
			{value => (
				<button>{value.accentColor}</button>
			)}
		</ConfigurationContext.Consumer>
	);
}

export default Button;
