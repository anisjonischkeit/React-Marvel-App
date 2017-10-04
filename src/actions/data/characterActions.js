import marvelFetch from 'utils/marvelFetch'


export const GET_CHARACTERS = 'GET_CHARACTERS';
export const SET_CHARACTER_LOADING_STATUS = 'SET_CHARACTER_LOADING_STATUS';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export const getCharacters = (characterObj: any, characterOrder: Array<string>) => ({
	type: GET_CHARACTERS,
	characterObj,
	characterOrder
})

export const selectCharacter = (characterId: ?number) => ({
	type: SELECT_CHARACTER,
	characterId
})

export const setCharactersLoadingStatus = (loading: boolean) => ({
	type: SET_CHARACTER_LOADING_STATUS,
	loading
})

export const fetchCharacters = (offset: number) => async (dispatch, getState) => {
	if (!getState().data.characters.loading) {
		dispatch(setCharactersLoadingStatus(true))

		const characters = (await marvelFetch('https://gateway.marvel.com:443/v1/public/characters')).results
		
		let characterObj = {};
		let charOrder = [];

		characters.forEach(char => {
			characterObj[char.id] = char
			charOrder.push(char.id)
		})

		dispatch(getCharacters(characterObj, charOrder))
		dispatch(setCharactersLoadingStatus(false))
	}

}

	// export const fetchCharacters = (offset: number) => (dispatch, getState) => {
// 	if (!getState().data.characters.loading) {
// 		dispatch(setCharactersLoadingStatus(true))

// 		const fakeCharacters = [
// 			{
// 				"id": 1011334,
// 				"name": "3-D Man",
// 				"description": "",
// 				"modified": "2014-04-29T14:18:17-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
// 				"comics": {
// 					"available": 12,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
// 							"name": "Avengers: The Initiative (2007) #14"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
// 							"name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
// 							"name": "Avengers: The Initiative (2007) #15"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
// 							"name": "Avengers: The Initiative (2007) #16"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
// 							"name": "Avengers: The Initiative (2007) #17"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
// 							"name": "Avengers: The Initiative (2007) #18"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
// 							"name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
// 							"name": "Avengers: The Initiative (2007) #19"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
// 							"name": "Deadpool (1997) #44"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
// 							"name": "Marvel Premiere (1972) #35"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
// 							"name": "Marvel Premiere (1972) #36"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
// 							"name": "Marvel Premiere (1972) #37"
// 						}
// 					],
// 					"returned": 12
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
// 							"name": "Avengers: The Initiative (2007 - 2010)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
// 							"name": "Deadpool (1997 - 2002)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
// 							"name": "Marvel Premiere (1972 - 1981)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 21,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
// 							"name": "Cover #19947",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
// 							"name": "The 3-D Man!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
// 							"name": "Cover #19949",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19950",
// 							"name": "The Devil's Music!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
// 							"name": "Cover #19951",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
// 							"name": "Code-Name:  The Cold Warrior!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/47184",
// 							"name": "AVENGERS: THE INITIATIVE (2007) #14",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
// 							"name": "Avengers: The Initiative (2007) #14 - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/47498",
// 							"name": "AVENGERS: THE INITIATIVE (2007) #15",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
// 							"name": "Avengers: The Initiative (2007) #15 - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
// 							"name": "AVENGERS: THE INITIATIVE (2007) #16",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
// 							"name": "Avengers: The Initiative (2007) #16 - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/48361",
// 							"name": "AVENGERS: THE INITIATIVE (2007) #17",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
// 							"name": "Avengers: The Initiative (2007) #17 - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/49103",
// 							"name": "AVENGERS: THE INITIATIVE (2007) #18",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
// 							"name": "Avengers: The Initiative (2007) #18 - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
// 							"name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
// 							"name": "AVENGERS: THE INITIATIVE (2007) #19",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
// 							"name": "Avengers: The Initiative (2007) #19 - Int",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
// 							"name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/269",
// 							"name": "Secret Invasion"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1017100,
// 				"name": "A-Bomb (HAS)",
// 				"description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
// 				"modified": "2013-09-18T15:54:04-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/105929",
// 							"name": "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
// 							"type": "cover"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1009144,
// 				"name": "A.I.M.",
// 				"description": "AIM is a terrorist organization bent on destroying the world.",
// 				"modified": "2013-10-17T14:41:30-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
// 				"comics": {
// 					"available": 39,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/36763",
// 							"name": "Ant-Man & the Wasp (2010) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17553",
// 							"name": "Avengers (1998) #67"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/7340",
// 							"name": "Avengers (1963) #87"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/63217",
// 							"name": "Avengers and Power Pack (2017) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/63218",
// 							"name": "Avengers and Power Pack (2017) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/63219",
// 							"name": "Avengers and Power Pack (2017) #5"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/63220",
// 							"name": "Avengers and Power Pack (2017) #6"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1170",
// 							"name": "Avengers Vol. 2: Red Zone (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1214",
// 							"name": "Avengers Vol. II: Red Zone (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/12787",
// 							"name": "Captain America (1998) #28"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/7513",
// 							"name": "Captain America (1968) #132"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/7514",
// 							"name": "Captain America (1968) #133"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20367",
// 							"name": "Defenders (1972) #57"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/31068",
// 							"name": "Incredible Hulks (2009) #606 (VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/36737",
// 							"name": "Marvel Adventures Super Heroes (2010) #16"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2110",
// 							"name": "Marvel Masterworks: Captain America Vol. (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1130",
// 							"name": "Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2319",
// 							"name": "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2820",
// 							"name": "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2001",
// 							"name": "Marvel Masterworks: The Invincible Iron Man Vol. (Hardcover)"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"series": {
// 					"available": 25,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/13082",
// 							"name": "Ant-Man & the Wasp (2010 - 2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/354",
// 							"name": "Avengers (1998 - 2004)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
// 							"name": "Avengers (1963 - 1996)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
// 							"name": "Avengers and Power Pack (2017)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/227",
// 							"name": "Avengers Vol. 2: Red Zone (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/271",
// 							"name": "Avengers Vol. II: Red Zone (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
// 							"name": "Captain America (1968 - 1996)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1997",
// 							"name": "Captain America (1998 - 2002)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
// 							"name": "Defenders (1972 - 1986)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
// 							"name": "Incredible Hulks (2009 - 2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/9718",
// 							"name": "Marvel Adventures Super Heroes (2010 - 2012)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1506",
// 							"name": "Marvel Masterworks: Captain America Vol. (2005)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/189",
// 							"name": "Marvel Masterworks: Captain America Vol. 1 - 2nd Edition (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1468",
// 							"name": "Marvel Masterworks: Doctor Strange Vol. (2005)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1494",
// 							"name": "Marvel Masterworks: The Invincible Iron Man Vol. (2005)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3300",
// 							"name": "Marvel Masterworks: The Invincible Iron Man Vol. 1 (0000 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/222",
// 							"name": "Marvel Masterworks: The Silver Surfer Vol. 2 (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/17547",
// 							"name": "Secret Avengers (2013 - 2014)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2076",
// 							"name": "Strange Tales (1951 - 1968)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2079",
// 							"name": "Tales of Suspense (1959 - 1968)"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"stories": {
// 					"available": 39,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/10253",
// 							"name": "When the Unliving Strike",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/10255",
// 							"name": "Cover #10255",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/10256",
// 							"name": "The Enemy Within!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/10259",
// 							"name": "Death Before Dishonor!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/10261",
// 							"name": "Cover #10261",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/10262",
// 							"name": "The End of A.I.M.!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11921",
// 							"name": "The Red Skull Lives!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11930",
// 							"name": "He Who Holds the Cosmic Cube",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11936",
// 							"name": "The Maddening Mystery of the Inconceivable Adaptoid!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11981",
// 							"name": "If This Be... Modok",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11984",
// 							"name": "A Time to Die -- A Time to Live!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11995",
// 							"name": "At the Mercy of the Maggia",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/15243",
// 							"name": "Look Homeward, Avenger",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17518",
// 							"name": "Captain America (1968) #132",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17519",
// 							"name": "The Fearful Secret of Bucky Barnes",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17520",
// 							"name": "Captain America (1968) #133",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17521",
// 							"name": "Madness In the Slums",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28233",
// 							"name": "In Sin Airy X",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28971",
// 							"name": "[The Brothers Part I]",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/34426",
// 							"name": "The Red Skull Lives!",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1010699,
// 				"name": "Aaron Stack",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1010699",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/stories",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1009146,
// 				"name": "Abomination (Emil Blonsky)",
// 				"description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
// 				"modified": "2012-03-20T12:32:12-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1009146",
// 				"comics": {
// 					"available": 45,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17547",
// 							"name": "Avengers (1998) #61"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17548",
// 							"name": "Avengers (1998) #62"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1098",
// 							"name": "Avengers Vol. 1: World Trust (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8557",
// 							"name": "Earth X (1999) #7"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
// 							"name": "Earth X (New (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/59511",
// 							"name": "Marvel Cinematic Universe Guidebook: The Avengers Initiative (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20863",
// 							"name": "Hulk (2008) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/23677",
// 							"name": "Hulk Vol. 1: Red Hulk (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2499",
// 							"name": "Hulk: Destruction (2005) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14424",
// 							"name": "Incredible Hulk (1999) #24"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14425",
// 							"name": "Incredible Hulk (1999) #25"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14428",
// 							"name": "Incredible Hulk (1999) #28"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14450",
// 							"name": "Incredible Hulk (1999) #50"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14451",
// 							"name": "Incredible Hulk (1999) #51"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8948",
// 							"name": "Incredible Hulk (1962) #137"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/9006",
// 							"name": "Incredible Hulk (1962) #195"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/9007",
// 							"name": "Incredible Hulk (1962) #196"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/9125",
// 							"name": "Incredible Hulk (1962) #314"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/9193",
// 							"name": "Incredible Hulk (1962) #382"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/9194",
// 							"name": "Incredible Hulk (1962) #383"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"series": {
// 					"available": 25,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/354",
// 							"name": "Avengers (1998 - 2004)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/158",
// 							"name": "Avengers Vol. 1: World Trust (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/378",
// 							"name": "Earth X (1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
// 							"name": "Earth X (New (2006)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
// 							"name": "Hulk (2008 - 2012)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/6831",
// 							"name": "Hulk Vol. 1: Red Hulk (2009 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/924",
// 							"name": "Hulk: Destruction (2005)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
// 							"name": "Incredible Hulk (1962 - 1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/465",
// 							"name": "Incredible Hulk (1999 - 2008)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2983",
// 							"name": "Incredible Hulk Annual (1968 - 1994)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/212",
// 							"name": "Incredible Hulk Vol. 4: Abominable (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/244",
// 							"name": "Incredible Hulk Vol. IV: Abominable (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
// 							"name": "Incredible Hulks (2009 - 2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2572",
// 							"name": "Iron Man (1998 - 2004)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/977",
// 							"name": "Irredeemable Ant-Man (2006 - 2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2423",
// 							"name": "Irredeemable Ant-Man Vol. 1: Low-Life (2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3722",
// 							"name": "Killraven (2002 - 2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2437",
// 							"name": "Killraven Premiere (2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/21675",
// 							"name": "Marvel Cinematic Universe Guidebook: The Avengers Initiative (2017)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1671",
// 							"name": "Marvel Masterworks: The Incredible Hulk Vol.3 (2006)"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"stories": {
// 					"available": 41,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/4946",
// 							"name": "4 of 4 - 4XLS",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/5496",
// 							"name": "Irredeemable Ant-Man (2006) #1",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/12370",
// 							"name": "Cover #12370",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/12372",
// 							"name": "Whosoever Harms the Hulk..!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18419",
// 							"name": "[none]",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18420",
// 							"name": "The Stars Mine Enemy",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18537",
// 							"name": "Warfare In Wonderland!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18539",
// 							"name": "The Abomination Proclamation!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18776",
// 							"name": "Cover #18776",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18914",
// 							"name": "Moving On",
// 							"type": ""
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18916",
// 							"name": "Green Canard",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18918",
// 							"name": "Small Talk",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19024",
// 							"name": "Shades of Green",
// 							"type": ""
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19081",
// 							"name": "Who Shall Fear The Green Goliath?",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19082",
// 							"name": "Last Legs",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19119",
// 							"name": "The Great Astonishment - Chapter One: Auld Lang Syne",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19122",
// 							"name": "The Great Astonishment - Chapter Two: The Edge of Universal Pain",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19124",
// 							"name": "The Strangest Story Of All Time!!",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19125",
// 							"name": "The Great Astonishment - Conclusion: It's All True!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/24932",
// 							"name": "Earth X Chapter Seven",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 2,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/296",
// 							"name": "Chaos War"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/253",
// 							"name": "Infinity Gauntlet"
// 						}
// 					],
// 					"returned": 2
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1016823,
// 				"name": "Abomination (Ultimate)",
// 				"description": "",
// 				"modified": "2012-07-10T19:11:52-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1016823",
// 				"comics": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/15717",
// 							"name": "Ultimate X-Men (2000) #26"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1151",
// 							"name": "Ultimate X-Men Vol. 6: Return of the King (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1186",
// 							"name": "Ultimate X-Men Vol. VI: Return of the King (Trade Paperback)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/474",
// 							"name": "Ultimate X-Men (2000 - 2009)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/210",
// 							"name": "Ultimate X-Men Vol. 6: Return of the King (2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/243",
// 							"name": "Ultimate X-Men Vol. VI: Return of the King (2003)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/31883",
// 							"name": "Free Preview of THE INCREDIBLE HULK #50",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1009148,
// 				"name": "Absorbing Man",
// 				"description": "",
// 				"modified": "2013-10-24T14:32:08-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1009148",
// 				"comics": {
// 					"available": 53,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/43507",
// 							"name": "A+X (2012) #8"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/7045",
// 							"name": "Avengers (1963) #183"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/7046",
// 							"name": "Avengers (1963) #184"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/7142",
// 							"name": "Avengers (1963) #270"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/36481",
// 							"name": "Avengers Academy (2010) #16"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/36480",
// 							"name": "Avengers Academy (2010) #17"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/36479",
// 							"name": "Avengers Academy (2010) #18"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/36484",
// 							"name": "Avengers Academy (2010) #19"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/6935",
// 							"name": "Avengers Annual (1967) #20"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/63662",
// 							"name": "Black Bolt (2017) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/64278",
// 							"name": "Black Bolt (2017) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/12783",
// 							"name": "Captain America (1998) #24"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20427",
// 							"name": "Dazzler (1981) #18"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20428",
// 							"name": "Dazzler (1981) #19"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8499",
// 							"name": "Deadpool (1997) #43"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/41433",
// 							"name": "Fear Itself (2010) #2 (3rd Printing Variant)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/38452",
// 							"name": "Fear Itself: Fellowship of Fear (2011) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/39848",
// 							"name": "Fear Itself: The Worthy (2011) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/40977",
// 							"name": "Fear Itself: The Worthy (2011) #7"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/55857",
// 							"name": "Illuminati (2015) #7"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"series": {
// 					"available": 37,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
// 							"name": "A+X (2012 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
// 							"name": "Avengers (1963 - 1996)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
// 							"name": "Avengers Academy (2010 - 2012)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
// 							"name": "Avengers Annual (1967 - 1994)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/23121",
// 							"name": "Black Bolt (2017 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1997",
// 							"name": "Captain America (1998 - 2002)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3745",
// 							"name": "Dazzler (1981 - 1986)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
// 							"name": "Deadpool (1997 - 2002)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/13691",
// 							"name": "Fear Itself (2010 - 2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/13857",
// 							"name": "Fear Itself: Fellowship of Fear (2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/13827",
// 							"name": "Fear Itself: The Worthy (2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/20084",
// 							"name": "Heroes for Hire (1997 - 1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/20552",
// 							"name": "Illuminati (2015 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
// 							"name": "Incredible Hulk (1962 - 1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/9924",
// 							"name": "Iron Man 2.0 (2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2032",
// 							"name": "Journey Into Mystery (1952 - 1966)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/926",
// 							"name": "Marvel Adventures Fantastic Four (2005 - 2009)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1959",
// 							"name": "Marvel Adventures Fantastic Four Vol. 5: All 4 One, 4 for All (2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/14492",
// 							"name": "Marvel Masterworks: The Mighty Thor Vol. 3 (2011 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/14491",
// 							"name": "Marvel Masterworks: The Mighty Thor Vol. 3 Variant (DM Only) (2011 - Present)"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"stories": {
// 					"available": 53,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/4988",
// 							"name": "1 of 1",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/7866",
// 							"name": "Punisher War Journal (2006) #4",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/11028",
// 							"name": "Journey Into Mystery (1952) #122",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/14628",
// 							"name": "Avengers (1963) #183",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/14630",
// 							"name": "Avengers (1963) #184",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/14823",
// 							"name": "Avengers (1963) #270",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/16688",
// 							"name": "Thor (1966) #206",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/16691",
// 							"name": "Thor (1966) #207",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17049",
// 							"name": "Thor (1966) #375",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17050",
// 							"name": "Shadows of the Past",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17051",
// 							"name": "Heroes Always Win...Don't They?",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17342",
// 							"name": "Cover #17342",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/17412",
// 							"name": "A Wing and a Prayer",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18670",
// 							"name": "Encounter On Easter Island!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/21604",
// 							"name": "Secret Wars (1984) #6",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/21606",
// 							"name": "Secret Wars (1984) #7",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/26016",
// 							"name": "Paradise X Issue 0",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/26025",
// 							"name": "Cover #26025",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28708",
// 							"name": "The Hunted Part 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/31596",
// 							"name": "",
// 							"type": "pinup"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 4,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/238",
// 							"name": "Civil War"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/302",
// 							"name": "Fear Itself"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/270",
// 							"name": "Secret Wars"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/273",
// 							"name": "Siege"
// 						}
// 					],
// 					"returned": 4
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1009149,
// 				"name": "Abyss",
// 				"description": "",
// 				"modified": "2014-04-29T14:10:43-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1009149",
// 				"comics": {
// 					"available": 8,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13943",
// 							"name": "Uncanny X-Men (1963) #402"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13945",
// 							"name": "Uncanny X-Men (1963) #404"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13946",
// 							"name": "Uncanny X-Men (1963) #405"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13947",
// 							"name": "Uncanny X-Men (1963) #406"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13970",
// 							"name": "Uncanny X-Men (1963) #429"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13972",
// 							"name": "Uncanny X-Men (1963) #431"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/12386",
// 							"name": "X-Men: Alpha (1995) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2539",
// 							"name": "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)"
// 						}
// 					],
// 					"returned": 8
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
// 							"name": "Uncanny X-Men (1963 - 2011)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2104",
// 							"name": "X-Men: Alpha (1995)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1583",
// 							"name": "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 8,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/26281",
// 							"name": "A Beginning",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28352",
// 							"name": "Utility of Myth",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28356",
// 							"name": "Army Ants",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28358",
// 							"name": "Ballroom Blitzkrieg",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28360",
// 							"name": "Staring Contests are for Suckers",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28407",
// 							"name": "The Draco Part One: Sins of the Father",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28411",
// 							"name": "The Draco Part Three",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28413",
// 							"name": "The Draco Part Four",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 8
// 				},
// 				"events": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/227",
// 							"name": "Age of Apocalypse"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1010903,
// 				"name": "Abyss (Age of Apocalypse)",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1010903",
// 				"comics": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/18099",
// 							"name": "Weapon X (1995) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/12386",
// 							"name": "X-Men: Alpha (1995) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2539",
// 							"name": "X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3635",
// 							"name": "Weapon X (1995)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2104",
// 							"name": "X-Men: Alpha (1995)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1583",
// 							"name": "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 2,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/26280",
// 							"name": "X-Men: Alpha (1994) #1",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/38448",
// 							"name": "X-Facts",
// 							"type": ""
// 						}
// 					],
// 					"returned": 2
// 				},
// 				"events": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/227",
// 							"name": "Age of Apocalypse"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011266,
// 				"name": "Adam Destine",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011266",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/stories",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/2902/adam_destine?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011266/adam_destine?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1010354,
// 				"name": "Adam Warlock",
// 				"description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
// 				"modified": "2013-08-07T13:49:06-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1010354",
// 				"comics": {
// 					"available": 128,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17271",
// 							"name": "Annihilation: Conquest (2007) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17405",
// 							"name": "Annihilation: Conquest (2007) #2"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17645",
// 							"name": "Annihilation: Conquest (2007) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20686",
// 							"name": "Annihilation: Conquest (2007) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20885",
// 							"name": "Annihilation: Conquest (2007) #5"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/21016",
// 							"name": "Annihilation: Conquest (2007) #6"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/12412",
// 							"name": "Avengers Forever (1998) #9"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1033",
// 							"name": "Avengers Legends Vol. I: Avengers Forever (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20731",
// 							"name": "Clandestine Classic Premiere (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20187",
// 							"name": "Doctor Strange, Sorcerer Supreme (1988) #27"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20193",
// 							"name": "Doctor Strange, Sorcerer Supreme (1988) #32"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/20197",
// 							"name": "Doctor Strange, Sorcerer Supreme (1988) #36"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8552",
// 							"name": "Earth X (1999) #2"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8550",
// 							"name": "Earth X (1999) #11"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
// 							"name": "Earth X (New (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/12975",
// 							"name": "Fantastic Four (1961) #172"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/13195",
// 							"name": "Fantastic Four (1961) #370"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/25305",
// 							"name": "Guardians of the Galaxy (2008) #17"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/60678",
// 							"name": "Guardians of The Galaxy: Road to Annihilation Vol. 2 (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/8988",
// 							"name": "Incredible Hulk (1962) #177"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"series": {
// 					"available": 56,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3061",
// 							"name": "Annihilation: Conquest (2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
// 							"name": "Avengers Forever (1998 - 2001)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/93",
// 							"name": "Avengers Legends Vol. I: Avengers Forever (2002)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3874",
// 							"name": "Clandestine Classic Premiere (2008)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
// 							"name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/378",
// 							"name": "Earth X (1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
// 							"name": "Earth X (New (2006)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
// 							"name": "Fantastic Four (1961 - 1998)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/4885",
// 							"name": "Guardians of the Galaxy (2008 - 2010)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/22422",
// 							"name": "Guardians of The Galaxy: Road to Annihilation Vol. 2 (2017)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
// 							"name": "Incredible Hulk (1962 - 1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2983",
// 							"name": "Incredible Hulk Annual (1968 - 1994)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/6673",
// 							"name": "Infinity Crusade (1993)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/6449",
// 							"name": "Infinity Crusade Vol. 1 (2008 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2023",
// 							"name": "Infinity Gauntlet (1991)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2024",
// 							"name": "Infinity War (1992)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2039",
// 							"name": "Marvel Comics Presents (1988 - 1995)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1697",
// 							"name": "Marvel Comics Presents: Wolverine Vol. 4 (2006)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/22323",
// 							"name": "Marvel Masterworks: The Avengers Vol. 17 (2017)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1837",
// 							"name": "Marvel Masterworks: Warlock Vol. (2007)"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"stories": {
// 					"available": 149,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/1412",
// 							"name": "Cover #1412",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/1602",
// 							"name": "Cover #1602",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/1800",
// 							"name": "Cover #1800",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/1842",
// 							"name": "Cover #1842",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/12569",
// 							"name": "Cry, the Bedeviled Planet!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/13121",
// 							"name": "Forever Evil",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18500",
// 							"name": "Peril of the Paired Planets",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18501",
// 							"name": "Peril of the Paired Planets",
// 							"type": ""
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/18503",
// 							"name": "Triumph On Terra-Two",
// 							"type": ""
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19847",
// 							"name": "Cover #19847",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19848",
// 							"name": "Performance",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19859",
// 							"name": "Days of Future Present Part 4",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19860",
// 							"name": "You Must Remember This",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19883",
// 							"name": "The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19884",
// 							"name": "The Saga of Storm: Goddess of Thunder",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19885",
// 							"name": "There's No Place Like Home",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19887",
// 							"name": "Cover #19887",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19888",
// 							"name": "And Men Shall Call Him Warlock",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19911",
// 							"name": "Cover #19911",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/19912",
// 							"name": "The Hounds of Helios",
// 							"type": ""
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 10,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/293",
// 							"name": "Annihilation: Conquest"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/233",
// 							"name": "Atlantis Attacks"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/235",
// 							"name": "Blood and Thunder"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/240",
// 							"name": "Days of Future Present"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/302",
// 							"name": "Fear Itself"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/253",
// 							"name": "Infinity Gauntlet"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/29",
// 							"name": "Infinity War"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/263",
// 							"name": "Mutant Massacre"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/271",
// 							"name": "Secret Wars II"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/280",
// 							"name": "X-Tinction Agenda"
// 						}
// 					],
// 					"returned": 10
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1010846,
// 				"name": "Aegis (Trey Rollins)",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
// 					"extension": "gif"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1010846",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/stories",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/95/aegis?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1010846/aegis_trey_rollins?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011297,
// 				"name": "Agent Brand",
// 				"description": "",
// 				"modified": "2013-10-24T13:09:30-0400",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011297",
// 				"comics": {
// 					"available": 12,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5477",
// 							"name": "Astonishing X-Men (2004) #19 (Variant)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/6120",
// 							"name": "Astonishing X-Men (2004) #21"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/6309",
// 							"name": "Astonishing X-Men (2004) #22"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/16119",
// 							"name": "Astonishing X-Men (2004) #23"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17353",
// 							"name": "Astonishing X-Men (2004) #24"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24503",
// 							"name": "Astonishing X-Men (2004) #32"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24504",
// 							"name": "Astonishing X-Men (2004) #33"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/38318",
// 							"name": "Astonishing X-Men (2004) #38"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/38319",
// 							"name": "Astonishing X-Men (2004) #40"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/40024",
// 							"name": "Astonishing X-Men (2004) #40 (I Am Captain America Variant)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/39890",
// 							"name": "Heralds (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/61430",
// 							"name": "The Mighty Captain Marvel (2016) #5"
// 						}
// 					],
// 					"returned": 12
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/744",
// 							"name": "Astonishing X-Men (2004 - 2013)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/13065",
// 							"name": "Heralds (2010 - Present)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/22551",
// 							"name": "The Mighty Captain Marvel (2016 - Present)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 14,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/3353",
// 							"name": "Interior #3353",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/7670",
// 							"name": "ASTONISHING X-MEN (2004) #21",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/8144",
// 							"name": "ASTONISHING X-MEN (2004) #22",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/32919",
// 							"name": "ASTONISHING X-MEN (2004) #23",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/36374",
// 							"name": "ASTONISHING X-MEN (2004) #24",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/54039",
// 							"name": "ASTONISHING X-MEN (2004) #32",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/54041",
// 							"name": "ASTONISHING X-MEN (2004) #33",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/89830",
// 							"name": "ASTONISHING X-MEN (2004) #38",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/89900",
// 							"name": "Astonishing X-Men (2004) #38",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/90548",
// 							"name": "Heralds TPB",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/90819",
// 							"name": "Interior #90819",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/90853",
// 							"name": " Interior  Astonishing X-Men (2004) #40",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/90944",
// 							"name": "ASTONISHING X-MEN (2004) #40",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/133289",
// 							"name": "cover from Captain Marvel (2016) #5",
// 							"type": "cover"
// 						}
// 					],
// 					"returned": 14
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/100/agent_brand?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Agent_Brand?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011031,
// 				"name": "Agent X (Nijo)",
// 				"description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011031",
// 				"comics": {
// 					"available": 18,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17702",
// 							"name": "Agent X (2002) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17709",
// 							"name": "Agent X (2002) #2"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17710",
// 							"name": "Agent X (2002) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17711",
// 							"name": "Agent X (2002) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17712",
// 							"name": "Agent X (2002) #5"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17713",
// 							"name": "Agent X (2002) #6"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17714",
// 							"name": "Agent X (2002) #7"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17715",
// 							"name": "Agent X (2002) #8"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17716",
// 							"name": "Agent X (2002) #9"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17703",
// 							"name": "Agent X (2002) #10"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17704",
// 							"name": "Agent X (2002) #11"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17705",
// 							"name": "Agent X (2002) #12"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17706",
// 							"name": "Agent X (2002) #13"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/17707",
// 							"name": "Agent X (2002) #14"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/394",
// 							"name": "Agent X (2002) #15"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1649",
// 							"name": "Cable & Deadpool (2004) #12"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/21845",
// 							"name": "Cable & Deadpool (2004) #46 (Zombie Variant)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5761",
// 							"name": "Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)"
// 						}
// 					],
// 					"returned": 18
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/459",
// 							"name": "Agent X (2002 - 2004)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/693",
// 							"name": "Cable & Deadpool (2004 - 2008)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1338",
// 							"name": "Cable & Deadpool Vol. 2: The Burnt Offering (2007)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 23,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/1135",
// 							"name": "AGENT X (2002) #15",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/2484",
// 							"name": "CABLE & DEADPOOL (2004) #12",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37514",
// 							"name": "AGENT X (2002) #1",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37515",
// 							"name": "Dead Man's Switch Part One",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37516",
// 							"name": "AGENT X (2002) #10",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37518",
// 							"name": "AGENT X (2002) #11",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37521",
// 							"name": "AGENT X (2002) #13",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37523",
// 							"name": "AGENT X (2002) #14",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37525",
// 							"name": "AGENT X (2002) #2",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37526",
// 							"name": "Dead Man's Switch Part Two",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37527",
// 							"name": "AGENT X (2002) #3",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37528",
// 							"name": "Dead Man's Switch Part Three",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37529",
// 							"name": "AGENT X (2002) #4",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37530",
// 							"name": "Dead Man's Switch Part Four",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37531",
// 							"name": "AGENT X (2002) #5",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37532",
// 							"name": "Dead Man's Switch Part Five",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37533",
// 							"name": "AGENT X (2002) #6",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37534",
// 							"name": "Dead Man's Switch Part Six",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/37535",
// 							"name": "AGENT X (2002) #7",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/67703",
// 							"name": "AGENT X (2002) #12",
// 							"type": "cover"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/101/agent_x?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Agent_X_(Nijo)?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011031/agent_x_nijo?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1009150,
// 				"name": "Agent Zero",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1009150",
// 				"comics": {
// 					"available": 24,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/18082",
// 							"name": "Weapon X (2002) #2"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/18092",
// 							"name": "Weapon X (2002) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/18074",
// 							"name": "Weapon X (2002) #12"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/246",
// 							"name": "Weapon X (2002) #13"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/3357",
// 							"name": "Weapon X: Days of Future Now (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/2438",
// 							"name": "Weapon X: Days of Future Now (2005) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/18293",
// 							"name": "What If? (1989) #-1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14182",
// 							"name": "Wolverine (1988) #60"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14183",
// 							"name": "Wolverine (1988) #61"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14184",
// 							"name": "Wolverine (1988) #62"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14185",
// 							"name": "Wolverine (1988) #63"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14186",
// 							"name": "Wolverine (1988) #64"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14189",
// 							"name": "Wolverine (1988) #67"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14190",
// 							"name": "Wolverine (1988) #68"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14211",
// 							"name": "Wolverine (1988) #87"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14107",
// 							"name": "Wolverine (1988) #163"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14110",
// 							"name": "Wolverine (1988) #166"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/14121",
// 							"name": "Wolverine (1988) #176"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/1023",
// 							"name": "Wolverine/Deadpool: Weapon X (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/18176",
// 							"name": "X-Man (1995) #-1"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"series": {
// 					"available": 9,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/543",
// 							"name": "Weapon X (2002 - 2004)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1478",
// 							"name": "Weapon X: Days of Future Now (2006)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/869",
// 							"name": "Weapon X: Days of Future Now (2005)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
// 							"name": "What If? (1989 - 1998)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
// 							"name": "Wolverine (1988 - 2003)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/84",
// 							"name": "Wolverine/Deadpool: Weapon X (1999)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3643",
// 							"name": "X-Man (1995 - 2000)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
// 							"name": "X-Men (1991 - 2001)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/3637",
// 							"name": "X-Men Unlimited (1993 - 2003)"
// 						}
// 					],
// 					"returned": 9
// 				},
// 				"stories": {
// 					"available": 25,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/1131",
// 							"name": "WEAPON X (2002) #13",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/4606",
// 							"name": "3 of 5 - 5XLS",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28706",
// 							"name": "The Hunted Part 2",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28712",
// 							"name": "The Hunted Part 5",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28738",
// 							"name": "The Logan Files Epilogue",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28881",
// 							"name": "Counting Coup",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28883",
// 							"name": "Nightmare Quest!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28885",
// 							"name": "Reunion!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28887",
// 							"name": "Bastions of Glory!",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28889",
// 							"name": "What Goes Around...",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28895",
// 							"name": "Valley O' Death",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28897",
// 							"name": "Epsilon Red",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/28941",
// 							"name": "Showdown In Lowtown",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/29125",
// 							"name": "Last Stand",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/29139",
// 							"name": "Over...Again",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/38511",
// 							"name": "Second Contact",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/38554",
// 							"name": "Among Us--A Sabretooth",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/38555",
// 							"name": "The Whispers Scream",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/38556",
// 							"name": "Sabretooth Vs. Maverick: Severed Ties",
// 							"type": "pinup"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/38650",
// 							"name": "Maverick",
// 							"type": ""
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/102/agent_zero?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Agent_Zero?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1009150/agent_zero?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011198,
// 				"name": "Agents of Atlas",
// 				"description": "",
// 				"modified": "2010-11-17T14:36:25-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011198",
// 				"comics": {
// 					"available": 32,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/6318",
// 							"name": "Agents of Atlas (Hardcover)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/23659",
// 							"name": "Agents of Atlas (2009) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/4801",
// 							"name": "Agents of Atlas (2006) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/23660",
// 							"name": "Agents of Atlas (2009) #1 (50/50 COVER)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/23825",
// 							"name": "Agents of Atlas (2009) #2"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5089",
// 							"name": "Agents of Atlas (2006) #2"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/27402",
// 							"name": "Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/23824",
// 							"name": "Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24015",
// 							"name": "Agents of Atlas (2009) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5241",
// 							"name": "Agents of Atlas (2006) #3"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24016",
// 							"name": "Agents of Atlas (2009) #3 (MCGUINNESS VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24017",
// 							"name": "Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5404",
// 							"name": "Agents of Atlas (2006) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24219",
// 							"name": "Agents of Atlas (2009) #4"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5665",
// 							"name": "Agents of Atlas (2006) #5"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24221",
// 							"name": "Agents of Atlas (2009) #5"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24222",
// 							"name": "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5842",
// 							"name": "Agents of Atlas (2006) #6"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24360",
// 							"name": "Agents of Atlas (2009) #6"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/24361",
// 							"name": "Agents of Atlas (2009) #7"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"series": {
// 					"available": 5,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1980",
// 							"name": "Agents of Atlas (2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1097",
// 							"name": "Agents of Atlas (2006 - 2007)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/6807",
// 							"name": "Agents of Atlas (2009)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/9181",
// 							"name": "Avengers Vs. Atlas (2010)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/22365",
// 							"name": "Wolverine: Prehistory (2017)"
// 						}
// 					],
// 					"returned": 5
// 				},
// 				"stories": {
// 					"available": 39,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6008",
// 							"name": "1 of 6 - 6 XLS-",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6009",
// 							"name": "1 of 6 - 6 XLS-",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6010",
// 							"name": "2 of 6 - 6 XLS -",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6011",
// 							"name": "2 of 6 - 6 XLS -",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6012",
// 							"name": "3 of 6 - 6 XLS -",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6013",
// 							"name": "3 of 6 - 6 XLS -",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6014",
// 							"name": "4 of 6 - 6 XLS -",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6015",
// 							"name": "4 of 6 - 6 XLS -",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6016",
// 							"name": "5 of 6 - 6 XLS -",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6017",
// 							"name": "5 of 6 - 6 XLS -",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6018",
// 							"name": "5 of 6 - Story A - 6XLS",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/6019",
// 							"name": "5 of 6 - Story A - 6XLS",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/52393",
// 							"name": "1 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/52395",
// 							"name": "1 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/52861",
// 							"name": "2 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/52863",
// 							"name": "2 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/53263",
// 							"name": "3 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/53265",
// 							"name": "3 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/53266",
// 							"name": "3 of 3",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/53669",
// 							"name": "1 of 2",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 20
// 				},
// 				"events": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/318",
// 							"name": "Dark Reign"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/103/agents_of_atlas?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Agents_of_Atlas?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011175,
// 				"name": "Aginar",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011175",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/stories",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/105/aginar?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Aginar?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011175/aginar?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011136,
// 				"name": "Air-Walker (Gabriel Lan)",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011136",
// 				"comics": {
// 					"available": 4,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/comics",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/4108",
// 							"name": "Annihilation: Silver Surfer (2006) #1"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/5589",
// 							"name": "Heroes Reborn: Iron Man (Trade Paperback)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/16330",
// 							"name": "Iron Man (1996) #11"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/comics/16331",
// 							"name": "Iron Man (1996) #12"
// 						}
// 					],
// 					"returned": 4
// 				},
// 				"series": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/series",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1078",
// 							"name": "Annihilation: Silver Surfer (2006)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/1814",
// 							"name": "Heroes Reborn: Iron Man (2006)"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/series/13577",
// 							"name": "Iron Man (1996 - 1998)"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"stories": {
// 					"available": 3,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/stories",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/5925",
// 							"name": "Annihilation: Silver Surfer (2006) #1",
// 							"type": "cover"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/34082",
// 							"name": "Magical Mystery Tour",
// 							"type": "interiorStory"
// 						},
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/stories/34085",
// 							"name": "Matters of the Heart",
// 							"type": "interiorStory"
// 						}
// 					],
// 					"returned": 3
// 				},
// 				"events": {
// 					"available": 1,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/events",
// 					"items": [
// 						{
// 							"resourceURI": "http://gateway.marvel.com/v1/public/events/229",
// 							"name": "Annihilation"
// 						}
// 					],
// 					"returned": 1
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/109/air-walker?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Air-Walker_(Gabriel_Lan)?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011136/air-walker_gabriel_lan?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1011176,
// 				"name": "Ajak",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1011176",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/stories",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/111/ajak?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Ajak?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1011176/ajak?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			},
// 			{
// 				"id": 1010870,
// 				"name": "Ajaxis",
// 				"description": "",
// 				"modified": "1969-12-31T19:00:00-0500",
// 				"thumbnail": {
// 					"path": "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a",
// 					"extension": "jpg"
// 				},
// 				"resourceURI": "http://gateway.marvel.com/v1/public/characters/1010870",
// 				"comics": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/comics",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"series": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/series",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"stories": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/stories",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"events": {
// 					"available": 0,
// 					"collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/events",
// 					"items": [],
// 					"returned": 0
// 				},
// 				"urls": [
// 					{
// 						"type": "detail",
// 						"url": "http://marvel.com/characters/113/ajaxis?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "wiki",
// 						"url": "http://marvel.com/universe/Ajaxis?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					},
// 					{
// 						"type": "comiclink",
// 						"url": "http://marvel.com/comics/characters/1010870/ajaxis?utm_campaign=apiRef&utm_source=6536c6866ced2436cd4aea919af05c06"
// 					}
// 				]
// 			}
// 		]
// 		let characterObj = {};
// 		let charOrder = [];
// 		fakeCharacters.forEach(char => {
// 			characterObj[char.id] = char
// 			charOrder.push(char.id)
// 		})

// 		if (offset) {
// 			charOrder = [...charOrder, ...getState().data.characters.order]
// 		}

// 		setTimeout(() => {
// 			dispatch(getCharacters(characterObj, charOrder))
// 			dispatch(setCharactersLoadingStatus(false))
// 		}, 5000)
// 	}
// }
