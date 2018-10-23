
    /* ******************** SIMPLE PROMISE ******************** */
    var simplePromise = new Promise(function(resolve, reject){
        setTimeout(function(){ 
            $("#promiseLog").append("<br/> ----------------------------------------------");
            console.log("[Simple-Main] inside simplePromise");
            $("#promiseLog").append("<br/> [Simple-Main] inside simplePromise");
            /* Since we created a new Promise, we had to either return a RESOLVE or a REJECT */
            resolve(1);
        }, 2000);
    });

    simplePromise
    .then(function(val){
        console.log("[Simple-Then] inside then() of simplePromiseCaller with: "+ val);
        $("#promiseLog").append("<br/> [Simple-Then] inside then() of simplePromiseCaller with: "+ val);
    })
    .then(function(){
        console.log("[Simple-Then] 2nd then(), which will be asynchronous ");
        $("#promiseLog").append("<br/> [Simple-Then] 2nd then(), which will be asynchronous ");
    });

    /* ******************** OLD STYLE PROMISE ******************** */
    var simplePromiseFunction = function(passedNumber){
            return new Promise( function(resolve, reject){
                setTimeout(function(){
                    $("#promiseLog").append("<br/> ----------------------------------------------");
                    console.log("[Simple2-Main] inside simplePromiseFunction... you passed: " + passedNumber);
                    $("#promiseLog").append("<br/> [Simple2-Main] inside simplePromiseFunction... you passed: " + passedNumber);
                    var returnedNum = passedNumber*10;
                    var resultval = "returned promise: " + returnedNum;
                    resolve(resultval);
                },3000)
            })
        };
    
    simplePromiseFunction(3)
    .then(function(responseVal){
        console.log("[Simple2-caller] we got the calculated value of:" + responseVal);
        $("#promiseLog").append("<br/> [Simple2-caller] we got the calculated value of:" + responseVal);
        }   
    );

    /* ******************** ABSTRACT PROMISE ******************** */
    var abstractPromise = function(){
        $("#promiseLog").append("<br/> ----------------------------------------------");
        console.log("[Abstract-Main] inside abstractPromise");
        $("#promiseLog").append("<br/> [Abstract-Main] inside abstractPromise");
        /* This was just a normal function, to make it return a PROMISE, we had to do PROMISE.RESOLVE */
        return Promise.resolve(2);
    }

    var letsNotDoThen = abstractPromise();
    console.log("[Abstract-Test-Start] since we didn't do then()... we should receive a promise object");
    $("#promiseLog").append("<br/> [Abstract-Test-Start] since we didn't do then()... we should receive a promise object");
    console.log(letsNotDoThen);
    $("#promiseLog").append(letsNotDoThen);
    console.log("[Abstract-Test-end] we should have used then() for the received promise object");
    $("#promiseLog").append("<br/> [Abstract-Test-end] we should have used then() for the received promise object");

    abstractPromise()
    .then(function(val){
        console.log("[Abstract-Then] inside then() of abstractPromise with: "+ val);
        $("#promiseLog").append("<br/> [Abstract-Then] inside then() of abstractPromise with: "+ val);
        return val*2;
    })
    .then(function(val2){
        console.log("[Abstract-Then] this is the 2nd then() of abstractPromise with: "+ val2);
        $("#promiseLog").append("<br/> [Abstract-Then] this is the 2nd then() of abstractPromise with: "+ val2);
        return val2*2;
    })
    .then(function(val3){
        console.log("[Abstract-Then] this is the 2nd then() of abstractPromise with: " + val3);
        console.log("[Abstract-Then] this is the 2nd then() of abstractPromise with: " + val3);
    });

    /* ******************** SIMPLE PROMISE (CHAINING) ******************** */
    var simplePromiseTiming = new Promise(function(resolve, reject){
        setTimeout(function(){ 
            $("#promiseLog").append("<br/> ----------------------------------------------");
            console.log("[Timer-Main] inside simplePromiseTiming");
            $("#promiseLog").append("<br/> [Timer-Main] inside simplePromiseTiming");
            resolve(3);
        }, 5000);
    });

    var simplePromiseTimingCaller = function(){
        simplePromiseTiming
        .then(function(val){
            console.log("[Timer-Then] inside then() of simplePromiseTimingCaller with: "+ val);
            $("#promiseLog").append("<br/> [Timer-Then] inside then() of simplePromiseTimingCaller with: "+ val);
            return val*2;
        })
        .then(function(val2){
            console.log("[Timer-Then] this is the 2nd then() of simplePromiseTimingCaller with: " + val2);
            $("#promiseLog").append("<br/> [Timer-Then] this is the 2nd then() of simplePromiseTimingCaller with: " + val2);
            return val2*2;
        })
        .then(function(val3){
            console.log("[Timer-Then] this is the 2nd then() of simplePromiseTimingCaller with: " + val3);
            $("#promiseLog").append("<br/> [Timer-Then] this is the 2nd then() of simplePromiseTimingCaller with: " + val3);
        });
    }

    simplePromiseTimingCaller()
