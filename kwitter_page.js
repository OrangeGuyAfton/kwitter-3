var firebaseConfig = {
      apiKey: "AIzaSyBpirPt0hiEi7kzK1XZYsgHjBH_fW4WkwE",
      authDomain: "kwitter-81dda.firebaseapp.com",
      databaseURL: "https://kwitter-81dda-default-rtdb.firebaseio.com",
      projectId: "kwitter-81dda",
      storageBucket: "kwitter-81dda.appspot.com",
      messagingSenderId: "924350840645",
      appId: "1:924350840645:web:2c1010bd2b50807440c82c",
      measurementId: "G-E8WRFF4KGR"
    };

    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name");

    function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

