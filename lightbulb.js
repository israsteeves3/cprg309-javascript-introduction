document.querySelector("#light_on").addEventListener('click', function(){
    console.log("is your refrigerator running?"); //can comment these out as you go to keep console log neater to be able to quickly check new things
    document.querySelector("#status").textContent = "it is Light &trade; " //targeting the h2 with id of status so we can change the text
    document.querySelector("#lightbulb").src="lightbulb_on.webp"; //src is being targeted here, you could just as easily target the height or width if you wanted
    document.querySelector("#lightbulb").alt="img of a light bulb lit up";


    //changing colors bg and text to light. we are modifying css with js. there are better ways to do this but this is the easiest method. can cause problems later. look into
    //other methods
    document.body.style.backgroundColor="#808080";
    document.body.style.color="#000000";
    document.querySelector("#light_on").style.display="none";
    document.querySelector("#light_off").style.display="initial";
})

document.querySelector("#light_off").addEventListener('click',function(){
    console.log("Hey who turned out the light?");
    document.querySelector("#status").textContent = "Lights are off";
    document.querySelector("#lightbulb").src="lightbulb_off.webp";
    document.querySelector("#lightbulb").alt="An illustration of a lightbulb that is turned off";
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#333";

    document.querySelector("#light_on").style.display="initial";
    document.querySelector("#light_off").style.display="none";
})

//document.querySelector this is a different way to target this, its the most modern method. use this rather than document.getElementById
//tap on the phone is similar as the click on desktop. they are different but can be used interchangeably