export const MunkeyReact = (function MunkeyReact () {

    var publicAPI = {}

    return publicAPI = {
        logMessage,
        createElement
    }

    function createElement(element) {
        // TODO implement createElement functionality
        return `<div> ${element} </div>`
    }


    function logMessage() {
        console.log("Hello World")
    }

})()