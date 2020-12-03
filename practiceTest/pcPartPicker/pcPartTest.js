var CPUs =  ['"9nm323"]', '"QKJtt6"]', '"jLF48d"]']
var cool =  ['"hmtCmG"]', '"JYCD4D"]', '"hHDJ7"]']
var moth =  ['"jcYQzy"]', '"hpRzK8"]', '"dmGnTW"]']
var mem  =  ['"p6RFf7"]', '"QDhKHx"]', '"NyTPxr"]'] 
var stor =  ['"mwrYcf"]', '"JLdxFT"]', '"P4ZFf7"]']
var vid  =  ['"RnDkcf"]', '"m8pmP6"]', '"Z3wkcf"]']
var cas  =  ['"kb66Mp"]', '"b7hmP6"]', '"crqBD3"]']
var pow  =  ['"6Y66Mp"]', '"jtm323"]', '"8P7CmG"]']
var od   =  ['"2v9KHx"]', '"z2dqqs"]', '"wT2kcf"]']
var os   =  ['"wtgPxr"]', '"MfH48d"]', '"96RFf7"]']
var sof  =  ['"cHCD4D"]', '"xyhKHx"]', '"cwWfrH"]']
var mon  =  ['"HBRzK8"]', '"fH6BD3"]', '"JgCFf7"]']
var es   =  ['"qhqbt6"]', '"9KXYcf"]', '"9xL7YJ"]']
var lap  =  ['"LKhmP6"]', '"dmcRsY"]', '"2Qyqqs"]']

module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.pcPartObjects()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Smoke Test...': browser => {
        pageObject
        /*********************System Builder Page**********************/
            .waitForElementVisible('@system')
            .waitForElementPresent('@system')
            .click('@system')
            .expect.element('@title').text.to.contain('System Builder')
        /*************************************************************/
        /*********************Build Guides Page**********************/
        pageObject
            .waitForElementVisible('@guides')
            .waitForElementPresent('@guides')
            .click('@guides')
            .expect.element('@title').text.to.contain('Build Guides')
        /*************************************************************/
        /*********************Completed Builds Page**********************/
        pageObject
            .waitForElementVisible('@build')
            .waitForElementPresent('@build')
            .click('@build')
            .expect.element('@title').text.to.contain('Completed Builds')
        /*************************************************************/
        /*********************Browse Products Page**********************/
        pageObject
            .waitForElementVisible('@products')
            .waitForElementPresent('@products')
            .click('@products')
            
    },
    'Build A Computer Test...': browser => {
        
        

        pageObject
            //Verify that we are on the home page and click system builder
            .waitForElementVisible('@system')
            .waitForElementPresent('@system')
            .click('@system')
           // for (i = 0; i < CPUs.length; i++){
        pageObject
            /*********************Add Optical Drive************************/
            .waitForElementVisible('@oDrive')
            .waitForElementPresent('@oDrive')
            .click('@oDrive')
            //.waitForElementVisible(`button[data-product-tag=${od[i]}`)
            .click(`button[data-product-tag=${od[0]}`)
            
            /*************************************************************/
            /************************Add CPU*****************************/
            .waitForElementVisible('@cpu')
            .click('@cpu')
            .waitForElementVisible(`button[data-product-tag=${CPUs[0]}`)
            .click(`button[data-product-tag=${CPUs[0]}`)
            
            /*************************************************************/
            /**********************Add CPU Cooler*************************/
            .waitForElementVisible('@cooler')
            .click('@cooler')
            .waitForElementVisible(`button[data-product-tag=${cool[0]}`)
            .click(`button[data-product-tag=${cool[0]}`)
            
            /*************************************************************/
            /*********************Add Motherboard*************************/
            .waitForElementVisible('@mother')
            .click('@mother')
            .waitForElementVisible(`button[data-product-tag=${moth[0]}`)
            .click(`button[data-product-tag=${moth[0]}`)
            
            /*************************************************************/
            /************************Add Memory***************************/
            .waitForElementVisible('@mem')
            .click('@mem')
            .waitForElementVisible(`button[data-product-tag=${mem[0]}`)
            .click(`button[data-product-tag=${mem[0]}`)
            
            /*************************************************************/
            /**********************Add Storage****************************/
            .waitForElementVisible('@stor')
            .click('@stor')
            .waitForElementVisible(`button[data-product-tag=${stor[0]}`)
            .click(`button[data-product-tag=${stor[0]}`)
            
            /*************************************************************/
            /*********************Add Video Card**************************/
            .waitForElementVisible('@vc')
            .click('@vc')
            .waitForElementVisible(`button[data-product-tag=${vid[0]}`)
            .click(`button[data-product-tag=${vid[0]}`)
            
            /*************************************************************/
            /***********************Add Case*****************************/
            .waitForElementVisible('@case')
            .click('@case')
            .waitForElementVisible(`button[data-product-tag=${cas[0]}`)
            .click(`button[data-product-tag=${cas[0]}`)
            
            /*************************************************************/
            /********************Add Power Supply*************************/
            .waitForElementVisible('@power')
            .click('@power')
            .waitForElementVisible(`button[data-product-tag=${pow[0]}`)
            .click(`button[data-product-tag=${pow[0]}`)
            
            /*************************************************************/
            /******************Add Operating System***********************/
            .waitForElementVisible('@OS')
            .click('@OS')
            .waitForElementVisible(`button[data-product-tag=${os[0]}`)
            .click(`button[data-product-tag=${os[0]}`)
            
            /*************************************************************/
            /**********************Add Software***************************/
            .waitForElementVisible('@soft')
            .click('@soft')
            .waitForElementVisible(`button[data-product-tag=${sof[0]}`)
            .click(`button[data-product-tag=${sof[0]}`)
            
            /*************************************************************/
            /**********************Add Monitor****************************/
            .waitForElementVisible('@mon')
            .click('@mon')
            .waitForElementVisible(`button[data-product-tag=${mon[0]}`)
            .click(`button[data-product-tag=${mon[0]}`)
            
            /*************************************************************/
            /******************Add External Storage***********************/
            .waitForElementVisible('@ES')
            .click('@ES')
            .waitForElementVisible(`button[data-product-tag=${es[0]}`)
            .click(`button[data-product-tag=${es[0]}`)
            
            /*************************************************************/
            /***********************Add Laptop***************************/
            .waitForElementVisible('@lap')
            .click('@lap')
            .waitForElementVisible(`button[data-product-tag=${lap[0]}`)
            .click(`button[data-product-tag=${lap[0]}`)
            
            /*************************************************************/
            
            // .getText('@name', function(result) {
            //     console.log('Name:', result.value); 
            // })
            var count = 1;
            while (count <10){
        pageObject
                .useXpath()
                .getText(`(//td[contains(@class, "td__name")])[${count}]`, function(result) {
                    console.log('Product:', result.value); 
                 }) 
                 count++;
            }
        pageObject
            .getText('@price', function(result) {
                console.log('Total Price:', result.value); 
              })
            var add = 1;
            while (add <6){
        pageObject
            .useXpath()
            .click(`(//td[contains(@class, "td__remove")])[2]`)
            .click(`(//td[contains(@class, "td__remove")])[4]`)
            .click(`(//td[contains(@class, "td__remove")])[6]`)
            add = add + 1;
            }
            pageObject
            .click(`(//td[contains(@class, "td__remove")])[2]`)
            //.pause(5000)
    }
   // }
}

