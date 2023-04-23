# December Labs

This is the solution for the QA role coding challenge.

The main objective is to automate a simple flow using `Nightwatch.js` framework.

You can access to Nightwatch.js documentation by following this [link](https://nightwatchjs.org/).

## Getting Started
These are the test steps to be automated:

> 1. Navigate to the given website.
> 2. Click on `Apply Now` button.
> 3. Validate the form is opened by checking popup is displayed its title is correct.
> 4. Click on `Send` button.
> 5. Validate that required fields are red.
> 6. Fill required fileds and validate the red border is no longer displayed.

### Prerequisites

Before running this automation test, you need to clone this repository by using this command:

    git clone https://github.com/ArianaMaldonado/qa-coding-challenge.git

After cloning it, you need to move to the correct folder with the following command:

    cd nightwatch_automation_test

### Installing

Make sure you have all needed dependencies installed by running:

    npm install

## Running the tests

We have a script for running the tests you can use the script

    npm run test

or running it manually

    npx nightwatch -e chrome

### Folder Structure

You should see three folders and some config files on the root:

    .
    ├── ...
    ├── page-objects
    │   └── careers.js              # it contains the elements and reusable functions
    ├── tests
    │   └── careers-apply-form.js   # e2e test
    ├── test-output                 # automatically generated when running the tests.
    │   └── ...                     # different reports
    └── ...

## Solution
### Page object model
For the solution of this exercise, I decided to create a page-object file where I called all the elements I needed from the main page as well as from the form.

After having all the elements, I decided to create three reusable functions:

    1. fillForm()
    2. getErrorBorderColor()
    3. getBorderNone()

And as the website needed more time to get the properties correctly we know that pausing the browser is not a good practice, I decided to use the `browser.pause()` hook into a function on this file in order keep the test clean, so:

    4. waitForProperty()

### Test
Once everything is ready, I continued by importing the page object file into the test file saving it in a const declaration, so I would be able to access all the elements and functions previously written.

First of all I navigate to the settle url and maximized the window to work more comfortable.

I wait for 'Apply now' button to be visible because the website was delayed in charging all the elements. When it's done I clicked on it and check the popup modal is displayed and checked the title.

After that I had to check the inputs border gets red when clicking on 'Send' button without entering data, so I clicked on the button, gave the browser some time to fully charged the properties, saved the cssProperty into a `const borderColor` and use it to compare all the required inputs by the expect assertion.

Once done, I finished by filling the form using the page object function and without clicking on 'Send' button, checked that the border were no longer red.

After this I closed the browser by using `browser.end()`

## Authors

  **Ariana Maldonado**

  **Linkedin account:** https://www.linkedin.com/in/ariimaldonado/