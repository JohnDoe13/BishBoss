document.getElementById("clickMe").addEventListener("click", whipit);
document.getElementById("clicksu").addEventListener("mouseover", whipit2);
document.getElementById("clickwa").addEventListener("click", whipit3);
document.getElementById("ce").addEventListener("click", cElement);
function whipit() {
  document.getElementById("pid").innerHTML = "Hope this works";
}
function whipit2() {
  document.getElementById("pid2").innerHTML = "Success";
}
function whipit3() {
  document.getElementById("pid3").innerHTML = "Warning";
}

function cElement() {
  let item = prompt("Add item to list.");

  //Create object UL with name myUL
  let myUL = document.createElement("UL");
  //set id to myUL
  myUL.setAttribute("id", "myUL");
  document.body.appendChild(myUL);

  //Create ListItem
  let myLI = document.createElement("LI");

  //Add what you wrote in Prompt i.e. Item to Textnode
  let myItem = document.createTextNode(item);

  //Add item to list (myLI)
  myLI.appendChild(myItem);

  //Append ListItem to List
  document.getElementById("myUL").appendChild(myLI);
    for (let i = 0; i < document.getElementById("myUL").childElementCount + 1; i++)
    {//console.log("Items added to list:");
        document.getElementById("itemcount").innerText = i;
  }
  //  icount = icount + 1;
  //console.log("Items added to list:");
  //let isum = document.getElementById("itemcount").innerHTML = icount;
  //document.getElementById("itemcount").value=isum;
}
/* function myFunction() {
  let x = document.createElement("UL");
  x.setAttribute("id", "myUL");
  document.body.appendChild(x);

  Create ListItem

  let y = document.createElement("LI");
  let t = document.createTextNode("Tea");
  y.appendChild(t);
  document.getElementById("myUL").appendChild(y);
} */
