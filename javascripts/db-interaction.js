"use strict";

let $ = require('jquery'),
    firebase = require("./firebaseConfig");

//   var database = firebase.database();
//   var areasFB = database.ref('attractions');
//   areasFB.on('value', gotData, errData);


// function gotData(data) {
//   var areas = data.val();
//   console.log("hopefully some firebase data", areas);
//   // Grab the keys to iterate over the object
//   // var keys = Object.keys(areas);

//   // for (var i = 0; i < keys.length; i++) {
//   //   var key = keys[i];
//   //   // Look at each fruit object!
//   //   var area = areas[key];
//   // }
// }

// function errData(data){
//   console.log('didnt work :(');
// }

function getFirebaseData(){
  return new Promise((resolve,reject) => {
    var loader = new XMLHttpRequest();
    
    loader.addEventListener('load', function(){
      var areasList = JSON.parse(this.responseText);
      resolve(areasList);
    });
    loader.addEventListener('error', function(){
      reject();
    });
    loader.open("GET", "https://fir-test-run.firebaseio.com/areas/.json");
    loader.send();
  });
}

getFirebaseData()
  // Then gets executed when promise is resolved or rejected
  .then(
    // The first callback function will be invoked when you resolve
    function(json_data) {
      console.log("API call successful and responded with", json_data);
    },
    // The second callback function will be invoked when you reject
    function(json_data) {
      console.log("API call not successful");
    }
  );


// module.exports 
