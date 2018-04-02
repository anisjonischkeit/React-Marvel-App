export const testCallback = (testName, callBack, counterObj, ...args) => {
	it(testName, () => {
		expect(counterObj.value).toBe(0)
		callBack(...args)
		expect(counterObj.value).toBe(1)
		callBack(...args)
		expect(counterObj.value).toBe(2)
		callBack(...args)
		callBack(...args)
		callBack(...args)
		expect(counterObj.value).toBe(5)
	})
}

export const timesClickedSetup = () => {
	let timesClickedCounter = {
		value: 0,
	}
	timesClickedCounter.reset = () => { timesClickedCounter.value = 0 }

	const callBack = () => {
		timesClickedCounter["value"] += 1
	}

	return {
		counter: timesClickedCounter, 
		callBack: callBack
	}
}