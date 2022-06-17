
function Create(){
    let container = document.getElementById("container");
    
    container.innerHTML=`<form action="">
    <h1>Age To Days</h1>
    <label>Age:
    <input id="Age" type="date" placeholder="age">
     
    </input>
    <br>
    <br>
    </label>
    <label>Days:
         <input id="Days" type="text" placeholder="day">
         
        </input>
        </label>
        <br>
        <button id="Button" type="button" onclick="Converter()">Converter</button>
    </form>`
    
    }
    
    Create()

function Converter(){
    let age = document.getElementById('Age').value;
    let day= document.getElementById('Days');
    let calculator = Math.floor((new Date() - new Date(age)) / (1000 * 60 * 60 * 24));

    day.value= calculator;
    
}
