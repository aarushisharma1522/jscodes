function myFunction() {
    var x = document.getElementById("mySelect").selectedIndex;
    var y = document.getElementById("mySelect").options;
    y[x].remove()
    
  }
  function myFunc() {
    var a = document.getElementById("mySelect");
    var b = document.createElement("option");
    b.innerHTML = document.getElementById("result").value;
    a.options.add(b, a[0]);
  }