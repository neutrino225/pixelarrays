/** @format */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
	weight: ["200", "400", "700"], // Specify the weights you need
	subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
	title: "PixelArrays",
	description: "A simple gallery website showcasing my photography",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				{children}
				<SpeedInsights />
				<Footer />
			</body>
		</html>
	);
}
