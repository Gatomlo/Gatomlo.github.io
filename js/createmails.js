Papa.parse('mails.csv', {
  download: true,
  skipEmptyLines: true,
  header: true,
  delimiter:";",
  encoding: "UTF-8",
  complete: function(results) {
    createContent(results.data);
  }
})

function createContent(datas){
  var count = 0
  console.log('ok id test 4')
  console.log(datas)
  datas.forEach(function (el){
    var receiveMailSend = el.nom;
    var receiceMailObject =el.objet;
    var date = el.date;
    var hour = el.heure;

    var newMail ='<tr class="newMail" data-read=1 data-toggle="modal" data-target="#mail'+count+'">'+
        '<td><i class="fas fa-envelope-open"></i> <i class="far fa-star"></i></td>'+
        '<td>'+receiveMailSend+'</td>'+
        '<td>'+receiceMailObject+'</td>'+
        '<td>'+date+' '+hour+'</td>'+
        '</tr>'
     $('#mailList').prepend(newMail);
    var newModal ='<div class="modal fade" id="mail'+count+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
      '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header">'+
            '<h5 class="modal-title" id="exampleModalLabel">Evoyé par "<span id="expd"></span>" le '+el.date+' </h5>'+
            '<button class="close" type="button" data-dismiss="modal" aria-label="Close">'+
              '<span aria-hidden="true">×</span>'+
            '</button>'+
          '</div>'+
          '<div class="modal-body">'+
            el.content+
        '</div>'+
          '<div class="modal-footer">'+
            '<a class="float-right  btn btn-primary" data-destinataire='+el.email+' data-dismiss="modal" data-toggle="modal" data-target="#newMailModal" href="#">Répondre</a>'+
            '<button class="btn btn-secondary" type="button" data-dismiss="modal">Fermer</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
      
     $('#mailModal').prepend(newModal);
     count += 1;
  })
}

