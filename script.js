document.addEventListener('DOMContentLoaded', () => {
    const initialScreen = document.getElementById('initialScreen');
    const bgMusic = document.getElementById('bgMusic');
    const muteBtn = document.getElementById('muteBtn');
    const muteIcon = document.getElementById('muteIcon');
    const volumeSlider = document.getElementById('volumeSlider');

    // --- 1. TELA INICIAL E PLAY ---
    initialScreen.addEventListener('click', () => {
        initialScreen.classList.add('hidden');
        bgMusic.volume = 0.5;
        bgMusic.play().catch(error => {
            console.log("Autoplay bloqueado pelo navegador.");
        });
    });

    // --- 2. CONTROLE DE VOLUME (SLIDER) ---
    volumeSlider.addEventListener('input', (e) => {
        const value = e.target.value;
        bgMusic.volume = value;
        bgMusic.muted = false;
        updateVolumeIcon(value);
    });

    // --- 3. BOTÃO DE MUDO ---
    muteBtn.addEventListener('click', () => {
        bgMusic.muted = !bgMusic.muted;
        updateVolumeIcon(bgMusic.muted ? 0 : bgMusic.volume);
    });

    // --- 4. FUNÇÃO PARA TROCAR ÍCONES (SEM QUEBRAR) ---
    function updateVolumeIcon(volume) {
        if (bgMusic.muted || volume == 0) {
            // Ícone de Mudo
            muteIcon.src = "https://img.icons8.com/material-rounded/24/ffffff/mute.png";
        } else {
            // Ícone de Som Ativo
            muteIcon.src = "https://img.icons8.com/material-rounded/24/ffffff/speaker.png";
        }
    }

    // --- 5. GERADOR DE NEVE ---
    const snowContainer = document.querySelector('.snow-background');
    if (snowContainer) {
        const createSnowflake = () => {
            const flake = document.createElement('div');
            flake.className = 'snowflake';
            flake.innerHTML = '❄';
            
            const size = Math.random() * 10 + 10;
            const left = Math.random() * 100;
            const duration = Math.random() * 5 + 7;
            const delay = Math.random() * 10;

            flake.style.fontSize = `${size}px`;
            flake.style.left = `${left}%`;
            flake.style.animation = `snowFall ${duration}s linear infinite`;
            flake.style.animationDelay = `-${delay}s`;
            flake.style.opacity = Math.random() * 0.7 + 0.3;

            snowContainer.appendChild(flake);
        };

        for (let i = 0; i < 40; i++) {
            createSnowflake();
        }
    }

});
