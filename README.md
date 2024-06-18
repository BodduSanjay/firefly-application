# React App Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Description

This React application showcases a fictional product catalog for an imaginary fireworks company. It utilizes modern React practices and libraries to build a responsive and interactive user interface.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Create React App**: A comfortable environment for learning React, and is the best way to start building a new single-page application in React.
- **React Icons**: Provides popular icons as React components.
- **React Popup**: Provides modal dialogs for React applications.
- **CSS**: For styling components.
- **JavaScript**: The core programming language used to create interactive web pages.

## Application Functionalities

- **Header**: Displays a static header image.
- **BottomContainer**: 
  - **About Section**: Contains textual content and images about the products.
  - **Product Section**: Displays product items and details.
  - **Footer Section**: Displays social media links and footer decorations.
- **PopupContainer**: 
  - Provides a modal popup with detailed views of products.
  - Includes image selection, product description, product contents, and shipping time.
- **ProductItem**: Displays individual products with an option for a quick view in a popup modal.
- **TopContainer**: Displays the header and main product with a quick view option.

## Components

- **Header**: Renders the header section with an image.
- **BottomContainer**: Renders the bottom section with details about the company and products.
- **ImageItem**: Renders individual image items, handling active state changes on click.
- **PopupContainer**: Renders a popup container with detailed product information and image selection functionality.
- **ProductItem**: Renders each product item with a quick view button to trigger the popup container.
- **TopContainer**: Renders the top section with the main product and a quick view option.

## Project Structure

- **src**
  - **components**
    - **Header**
      - `index.js`
      - `index.css`
    - **BottomContainer**
      - `index.js`
      - `index.css`
    - **ImageItem**
      - `index.js`
      - `index.css`
    - **PopupContainer**
      - `index.js`
      - `index.css`
    - **ProductItem**
      - `index.js`
      - `index.css`
    - **TopContainer**
      - `index.js`
      - `index.css`
  - **App.js**
  - **index.js**
  - **index.css**

This project demonstrates the use of React components, CSS styling, and the implementation of popups for displaying detailed product information. The structured approach ensures easy navigation and understanding of the project setup.
