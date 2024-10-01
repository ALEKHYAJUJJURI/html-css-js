function abc(){
    window.document.images[0].src="images/image_2.jpg";
    window.document.forms[0].elements[1].value='Register';
    window.document.forms[1].elements[1].value='Login';
    val = location.search
    document.getElementById('loaction').innerHTML = val
}
function xyz(){
    val =  prompt('enter text','mobiles|shoes')
     document.getElementById('msg').innerHTML = val
 }
 
function detailsForm(){
    document.getElementById('uName').innerHTML = document.getElementById('userName').value;
    document.getElementById('pWord').innerHTML = document.getElementById('password').value;
    document.getElementById('gend').innerHTML = document.getElementById('gender').value;
    let stock = ''
    if(document.getElementById('chkStock').checked){
        stock = "Available"
    }
    else{
        stock = "Not available"
    }
    document.getElementById('stock').innerHTML = stock;
    document.getElementById('formDis').style.display = 'block';
    document.getElementById('addBtn').innerHTML = "Save"
    document.getElementById('addBtn').classList = 'btn btn-warning'
    document.getElementById('clickBtn').style.display = "none"
}