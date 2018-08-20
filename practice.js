/* ====================================================
    EASY CODING INTERVIEW QUESTIONS
   ====================================================*/
window.onload = function() {
    $('#title h1').html(name);

    $('#answer').html("here is the number " + num + 
                        " converted to roman numerals: " 
                        + intToRom(num));

}

let name = '';

/* ---------------------------------
    Integer to Roman Numerals
   ---------------------------------*/

// name = "Integer to Roman Numerals";
let num = 366;

function intToRom(int) {
    let numerals = ["M", "CM", "D", "CD", "C", "XC", 
                    "L","XL","X","IX","V","IV","I" ]
    let values = [1000, 900, 500, 400, 100, 90, 50,
                    40, 10, 9, 5, 4, 1]
    let rom = '';
    let i = 0;

    if(int > 3999 || int < 1){
        return "Out of scope"
    }

    while(int > 0){
        if(int - values[i] >= 0){
            rom = rom + numerals[i];
            int -= values[i];
        }
        else{
            i++;
        }
    }

    return rom;
}

/* ---------------------------------
    Detect cycle in linked list
   ---------------------------------*/

name = "Detect cycle in linked list";

let list = {
    length: 3,
    head: {
        value: 3,
        next: {
            value: 2,
            next: {
                value: 1,
                next: null 
            }
        }
    }
}

// for (var key in list.head)

