const careers = browser.page.careers();

module.exports = {
    'December Labs Careers': () => {
        careers
            .navigate()
            .maximizeWindow();
    },

    'Open pop up': () => {
        careers
            .waitForElementVisible('@applyBtn')
            .click('@applyBtn')
            .waitForElementVisible('@popUp')
            .expect.element('@popUp').to.be.visible
            .expect.element('@title').text.to.equal('Join Our Team');
    },

    'Click on "Send" button without entering data': async () => {
        await careers
            .click('@sendBtn')
            .waitForProperty();
        const borderColor = await careers.getErrorBorderColor();
        await careers
            .expect.element('@nameInput').to.have.css('border-color').which.equals(borderColor)
            .expect.element('@emailInput').to.have.css('border-color').which.equals(borderColor)
            .expect.element('@liInput').to.have.css('border-color').which.equals(borderColor)
            .expect.element('@commentsInput').to.have.css('border-color').which.equals(borderColor);
    },

    'Filling required data red border should disappear': async () => {
        await careers
            .fillForm(
                'Ariana Maldonado',
                'arii.maldonado97@gmail.com',
                'https://www.linkedin.com/in/ariimaldonado/',
                'This is my comment'
            )
        const borderNone = await careers.getBorderNone();
        await careers
            .expect.element('@nameInput').to.have.css('border-color').which.equals(borderNone)
            .expect.element('@emailInput').to.have.css('border-color').which.equals(borderNone)
            .expect.element('@liInput').to.have.css('border-color').which.equals(borderNone)
            .expect.element('@commentsInput').to.have.css('border-color').which.equals(borderNone);
        browser.end();
    }
}