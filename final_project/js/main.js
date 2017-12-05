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
