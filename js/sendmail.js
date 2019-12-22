$(document).ready(function(){
  var unreadMail = 0;
  $("#sendMailButton").click(function(){

    var dest = $("#newMailModal #dest").val();
    var object = $("#newMailModal #object").val();
    var mail = $("#newMailModal #mail").val();

    var receiveMailSend = 'Père Noël';
    var receiceMailObject ='Code de la bombe';
    d = new Date();
    var receiveMailDate =d.toLocaleDateString();

    if(dest=="pere.noel@northmail.org"){
        if(mail.indexOf("373492") >= 0 || object.indexOf("373492") >= 0){
        var newMail ='<tr class="newMail font-weight-bold" data-read=0 data-toggle="modal" data-target="#bravoMailModal">'+
            '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
            '<td>'+receiveMailSend+'</td>'+
            '<td>'+receiceMailObject+'</td>'+
            '<td>'+moment().locale('fr').format('D-M-YY h:mm')+'</td>'+
            '</tr>'
        $('#newMailModal').modal('hide');
        setTimeout(function(){
          $('#mailList').prepend(newMail);
          unreadMail+=1;
          if(unreadMail == 1){
            $('#unreadMailCategory').append('<span id="unreadMailBadge" class="badge badge-dark"></span>');
          }
          $('#unreadMailBadge').html(unreadMail);
        },5000)
      }else{
        var newMail ='<tr class="newMail font-weight-bold" data-read=0 data-toggle="modal" data-target="#failMailModal">'+
            '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
            '<td>'+receiveMailSend+'</td>'+
            '<td>'+receiceMailObject+'</td>'+
            '<td>'+moment().locale('fr').format('D-M-YY h:mm')+'</td>'+
            '</tr>'
        $('#newMailModal').modal('hide');
        setTimeout(function(){
          $('#mailList').prepend(newMail);
          unreadMail+=1;
          if(unreadMail == 1){
            $('#unreadMailCategory').append('<span id="unreadMailBadge" class="badge badge-dark"></span>');
          }
          $('#unreadMailBadge').html(unreadMail);
        },5000)
      }
    }
    else{
      var newMail ='<tr class="newMail font-weight-bold" data-read=0 data-toggle="modal" data-target="#errorMailModal">'+
          '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
          '<td>'+'Inconnu'+'</td>'+
          '<td>'+'Erreur sur la personne'+'</td>'+
          '<td>'+moment().locale('fr').format('LLL')+'</td>'+
          '</tr>'
      $('#newMailModal').modal('hide');
      setTimeout(function(){
        $('#mailList').prepend(newMail);
        unreadMail+=1;
        if(unreadMail == 1){
          $('#unreadMailCategory').append('<span id="unreadMailBadge" class="badge badge-dark"></span>');
        }
        $('#unreadMailBadge').html(unreadMail);
      },5000)
    };
    $("#newMailModal #dest").val('');
    $("#newMailModal #object").val('');
    $("#newMailModal #mail").val('');
  });

  $(document).on('click','.newMail',function(){
    if($(this).data('read')==0){
      $(this).find('.fa-envelope').addClass('fa-envelope-open').removeClass('fa-envelope');
       $(this).find('.font-weight-bold').removeClass('font-weight-bold');
      unreadMail-=1;
      if(unreadMail <= 0){
        $('#unreadMailBadge').remove();
      }
      else{
        $('#unreadMailBadge').html(unreadMail);
      }
      $(this).data('read',1)
    }
  })
});
