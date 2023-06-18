let getcolor=() =>{
    const randomnumber=Math.floor(Math.random()*16777215);
    const randomcolor="#"+randomnumber.toString(16);
    
    console.log(randomnumber,randomcolor);
    document.body.style.backgroundColor=randomcolor;
    document.getElementById("colorcode").innerHTML=randomcolor; 

    // code for automatically copying the code of color in clipboard
    navigator.clipboard.writeText(randomcolor);
}
// event call 
document.getElementById("btn").addEventListener("click",getcolor);


// initial call for generating color
getcolor();