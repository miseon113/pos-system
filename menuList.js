var showMenuList =function(){
  var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "test.jsp");
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("Context").innerHTML = xhttp.responseText;
      }
    };
    xhttp.send();
}
