// Framework imports
import React, { useEffect, useState } from 'react';

import ConfigurationContext from '../../configuration-context.js';

// Application imports
import '../../styles/index.scss';
import Head from './Head';

const Application = ({ children }) => {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	const documentRoot = document.documentElement;

	useEffect(() => {
		document.fonts.ready.then(() => {
			setFontsLoaded(true);
		});
	}, []);

	const setDefaultColorScheme = (colorScheme) => {
		documentRoot.setAttribute('color-scheme', colorScheme);
	}

	const setAccentColor = (color) => {
		documentRoot.style.setProperty('--color-accent', color);
	}

	const app = (
		<ConfigurationContext.Consumer>
			{configuration => (<>

				{/* useUserColorSchemePreference */}
				{
					configuration.useUserColorSchemePreference
					? null
					: setDefaultColorScheme(configuration.defaultColorScheme)
				}

				{/* accentColor */}
				{
					configuration.accentColor
					? setAccentColor(configuration.accentColor)
					: null
				}

				<Head>
					{/* OG Meta */}
					{/*<meta property="og:title" content={title} />*/}
					{/*<meta property="og:url" content={url} />*/}
					{/*<meta property="og:image" content={image} />*/}
					{/*<meta property="og:description" content={description} />*/}
					<meta property="og:type" content="website" />

					{/* Twitter Meta */}
					{/*<meta name="twitter:card" content={image} />*/}
					<meta name="twitter:title" content={configuration.displayName} />
					{/*<meta name="twitter:description" content={description} />*/}
					{/*<meta name="twitter:image" content={image} />*/}

					{/* Browser meta */}
					<meta charSet="utf-8" />
					<title>{configuration.displayName}</title>
					{/*<meta name="description" content={description} />*/}
					<link rel="icon" type="image/png" href={configuration.icons.general.url} />

					{/* Web App Meta */}
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />

					<link rel="apple-touch-icon" href={configuration.icons.apple.url} />

					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="mobile-web-app-capable" content="yes" />

					<meta name="apple-mobile-web-app-status-bar-style" content="white" />
					<meta name="theme-color" content="#000000" />

					<meta name="apple-mobile-web-app-title" content={configuration.displayName} />

					<link rel="manifest" href={configuration.manifestUrl} />

					{/* Web app launch screens */}
					<link rel="apple-touch-startup-image"
						media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
						href={configuration.launchScreens.iphone_5.url} />

					<link rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
						href={configuration.launchScreens.iphone_6_7_8.url} />

					<link rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)"
						href={configuration.launchScreens.iphone_6Plus_7Plus_8Plus.url} />

					<link rel="apple-touch-startup-image"
						media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
						href={configuration.launchScreens.iphone_X_XS_11Pro_12Mini.url} />

					<link rel="apple-touch-startup-image"
						media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
						href={configuration.launchScreens.iphone_XR_11.url} />

					<link rel="apple-touch-startup-image"
						media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
						href={configuration.launchScreens.iphone_12_12Pro.url} />

					<link rel="apple-touch-startup-image"
						media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)"
						href={configuration.launchScreens.iphone_12ProMax.url} />
				</Head>

				{children}
			</>)}
		</ConfigurationContext.Consumer>
	);

	if (!fontsLoaded) {
		return <p>Loading...</p>;
	} else {
		return app;
	}
}

export default Application;
