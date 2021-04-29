let inputdescription = document.getElementById('inputdescription');
let time = document.getElementById('inputdate');
let amount = document.getElementById('inputamount');
let drmike = document.getElementById('drmike');
let submit = document.getElementById('submit');

submit.addEventListener('click',function() {
    var paragraph= document.createElement('p');
    paragraph.innerText = inputdescription.value.concat(" . . . . . . . ");
    paragraph.innerText+=time.value.concat(" . . . . . . . ");
    paragraph.innerText+=amount.value.concat("$");
    var button = document.createElement("button");
    button.innerText="Remove";
    paragraph.innerText+=button.value;
    drmike.appendChild(paragraph);
    
    drmike.appendChild(button);
    button.addEventListener('click',function() {
        drmike.removeChild(button);
        drmike.removeChild(paragraph);
        alert("expense removed");
        inputdescription.value="";
        time.value="";
        amount.value="";

    });
});




