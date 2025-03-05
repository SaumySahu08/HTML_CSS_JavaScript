function calcAmount(){
    let p,r,t,iamt,tamt;
    p=+pamt.value;
    r=+roi.value;
    t=+time.value;
    iamt=p*t*r/100;
    tamt=p+iamt;

    intAmt.innerHTML="interest Amount &#8377;"+iamt;
    toAmt.innerHTML="total Amount &#8377;"+tamt;
}