import ConfigurationContext from "./configuration-context";

// Application imports
import Application from './components/Application';
import Button from './components/Button';
import ContentView from './components/ContentView';
import Icon from './components/Icon';
import Label from './components/Label';
import SplitView from './components/SplitView';
import StackView from './components/StackView';
import TabBar from './components/TabBar';
import View from './components/View';

// Create the default UIConfigurationContext object.
const Configuration = ConfigurationContext.Provider;

// Named exports.
export {
	Configuration,

	// Components exports.
	Application,
	Button,
	ContentView,
	Icon,
	Label,
	SplitView,
	StackView,
	TabBar,
	View,
}
