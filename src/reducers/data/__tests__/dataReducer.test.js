import reducer, { initialState } from '../'
import * as actions from "../../../actions/data"

const addSampleData = (initialState, dataName) => {
	const newState = reducer(initialState, {
		type: actions.ADD_DATA,
		dataName: dataName,
		dataObj: { someNewKey: "Some New Value" },
		dataOrder: ["some", "new", "order", "of", "data"],
		outOfData: true
	})

	const expectedState2 = {
		...initialState,
		[dataName] : {
			...initialState[dataName],
			obj : { ...(initialState[dataName].obj || {}), someNewKey: "Some New Value" },
			order : [...(initialState[dataName].order || []), "some", "new", "order", "of", "data"],
			outOfData : true
		}
	}

	return newState
}

const setSampleData = (initialState, dataName) => {
	const newState = reducer(initialState, {
		type: actions.SET_DATA,
		dataName: dataName,
		dataObj: { someKey: "Some Value" },
		dataOrder: ["some", "order", "of", "data"],
		outOfData: false
	})

	const expectedState = {
		...initialState,
		[dataName] : {
			...initialState[dataName],
			obj : { someKey: "Some Value" },
			order : ["some", "order", "of", "data"],
			outOfData : false
		}
	}
	
	expect(newState).toEqual(expectedState)

	return newState
}

const setSampleSearchField = (initialState, dataName) => {
	const newState = reducer(initialState, {
		type: actions.SET_DATA_SEARCH_FIELD,
		dataName: dataName,
		params: { some: "param" }
	})

	const expectedState = {
		...initialState,
		[dataName] : {
			...initialState[dataName],
			params: { some: "param" }
		}
	}
	
	expect(newState).toEqual(expectedState)

	return newState
}

const setSampleLoadingStatus = (initialState, dataName, status) => {
	const newState = reducer(initialState, {
		type: actions.SET_DATA_LOADING_STATUS,
		dataName: dataName,
		loading: status
	})

	const expectedState = {
		...initialState,
		[dataName] : {
			...initialState[dataName],
			loading: status
		}
	}
	
	expect(newState).toEqual(expectedState)

	return newState
}

const selectSampleDataItem = (initialState, dataName, dataId) => {
	const newState = reducer(initialState, {
		type: actions.SELECT_DATA_ITEM,
		dataName: dataName,
		dataId: dataId
	})

	const expectedState = {
		...initialState,
		[dataName] : {
			...initialState[dataName],
			selectedId: dataId
		}
	}
	
	expect(newState).toEqual(expectedState)

	return newState
}

const setSampleFirstDataItem = (initialState, dataName, dataItem) => {
	const newState = reducer(initialState, {
		type: actions.SET_DATA_FIRST_ITEM,
		dataName: dataName,
		item: dataItem
	})

	const expectedState = {
		...initialState,
		[dataName] : {
			...initialState[dataName],
			firstItem: dataItem
		}
	}
	
	expect(newState).toEqual(expectedState)

	return newState
}

describe('Data reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
 
	const testSetData = dataName => {
		it(`should handle SET_DATA on ${dataName}`, () => {
			const newState = setSampleData(initialState, dataName)

			const newState2 = reducer(newState, {
				type: actions.SET_DATA,
				dataName: dataName,
				dataObj: { someNewKey: "Some New Value" },
				dataOrder: ["some", "new", "order", "of", "data"],
				outOfData: true
			})

			const expectedState2 = {
				...newState,
				[dataName] : {
					...newState[dataName],
					obj : { someNewKey: "Some New Value" },
					order : ["some", "new", "order", "of", "data"],
					outOfData : true
				}
			}
			
			expect(newState2).toEqual(expectedState2)
		})
	}

	const testAddData = dataName => {
		it(`should handle ADD_DATA on ${dataName}`, () => {
			const newState = addSampleData(initialState, dataName)
			const newState2 = addSampleData(newState, dataName)

			expect(newState).not.toBe(newState2)
		})
	}

	const testSetSearchField = dataName => {
		it(`should handle SET_DATA_SEARCH_FIELD on ${dataName}`, () => {
			const newState = setSampleSearchField(initialState, dataName)
			const newState2 = setSampleData(newState, dataName) 
			const newState3 = setSampleSearchField(newState2, dataName) 
			
			expect(newState3[dataName].obj).not.toBe(undefined)
			expect(newState3[dataName].order).not.toBe(undefined)
			expect(newState3[dataName].outOfData).not.toBe(undefined)

		})
	}

	const testSetLoadingStatus = dataName => {
		it(`should handle SET_DATA_LOADING_STATUS on ${dataName}`, () => {
			const newState = setSampleLoadingStatus(initialState, dataName, true)
			const newState2 = setSampleData(newState, dataName) 
			const newState3 = setSampleLoadingStatus(newState2, dataName, false) 
			
			expect(newState3[dataName].obj).not.toBe(undefined)
			expect(newState3[dataName].order).not.toBe(undefined)
			expect(newState3[dataName].outOfData).not.toBe(undefined)
			
			const newState4 = setSampleLoadingStatus(newState3, dataName, true)
			const newState5 = setSampleLoadingStatus(newState4, dataName, false) 

			// newState5 should be unchanged from newState3
			// stringify so that we don't compare object references
			expect(JSON.stringify(newState5)).toBe(JSON.stringify(newState3))
			expect(JSON.stringify(newState5)).not.toBe(JSON.stringify(newState4))
		})
	}

	const testSetDataItem = dataName => {
		it(`should handle SELECT_DATA_ITEM on ${dataName}`, () => {
			const newState = selectSampleDataItem(initialState, dataName, 0)
			const newState2 = setSampleData(newState, dataName) 
			const newState3 = selectSampleDataItem(newState2, dataName, 1) 
			
			expect(newState3[dataName].obj).not.toBe(undefined)
			expect(newState3[dataName].order).not.toBe(undefined)
			expect(newState3[dataName].outOfData).not.toBe(undefined)
			
			const newState4 = selectSampleDataItem(newState3, dataName, 2)
			const newState5 = selectSampleDataItem(newState4, dataName, 1) 

			// newState5 should be unchanged from newState3
			// stringify so that we don't compare object references
			expect(JSON.stringify(newState5)).toBe(JSON.stringify(newState3))
			expect(JSON.stringify(newState5)).not.toBe(JSON.stringify(newState4))
		})
	}

	const testSetFirstDataItem = dataName => {
		it(`should handle SELECT_DATA_ITEM on ${dataName}`, () => {
			const newState = setSampleFirstDataItem(initialState, dataName, 0)
			const newState2 = setSampleData(newState, dataName) 
			const newState3 = setSampleFirstDataItem(newState2, dataName, 1) 
			
			expect(newState3[dataName].obj).not.toBe(undefined)
			expect(newState3[dataName].order).not.toBe(undefined)
			expect(newState3[dataName].outOfData).not.toBe(undefined)
			
			const newState4 = setSampleFirstDataItem(newState3, dataName, 2)
			const newState5 = setSampleFirstDataItem(newState4, dataName, 1) 

			// newState5 should be unchanged from newState3
			// stringify so that we don't compare object references
			expect(JSON.stringify(newState5)).toBe(JSON.stringify(newState3))
			expect(JSON.stringify(newState5)).not.toBe(JSON.stringify(newState4))
		})
	}

	describe("SET_DATA reducer", () => {
		testSetData("characters")
		testSetData("comics")
		testSetData("creators")
		testSetData("events")
		testSetData("series")
	})

	describe("ADD_DATA reducer", () => {
		testAddData("characters")
		testAddData("comics")
		testAddData("creators")
		testAddData("events")
		testAddData("series")
	})

	describe("SET_DATA_SEARCH_FIELD reducer", () => {
		testSetSearchField("characters")
		testSetSearchField("comics")
		testSetSearchField("creators")
		testSetSearchField("events")
		testSetSearchField("series")
	})

	describe("SET_DATA_LOADING_STATUS reducer", () => {
		testSetLoadingStatus("characters")
		testSetLoadingStatus("comics")
		testSetLoadingStatus("creators")
		testSetLoadingStatus("events")
		testSetLoadingStatus("series")
	})

	describe("SELECT_DATA_ITEM reducer", () => {
		testSetDataItem("characters")
		testSetDataItem("comics")
		testSetDataItem("creators")
		testSetDataItem("events")
		testSetDataItem("series")
	})

	describe("SET_DATA_FIRST_ITEM reducer", () => {
		testSetFirstDataItem("characters")
		testSetFirstDataItem("comics")
		testSetFirstDataItem("creators")
		testSetFirstDataItem("events")
		testSetFirstDataItem("series")
	})

	it("Is an unrecognised action", () => {
		const newState = reducer(initialState, {
			type: "SOME_INVALID_ACTION",
			dataName: "some data",
			dataObj: { someNewKey: "Some New Value" },
			dataOrder: ["some", "new", "order", "of", "data"]
		})
		
		expect(newState).toEqual(initialState)
	})


	
})