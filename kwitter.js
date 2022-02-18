function adduser(){
    user_name=document.getElementById("biu").value;
    localStorage.setItem("userName",user_name);
    window.location="kwitter_room.html";
    }
    