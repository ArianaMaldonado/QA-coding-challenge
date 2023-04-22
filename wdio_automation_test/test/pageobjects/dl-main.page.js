class MainPage {
    // Getters
    get title() {
        return $('[class="content_text"] h2');
    }
    get topMenu() {
        return $('[class=btn_mobile]');
    }
    get hustonOfficeBtn() {
        return $('body > footer > article > div > ul > li.offices_section > ul > li > div:nth-child(3) > a.city');
    }

    //Methods
    openBrowser(path) {
        return browser.url(`https://inhouse.decemberlabs.com/${path}`);
    }
}

export default new MainPage();
