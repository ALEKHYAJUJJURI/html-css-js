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

function mainFun(){
let mainEle = document.getElementById('main');
let url = 'https://fakestoreapi.com/products'
fetch(url)
.then(function(response){
  return response.json()
})
.then(function(dataJson){
  console.log(dataJson)
  
  Object.keys(dataJson).map(k=>{
    document.write()
  })
  dataJson.map(d=>{
    let div = document.createElement('div');
    div.classList = 'd-flex justify-content-center';
    div.innerHTML = ` 
      <div class="card w-50 mb-2">
    <div class="card-header">
      <span>${d.title}</span>
    </div>
    <div class="card-body">
      <img src='${d.image}' width="100px"/>
    </div>
    <div class="card-footer p-2">
      <div><b>${d.price}</b><span class="bg-success mt-2 p-2 rounded text-white"><span>${d.rating.rate}</span> <span class="pe-2 bi bi-star-fill">${d.rating.count} reviews</span></span></div>
    </div>
  </div>
    `
    mainEle.appendChild(div)
  })
})

}


function bodyLoad(){
LoadCities();
mainFun();
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
