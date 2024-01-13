# Restaurant Explorer App 🍽️

## Overview 🌐

The Restaurant Explorer App is a React-based application that leverages Google's generative AI for both text-based menu search and image recognition. It allows users to discover and explore restaurants by searching for menus using text input or identifying dishes through image recognition.

## Features 🚀

### 1. Text-based Menu Search 🔍

Users can input text queries to search for specific dishes, cuisines, or keywords in the app's database. The search results will display relevant restaurant menus matching the user's input.

### 2. Image Recognition 📸

The app uses Google's generative AI to recognize dishes from images provided by the users. Users can either upload images or capture them using their device's camera. The app will then identify the dish and provide information about it, including its name.

## Components 🧩

### 1. MenuSearch Component 🍔

- Responsible for handling text-based menu searches.
- Utilizes Google's generative AI to perform searches and retrieve relevant menu information.
- Displays search results in a user-friendly format.

### 2. ImageRecognition Component 🖼️

- Manages the image recognition feature of the app.
- Integrates with Google's AI for image processing and dish identification.
- Displays the recognized dish's name along with additional details.

## Usage 🛠️

To run the app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/restaurant-explorer-app.git 

2. Install dependencies:

    ```bash
    cd restaurant-explorer-app
    npm install

3. Start the app:

    ```bash
    npm start
    
The app will be accessible at http://localhost:3000.

# Dependencies 📦
- React
- Google's Generative AI Library
- Additional dependencies (specified in package.json)

## Notes 📝

- Ensure that you have the **Necessary API keys** and configurations for Google's generative AI integration.

- Image recognition functionality may require an internet connection for real-time processing.


Feel free to explore, contribute, and enhance the capabilities of the Restaurant Explorer App!
