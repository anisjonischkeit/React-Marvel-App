import React from 'react'

import { DetailViewContainer } from "../DetailView"
import DetailViewComponent from '../../../components/detailView/DetailView';
import DetailItemProperties from '../../../components/detailView/DetailItemProperties';
import Detail from '../../../components/masterDetailView/Detail'

import { mount, shallow } from 'enzyme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"

describe("DetailViewContainer", () => {

  let { counter: historyPushCounter, callBack: historyPushCallback } = timesClickedSetup()
  let { counter: backClickCounter, callBack: backClickCallback } = timesClickedSetup()

  const fetchIndividualFns = {
    characters: timesClickedSetup(),
    comics: timesClickedSetup()
  }
  // let { counter: fetchIndividualCounter, callBack: fetchIndividualCallback } = timesClickedSetup()

  const component = mount(
    <MuiThemeProvider>
      <DetailViewContainer
        selectedId={123}
        dataObj={
          {
            123: {
              id: 123,
              thumbnail: {
                path: "http://testpath",
                extension: "png",
              },
              description: "Test 123 description",
              characters: {
                items: []
              },
              comics: {
                items: []
              }
            }
          }
        }
        firstItem={{
          124: {
            id: 124,
            thumbnail: {
              path: "http://testpath",
              extension: "png",
            },
            description: "Test 124 description",
            characters: {
              items: []
            },
            comics: {
              items: []
            }
          }
        }}
        history={ { push : historyPushCallback } }
        statNames={["characters", "comics"]}
        displayName="Test Display Name"
        handleBackClick={backClickCallback}
        titleFieldName="id"
        fetchIndividualDataItem={(dataName, _resourceURL) => fetchIndividualFns[dataName].callBack()}
      />
    </MuiThemeProvider>
  )

  const detailComponentProps = component.find(Detail).first().props()
  const itemProperties = component.find(DetailItemProperties).first().props().itemProperties

  describe("Callbacks", () => {
    // console.log(component.find(DetailItemProperties).exists())
    itemProperties.forEach((item, idx) => {
      expect(item.name).not.toBe(undefined)
      testCallback(`fetchIndividual callback for item ${idx + 1} (id ${idx})`, item.onClickHandler, fetchIndividualFns[item.name].counter, item.name)
    })

    it("called history push 10 times", () => {
      // should have called 5 times for each characters and comics
      expect(historyPushCounter.value).toBe(10)
    })

    testCallback("clicked backClickCallback", detailComponentProps.onBackClick, backClickCounter)
  })

  describe("Renders correctly", () => {
    it("renders displayName correctly", () => {
      expect(detailComponentProps.title).toBe("Test Display Name")
    })

    it("renders dataItem titles correctly", () => {
      expect(component.find(DetailViewComponent).first().props().title).toBe(123)
    })
  })

  describe("Returns null on bad input", () => {
    it("returns null element on selected id being null or dataObj being null", () => {
      let component = shallow(
        <DetailViewContainer />
      )
      expect(component.getElement()).toBe(null)

      component = shallow(
        <DetailViewContainer
          selectedId={1}
        />
      )
      expect(component.getElement()).toBe(null)

      component = shallow(
        <DetailViewContainer
          dataObj={1}
        />
      )
      expect(component.getElement()).toBe(null)

    })

    it("returns null element on selected id not being in dataObj or first item", () => {
      let component = shallow(
        <DetailViewContainer
          selectedId={1}
          dataObj={{
            2 : {},
            3 : {},
          }}
        />
      )
      expect(component.getElement()).toBe(null)

      component = shallow(
        <DetailViewContainer
          selectedId={1}
          dataObj={{
            2 : {},
            3 : {},
          }}
          firstItem={{
            4 : {}
          }}
        />
      )
      expect(component.getElement()).toBe(null)
    })
  })

})