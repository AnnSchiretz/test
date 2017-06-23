const WD = require('selenium-webdriver');
const assert = require('assert');
const By = WD.By;
const BROWSER = {browserName:'chrome'};
const ASSETS = {
    host: 'http://localhost:4444/wd/hub',
    url: 'http://hm.mermaid.cloud/'
};
const USER = {
    email:'gornichnay@example.com',
    pass: 'password'
};
const CLIENT = new WD.Builder()
    .usingServer(ASSETS.host)
    .withCapabilities(BROWSER)
    .build();

const base = require('./constants/baseFunctions')(CLIENT, WD);
console.log(base);

CLIENT.get(ASSETS.url).then(function(){
    base.wait(10000, {name:'email'});
    base.getElement({name:'email'}).sendKeys(USER.email);
    base.getElement({name:'password'}).sendKeys(USER.pass);
    base.click(By.xpath('//*[@id="sign-in-form"]/div[3]/input'));
    base.wait(10000, {xpath:'//*[@id="root"]/div/div/div/div/div[2]/button'});
    base.click(By.xpath('//*[@id="root"]/div/div/div/div/div[2]/button'));
    base.wait(10000,{xpath:'//*[@id="root"]/div/div/div/div[1]/div[2]/div[3]/a'});
    base.click({xpath:'//*[@id="root"]/div/div/div/div[1]/div[2]/div[3]/a'});
    base.click({xpath:'//*[@id="root"]/div/div/div/div[1]/div[2]/div[3]/a'});
    // CLIENT.wait(WD.until.elementLocated({xpath:'//*[@id="root"]/div/div/div/div[3]/div[10]/center[1]/input'}));
    // base.click({xpath:'//*[@id="root"]/div/div/div/div[3]/div[10]/center[1]/input'});
    CLIENT.wait(WD.until.elementLocated({xpath:'//*[@id="root"]/div/div/div/div[3]/div[10]/center[2]/input'}));
    base.click({xpath:'//*[@id="root"]/div/div/div/div[3]/div[10]/center[2]/input'});
});

//CLIENT.quit();