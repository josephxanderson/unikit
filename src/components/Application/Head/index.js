import React from "react";
import { createPortal } from "react-dom";

const Head = ({ children }) => {
	const defaultHeadElements = [
		"meta[charset]",
		"meta[name=\"viewport\"]",
		"meta[name=\"apple-mobile-web-app-status-bar-style\"]",
		"meta[name=\"theme-color\"]",
		"meta[name=\"apple-mobile-web-app-title\"]",
		"title",
		"link[rel=\"manifest\"]",
		"link[rel=\"icon\"]",
	];

	defaultHeadElements.forEach((element) => {
		document.head.removeChild(document.querySelector(element));
	});

	return createPortal(children, document.head);
}

export default Head;
