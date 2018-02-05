// Event for when the form is submitted
$('form').on('submit', function (event) {
  event.preventDefault();
  var fullName = $('#name').val();
  if (fullName.length <= 0){
    $('#name').addClass('error');
    $('#errorName').fadeIn('300')
  } else{
    $('#name').removeClass('error');
    $('#errorName').fadeOut('hidden')
  }
  var fullEmail = $('#email').val();
  if (fullEmail.length <= 0){
    $('#email').addClass('error');
    $('#errorEmail').fadeIn('300')
  } else{
    $('#email').removeClass('error');
    $('#errorEmail').fadeOut('300')
  }
});

// if fullname field value is 0
  //add red border to #name
