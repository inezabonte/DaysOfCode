import { useState } from "react";
import StartDate from "../components/StartDate";
import SetTime from "../components/SetTime";
import Success from "../components/Success";

export default function signup() {
	const [step, setStep] = useState(1);
	const [form, setForm] = useState({
		startDate: "",
		reminderTime: "",
	});

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => setStep(count - 1);

	switch (step) {
		case 1:
			return <StartDate nextStep={nextStep} />;
		case 2:
			return <SetTime nextStep={nextStep} />;
		case 3:
			return <Success />;
	}
}
