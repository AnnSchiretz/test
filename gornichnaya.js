const WD = require('selenium-webdriver');
const assert = require('assert');
const By = WD.By;
const BROWSER = {browserName:'chrome'};
const ASSETS = {
    host: 'http://localhost:4444/wd/hub',
    url: 'http://hm.mermaid.cloud/'
};
const CLIENT = new WD.Builder()
    .usingServer(ASSETS.host)
    .withCapabilities(BROWSER)
    .build();

const base = require('./constants/baseFunctions')(CLIENT, WD);


CLIENT.get(ASSETS.url).then(function(){
    base.waitTime(By.xpath('//*[@id="root"]/div/div/ul/li[1]/a'));
    base.getElement(By.xpath('//*[@id="root"]/div/div/ul/li[1]/a'));
    base.click(By.xpath('//*[@id="root"]/div/div/ul/li[1]/a'));
    //выполнение поставленных задач
    base.waitTime(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/ul/li/a/div'));
    base.getElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/ul/li/a/div'));
    base.click(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div/div/div/ul/li/a/div'));
    //уборка номера
    base.waitTime(By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/div[2]/div[3]/a/img'));
    base.click(By.xpath('//*[@id="root"]/div/div/div[2]/div[1]/div[2]/div[3]/a/img'));
 });

// CLIENT.quit();