/* ====================================================
    EASY CODING INTERVIEW QUESTIONS
   ====================================================*/
window.onload = function() {
    $('#title h1').html(name);

    // $('#answer').html("here is the number " + num + 
    //                     " converted to roman numerals: " 
    //                     + intToRom(num));


    // Create instance of a linkedlist class
    let L1 = new LinkedList();
    let L2 = new LinkedList();

    // Create an array 

    let array = [1,4,3,6,4,5,6,7,1,3,4];
    let array2 = [2];

    // Populate linked list with data from array

    array.forEach(elem => L1.insertNodeAtTail(elem));
    array2.forEach(elem => L2.insertNodeAtTail(elem));

    // L1.insertNodeAtTail(16);
    // L1.deleteNode(1);
    // L1.deleteNode(5);
    // let string = L1.detectCycle();

    // Create a cycle in linked list
    L1.head.next.next.next.next.next.next = L1.head.next.next.next;
    L2.head.next = L2.head;
    // L2.head.next.next.next = L2.head.next;

    // console.log(L2.printList());

    let string = L2.detectCycle();

    
    // Swap variables

    let int1 = 57;
    let int2 = 76;

    let arr = swap(int1, int2);

    // Clock Angle

    // Fibanacci


    $('#answer').html(fib(100));


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

// name = "Detect cycle in linked list";

// Create class for creating singly linked list (ES6 syntax)

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertNodeAtTail(val){
        let node = {
            data: val,
            next: null
        }

        if (!this.head){
            this.head = node;
        }
        else {
            let n1 = this.head;
            while(n1.next){
                n1 = n1.next;
            }
            n1.next = node;
        }
    }

    deleteNode(val){
        if(!this.head){
            console.log("linked list is empty")
            return;
        }

        if(this.head.data === val){
            this.head = this.head.next;
        }
        else {
            let n1 = this.head;
            let n2 = n1.next;
            while(n2){
                if(n2.data === val){
                    n1.next = n2.next;
                    break;
                }
                else {
                    n1 = n2;
                }
                n2 = n2.next;
            }
        }
    }

    printList(){
        if(!this.head){
            // console.log("linked list is empty")
            return ("linked list is empty");
        }
        else {
            let n1 = this.head;
            let n2 = n1.next;
            
            let string = "head: " + n1.data + " next: ";
            let i = 2;
            // console.log(string);
            while(n2){
                // console.log(n2);
                string += + n2.data + " next: ";
                n1 = n2;
                n2 = n2.next;
                i++;
            }
            // console.log(string);
            return string;
        }
    }

    detectCycle (){
        if(this.head == null || this.head.next == null) {
            return false
        }

        let n1 = this.head;
        let n2 = this.head;

        while (n2 && n2.next){
           n1 = n1.next;
           n2 = n2.next.next;

           if(n1 == n2){
               return true;
           }
        }

        return false;
    }
}


/* ---------------------------------
    Swap two integers with no temporary variables
   ---------------------------------*/

    name = "Swap Two";

    function swap (int1, int2){
        console.log("int1: " + int1);
        console.log("int2: " + int2);

        int1 = int1 + int2;
        int2 = int1 - int2;
        int1 = int1 - int2;

        console.log("int1: " + int1);
        console.log("int2: " + int2);

        let arr = [int1, int2];
        return arr;
    }

/*  ----------------------------------------------------------------------------
    Given two integers, an hour and a minute, write a function to calculate 
    the angle between the two hands on a clock representing that time.
    ----------------------------------------------------------------------------*/

    function clockAngle(hr, min){
        let minAngle = min * 6;
        let hrAngle = (hr * 30) + (min/2);

        if(hrAngle > minAngle) {
            if((hrAngle - minAngle) > 180){
                return (360 - (hrAngle - minAngle))
            }
            else {
                return(hrAngle - minAngle);
            }
        }
        else {
            if((minAngle - hrAngle) > 180){
                return (360 - (minAngle - hrAngle))
            }
            else {
                return (minAngle - hrAngle);
            }
        }
    }

/*  ----------------------------------------------------------------------------
    Given an integer n, write a function to compute the nth Fibonacci number.
    ----------------------------------------------------------------------------*/
function fib (int) {
    if(x < 0){
        return "Error";
    }
    if(x === 0){
        return 0;
    }

    let cache = [0,1];

    function fibCalc (prev1, prev2) {
        cache
    }
}