module.exports = function(CLIENT, WD){
    function wait(timeout, element) {
        CLIENT.wait(WD.until.elementLocated(element),timeout);
    }

    function getElement(element) {
        CLIENT.findElement(element);
    }

    function click(element) {
        getElement(element);
        CLIENT.findElement(element);
        click();
    }
    function waitTime (element) {
        CLIENT.wait(WD.until.elementLocated(element));
    }

    return {
        wait: wait,
        getElement: getElement,
        click: click,
        waitTime: waitTime
    };

};