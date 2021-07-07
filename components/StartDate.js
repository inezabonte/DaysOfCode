import { DatePicker } from "antd";

export default function StartDate(props) {
	return (
		<div className="h-screen text-gray-100 flex flex-col justify-center items-center text-center max-w-xl m-auto">
			<p className="m-10 font-bold text-xl">
				Congratulations on taking on this journey 🎊
			</p>
			<p className="m-10 font-bold text-base">When did you start?</p>
			<DatePicker />
			<button
				className="m-10 md:self-end bg-blue-800 px-4 py-2 rounded font-bold"
				onClick={props.nextStep}
			>
				Next
			</button>
		</div>
	);
}
