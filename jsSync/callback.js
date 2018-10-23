      /* ******************** SIMPLE CALLBACK ******************** */
      var simpleCallback = function( passedNumber, callback){
        console.log("[cSimple-Main] inside simplePromise... you passed: " + passedNumber);
        $("#callbackLog").append("<br/> [cSimple-Main] inside simplePromise... you passed: " + passedNumber);
        setTimeout(function(){ 
            console.log("[cSimple-Main] we will call the callback function (which is part of the caller definition) now");
            $("#callbackLog").append("<br/> [cSimple-Main] we will call the callback function (which is part of the caller definition) now");
            var resultNum = passedNumber * 10;
            var resultval = "success-from-the-function: " +  resultNum;
            callback(null,resultval);
        }, 1000);
    };

    simpleCallback(7,function(errVal, dataVal){
        console.log("[cSimple-callback] we are inside the callback function...");
        $("#callbackLog").append("<br/> [cSimple-callback] we are inside the callback function...");
        if (errVal) {
            console.log("[cSimple-callback] we got an error...");
            $("#callbackLog").append("<br/> [cSimple-callback] we got an error...");
        } else {
            console.log("[cSimple-callback] we got an value: " + dataVal);
            $("#callbackLog").append("<br/> [cSimple-callback] we got an value: " + dataVal);
        }
    });
    
    /* ******************** CALLBACK DEFINED SEPARATELY ******************** */
    var explicitCallback = function( passedNumber, callback){
        console.log("[cExplicit-Main] inside explicitCallback... you passed: " + passedNumber);
        $("#callbackLog").append("<br/> [cExplicit-Main] inside explicitCallback... you passed: " + passedNumber);
        setTimeout(function(){ 
            console.log("[cExplicit-Main] we will call the callback function (which is explicitly defined) now");
            $("#callbackLog").append("<br/> [cExplicit-Main] we will call the callback function (which is explicitly defined) now");
            callback();
        }, 1000);
    };

    var callbackMethodDefinition = function(){
        console.log("[cExplicit-callback] we are inside the explicitly defined callback function...");
        $("#callbackLog").append("<br/> [cExplicit-callback] we are inside the explicitly defined callback function...");
    }
    
    setTimeout(function(){ 
        explicitCallback(17, callbackMethodDefinition);
    }, 3000);


    /* ******************** CALLBACK DEFINED SEPARATELY with VALUES ******************** */
    var explicitCallbackWithValues = function( passedNumber, callback){
        console.log("[cExplicit-Val-Main] inside explicitCallback... you passed: " + passedNumber);
        $("#callbackLog").append("<br/> [cExplicit-Val-Main] inside explicitCallback... you passed: " + passedNumber);
        setTimeout(function(){ 
            console.log("[cExplicit-Val-Main] we will call the callback function (which is explicitly defined) now");
            $("#callbackLog").append("<br/> [cExplicit-Val-Main] we will call the callback function (which is explicitly defined) now");
            var resultNum = passedNumber * 10;
            var resultval = "success-from-the-function-for-explicit-caller: " +  resultNum;
            callback(null,resultval);
        }, 1000);
    };

    var callbackMethodDefinitionWithValues = function(errVal2, dataVal2){
        console.log("[cExplicit-Val-callback] we are inside the explicitly defined callback function...");
        $("#callbackLog").append("<br/> [cExplicit-Val-callback] we are inside the explicitly defined callback function...");
        if (errVal2) {
            console.log("[cExplicit-Val-callback] we got an error...");
            $("#callbackLog").append("<br/> [cExplicit-Val-callback] we got an error...");
        } else {
            console.log("[cExplicit-Val-callback] we got an value: " + dataVal2);
            $("#callbackLog").append("<br/> [cExplicit-Val-callback] we got an value: " + dataVal2);
        }
    }
    
    setTimeout(function(){ 
        explicitCallbackWithValues(27, callbackMethodDefinitionWithValues);
    }, 6000);