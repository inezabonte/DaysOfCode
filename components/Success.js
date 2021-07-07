import Image from "next/image";

export default function Success() {
	return (
		<div className="h-screen text-gray-100 flex flex-col justify-center items-center text-center max-w-xl m-auto">
			<p className="text-xl font-bold m-10">Account created successfully 🎉</p>
			<Image src="/images/tick.svg" width={128} height={128} />
			<button className="bg-green-600 px-4 py-2 rounded font-bold m-10 md:self-end">
				Continue
			</button>
		</div>
	);
}
