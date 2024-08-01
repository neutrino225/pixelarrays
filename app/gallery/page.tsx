/** @format */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = Array.from({ length: 35 }, (_, index) => ({
	id: (index + 1).toString(),
	src: `/images/${index + 1}.JPG`,
	alt: `Gallery image ${index + 1}`,
	width: 800,
	height: 600,
}));

const Gallery = () => {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const selectedImage = images.find((img) => img.id === selectedId);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	if (loading)
		return (
			<div className="w-full h-screen flex justify-center items-center bg-zinc-950">
				<div className="w-full flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
					<span className="sr-only">Loading...</span>
					<div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
					<div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
					<div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
				</div>
			</div>
		);

	return (
		<section className="relative w-full min-h-screen p-5 md:p-24 bg-black/95">
			<div className="absolute top-5 left-5 bg-[#121212] shadow-md px-5 py-3 rounded-full">
				<Link
					href="/"
					className="text-zinc-200 flex gap-1 justify-center items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						viewBox="0 0 1024 1024">
						<path
							fill="currentColor"
							d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"></path>
						<path
							fill="currentColor"
							d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"></path>
					</svg>
					<p className="text-zinc-200">Back to homepage</p>
				</Link>
			</div>
			<div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-md:mt-20">
				{images.map((img, idx) => (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								duration: 0.8,
								delay: idx * 0.2,
							},
						}}
						key={img.id}
						layoutId={img.id}
						className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer"
						onClick={() => setSelectedId(img.id)}>
						<Image
							src={img.src}
							alt={img.alt}
							layout="fill"
							objectFit="cover"
							className="transition-transform duration-300 hover:scale-105"
						/>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						key="modal"
						className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-md max-md:p-5"
						animate={{
							transition: {
								duration: 0.5,
								ease: [0.76, 0, 0.24, 1],
							},
						}}
						onClick={() => setSelectedId(null)}>
						<motion.div
							layoutId={selectedImage.id}
							className="relative max-w-full max-h-full bg-transparent flex items-center justify-center"
							onClick={(e) => e.stopPropagation()}>
							<Image
								src={selectedImage.src}
								alt={selectedImage.alt}
								width={selectedImage.width}
								height={selectedImage.height}
								className="max-w-full max-h-[90vh] object-contain"
								layout="intrinsic" // Use intrinsic to respect image aspect ratio
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Gallery;
