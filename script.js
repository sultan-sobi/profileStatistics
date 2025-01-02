const countersE=document.querySelectorAll(".counter");

countersE.forEach((counterE)=>{
    counterE.innerHTML="0";
  
    incrementCounter();
    function incrementCounter(){
        currentData= +counterE.innerHTML;
        
        
        let dataCeil= counterE.getAttribute("data-ceil");
        const increment=dataCeil/15;
        currentData=Math.floor(currentData+increment);
        
        if(currentData<dataCeil){
            counterE.innerHTML=currentData;
           setTimeout(incrementCounter,100);
        }else{
             counterE.innerHTML=dataCeil;
        }
    }
    
})