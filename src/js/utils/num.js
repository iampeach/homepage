const digitsPadding = (num, length) => {
	return ((num + '').length >= length)? num: digitsPadding('0' + num, length)
}

export { digitsPadding }
