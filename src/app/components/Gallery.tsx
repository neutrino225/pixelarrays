/** @format */
"use client";

import Image from "next/image";
import images from "../utils/importImages";
import styles from "../styles/gallery.module.css";
import { motion, useInView, useAnimation, delay } from "framer-motion";
import { useEffect, useRef } from "react";

const gridContainerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delay: 0.3,
		},
	},
};

const gridItemVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Gallery = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		// create mansonary grid

		<section className={styles.section}>
			<h2 className={styles.title}>
				Relive the memories I&apos;ve captured through my lens
			</h2>
			<motion.div
				className={styles.gallery}
				ref={ref}
				variants={gridContainerVariants}
				initial="hidden"
				animate={controls}>
				{images.map((image, index) => (
					<motion.div
						key={index}
						className={styles.galleryitem}
						variants={gridItemVariants}>
						<Image
							src={image}
							alt="Gallery Image"
							width={800}
							height={600}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className={styles.galleryimg}
							placeholder="blur"
							blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU"
						/>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Gallery;
