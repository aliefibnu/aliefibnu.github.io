function devtoolIsOpening() {
  // console.clear();
  let before = new Date().getTime();
  debugger;
  let after = new Date().getTime();
  if (after - before > 200) {
      alert(" Dont open Developer Tools. ");
  }
  setTimeout(devtoolIsOpening, 100);
}
function returnFalse(){
  let body = document.getElementById("body")
  body.addEventListener("keydown",(event)=>{
    body.style.display="block"
    body.style.background="white"
    body.innerHTML=`DONT CLICK KEY : ${event.key}`;
  })
}
function getAge(Lahir){
  var dob = Lahir.replace("-","");
  var year = Number(dob.substr(0, 4));
  var month = Number(dob.substr(4, 2)) - 1;
  var day = Number(dob.substr(6, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
  }
  return age;
}
function dbClick(){
  let body = document.getElementById("body")
  body.style.display="block"
  body.style.background="white"
  body.innerHTML="<h1>WARNING !</h1><br><h3>NO DOUBLE CLICK / RIGHT CLICK ALOWWED</h3>"
}
devtoolIsOpening();
returnFalse()