export const testCallback = (testName, callBack, counterObj) => {
	it(testName, () => {
		expect(counterObj.value).toBe(0)
		callBack()
		expect(counterObj.value).toBe(1)
		callBack()
		expect(counterObj.value).toBe(2)
		callBack()
		callBack()
		callBack()
		expect(counterObj.value).toBe(5)
	})
}

export const timesClickedSetup = () => {
	let timesClickedCounter = {value: 0}
	const callBack = () => {
		timesClickedCounter["value"] += 1
	}

	return {
		counter: timesClickedCounter, 
		callBack: callBack
	}
}