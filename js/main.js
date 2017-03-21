alert("hi guy")
function checkname (username){
  if(username=="Administrator"){
    console.log("welcome authenticated user")
  }
  else{
    console.log("access denied")
  }


}
checkname("Administrator")
checkname("Lewis")
