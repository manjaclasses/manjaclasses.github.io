// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBDWDjrEOFGltyphe8_ypLdKKjIVtEJ9r4",
  authDomain: "server-98ae7.firebaseapp.com",
  databaseURL:
    "https://server-98ae7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "server-98ae7",
  storageBucket: "server-98ae7.appspot.com",
  messagingSenderId: "720177014991",
  appId: "1:720177014991:web:f5b143cff4f3773051afba",
  measurementId: "G-KC369EY357",
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase storage service
var storage = firebase.storage();

// Create a function to upload multiple files
function uploadFiles() {
  var files = document.getElementById("fileInput").files;
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var storageRef = storage.ref();
    var fileRef = storageRef.child(file.name);

    fileRef.put(file).then(function(snapshot) {
      alert("File uploaded successfully!");
    });
  }
}
