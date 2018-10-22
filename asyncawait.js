
/* ******************** OLD STYLE PROMISE ******************** */
var simplePromiseAAFunction = function(passedNumber){
    console.log("[aaSimple-Main] inside simplePromiseAAFunction... you passed: " + passedNumber);
    $("#aaLog1").append("<br/> [aaSimple-Main] inside simplePromiseAAFunction... you passed: " + passedNumber);
    var returnedNum = passedNumber*10;
    var resultval = "returned promise: " + returnedNum;
    return Promise.resolve(resultval);
};

async function simplePromiseAAFunctionCaller(){
    $("#aaLog1").append("<br/> -------------------------------------------- ");
    const simplePromiseAAFunctionCaller = await simplePromiseAAFunction(3);
    console.log("[aaSimple-caller] we got the calculated value of:" + simplePromiseAAFunctionCaller);
    $("#aaLog1").append("<br/> [aaSimple-caller] we got the calculated value of:" + simplePromiseAAFunctionCaller);
};

simplePromiseAAFunctionCaller();


/* ******************** ASYNC AWAIT ******************** */
var firstAAFunction = function(passedNumber){
    return new Promise( function(resolve, reject){
        setTimeout(function(){
            $("#aaLog").append("<br/> -------------------------------------------- ");
            console.log("[aaFirst-Main] inside firstAAFunction... you passed: " + passedNumber);
            $("#aaLog").append("<br/> [aaFirst-Main] inside firstAAFunction... you passed: " + passedNumber);
            var returnedNum = passedNumber*20;
            var resultval = "returned promise: " + returnedNum;
            resolve(resultval);
        },4000)
    })
};

var runAfterPrevious = function(resultantVal){
    console.log("[aaFirst-after] inside runAfterPrevious : " + resultantVal);
    $("#aaLog").append("<br/> [aaFirst-after] inside runAfterPrevious : " + resultantVal);
}

async function AACaller(){
    const AACaller = await firstAAFunction(4)
    runAfterPrevious(AACaller);
    console.log("[aaFirst-after] last line: " + AACaller);
    $("#aaLog").append("<br/> [aaFirst-after] last line: " + AACaller);
}

AACaller();