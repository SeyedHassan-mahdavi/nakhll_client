export const mobilePhoneNumberRegex = (phoneNumber) => {
	return /^(\+98|0)?9\d{9}$/.test(phoneNumber) && phoneNumber.length === 11;
};

export const dateRegex = (date) => {
	return /^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/.test(date);
};

export const emailRegex = (email) => {
	// return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email);
};

export const numericRegex = (number) => {
	return /^\d+$/.test(number);
};

export const minLengthRegex = (value, length) => {
	return new RegExp(`^.{${length},}$`).test(value);
};

export const maxLengthRegex = (value, length) => {
	return new RegExp(`^.{0,${length}}$`).test(value);
};

export const urlRegex = (url) => {
	return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(url);
};

export const urlWithOutProtocolRegex = (url) => {
	return /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(url);
};

export const latinRegex = (value) => {
	return /^[A-Za-z][A-Za-z0-9]*$/.test(value);
};

export const iranianNationalIdRegex = (nationalId) => {
	if (!nationalId) return false;
	else {
		let code = nationalId.toString();

		if (!code.match(/^\d{10}$/)) return false;
		code = ("0000" + code).substr(code.length + 4 - 10);

		if (parseInt(code.substr(3, 6), 10) === 0) return false;

		const lastNumber = parseInt(code.substr(9, 1), 10);
		let sum = 0;

		for (let i = 0; i < 9; i++) {
			sum += parseInt(code.substr(i, 1), 10) * (10 - i);
		}

		sum = sum % 11;

		return (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum);
	}
};

export const imageFormatRegex = (image) => {
	return /.*\.(gif|jpe?g|tiff?|png|webp|bmp)$/.test(image);
};

export const persianCharacterRegex = (value) => {
	var characterRange = [
		"[\u06A9\u06AF\u06C0\u06CC\u060C",
		"\u062A\u062B\u062C\u062D\u062E\u062F",
		"\u063A\u064A\u064B\u064C\u064D\u064E",
		"\u064F\u067E\u0670\u0686\u0698\u200C",
		"\u0621-\u0629\u0630-\u0639\u0641-\u0654]",
	].join("");

	return new RegExp(`^${characterRange}+$`).test(value);
};