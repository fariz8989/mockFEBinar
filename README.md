# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Component Guide
## Form/Pop Up Form
Form component receive props called props that contain :\
popUp => div component that use as container for the form and to set toggle hidden class\
status => an object that contain :\
        id=> product id user want to delete or edit\
        type => type of action user do,determined type of form that shows up\
            value => 'new','delete','edit'\
            
