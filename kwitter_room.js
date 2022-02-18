var firebaseConfig = {
  apiKey: "AIzaSyBE1Rvk3NM-OAIPMuMx57nxh5xrdXWNITk",
  authDomain: "testing-b468f.firebaseapp.com",
  databaseURL: "https://testing-b468f-default-rtdb.firebaseio.com",
  projectId: "testing-b468f",
  storageBucket: "testing-b468f.appspot.com",
  messagingSenderId: "204330825189",
  appId: "1:204330825189:web:2a6c3982c7feb20221ab0c"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("userName");
document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";



function addRoom(){
      room_name=document.getElementById("Room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room_names"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("userName");
  window.location="index.html";
}