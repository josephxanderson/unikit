// Framework imports
import React, { useContext } from "react";
import PropTypes from "prop-types";

import ConfigurationContext from "../../configuration-context.js";

const getElementProperties = (alignment, color, preset, style) => {
	let className = "text";
	let role = null;
	let Tag = null;

	if (preset) {
		className = className.concat(` style-${preset}`);

		switch (preset) {
			case "largeTitle":
				role = "heading";
				Tag = "h1";
				break;

			case "title1":
				role = "heading";
				Tag = "h2";
				break;

			case "title2":
				role = "heading";
				Tag = "h3";
				break;

			case "title3":
				role = "heading";
				Tag = "h4";
				break;

			case "headline":
				role = "heading";
				Tag = "p";
				break;

			case "body":
				role = "unknown";
				Tag = "p";
				break;

			case "callout":
				role = "unknown";
				Tag = "p";
				break;

			case "subhead":
				role = "unknown";
				Tag = "p";
				break;

			case "footnote":
				role = "unknown";
				Tag = "span";
				break;

			case "caption1":
				role = "unknown";
				Tag = "h5";
				break;

			case "caption2":
				role = "unknown";
				Tag = "h6";
				break;

			default:
				role = "unknown";
				Tag = "p";
		}
	} else {
		className = className.concat(` style-body`);
	}

	if (color) {
		// Add the color classname.
		className = className.concat(` color-${color}`);
	}

	if (alignment) {
		// Add the alignment classname.
		className = className.concat(` align-${alignment}`);
	}

	return [
		className,
		role,
		Tag
	];
}

const Text = ({
	alignment,
	children,
	color,
	preset,
	style,
}) => {
	const [className, role, Tag] = getElementProperties(alignment, color, preset, style);

	const element = (<Tag className={className} role={role}>{children}</Tag>);

	return element;
}

Text.propTypes = {
	alignment: PropTypes.oneOf([
		"center",
		"leading",
		"trailing",
	]),
	color: PropTypes.string,
	preset: PropTypes.oneOf([
		"largeTitle",
		"title1",
		"title2",
		"title3",
		"headline",
		"body",
		"callout",
		"subhead",
		"footnote",
		"caption1",
		"caption2",
	]),
	style: PropTypes.shape({
		bold: PropTypes.bool,
		italic: PropTypes.bool,
		strikethrough: PropTypes.bool,
		underline: PropTypes.bool,
	}),
}

export default Text;
