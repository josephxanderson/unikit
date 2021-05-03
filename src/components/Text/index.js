// Framework imports
import React, { useContext } from "react";
import PropTypes from "prop-types";

import ConfigurationContext from "../../configuration-context.js";

const Text = ({
	alignment,
	children,
	color,
	preset,
	style,
}) => {
	let role = null;
	let Tag = "span";

	const determinePreset = () => {
		if (preset == "largeTitle") {
			role = "heading";
			Tag = "h1";
		}

		if (preset == "title1") {
			role = "heading";
			Tag = "h2";
		}
	}

	determinePreset();

	const element = (<Tag className={`
		text
		style--${preset}
		${color ? 'color--${color}' : null}
		${alignment ? 'align--${alignment}' : null}
	`} role={role}>{children}</Tag>);

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
