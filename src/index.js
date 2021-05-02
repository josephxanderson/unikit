import ConfigurationContext from "./configuration-context";

// Application imports
import Application from './components/Application';
import Button from './components/Button';
import Text from './components/Text';

// Create the default UIConfigurationContext object.
const Configuration = ConfigurationContext.Provider;

// Named exports.
export {
	Configuration,

	// Components exports.
	Application,
	Button,
	Text,
}
