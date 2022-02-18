
var firebaseConfig = {
    apiKey: "AIzaSyBE1Rvk3NM-OAIPMuMx57nxh5xrdXWNITk",
    authDomain: "testing-b468f.firebaseapp.com",
    databaseURL: "https://testing-b468f-default-rtdb.firebaseio.com",
    projectId: "testing-b468f",
    storageBucket: "testing-b468f.appspot.com",
    messagingSenderId: "204330825189",
    appId: "1:204330825189:web:2a6c3982c7feb20221ab0c"
  };
  
  
   firebase.initializeApp(firebaseConfig);
  



user_name=localStorage.getItem("userName");
room_name=localStorage.getItem("room_name");





function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          message:msg,
          name:user_name,
          like:0
    });
    document.getElementById("msg").value="";
}                                     


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs_up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+button+span_with_tag;
document.getElementById("output").innerHTML+=row;

    } });  }); }
getData();






function updateLike(message_id){
console.log(message_id);
button_id=message_id;

likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
console.log(updated_likes);


firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});
}
function logout (){
    localStorage.removeItem("room_name");
    localStorage.removeItem("userName");
    window.location="index.html";
}