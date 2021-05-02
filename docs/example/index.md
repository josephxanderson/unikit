
```js
import { UniKitConfig, UniKitApp } from 'unikit';

const App = (
	<UniKitConfig value={{
		accentColor: "253, 48, 89",
		defaultColorScheme: "dark",
		useUserColorSchemePreference: "true",
	}}>
		<UniKitApp>
			<Router>
				<Switch>
					<Route exact path='/' component={HomeScreen} />
				</Switch>
			</Router>
		</UniKitApp>
	</UniKitConfig>
);

ReactDOM.render(App, document.getElementById('root'));
```
