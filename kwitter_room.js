
var firebaseConfig = {
      apiKey: "AIzaSyDF-OI3zNRHh8Uwz4vdBe4Xg-sT7IssNxc",
      authDomain: "kwitter-56538.firebaseapp.com",
      databaseURL: "https://kwitter-56538-default-rtdb.firebaseio.com",
      projectId: "kwitter-56538",
      storageBucket: "kwitter-56538.appspot.com",
      messagingSenderId: "216895115594",
      appId: "1:216895115594:web:b2fc0e6e974d97d614b1b3"
    };
    
    // Initialize Firebase
     firebase. initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
