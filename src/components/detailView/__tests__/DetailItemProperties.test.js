import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render} from 'enzyme';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

import DetailItemProperties from '../DetailItemProperties';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




const sampleData = [
  {
    onClickHandler: (resourceUri) => undefined,
    "available": 47,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36763",
        "name": "Ant-Man & the Wasp (2010) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17553",
        "name": "Avengers (1998) #67"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7340",
        "name": "Avengers (1963) #87"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63217",
        "name": "Avengers and Power Pack (2017) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63218",
        "name": "Avengers and Power Pack (2017) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63219",
        "name": "Avengers and Power Pack (2017) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63220",
        "name": "Avengers and Power Pack (2017) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/64790",
        "name": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 2 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1170",
        "name": "Avengers Vol. 2: Red Zone (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1214",
        "name": "Avengers Vol. II: Red Zone (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12787",
        "name": "Captain America (1998) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7513",
        "name": "Captain America (1968) #132"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7514",
        "name": "Captain America (1968) #133"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65466",
        "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20367",
        "name": "Defenders (1972) #57"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31068",
        "name": "Incredible Hulks (2009) #606 (VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43944",
        "name": "Iron Man (2012) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9544",
        "name": "Iron Man (1968) #295"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9545",
        "name": "Iron Man (1968) #296"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9546",
        "name": "Iron Man (1968) #297"
      },
    ],
    "returned": 20,
    "name": "comics"
  },
  {
    onClickHandler: (resourceUri) => undefined,  
    "available":14,
    "collectionURI":"http:\/\/gateway.marvel.com\/v1\/public\/comics\/1689\/characters",
    "items":[  
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009156",
          "name":"Apocalypse"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009197",
          "name":"Blink"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009243",
          "name":"Colossus"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009313",
          "name":"Gambit"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009349",
          "name":"Holocaust (Age of Apocalypse)"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009417",
          "name":"Magneto"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009447",
          "name":"Mister Sinister"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009546",
          "name":"Rogue"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1010969",
          "name":"Sabretooth (Age of Apocalypse)"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1010975",
          "name":"Shadowcat (Age of Apocalypse)"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1010976",
          "name":"Silver Samurai (Age of Apocalypse)"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1010979",
          "name":"Storm (Age of Apocalypse)"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009636",
          "name":"Sunfire"
        },
        {  
          "resourceURI":"http:\/\/gateway.marvel.com\/v1\/public\/characters\/1009718",
          "name":"Wolverine"
        }
    ],
    "returned":14,
    "name": "characters"
  }
]


describe('DetailItemProperties', () => {

  let clickedResources = [[],[]]

  const props = sampleData.map((item, idx) => ({
    ...item,
    onClickHandler : (resourceUri) => {
      clickedResources[idx].push(resourceUri)
    }
  }))

  const itemProperties = mount(
    <MuiThemeProvider>
      <DetailItemProperties itemProperties={props}/>
    </MuiThemeProvider>
  );

  const propertyLists = itemProperties.find(Paper)

  describe("Renders Correctly", () => {

    const rendersListCorrectly = (listId) => {

      describe(`Renders list ${listId + 1} (id ${listId}) correctly`, () => {
        const listItems = propertyLists.at(listId).find(ListItem)
        
        it("Has the right amount of items", () => {
          expect(listItems.length).toBe(sampleData[listId].items.length)
        })
        
        it("Has the right data for each Item", () => {
          listItems.forEach((item, idx) => {
            expect(item.text()).toBe(sampleData[listId].items[idx].name)
          })
        })
        
      })

    }

    rendersListCorrectly(0)
    rendersListCorrectly(1)

  })

  describe("onClicks trigger Correctly", () => {
  
    const simulateClicks = (listNo) => {

      const noOfItemsInList = sampleData[listNo].items.length

      describe(`Clicks list ${listNo + 1} (id ${listNo} successfully`, () => {
        const listItems = propertyLists.at(listNo).find(ListItem)
      
        listItems.forEach(li => {
          li.props().onClick()
        })
  
        it("Should have triggered all onClicks", () => {
          expect(clickedResources[listNo].length).toBe(noOfItemsInList)
        })
        
        // since we never pass in duplicate resources, we should
        // not receive duplicate resourceURIs. If we do we are 
        // probably getting something weird in our handler 
        // (ie. null, undefined, "", or just the same uri over and
        // over again)
        it("no duplicate resourceURIs", () => {
          expect(new Set(clickedResources[listNo]).size).toBe(noOfItemsInList)
        })
      })
    }

    simulateClicks(0)
    simulateClicks(1)

  })
    



  // expect(checkbox.text()).toEqual('On');
});