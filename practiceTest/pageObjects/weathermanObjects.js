module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        searchBar: {
            selector: '//input[@class="enter-location__input"]',
            locateStrategy: 'xpath'
        },
        submitButton: '.enter-location__submit',
        resultCity: {
            selector: '//h3[@class="current-weather__location"]',
            locateStrategy: 'xpath'
        },
        searchAgain: '.current-weather__search-again',
        temp: '.current-weather__temp'
    }
}