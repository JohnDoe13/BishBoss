/* for (let i = 0; i <= 100; i++){
      console.log(i);
      if (i % 3 == 0) {
        console.log('${i} is bish');
    } else {
        console.log('${i} is Bosh');
    }
   
}   */
/* let age = 25;
//const num = prompt('Enter a number:')
for (i = 0; i < 100; i++) {
    console.log('i am ${age} years old');
} */
/* let ckey = Event.charCode;
console.log(ckey);
let d = document.querySelector("div");
console.log(d);
document.getElementById("WTF").addEventListener("click", test);
console.log(p2);
document.getElementById("tst").addEventListener("click", afternoon);
document.getElementById("tst").addEventListener("mouseover", test);
document.getElementById("evenodd").addEventListener("click", sunday);
function afternoon() {
  document.getElementById("p2").innerHTML = "'what's up?'";
}

function test() {
  document.getElementById("p2").innerHTML = "You have changed";
}
function tea() {
  // alert('Tea time!');
}
 */

/* This all works 
 Jag vet att jag inte fått ihop formeln ordentligt.
Vill ju lista den på flera rader. Men jag har iaf lagt en kommentar här 
hur jag tänker mig att det skall se ut.
let iCounter = prompt("Enter times to loop.");
let numbertoverify = prompt("Number to verify?");
for (let i = 0; i < iCounter;i++){} denna vill jag använda mig av att loop:a runt  */
document.getElementById("evenodd").addEventListener("click", evenorodd);
function evenorodd() {
  // document.getElementById("p2").innerHTML = "Sunday bloody Sunday";
  let num = prompt("Type a number.");
  for (let i = 0; i < num; i++) {
    const result = i % 2 === 0;
    if (result == false) {
      document.getElementById("night").innerHTML = `${num} is Even`;
    } else {
      document.getElementById("night").innerHTML = `${num} is Odd`;
    }
    //document.getElementById("night").innerHTML = i;
  }
}

/* document.getElementById("btnTest").addEventListener("click", addListItems); */
document.getElementById("btnTest").addEventListener("click", addListItems);

/* document.getElementById("herewego").addEventListener("click", wtf);
function wtf() {
  alert("wtf");
} */

function addListItems() {
  let iCount = prompt("Loops?");
  //let number = prompt("Number(s) to evaluate?");
  for (let i = 0; i < iCount; i++) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let children = ul.children.length + 1;
    li.setAttribute("id", "Element" + children);
    li.appendChild(document.createTextNode("Element " + children));
    ul.appendChild(li);
  }

  //let iCounter = prompt("Loops?");
  /* for (let i = 0; i < iCounter; i++) {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let children = ul.children.length + 1;
    li.setAttribute("id", "Element" + children);
    li.appendChild(document.createTextNode("Element " + children));
  }  */
  //console.log("hello");
}

/* function isEven(n) {
    let num =prompt("Input a number:");
    //let number2 = prompt("Input the secound number:");
    if (isNAN(num)) {
      console.log("Non-integer passed to isEven()");
      return false;
    }
    // parse it as int to weed out floats
    if (num !== parseInt(num)) {
      console.log("Non-integer passed to isEven()");
      return false;
    }
    if (num === 0) return true;
    else if
        (num === 1) return false;
    else if
        (num < 0) return isEven(-num);
    else
        return isEven(num - 2);
    document.getElementById("p2").innerHTML = isEven(54);
} */
