let que = document.getElementById("que")
let introducao = document.getElementById("introducao")
let beneficios = document.getElementById("beneficios")
let selo = document.getElementById("selo")
let componentes = document.getElementById("componentes")
let uso = document.getElementById("uso")
let linkInfo = []
let sublinha = document.getElementById('sublinhado')
let a = document.getElementsByClassName('linkes')
let i = 0
let headerMob = document.getElementsByClassName('mobP')
function sobeHeader(){
    //Gambiarra do Igor, NÃO MEXER
    $("#some").slideUp("slow", function(){
        $("#conteudo").fadeIn("slow", () =>{
            for (var i = 0; i < a.length; i++) {
                linkInfo.push(a[i].getBoundingClientRect())
            }
            console.log(headerMob)
            sublinha.style.top = linkInfo[0].bottom - 3 + "px"
            sublinha.style.width = linkInfo[0].width + "px"
            sublinha.style.left = linkInfo[0].x + "px"
            scrollMobile(headerMob[0],headerMob)
            document.addEventListener("scroll",() => {
                if(introducao.getBoundingClientRect().bottom > 0) {
                    sublinha.style.top = linkInfo[0].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[0].width + "px"
                    sublinha.style.left = linkInfo[0].x + "px"
                    scrollMobile(headerMob[0],headerMob)
                }else if(que.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[1].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[1].width + "px"
                    sublinha.style.left = linkInfo[1].x + "px"
                    scrollMobile(headerMob[1],headerMob)
                }else if(beneficios.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[2].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[2].width + "px"
                    sublinha.style.left = linkInfo[2].x + "px"
                    scrollMobile(headerMob[2],headerMob)
                }else if(selo.getBoundingClientRect().bottom > 0){
                    sublinha.style.top = linkInfo[3].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[3].width + "px"
                    sublinha.style.left = linkInfo[3].x + "px"
                    scrollMobile(headerMob[3],headerMob)
                }else if(componentes.getBoundingClientRect().bottom > 100){
                    sublinha.style.top = linkInfo[4].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[4].width + "px"
                    sublinha.style.left = linkInfo[4].x + "px"
                    scrollMobile(headerMob[4],headerMob)
                }else{
                    sublinha.style.top = linkInfo[5].bottom - 3 + "px"
                    sublinha.style.width = linkInfo[5].width + "px"
                    sublinha.style.left = linkInfo[5].x + "px"
                    scrollMobile(headerMob[5],headerMob)
                }
            })
            carrossel()
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

function carrossel(){
    let reparticao = document.getElementsByClassName("reparticao")
    let explicacao = document.getElementsByClassName('explicacao')
    if(i > 7){
        explicacao[7].style.display = "none"
        pretoBranco(reparticao[7]) 
        i = 0
    }
    if (i == 0) {
        colorido(reparticao[i])
        explicacao[i].style.display = "flex"  
        i++      
    }else{
        pretoBranco(reparticao[i-1])
        colorido(reparticao[i])
        explicacao[i-1].style.display = "none"
        explicacao[i].style.display = "flex"
        i++
    }
    setTimeout(carrossel, 5000)
}

function scrollMobile(p,tudo){
    let resto = []
    for (var i = 0; i < tudo.length; i++) {
        if (tudo[i] === p) {
            p.style.display = "block"
        }else{
            resto.push(i)
        }
    }
    for (var j = 0; j < resto.length; j++) {
        tudo[resto[j]].style.display = 'none'
    }
}