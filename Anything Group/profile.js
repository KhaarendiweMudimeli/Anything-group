firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = user.uid;
    firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
      if (snapshot.exists()) {
        var userData = snapshot.val();
        var username = userData.username || 'Account Settings';
        document.getElementById('username').innerText = username;
      } else {
        console.log('No data available for the user.');
        document.getElementById('username').innerText = 'Account Settings';
      }
    }).catch(function(error) {
      console.error('Error fetching user data:', error);
      document.getElementById('username').innerText = 'Account Settings';
    });
    document.querySelector('.notification-bell').style.display = 'yes';
  } else {
    document.getElementById('username').innerText = 'Account Settings';
    document.querySelector('.notification-bell').style.display = 'block';
  }
});