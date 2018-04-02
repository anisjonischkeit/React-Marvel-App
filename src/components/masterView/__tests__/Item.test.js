import React from 'react';
import { mount } from 'enzyme';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Item from "../Item"
import { ListItem as MaterialListItem } from 'material-ui/List';
import { testCallback, timesClickedSetup } from "../../../testUtils/testCallback"
import { getSampleChildren, testRendersChildren } from "../../../testUtils/sampleChildren"

describe("Item Component", () => {
	const { counter, callBack: menuClickCallback } = timesClickedSetup()

	const activeListItemComponent = mount(
		(<MuiThemeProvider>
			<Item
				id="testID"
				active={true}
				img="test img url"
				heading="Test Heading"
				subheading="Test Subheading"
				selectItem={_ => menuClickCallback()}
			/>
		</MuiThemeProvider>)
	)

	const inactiveListItemComponent = mount(
		(<MuiThemeProvider>
			<Item
				id="testID"
				active={false}
				img="test img url"
				heading="Test Heading"
				subheading="Test Subheading"
				selectItem={_ => menuClickCallback()}
			/>
		</MuiThemeProvider>)
	)

	testCallback("selectItem Callback is called", activeListItemComponent.find(MaterialListItem).props().onClick, counter)
	
	it("Renders image", () => {
		const image = activeListItemComponent.find("img")
		expect(image.props().src).toBe("test img url")
	})
	
	it("Renders heading", () => {
		const heading = activeListItemComponent.find("div").at(3)
		expect(heading.text()).toBe("Test Heading")
	})

	it("Renders subheading", () => {
	const subheading = activeListItemComponent.find("p").first()
		expect(subheading.text()).toBe("Test Subheading")
	})

	it("Shows active color", () => {
		const styledElement = activeListItemComponent.find("span").first()
		expect(styledElement.props().style.backgroundColor).toBe("rgba(0, 0, 0, 0.2)")
	})

	it("Shows no color on inactive", () => {
		const styledElement = inactiveListItemComponent.find("span").first()
		expect(styledElement.props().style.backgroundColor).toBe(null)
	})
})