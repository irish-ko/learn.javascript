"use strict";

let form = document.forms.learn;
let field = document.querySelector('div.content');

function print(key,val) {
    // console.log(sad);
    let div = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerText = key.toLowerCase();
    btn.onclick = () => window[key]();
    div.classList = key.toLowerCase();
    div.innerText = val;
    div.innerHTML += '<br>';
    div.append(btn);
    field.appendChild(div);

}

form.task1.onclick = function () {
        // let div = document.createElement('div');
        field.innerHTML = '';
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

function whileFor() {

    let div = document.createElement('div');
    let mas =[];
    let j;

    for (let i = 1; i <= +form.number.value; i++){
        // let j = i;
        // console.log(i >> 1, i);
        for (j = (i >> 1); j > 1; j--){
            if (i % j === 0)
                break;
        }
        if (j === 1)
            mas.push(i)
    }
    console.log(mas);
    div.innerHTML = mas.join();
    field.append(div);
}

// window['whileFor']()

form.task2.onclick = function () {
    field.innerHTML = '';


    let a = {
        whileFor: "Напишите код, который выводит все простые числа из интервала от 2 до n."
    };

    // console.log(this);



    for (let mas of Object.entries(a))
        print(mas[0], mas[1]);
};

