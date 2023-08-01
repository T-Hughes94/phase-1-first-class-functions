function receivesAFunction(callback){
    callback()
};

function returnsANamedFunction() {
    return function aNamedFunction(){
   console.log("Hello")
    }
};

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous")
    }
}