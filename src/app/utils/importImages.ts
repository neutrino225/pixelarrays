/** @format */

const importAll = (r: __WebpackModuleApi.RequireContext) => {
	return r.keys().map((fileName: string) => ({
		src: fileName.replace("./", "/images/"),
		...r(fileName),
	}));
};

const images = importAll(
	require.context("../../../public/images", false, /\.(jpg|JPG)$/)
);

export default images;
