// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAaQK3upLbjm47qA6EHPlzjQql2WOTMxrg",
    authDomain: "webchat-be983.firebaseapp.com",
    databaseURL: "https://webchat-be983-default-rtdb.firebaseio.com",
    projectId: "webchat-be983",
    storageBucket: "webchat-be983.appspot.com",
    messagingSenderId: "56666163388",
    appId: "1:56666163388:web:4fc43ebae200e687b1e8b9",
    measurementId: "G-MZ0KJY7ZBM"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



