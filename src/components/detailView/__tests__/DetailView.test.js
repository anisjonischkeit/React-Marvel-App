import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailView from "../DetailView"
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import { getSampleChildren, testRendersChildren } from "../../../testUtils/sampleChildren"

describe('DetailView', () => {
  describe("Renders correctly", () => {
		const detailViewProps = {
			title: "My Test Title",
			subtitle: "My Test SubTitle",
			img: "http://sampleImgUrl.com",
		}

    const itemProperties = mount(
      (<MuiThemeProvider>
				<DetailView
					{...detailViewProps}
				>
					{getSampleChildren()}
				</DetailView>
      </MuiThemeProvider>)
		);
		
		describe("Renders correctly", () => {
			const cardTitleElement = itemProperties.find(CardTitle).find("span")
			
			it("Renders Title", () => {
				const titleElement = cardTitleElement.first()
				expect(titleElement.text()).toBe(detailViewProps.title)
			})
			
			it("Renders SubTitle", () => {
				const subtitleElement = cardTitleElement.at(1)
				expect(subtitleElement.text()).toBe(detailViewProps.subtitle)
			})

			it("Renders Image", () => {
				const imgElement = itemProperties.find("img")
				expect(imgElement.props().src).toBe(detailViewProps.img)
			})
	
			testRendersChildren(itemProperties)
	
		})
	})
	
})