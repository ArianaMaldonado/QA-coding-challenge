import MainPage from '../pageobjects/dl-main.page.js';
import HoustonPage from '../pageobjects/dl-houston.page.js';

describe('December Labs website', () => {
    beforeAll('Open browser', async () => {
        await MainPage.openBrowser();
    });
    it('Checking title and and top menu', async () => {
        await expect(browser).toHaveTitle('December Labs: UX/UI Design and Mobile App & Web Development');
        await expect(MainPage.title).toHaveTextContaining('Rocket-Fuel', 'your Product');
        await MainPage.topMenu.waitForDisplayed(1000);
        await expect(MainPage.topMenu).toExist();
        await expect(MainPage.topMenu).toBeDisplayed();
        await expect(MainPage.topMenu).toBeClickable();
    });
    it('Navigate to Huston Office website', async () => {
        const browserUrl = await browser.getUrl()
        await MainPage.hustonOfficeBtn.scrollIntoView();
        await MainPage.hustonOfficeBtn.click();
        await expect(HoustonPage.title).toHaveText('Houston Web and App Developers');
        await expect(browser).toHaveUrl(`${browserUrl}locations/houston/`);
    });
    it('Schedule free consultation displays correctly', async () => {
        await HoustonPage.scheduleFCBtn.waitForDisplayed();
        await HoustonPage.scheduleFCBtn.click();
        await expect(HoustonPage.schedulePopUp).toBeDisplayed();
        await expect(HoustonPage.closeModalBtn).toBeClickable();
        await HoustonPage.closeModalBtn.click();
        await expect(HoustonPage.schedulePopUp).not.toBeDisplayed();
    });
});