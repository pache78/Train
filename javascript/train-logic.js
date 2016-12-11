/* global $,firebase,moment */

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDT94D60deng0Z_tbZUr6_rO4cIgYtNZ8c",
    authDomain: "train-b9a46.firebaseapp.com",
    databaseURL: "https://train-b9a46.firebaseio.com",
    storageBucket: "train-b9a46.appspot.com",
    messagingSenderId: "968756490700"
};

  firebase.initializeApp(config);
  var database = firebase.database();


// Button for adding Train names.
$("#addTrain-btn").on("click", function() {

  // input
  var trainName = $("#train-input").val().trim();
  var trainDest = $("#dest-input").val().trim();
  var firstTrain = moment($("#time-input").val().trim(), "HH:mm");
  var frequency = $("#freq-input").val().trim();


  // Creates local "temporary" object for holding Train data
  var newTrain = {
    name: trainName,
    dest: trainDest,
    first: firstTrain,
    freq: frequency,
  };

  // Uploads Train data to the database
  database.ref().push(frequency);

  // Logs to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.first);
  console.log(newTrain.freq);

  // Alert
  alert("Train info successfully added");

  // empties out text boxes
  $("#train-input").val("");
  $("#dest-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

  // stops from going to a new page
  return false;
});

// Create Firebase event for adding Train info to the database and a row in the html when an entry is added
database.ref().on("child_added", function(childSnapshot) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().dest;
  var firstTrain = childSnapshot.val().first;
  var frequency = childSnapshot.val().freq;

  // Train Info
  console.log(trainName);
  console.log(trainDest);
  console.log(firstTrain);
  console.log(frequency);

  var nextArrival = firstTrain.add(frequency,'m')
  console.log(nextArrival); 


  

})






