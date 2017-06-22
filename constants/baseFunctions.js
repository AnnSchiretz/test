module.exports = function(CLIENT, WD){
    function wait(timeout, element) {
        CLIENT.wait(WD.until.elementLocated(element),timeout);
    }

    function getElement(element) {
        return CLIENT.findElement(element);
    }

    function click(element) {
        CLIENT.findElement(element).click();
    }

    return {
        wait: wait,
        getElement: getElement,
        click: click
    };
};
