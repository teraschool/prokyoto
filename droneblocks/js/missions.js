var ref = firebase.database().ref();
var userId;
var missionToBeDeleted;


$(document).ready(function() {
  
  $("#deleteMissionButton").click(function() {
    deleteMission();
  });
  
  firebase.auth().onAuthStateChanged(function(user) {
    
    console.log("auth state changed: " + user.uid);
  
    if (user && !userId) {
    
      userId = user.uid;
      
      var usersRef;
      
      if (aircraft == "Tello") {
        usersRef = ref.child("droneblocks/users/" + userId + "/tello_missions");
      } else {
        usersRef = ref.child("droneblocks/users/" + userId + "/missions");
      }
    
      usersRef.orderByChild("createdAt").on("child_added", function(snapshot) {
      
        var row = '<tr>';

        // Detect Chrome App
        if (document.location.search.match(/chrome_app/i)) {
          row += '<td style="padding-left: 25px"><a href="chrome_app.html?view=1&missionId=' + snapshot.key + '">' + snapshot.val().title + '</a></td>';
        } else if (aircraft == "Tello") {
          row += '<td style="padding-left: 25px"><a href="tello.html?view=1&missionId=' + snapshot.key + '">' + snapshot.val().title + '</a></td>';
        } else {
          row += '<td style="padding-left: 25px"><a href="index.html?view=1&missionId=' + snapshot.key + '">' + snapshot.val().title + '</a></td>';
        }
        
        row += '<td>' + new Date(snapshot.val().createdAt) + '</td>';
        row += '<td>';
        row += '<a href="#!" onClick="shareMission(\'' + snapshot.key +'\');"><i class="material-icons">share</i></a>';
        row += '&nbsp;&nbsp;&nbsp;&nbsp;';
        row += '<a href="#!" onClick="deleteMissionConfirm(\'' + snapshot.key +'\');"><i class="material-icons">delete</i></a>';
        row += '</td></tr>'
    
        $("#tbody").prepend(row);
    
      });
    
    // User is logged out
    } else {
    
      // TODO perhaps let them know they're logged out in the future instead of just redirecting
      
      document.location.href = "./index.html";
    
    }
  
  });
  
});

function deleteMissionConfirm(missionId) {
  missionToBeDeleted = missionId;
  $('#deleteMissionModal').openModal();
}

// Delete the mission
function deleteMission() {
  
  // Remove the mission from the user's mission list
  var usersRef;
  
  if (aircraft == "Tello") {
    usersRef = ref.child("droneblocks/users/" + userId + "/tello_missions/" + missionToBeDeleted);
  } else {
    usersRef = ref.child("droneblocks/users/" + userId + "/missions/" + missionToBeDeleted); 
  }
  usersRef.remove();
  
  // Remove the mission 
  var missionsRef;
  
  if (aircraft == "Tello") {
    missionsRef = ref.child("droneblocks/tello_missions/" + missionToBeDeleted);
  } else {
    missionsRef = ref.child("droneblocks/missions/" + missionToBeDeleted);
  }
  
  missionsRef.remove(function(error) {
    if(!error) {
      Materialize.toast("Mission deleted successfully", 3000);
    }
  });
  
  // For now let's just reload the page
  if (aircraft == "Tello") {
    document.location.href = "tello_missions.html";
  } else {
    document.location.href = "missions.html";
  }
  
}

function shareMission(missionId) {
  $("#shareModal").openModal();
  
  if (aircraft == "Tello") {
    $("#iPadShareLink").val("droneblocks://?missionId=" + missionId + "&aircraft=tello");
    $("#desktopShareLink").val("https://dev.droneblocks.io/tello.html?share=1&missionId=" + missionId);
  } else {
    $("#iPadShareLink").val("droneblocks://?missionId=" + missionId);
    $("#desktopShareLink").val("https://dev.droneblocks.io?share=1&missionId=" + missionId);
  }
}