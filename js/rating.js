function rate() {
  let elements = document.getElementsByTagName("input");
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].value == "") {
      alert('Please enter a value between 1 and 5 for all skills');
      return;
    } else {
      let int = parseInt(elements[i].value);
      if(int < 1 || int > 5) {
        alert("Please enter a value between 1 and 5 for all skills");
        return;
      } else {
        total += int;
      }
    }
  }
  total = total / 7;
  document.getElementById("level").innerHTML = "Your pickleball rating is " + total.toFixed(2);
}