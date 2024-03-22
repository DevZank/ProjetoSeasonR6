// Função para carregar a API do YouTube
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Variável global para armazenar a referência ao player do YouTube
let player;

// Função chamada pela API do YouTube quando estiver pronta
function onYouTubeIframeAPIReady() {
    // Criação do player do YouTube
    player = new YT.Player('youtube-player', {
        height: '360',
        width: '640',
        videoId: 'VIDEO_ID', // Vídeo inicial
        playerVars: {
            'playsinline': 1 // Reproduzir no modo de tela cheia
        }
    });
}

// Atualiza o vídeo do player do YouTube
function updateYouTubeVideo(videoId) {
    if (player) {
        player.loadVideoById(videoId);
    }
}

// Adiciona o ouvinte de eventos de clique para os botões
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const videoId = this.getAttribute('data-video-id');
        updateYouTubeVideo(videoId);
    });
});

// Carrega a API do YouTube quando a página carregar
window.onload = loadYouTubeAPI;
