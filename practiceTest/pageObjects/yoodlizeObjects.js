module.exports = {
    url: 'https://www.yoodlize.com/',
    elements: {
        results: '#res',
        keywordSearch: 'input[name="keyword"]', 
        searchBar: {
            selector: '(//input[contains(@class,"form-control")])',
            locateStrategy: 'xpath'
        },
        categoryTitle: {
            selector: '//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")]',
            locateStrategy: 'xpath'
        },
        categoryPath: {
            selector: '(//div[contains(@class,"sc-jqCOkK jWYmHJ sc-gqjmRU gSDGNT")])',
            locateStrategy: 'xpath'
        },
        advancedSearch: {
            selector:   '//div[contains(@yid,"advanced-search-link")]',
            locateStrategy: 'xpath'
        },
        searchCircle: {
            selector:   '//div[contains(@class,"sc-jKVCRD jSqgx")]',
            locateStrategy: 'xpath'
        },
        seeAll: {
            selector:   '//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVge")]',
            locateStrategy: 'xpath'
        },
        seePath:    {
            selector:   '(//div[contains(@class,"sc-jqCOkK djSgtl sc-gqjmRU fmVgeN")])',
            locateStrategy: 'xpath'
        },
        home:   {
            selector:   '//a[contains(@class,"_2oS_y _1BgQy navbar-brand")]',
            locateStrategy: 'xpath'
        }
    }
}