//--------------------- Header -----------------------
// When user presses #endMeeting
//end meeting pop up will overlay the screen (module)

// When user presses #confirmEndMeeting
//all states return to original

//--------------------- Navigation -----------------------

// When user presses #navPresentation
//section id #presentation opens

// When user presses #navPhone
//section id #phone opens

// When user presses #navVideo
//section id #video opens

//--------------------- Phone -----------------------

// When user presses #call
//aside controls appear
//call button addClass .endCall
//#endMeeting addclass .activeEndMeeting

// When user presses Add Call
//call button removeClass .endCall
// text entry field clears

// When user presses #endCall
//end call pop up will overlay the screen (module)

// When user presses #confirmEndCall
//call button removeClass .endCall
//aside asidePhone hidden


//--------------------- Video -----------------------
// When user presses #navVideo
//section id #video opens

// When user presses #nextMeeting
//#nextMeeting addClass .currentMeeting
//additional control buttons appear in aside

//When user presses #addressBook
//#directory appears

//when user selects text field
//keyboard opens
//when user selects #schedule
// #video appears



//--------------------- Settings -----------------------
// When user presses #settings
//password pop up appears
//cancel will close pop up
//password and pressing enter will change to settings page

//when user selects #navAudio
//section id #audioVolume opens

//when user selects #reset
//the sliders on the page reset to 50%

//when user selects #navCamera
//section id #roomCameras opens

//when the user presses the preset dropdown button
//the preset list will drop down


//--------------------- Volume -----------------------
//When user presses #volumeMaster
// a slider will overlay over the button in the lower left hand corner.

//when the user touched the speaker icon again
// the slider pop up will close.


//--------------------- Help -----------------------
//When user presses #Help
// help pop up
// footer buttons will show labels

//when the user presses #help when the pop up is open
//help pop up closes
//footer labels go away


//----------------------Date

var dt = new Date();
document.getElementById("date").innerHTML = dt.toLocaleDateString();

//----------------------Time
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('txt').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

//--------------------Navigation
$('#presentation').hide();
$('#phone').hide();
$('#video').hide();
$('#phonebook').hide();
$('#roomCameras').hide();
$('#audioVolume').hide();

$('#navPrsbtn').on('click', function() {
  $('#presentation').fadeToggle(300);
  $('#phone').hide();
  $('#video').hide();
  $('#phonebook').hide();
  // $('.navPresentation').addClass('transparentBtnActive');
  //   $('.navPresentation').removeClass('transparentBtnActive');
});
$('#navPhonebtn').on('click', function() {
  $('#presentation').hide();
  $('#phone').fadeToggle(300);
  $('#video').hide();
  $('#phonebook').hide();
});
$('#navVideobtn').on('click', function() {
  $('#presentation').hide();
  $('#phone').hide();
  $('#video').fadeToggle(300);
  $('#phonebook').hide();
});
$('#navAudioVolumebtn').on('click', function() {
  $('#roomCameras').hide();
  $('#audioVolume').fadeToggle(300);
});
$('#navCamerabtn').on('click', function() {
  $('#roomCameras').fadeToggle(300);
  $('#audioVolume').hide();
});

//--------------------phone
$('#addCall').hide();
$('#callBtn').on('click', function() {
  $('#addCall').fadeIn(300);
  $("#endMeeting").toggleClass("redtext");
});

//--------------------video
$('#phonebook').hide();

$('#phoneBookBtn').on('click', function() {
  $('#video').hide();
  $('#phonebook').fadeToggle(300);
});

$('#scheduleBtn').on('click', function() {
  $('#video').fadeToggle(300);
  $('#phonebook').hide();
});

$('.asideControls').hide();

$('.join').on('click', function() {
  $('.asideControls').fadeToggle(300)
  $(this).text($(this).text() == 'End Meeting' ? 'Join' : 'End Meeting');
  $('#nextMeeting').toggleClass('red');
  $("#endMeeting").toggleClass("redtext");
});
//-------------------Footer Buttons
$('#help').hide();

$('#helpButton').on('click', function() {
  $('#help').fadeIn(300);
  $('footer').addClass('show');
});

$('#popupVolume').hide();
$('#volumeMaster').on('click', function() {
  $('#popupVolume').fadeIn(300);
});
$('#volumeMasterActive').on('click', function() {
  $('#popupVolume').fadeOut(300);
});

$('#micMute').on('click', function() {
  $('#micMute').toggleClass('red');
  $('#micIcon').toggleClass('ion-ios-mic-outline');
  $('#micIcon').toggleClass('ion-ios-mic-off');
});

$('#endAll').hide();

$('#endMeeting').on('click', function() {
  $('#endAll').fadeIn(300);
});

//----------------Popup Interactions

$('#close').on('click', function() {
  $('#help').fadeOut(300);
  $('footer').removeClass('show');
});

$('#cancelEndMeeting').on('click', function() {
  $('#endAll').fadeOut(300);
});

//----------------Keypad
// Create a variable phoneNumber to hold the full phone number and set it to an empty string ""
var phoneNumber = "";
$('.keypad button').on('click', function() {
  // When the user clicks a button in the .keypad
  var keyNumber = $(this).attr('value');
  // Find out which key the user pressed and save it in a variable keyNumber
  $("#phoneNumBox").val(phoneNumber += keyNumber);
});
// Add that key to the existing phone number (if there is one) using +=
// Replace the value of the input to the full phone number, including the most recent key
// Hint: use the .val() method in jQuery
$('#del').on('click', function() {
  phoneNumber = "";
  $("input:text").val(phoneNumber);
});

//-----------call/join buttons
$('#callBtn').on('click', function () {
  $(this).text($(this).text() == 'Call' ? 'End' : 'Call');
  $('#callBtn').toggleClass('red');
});

//-----------Dropdown list
$('#dropdownList').hide();
$('.dropbtn').on('click', function() {
  $('#dropdownList').slideToggle(300);
});
