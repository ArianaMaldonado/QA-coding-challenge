# December Labs

This is the solution for the QA role coding challenge.

The main objective is to automate a simple flow using a framework of choice. I chose ``WebDriverIO``.

You can access to WebDriverIO documentation by following this [link](https://webdriver.io/).

## Getting Started
These are the test steps to be automated:

> 1. Navigate to the given website.
> 2. Validate the correct display of the page by checking its title and top menu.
> 3. Navigate to Houston office website by clicking the footer button.
> 4. Validate the correct display of the page by checking its title and url.
> 5. Click on ``Schedule free consultation`` button.
> 6. Validate the form popup is displayed.
> 7. Close popup.
> 8. Validate the popup is no longer displayed.

### Prerequisites

Before running this automation test, you need to clone this repository by using this command:

    git clone https://github.com/ArianaMaldonado/qa-coding-challenge.git

After cloning it, you need to move to the correct folder with the following command:

    cd wdio_automation_test


### Installing

Make sure you have all needed dependencies installed by running:

    npm install

## Running the tests

We have a script for running the tests you can use the script

    npm run wdio

or running it manually

    wdio run ./wdio.conf.js

### Folder Structure

You should see three folders and some config files on the root:

    .
    ├── ...
    ├── tests
    │   ├── pageobjects
    │   │       ├── dl-houston.page.js      # elements of the houston website
    │   │       └── dl-main.page.js         # elements of the main website
    │   │
    │   ├── specs
    │   │       └── dl-website.e2e.js       # E2E testing flow
    │   └── ...
    └── ...

## Solution
### Page object model
For the solution of this exercise, I decided to create two page-object files where I called all the elements I needed from each page, the main page and the houston office page separated.

I chose to separate both sites elements to ease the reuse of them in the future and also to improve the test structure.

I only have one function for the whole test in one page-object

    openBrowser()

### Test
Once everything is ready, I continue by importing the page object files into the test file, so I would be able to access all the elements.

First of all I call to the `openBrowser()` function. After the site is loaded, I checked both titles, the browser title and the page title, and the top-menu exists, is displayed and clickable.

Before going to the next step, I save the browser url into a const declaration. Then I scroll down to the button which is in the footer to navigate to the Houston office website by clicking on it.

Once I'm there I check the page title and the url: as the base url is the same than before I use template literals where the const previously saved is the expression and just add the new part of url as a string.

Finally, I wait for the `Schedule free consultation` button to be displayed and click on it. I check the pop up modal is displayed correctly and close it checking again that it's no longer displayed.

## Authors

  **Ariana Maldonado**

  **Linkedin account:** https://www.linkedin.com/in/ariimaldonado/