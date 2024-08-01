/** @format */

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
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
}
