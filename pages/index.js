import { TwitterOutlined } from "@ant-design/icons";

export default function index() {
	return (
		<div className="h-screen text-gray-100 flex flex-col justify-center text-center items-center">
			<p className="font-bold text-2xl m-10">
				Welcome to the #100DaysOfCode challenge
			</p>
			<p className="text-xl m-10">
				Sign in with your twitter account to get daily reminders to code.
			</p>
			<button className="bg-blue-400 p-2 font-bold m-4 rounded border-none flex items-center">
				<TwitterOutlined className="text-2xl pr-2" />
				Sign in with Twitter
			</button>
		</div>
	);
}
