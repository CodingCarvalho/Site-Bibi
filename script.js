const btn = document.getElementById('btn');
const coracoes = document.getElementById('coracoes');

function criarCoracao() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '💖';

    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.top = Math.random() * 80 + 'vh';

    coracoes.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Corações automáticos a cada 500ms
setInterval(criarCoracao, 500);

// Também no clique do botão
btn.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(criarCoracao, i * 100);
    }
});
