/** @format */

"use client";

import styles from "../styles/scrolltop.module.css";
import Image from "next/image";
import scrollImg from "../../../public/scrollUp.png";
import { useState, useEffect } from "react";

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const ScrollToTopButton = () => {
	const [scrollVal, setScrollVal] = useState(0);

	const handleScroll = () => {
		setScrollVal(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scrollVal > 400 ? (
		<button className={styles.scrolltop} onClick={scrollToTop}>
			<Image src={scrollImg} alt="Scroll to top" width={30} height={30} />
		</button>
	) : null;
};

export default ScrollToTopButton;
