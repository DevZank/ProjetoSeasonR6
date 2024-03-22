const operationButtons = document.querySelectorAll('.operation');
const gameDescription = document.getElementById('game-description');

operationButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const bgImage = this.getAttribute('data-bg-image');
        const videoLink = this.getAttribute('data-video-link');
        const buttonColor = this.getAttribute('data-button-color');
        const playDescription = this.getAttribute('playDesc');
        const buttonText = this.getAttribute('data-text');
        gameDescription.textContent = buttonText;
        document.body.style.backgroundImage = bgImage;
        document.getElementById('video-link').setAttribute('href', videoLink);
        document.getElementById('video-title').textContent = "Assistir";
        document.getElementById('video-description').textContent = playDescription;
        document.getElementById('video-title').style.display = "inline"; // Mostrar o texto "Assistir"
        document.querySelector('.btn-box2').style.backgroundColor = buttonColor; // Alterar a cor de fundo do botão
    });
});

function changeVideo(videoURL) {
    var videoSource = document.getElementById('video-source');
    videoSource.src = videoURL;
    
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.load(); // Recarrega o vídeo com o novo link
}