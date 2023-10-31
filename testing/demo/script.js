const counter = (()=>{
    let counter = 3;
    console.log("initial counter: " + counter);
    return ()=>{
        counter-=1;
        if(counter <= 0) {console.log("Not enough credist..")}
        else {console.log("credits left: " + counter)}
    }
})();

counter()
counter()
counter()
counter()
counter()