"use strict";

let form = document.forms.learn;
let field = document.querySelector('div.content');

form.task1.onclick = function () {
        // let div = document.createElement('div');
        let name = prompt('Who are you?');
        let pass;
        if (name == null)
            return alert("Cancel!");
        else if (name === "admin")
            pass = prompt("Pass?");

        else return alert("I do not know you!");


        if (pass == null)
            return alert("Cancel!");
        else if (pass === "master")
            alert("Welcome!");
        else alert("Wrong password!");


};

form.task2.onclick = function () {
    let div = document.createElement('div');
    let mas =[];
    let j;

    for (let i = 1; i <= +form.number.value; i++){
        // let j = i;
        for (j = (i - 1); j > 1; j--){
            if (i % j === 0)
                break;
        }
        if (j === 1)
            mas.push(i)
    }
    console.log(mas);
    div.innerHTML = mas.join();
    field.append(div);
};
