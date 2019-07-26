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
  console.log('ok inline')
  console.log(datas)
  datas.forEach(function (el){
    var receiveMailSend = el.nom;
    var receiceMailObject =el.objet;
    var newMail ='<tr class="newMail" data-read=0 data-toggle="modal" data-target="#mailModal">'+
        '<td><i class="fas fa-envelope"></i> <i class="far fa-star"></i></td>'+
        '<td>'+receiveMailSend+'</td>'+
        '<td>'+receiceMailObject+'</td>'+
        '<td>'+moment().locale('fr').format('LLL')+'</td>'+
        '</tr>'
      $('#mailList').prepend(newMail);
  })
}
