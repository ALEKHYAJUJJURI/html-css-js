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




var data = ['delhi','hyd']
function LoadCities(){
  document.getElementById('lstSelect').innerHTML = ""
  data.map(city=>{
    let opt = document.createElement('option');
    opt.value = city 
    opt.text = city 
    document.getElementById('lstSelect').appendChild(opt)
  })
  document.getElementById('cityCount').innerHTML = `Total number of Cities : ${data.length}`
}
function bodyLoad(){
  LoadCities();
}

function AddClick(){
  var inputEle = document.getElementById('inputTxt').value;
 if(inputEle===""){
  document.getElementById('errorMssg').innerHTML = "Please Enter city".fontcolor('red')
 } else{
  data.push(inputEle)
  LoadCities()
  alert(`${inputEle} is successfully added.`)
  document.getElementById('errorMssg').innerHTML =""
  document.getElementById('inputTxt').value = ""
 }
 
}
function SortAsc(){
  data.sort();
  LoadCities();
}
function SortDsc(){
  data.sort();
  data.reverse();
  LoadCities();
}
function RemoveClick(){
  console.log(document.getElementById('lstSelect').value) 
  var selectedCity = document.getElementById('lstSelect').value; 
  var indexOfCity = data.indexOf(selectedCity) 
  data.splice(indexOfCity,1);
  LoadCities()
  
}
function ClearClick(){
data.length = 0
LoadCities()
}