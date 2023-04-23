# December Labs
This repository was created in order to accomplish with two automation flows for the December Labs company coding challenge.

## Getting Started
You will find two folders, each of them contains a different flow automated with different tools:

### Nightwatch
The first one corresponds with the fourth section of the coding challenge. It tests the ``'Apply now!'`` form of DL website.
The framework used for this flow is [Nightwatch.js](https://nightwatchjs.org/).

### WebDriverIO
The second one corresponds with the third section of the coding challenge. It tests the interaction between the main website and the Houston office website, and the display of the ``'Schedule free consultation'`` form.
The framework used for this flow is [WebDriverIO](https://webdriver.io/).

## Installation
In order to try these tests, you can just clone the whole repository and move to the folder you are interested in. Then you can run the tests with the correspondent scripts.

    git clone                           # to clone the repository
    cd nightwatch_automation_test       # to move to the nightwatch automation test
    npm run test                        # to run the test with the script
    npx nightwatch -e chrome            # to run the test without the script
    cd wdio_automation_test             # to move to the wdio automation test
    npm run wdio                        # to run the test with the script
wdio run ./wdio.conf.js                 # to run the test without the script

## Folder Structure

    ├── nightwatch_automation_test
    ├── wdio_automation_test
    └── README.md

## Author

**Ariana Maldonado**

**Linkedin account:** https://www.linkedin.com/in/ariimaldonado/