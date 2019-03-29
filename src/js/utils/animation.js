import { digitsPadding } from './num'

const setDelay = time => {
	return (time === 0)? '': (' delay-' + digitsPadding(time, 2))
}

export { setDelay }
