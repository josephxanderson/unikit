import ConfigurationContext from "./configuration-context";

// Application imports
import Application from './components/Application';
import Button from './components/Button';
import Icon from './components/Icon';
import List from './components/List';
import ListItem from './components/ListItem';
import ListSection from './components/ListSection';
import Text from './components/Text';

// Create the default UIConfigurationContext object.
const Configuration = ConfigurationContext.Provider;

// Named exports.
export {
	Configuration,

	// Components exports.
	Application,
	Button,
	Icon,
	List,
	ListItem,
	ListSection,
	Text,
}
