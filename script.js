//const res = require("express/lib/response");

const searchButton = document.getElementById("google_search");
const randomRedirect = document.getElementById("im_feeling_lucky");
const inputBox = document.getElementById('form-search');
const myList = document.getElementById('result-list');


//var result;
//searchButton.addEventListener('click', toResult);

searchButton.addEventListener('click', search);
randomRedirect.addEventListener('click', redirect);


function redirect(event) {
  event.preventDefault();
  let input = inputBox.value;
  fetch(`http://localhost:4000/ran/${input}`)
    .then(resp => resp.text())
    .then(function(text){
      if(text === "No result found"){
        document.getElementById('log').innerHTML = text
      }else{
        window.location.replace(text);
      }
    }
    )
  
}

/*function toResult(event){
  event.preventDefault();
  window.location.replace("result.html");
}*/

function search(event) {
  event.preventDefault();
  let input = inputBox.value;
  fetch(`http://localhost:4000/${input}`)
    .then(resp => resp.json())
    .then(data => {
      var result = JSON.parse(data)
      myList.innerHTML = '';
      for (page of result) {
        let listresult = document.createElement('li');
        listresult.appendChild(
          document.createElement('strong')
        ).textContent = page.title;
        myList.appendChild(listresult);
      }
      //document.getElementById('results').innerHTML = data
      }

    )
}
