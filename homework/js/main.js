function loadUsers() {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       var data = []
       data = JSON.parse(this.responseText)

       var elementData = document.getElementById('nameList');
      data.forEach(function(element) {
         var firstname = document.createElement('li');
         firstname.innerHTML = element.name;
         firstname.className = 'bg'
         elementData.appendChild(firstname,'<button class="btn-styled" type="button">Press me</button>' );
      }
      )
   };
}
   xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
   xhttp.send();
}

function getUsers() {

    let url = "https://jsonplaceholder.typicode.com/users";
   fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
                   let output = ' ';
            
                   output += '<ul>';
                   users.forEach(function(user) {
                       output += `
                           <li value='1' class='center'>
                               ${user.name}
                           <br>
                           <div id="editBox1">
                           <button onclick="EditBox()" class="edit">Edit</button>
                           <button onclick="deleteUser(id)" id="Deletebutton" class="delete">Delete</button></br>
                           <div class="container" style="width: 300px">
                           <input type="text" id="input" style="display : none;" class="input"> </input>
                           <button onclick="PutPost()" id="inputButton" style="display : none;" class="Savebutton">Save</button>
                           </div>
                           </div>
                           </li>
                       `;
                        
                   }

                   );
                   output += '</ul>'
                   document.getElementById("listname").innerHTML = output;
                    inputButton.onclick = () => PutPost(url, document.getElementById('input').value,myJSON.id );
                    Deletebutton.onclick = () => deleteUser(myJSON.id);

       }
       );
  
}

function EditBox(){

 var x = document.getElementById("input");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var y = document.getElementById("inputButton");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

}

function PutPost(name,id){

var name = document.getElementById('input').value;
var id1 = 1;
let url1 = "https://jsonplaceholder.typicode.com/users" + "/" + id1;


 fetch(url1, { method: 'PUT' })
  .then((response) => response.json())
  .then((json) => console.log(json));

 var x = document.getElementById("input");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


 var y = document.getElementById("inputButton");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

}

function deleteUser(id) {
var id = 1;
  let url = "https://jsonplaceholder.typicode.com/users" + "/" + id;
  fetch(url, { method: 'DELETE' })
        .then((json) => console.log(json));
}
