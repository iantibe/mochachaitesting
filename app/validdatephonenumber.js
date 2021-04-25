
var phonetest = function (inValue) {
    inValue += ""
    inValue = inValue.trim()

    if (inValue === 'null'){
        return false
    }

    if (inValue === 'undefined'){
        return false
    }

    if(inValue === ""){
        return false
    }
    if(inValue.length !== 12){
        return false
    }

    if(inValue.indexOf("-") !== 3){
        return false
    }

    if(inValue.lastIndexOf("-") !== 7){
        return false
    }

    for (let x = 0; x < inValue.length; x++){
        test_value = inValue.charAt(x)

        if( x === 0 || x===1 || x===2){
            if (isNaN(test_value) !== false){
                return false
            }
        }

        if (x === 3 || x ===7){

            if(isNaN(test_value) !== true){
                return false
            }
        }

        if(x === 4 || x === 5 || x===6 || x===8 || x===9 || x===10 || x===11){
            if (isNaN(test_value) !== false){
                return false
            }
        }

    }
    return true
}

module.exports = phonetest;
