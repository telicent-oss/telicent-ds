import ReactDOMServer from "react-dom/server";

// -- Internal cache (module-level, persists across renders)
const iconCache = new Map<string, string>();

export const reactNodeToDataURL = (
	node: React.ReactNode,
	key?: string,
	width = 24,
	height = 24
): string => {
	// Use caller-supplied key OR hash the rendered string
	if (key && iconCache.has(key)) return iconCache.get(key)!;

	const svgString = ReactDOMServer.renderToStaticMarkup(
		<svg
			width={width}
			height={height}
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${width} ${height}`}
		>
			{node}
		</svg>
	);

	const dataURL = `data:image/svg+xml;base64,${btoa(svgString)}`;
	if (key) iconCache.set(key, dataURL);
	return dataURL;
};
