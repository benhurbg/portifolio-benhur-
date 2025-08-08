document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const menuMobile = document.querySelector('.menu-mobile');
const navegacao = document.querySelector('.navegacao');

menuMobile.addEventListener('click', () => {
    navegacao.classList.toggle('ativo');
    menuMobile.classList.toggle('ativo');
});

window.addEventListener('scroll', () => {
    const cabecalho = document.querySelector('.cabecalho');
    if (window.scrollY > 50) {
        cabecalho.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        cabecalho.style.boxShadow = 'none';
    }
});
a
const codigo = document.querySelector('.linguagem-codigo');
if (codigo) {
    const textoOriginal = codigo.textContent;
    codigo.textContent = '';
    
    let i = 0;
    const velocidadeDigitacao = 50; // ms por caractere
    
    function digitar() {
        if (i < textoOriginal.length) {
            codigo.textContent += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, velocidadeDigitacao);
        }
    }
    
    setTimeout(digitar, 1000);
}