
function lerMais(){
    document.getElementById('mais-texto').style.display = 'block';
    document.getElementById('botao-ler-mais').style.display = 'none';
    document.getElementById('botao-ler-menos').style.display = 'block';
}

function lerMenos(){
    document.getElementById('mais-texto').style.display = 'none';
    document.getElementById('botao-ler-menos').style.display = 'none';
    document.getElementById('botao-ler-mais').style.display = 'block';
}

document.addEventListener('scroll', function () {
    const menu = document.getElementById('cabecalho');
    const itensMenu = document.getElementById('menu-cabecalho');


    if (window.scrollY > 50) { 
        menu.classList.add('cabecalho-sticky');
        itensMenu.classList.remove('menu-cabecalho');
        itensMenu.classList.add('menu-cabecalho-sticky');
    } else {
        menu.classList.remove('cabecalho-sticky');
        itensMenu.classList.add('menu-cabecalho');
        itensMenu.classList.remove('menu-cabecalho-sticky');
    }
});

const elementosScroll= document.querySelectorAll('.hidden');
const scrollLerMais = document.querySelectorAll('.hidden-ler');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
});

elementosScroll.forEach((elementos) => myObserver.observe(elementos));
scrollLerMais.forEach((ler) => myObserver.observe(ler));

const menuMobile = document.getElementById('menu-mobile');
const simboloMenuMobile = document.getElementById('simbolo-menu-mobile');
const simboloFecharMenu = document.getElementById('fechar-menu-mobile');
const itensMenu = document.querySelectorAll('.item-mobile a');
const conteudoPag = document.querySelectorAll('.conteudo-principal');

function toggleVisibilidadeConteudo(ocultar) {
    conteudoPag.forEach(elemento => {
        elemento.classList.toggle('ocultar', ocultar);
    });
}

function abrirMenu() {
    menuMobile.style.display = 'block';
    simboloMenuMobile.style.display = 'none';
    simboloFecharMenu.style.display = 'block';
    toggleVisibilidadeConteudo(true); 
    document.querySelectorAll('.item-mobile').forEach(item => item.classList.add('hidden'));
}

function fecharMenu() {
    menuMobile.style.display = 'none';
    simboloFecharMenu.style.display = 'none';
    simboloMenuMobile.style.display = 'block';
    toggleVisibilidadeConteudo(false); 
}

menuMobile.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        fecharMenu();
    }
});