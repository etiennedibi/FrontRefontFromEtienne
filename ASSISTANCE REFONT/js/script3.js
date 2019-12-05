

$(document).ready(function () {

  var requestImage = document.getElementById("requestImage");
  var requestForm = document.getElementById("requestForm");
  
  requestImage.style.height=requestForm.style.height + "px";





    $('.ConcernedInfo').hide()
  
    $('.myself').click(function() {
      $('#otherpeoplevalidate').hide(200)
      $('#myselfValidate').show(200)
  
      $('.ConcernedInfo').hide(200)
  
    });
  
    $('.otherpeople').click(function() {
      $('#myselfValidate').hide(200)
      $('#otherpeoplevalidate').show(200)
  
      $('.ConcernedInfo').show(200);
  
     
    })
  
  
  
  
  
  
  
  
  
    $('.preocupationDetailsDIV').hide()
  
  
     $('.preocupation').click(function() {
  
        $('#Affairevalidate').hide(200)
        $('#preocupationValidate').show(200)
  
        $('.AffaireDetailsDIV').hide()
        $('.preocupationDetailsDIV').show(200)
  
        
  
    });
  
    $('.Affaire').click(function() {
        $('#preocupationValidate').hide(200)
        $('#Affairevalidate').show(200)
  
        $('.preocupationDetailsDIV').hide()
        $('.AffaireDetailsDIV').show(200)
        
  
  
    })
  
  
  
  });
  
  //  new WOW().init();
  