# React-Marvel-App

## Running The Application Locally
1. Clone the repository on the master branch
2. Create a Marvel Developer Account [here](https://developer.marvel.com/account):
	1. Set the public key in the ./src/settings file to be your api key (you can get one [here](https://developer.marvel.com/account))
	2. Either set the private key in ./src/settings file or (preferred) add your test server's domain name to the ["authorized referrers" list](https://developer.marvel.com/account). 
	**NOTE: Only set your private key for testing. Do not let this go into production or into your version control.**
4. Run the commands: 

```
yarn install
yarn start
```

## Running Tests

```
yarn test *
```

The tests can be found alongside their components

## To do

* Add loading spinner for images while they are loading in the detail view
