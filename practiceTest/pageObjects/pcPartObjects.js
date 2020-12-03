module.exports = {

    url: 'https://pcpartpicker.com/',
    elements: {
        system:       'li[class="nav__categories--partlist"]',
        guides:        'li[class="nav__categories--guides"]',
        build:        'li[class="nav__categories--builds"]',
        products:     'li[class="nav__categories--browseProducts js-trigger--browseProducts"]',
        title:        'h1[class="pageTitle"]',
        //bcpu:         'a[href="/products/cpu/"]',
        bcpu:{
            selector: '(//a[contains(@href, "/products/cpu/")])[1]',
            locateStrategy: 'xpath'
        },
        cpu:{
            selector: '(//a[contains(@href, "/products/cpu/")])[4]',
            locateStrategy: 'xpath'
        },
        //addCpu:       'button[data-product-tag="9nm323"]',
        addCpu:       'button[data-product-tag=',
        cooler:{
            selector: '(//a[contains(@href, "/products/cpu-cooler/")])[4]',
            locateStrategy: 'xpath'
        },
        mother:{
            selector:  '(//a[contains(@href, "/products/motherboard/")])[4]',
            locateStrategy: 'xpath'
        },
        mem:{
            selector:  '(//a[contains(@href, "/products/memory/")])[4]',
            locateStrategy: 'xpath'
        },
        stor:{
            selector:  '(//a[contains(@href, "/products/internal-hard-drive/")])[4]',
            locateStrategy: 'xpath'
        },
        vc:{
            selector:  '(//a[contains(@href, "/products/video-card/")])[4]',
            locateStrategy: 'xpath'
        },
        case:{
            selector:  '(//a[contains(@href, "/products/case/")])[4]',
            locateStrategy: 'xpath'
        },
        power:{
            selector:  '(//a[contains(@href, "/products/power-supply/")])[4]',
            locateStrategy: 'xpath'
        },
        oDrive:{
            selector:  '(//a[contains(@href, "/products/optical-drive/")])[4]',
            locateStrategy: 'xpath'
        },
        OS:{
            selector:  '(//a[contains(@href, "/products/os/")])[4]',
            locateStrategy: 'xpath'
        },
        soft:{
            selector:  '(//a[contains(@href, "/products/software/")])[15]',
            locateStrategy: 'xpath'
        },
        mon:{
            selector:  '(//a[contains(@href, "/products/monitor/")])[4]',
            locateStrategy: 'xpath'
        },
        ES:{
            selector:  '(//a[contains(@href, "/products/external-hard-drive/")])[4]',
            locateStrategy: 'xpath'
        },
        lap:{
            selector:  '(//a[contains(@href, "/products/laptop/")])[4]',
            locateStrategy: 'xpath'
        },
        price:{
            selector:     '//div[@id="partlist"]/div[2]/section[2]/div/div[2]/table/tbody/tr[23]',    //'(//td[contains(@class, "td__price")])[9]',
            locateStrategy: 'xpath'
        },
        name: 'td.td__name',
        delete: 'a[class="pp_delete_part"]',
    }
}
    