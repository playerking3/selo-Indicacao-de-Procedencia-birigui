function sobeHeader(){
    //Gambiarra do Igor, NÃO MEXER
    $("#some").slideUp("slow", function(){
        $("#conteudo").fadeIn("slow")
    });
}

$('.nav a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top;
    
  $('html, body').animate({ 
    scrollTop: targetOffset - 100
  }, 500);
});

function colorido(img){
    link = img.attributes.getNamedItem("src").value.replace("white","cor")
    img.attributes.getNamedItem("src").value = link
}

function pretoBranco(img){
    link = img.attributes.getNamedItem("src").value.replace("cor","white")
    img.attributes.getNamedItem("src").value = link
}