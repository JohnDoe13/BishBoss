/*{ <script>
    Add Eventlistener
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}

Example that works.
document.getElementById("mybtn").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Now?";
});
</script> */

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  for (
    let ii = 0;
    ii < document.getElementById("myUL").childElementCount - 1;
    ii++
  ) {
    //console.log("Items left in the list:");
    document.getElementById("numOfItems").innerHTML = ii;
  }
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
    document.getElementById("myUL").childElementCount - 1;
    document.getElementById("numOfItems").innerHTML = i;
  };

  for (
    let ii = 0;
    ii < document.getElementById("myUL").childElementCount - 1;
    i++
  ) {
    //console.log("Items added to list:");
    document.getElementById("numOfItems").innerHTML = ii;
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
document.getElementById("addId").addEventListener("click", newElement);
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  /* let i = 0;
    i < document.getElementById("myUL").childElementCount - 1;
    i++
  ) {
    //console.log("Items added to list:");
    document.getElementById("numOfItems").innerHTML = i;
  } */

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
  for (
    let i = 0;
    i < document.getElementById("myUL").childElementCount + 1;
    i++
  ) {
    //console.log("Items added to list:");
    document.getElementById("numOfItems").innerHTML = i;
  }
}
