function start(){
  var cowo = document.getElementById("p1")
  var cewe = document.getElementById("p2")
  var msgCowo = document.getElementById("msg1")
  var msgCewe = document.getElementById("msg2")
  msgCewe.style.display="none"
  msgCowo.style.display="none"
  setTimeout(function(){
    cowo.innerText="Lari bang \n ada meteor"
    msgCowo.style.display="block"
    cowo.style.marginLeft="9px"
    cowo.style.marginTop="-55px"
  },1000)
  setTimeout(function(){
    msgCowo.style.display="none"
    cowo.style.marginLeft="20px"
    cowo.style.marginTop="-50px"
  },3000)
  setTimeout(function(){
    cowo.innerText="Bang ?"
    msgCowo.style.display="block"
  },4000)
  setTimeout(function(){
    msgCowo.style.display="none"
    cowo.style.marginLeft="9px"
    cowo.style.marginTop="-55px"
  },6000)
  setTimeout(function(){
    cewe.innerText="Mada kono\nsekai wa.."
    msgCewe.style.display="block"
    cewe.style.marginLeft="10px"
    cewe.style.marginTop="-60px"
  },7000)
  setTimeout(function(){
    // cowo.innerText="Bang ?"
    msgCewe.style.display="none"
  },10000)
  setTimeout(function(){
    msgCewe.style.display="none"
    cewe.style.marginLeft="9px"
    cewe.style.marginTop="-55px"
  },10000)
  setTimeout(function(){
    cowo.innerText="Anjir wibu"
    msgCowo.style.display="block"
    cowo.style.marginLeft="10px"
    cowo.style.marginTop="-60px"
  },11000)
  setTimeout(function(){
    msgCowo.style.display="none"
  },13000)
}
document.body.addEventListener("keydown",()=>{
  start()
})
setTimeout(function(){
  document.body.innerHTML="<h1>Thengs For Waching</h1>"
  document.body.style.background="none"
  document.body.style.display="flex"
  document.body.style.justifyContent="center"
  document.body.style.alignItems="center"
  document.body.style.width="150vw"
},14000)
