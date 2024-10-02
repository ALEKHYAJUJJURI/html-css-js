function onSubmitClickFun(){
    var regExp = /\+\(1\)\s\(\d{3}\)\s\d{4}-\d{4}/
  var num=  document.getElementById('phoneNum').value;
  var error = document.getElementById('errorMsg')
  if(num.match(regExp)){
    error.innerHTML = "Success".fontcolor('green')
  } else{
    if(num==""){
        error.innerHTML = "Enter Phone Number".fontcolor('red')
    }
    else{
        error.innerHTML = "please! enter valid Number".fontcolor('red')
    }
  }
}