/** @format */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4, // Corrected typo here
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
		y: 20, // Optional: Add some y-axis movement for entry
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const linkVariants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		// y: 100, // Optional: Add some y-axis movement for entry
	},
	visible: {
		opacity: 1,
		// y: 0,
		transition: {
			duration: 1,
		},
	},
};

const Hero = () => {
	return (
		<section className="relative h-screen flex flex-col justify-center gap-16 items-center p-10 md:p-24 overflow-hidden bg-gradient-overlay">
			<motion.div
				className="relative flex flex-col justify-center items-center gap-4 text-white mx-auto w-full md:w-3/4"
				variants={containerVariants}
				initial="hidden"
				animate="visible">
				<motion.h1
					className="text-3xl md:text-6xl font-semibold"
					variants={textVariants}>
					Capturing Moments, Creating Memories
				</motion.h1>
				<motion.p
					className="text-lg md:text-2xl text-pretty"
					variants={textVariants}>
					Through my lens, I capture the essence of life, from captivating
					landscapes to emotive portraits. Join me on this visual journey as I
					showcase my passion for photography and share moments frozen in time.
				</motion.p>
			</motion.div>

			<div className="relative w-full z-10 flex justify-center items-center mx-auto md:w-3/4">
				<motion.div
					variants={linkVariants}
					whileHover="hover"
					initial="hidden"
					animate="visible"
					className="inline-block">
					<Link
						href="/gallery"
						className="px-5 py-2 md:px-7 md:py-3 border rounded-full bg-white">
						View Gallery
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
