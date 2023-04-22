class HoustonPage {
    // Getters
    get title() {
        return $('[class="landing-hero clearfix"] h1');
    }
    get scheduleFCBtn() {
        return $('[class="button transparent-button launch-modal-schedule-consultation"]')
    }
    get schedulePopUp() {
        return $('[class="dl-modal dl-schedule-consultation-modal dl-downloadportfolio-modal open"]');
    }
    get closeModalBtn() {
        return $('[class="dl-modal dl-schedule-consultation-modal dl-downloadportfolio-modal open"] > div > div');
    }
}

export default new HoustonPage();
