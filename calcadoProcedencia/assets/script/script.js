function sobeHeader(){
    //Gambiarra do Igor, NÃO MEXER
    $("#some").slideUp("slow", function(){
        $("#conteudo").fadeIn("slow", () =>{
            for (var i = 0; i < a.length; i++) {
                linkInfo.push(a[i].getBoundingClientRect())
            }
            sublinha.style.top = linkInfo[0].bottom - 3 + "px"
            sublinha.style.width = linkInfo[0].width + "px"
            sublinha.style.left = linkInfo[0].x + "px"
            document.addEventListener("scroll",() => {
                if(introducao.getBoundingClientRect().bottom > 0) {
                    sublinha.style.top = linkInfo[0].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[0].width + "px"
                    sublinha.style.left = linkInfo[0].x + "px"
                }else if(que.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[1].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[1].width + "px"
                    sublinha.style.left = linkInfo[1].x + "px"
                }else if(beneficios.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[2].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[2].width + "px"
                    sublinha.style.left = linkInfo[2].x + "px"
                }else if(selo.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[3].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[3].width + "px"
                    sublinha.style.left = linkInfo[3].x + "px"
                }else if(componentes.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[4].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[4].width + "px"
                    sublinha.style.left = linkInfo[4].x + "px"
                }
            })
        })
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

let que = document.getElementById("que")
let introducao = document.getElementById("introducao")
let beneficios = document.getElementById("beneficios")
let selo = document.getElementById("selo")
let componentes = document.getElementById("componentes")

let linkInfo = []
let sublinha = document.getElementById('sublinhado')
let a = document.getElementsByClassName('linkes')