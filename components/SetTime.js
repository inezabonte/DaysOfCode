import { TimePicker } from "antd";
import moment from "moment";
export default function SetTime(props) {
	const format = "HH:mm";

	return (
		<div className="h-screen flex flex-col text-gray-100 justify-center items-center max-w-xl m-auto">
			<p className="text-xl font-bold m-10">
				Would you like to set up a daily reminder?
			</p>
			<TimePicker defaultValue={moment("12:08", format)} format={format} />
			<button
				className="m-10 md:self-end bg-blue-800 px-4 py-2 rounded font-bold"
				onClick={props.nextStep}
			>
				Submit
			</button>
		</div>
	);
}
