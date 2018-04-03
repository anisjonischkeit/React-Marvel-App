import * as actions from '../index'
import { initialState } from '../../../reducers/data'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
 
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
 
const sampleData = {
  dataName: "characters",
  dataObj: { the: "actual", data: "1234 Data" },
  dataOrder: ["the", "data", "ordering"],
  outOfData: true,
  retrievalParams: {nameStartsWith: "Jon"},
  firstDataItem: { the: "actual", data: "item" },
  dataItemId: 7,
  dataLoadingStatus: false,
}

const sampleFetchMultiData = {
  "code":200,
  "status":"Ok",
  "copyright":"© 2018 MARVEL",
  "attributionText":"Data provided by Marvel. © 2018 MARVEL",
  "attributionHTML":"<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
  "etag":"",
  "data":{  
    "offset":0,
    "limit":8,
    "total":41475,
    "count":8,
    "results":[  
      {  
         "id":1220,
         "title":"Amazing Spider-Man 500 Covers Slipcase - Book II (Trade Paperback)",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/1220",
         "otherData":"SomeOtherData"
      },
      {  
         "id":59539,
         "title":"Doctor Strange (2015) #10 (Henderson Mighty Men Variant)",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/59539",
         "otherData":"SomeOtherData"
      },
      {  
         "id":16233,
         "title":"Cap Transport (2005) #13",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/16233",
         "otherData":"SomeOtherData"
      },
      {  
         "id":25321,
         "title":"Halo Chronicles (2009) #2",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/25321",
         "otherData":"SomeOtherData"
      },
      {  
         "id":21479,
         "title":"Ultimate X-Men (Spanish Language Edition) (2000) #1",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/21479",
         "otherData":"SomeOtherData"
      },
      {  
         "id":21468,
         "title":"Ultimate Spider-Man (Spanish Language Edition) (2000) #4",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/21468",
         "otherData":"SomeOtherData"
      },
      {  
         "id":37531,
         "title":"Magician: Apprentice Riftwar Saga (2010) #15",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/37531",
         "otherData":"SomeOtherData"
      },
      {  
         "id":37508,
         "title":"Official Marvel Universe Handbook (2009) #2",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/37508",
         "otherData":"SomeOtherData"
      },
     ]
  }
} 

const sampleFetchIndividualData = {
  "code":200,
  "status":"Ok",
  "copyright":"© 2018 MARVEL",
  "attributionText":"Data provided by Marvel. © 2018 MARVEL",
  "attributionHTML":"<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
  "etag":"",
  "data":{  
    "offset":0,
    "limit":8,
    "total":41475,
    "count":8,
    "results":[  
      {  
         "id":1220,
         "title":"Amazing Spider-Man 500 Covers Slipcase - Book II (Trade Paperback)",
         "resourceURI":"http://gateway.marvel.com/v1/public/comics/1220",
         "otherData":"SomeOtherData"
      },
     ]
  }
} 

describe('async actions', () => {
  const marvelUrl = dataName => `https://gateway.marvel.com:443/v1/public/${dataName}`
  
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
 
  const testFetchingDataLists = (testMsg, actionCreator, actionType) => {

    it(testMsg, () => {
      const store = mockStore({ data: initialState })

      fetchMock.getOnce("*", { body: sampleFetchMultiData, headers: { 'content-type': 'application/json' } })
   
      let dataObj = {};
      let dataOrder = [];
  
      sampleFetchMultiData.data.results.forEach(char => {
        dataObj[char.id] = char
        dataOrder.push(char.id)
      })
  
      const expectedActions = [
        { 
          type: actions.SET_DATA_LOADING_STATUS, 
          dataName: "characters", 
          loading: true
        },
        { 
          type: actionType, 
          dataName: sampleData.dataName, 
          dataObj: dataObj,
          dataOrder: dataOrder,
          outOfData: false
        },
        { 
          type: actions.SET_DATA_LOADING_STATUS, 
          dataName: "characters", loading: false 
        },
      ]
  
   
      return store.dispatch(actionCreator( sampleData.dataName ))
        .then(() => {
        // return of async actions
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  }

  testFetchingDataLists('creates SET_DATA when fetching initial data', actions.fetchInitialData, actions.SET_DATA)
  testFetchingDataLists('creates ADD_DATA when fetching more data', actions.fetchMoreData, actions.ADD_DATA)

  it("creates SELECT_DATA_ITEM when fetching an individual data item", () => {
    const store = mockStore({ data: initialState })

    fetchMock.getOnce("*", { body: sampleFetchIndividualData, headers: { 'content-type': 'application/json' } })
 
    let dataObj = {};
    let dataOrder = [];

    const expectedActions = [
      { 
        type: actions.SET_DATA_FIRST_ITEM, 
        dataName: sampleData.dataName, 
        item: sampleFetchIndividualData.data.results[0]
      },
      { 
        type: actions.SELECT_DATA_ITEM, 
        dataName: sampleData.dataName, 
        dataId: sampleFetchIndividualData.data.results[0].id
      },
    ]

 
    return store.dispatch(actions.fetchIndividualDataItem( sampleData.dataName ))
      .then(() => {
      // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})


 
describe('sync actions', () => {
  
  it('should create an action to set some marvel data', () => {
    const expectedAction = {
      type: actions.SET_DATA,
      dataName: sampleData.dataName,
      dataObj: sampleData.dataObj,
      dataOrder: sampleData.dataOrder,
      outOfData: sampleData.outOfData
    }
    
    const actualAction = actions.setData(
      sampleData.dataName, 
      sampleData.dataObj,
      sampleData.dataOrder,
      sampleData.outOfData
    )

    expect(actualAction).toEqual(expectedAction)
  })
  
  it('should create an action to add some marvel data', () => {
    const expectedAction = {
      type: actions.ADD_DATA,
      dataName: sampleData.dataName,
      dataObj: sampleData.dataObj,
      dataOrder: sampleData.dataOrder,
      outOfData: sampleData.outOfData
    }
    
    const actualAction = actions.addData(
      sampleData.dataName, 
      sampleData.dataObj,
      sampleData.dataOrder,
      sampleData.outOfData
    )
    expect(actualAction).toEqual(expectedAction)
  })
  
  it('should create an action that sets some parameters for retrieving data', () => {
    const expectedAction = {
      type: actions.SET_DATA_SEARCH_FIELD,
      dataName: sampleData.dataName,
      params: sampleData.retrievalParams,
    }
    
    const actualAction = actions.setDataRetrievalParams(
      sampleData.dataName,
      sampleData.retrievalParams
    )
    expect(actualAction).toEqual(expectedAction)
  })
  
  it('should create an action that sets a data item to be displayed first', () => {
    const expectedAction = {
      type: actions.SET_DATA_FIRST_ITEM,
      dataName: sampleData.dataName,
      item: sampleData.firstDataItem,
    }
    
    const actualAction = actions.setDataFirstItem(
      sampleData.dataName,
      sampleData.firstDataItem
    )
    expect(actualAction).toEqual(expectedAction)
  })
  
  it('should create an action that selects a data item to be displayed', () => {
    const expectedAction = {
      type: actions.SELECT_DATA_ITEM,
      dataName: sampleData.dataName,
      dataId: sampleData.dataItemId,
    }
    
    const actualAction = actions.selectDataItem(
      sampleData.dataName,
      sampleData.dataItemId
    )
    expect(actualAction).toEqual(expectedAction)
  })
  
  it('should create an action that sets the loading status of some data', () => {
    const expectedAction = {
      type: actions.SET_DATA_LOADING_STATUS,
      dataName: sampleData.dataName,
      loading: sampleData.dataLoadingStatus,
    }
    
    const actualAction = actions.setDataLoadingStatus(
      sampleData.dataName,
      sampleData.dataLoadingStatus
    )
    expect(actualAction).toEqual(expectedAction)
  })
})