module.exports = {
    url: 'http://localhost:3000/#/enter',
    elements: {
        header: 'input[name="hdrInput"]',
        mke:    'input[name="mkeInput"]',
        origAI: 'input[name="oriInput"]',
        name:   'input[name="namInput"]', 
        sex:    'select[name="sexInput"]', 
        race:   'select[name="racInput"]', 
        height: 'input[name="hgtInput"]', 
        weight: 'input[name="wgtInput"]', 
        hair:   'input[name="haiInput"]', 
        offense:'input[name="offInput"]', 
        dateOW: 'input[name="dowInput"]', 
        driverL:'input[name="olnInput"]', 
        dlState:'input[name="olsInput"]',
        dlEDate:'input[name="oldInput"]',
        save:   'button[id="saveBtn"]', 
        clear:  'button[id="clearBtn"]',
        isValid:'h4[id="validHeader"]',
        lPlate: 'input[name="licInput"]',
        lDate:  'input[name="lidInput"]',
        lState: 'input[name="lisInput"]',
        searchBar: {
            selector: '//input[@name="q"]',
            locateStrategy: 'xpath'
        }
    }
}