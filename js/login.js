$('#submitBtn').click(function(){
  var email = $("#login").val();
  var mdp = $("#password").val();



  if(email == 'roger.paltant@profmail.education' && mdp =="PALTANTroger19"){
      window.location.href = 'loged.html';
  }
  else{
    $('#body').append('<div class="alert alert-danger alert-dismissible fade show" role="alert">'+
  '<strong>Erreur!</strong> La combinaison email/mot de passe ne semble pas bonne.'+
  '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
    '<span aria-hidden="true">&times;</span></button></div>')
  }

})
