var app6 = new Vue({
  el: '#app-6',
  data: {
    message: ''
  }
})
//favorite color controls which result page to show
function myFunction() {
if (document.forms["colors"].color.value == "blue") {
window.location.href = "results.html"; return false;
}
if (document.forms["colors"].color.value == "orange") {
window.location.href = ""; return false;
}
if (document.forms["colors"].color.value == "black") {
window.location.href = ""; return false;
}
if (document.forms["colors"].color.value == "beige") {
window.location.href = "resultstwo.html"; return false;
}
if (document.forms["colors"].color.value == "green") {
window.location.href = ""; return false;
}
if (document.forms["gender"].gender.value == "") {
  alert("You'll have to choose your gender"); return false;
}
if (document.forms["relationships"].relationshipstatus.value == "") {
  alert("You'll have to choose your relationship status"); return false;
}
if (document.forms["heights"].height.value == "") {
  alert("You'll have to choose if you're taller than 170cm"); return false;
}
if (document.forms["rightleft"].handed.value == "") {
  alert("You'll have to choose if you're right or left handed"); return false;
}
if (document.forms["colors"].color.value == "") {
  alert("You'll have to choose your favorite color"); return false;
}
}
