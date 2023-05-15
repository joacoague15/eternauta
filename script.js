const allEternautaAudios = [
    "dialogo1.mp3",
    "dialogo2.mp3",
    "dialogo3.mp3",
    "dialogo4.mp3",
    "dialogo5.mp3",
    "dialogo6.mp3",
    "dialogo7.mp3",
    "dialogo8.mp3"
];

const randomAudio = () => {
    const randomIndex = Math.floor(Math.random() * allEternautaAudios.length);
    return allEternautaAudios[randomIndex];
}

const speak = () => {
    document.getElementById("eternauta-audio").src = randomAudio();
    document.getElementById("eternauta-audio").play();
}

const playSounds = () => {
    document.getElementById("modal").style.display = "none";

    document.getElementById("snow-audio").play();

    respiracionAudio.volume = 0.2;
    document.getElementById("respiracion").play();

    document.getElementById("radio").volume = 0.1;
    document.getElementById("radio").play();

    speak();
}

const eternautaAudio = document.getElementById("eternauta-audio");
const respiracionAudio = document.getElementById("respiracion");

eternautaAudio.addEventListener("playing", () => {
    respiracionAudio.pause();
});

eternautaAudio.addEventListener("pause", () => {
    respiracionAudio.play();
});

const playRifleShotSound = () => {
    const rifleAudio = document.getElementById("disparo-rifle");

    rifleAudio.volume = 0.1;
    rifleAudio.play();
};

// Set an interval to play the sound every 8 seconds
setInterval(playRifleShotSound, 12000);


const favalliSosUnGenio = () => {
    const favalli = document.getElementById("favalli-sos-un-genio");

    favalli.volume = 0.1;
    favalli.play();
};

// Set an interval to play the sound every 8 seconds
setInterval(favalliSosUnGenio, 15000);

const pabloNoVaAFuncionar = () => {
    const pablo = document.getElementById("pablo-no-va-a-funcionar");

    pablo.volume = 0.1;
    pablo.play();
};

// Set an interval to play the sound every 8 seconds
setInterval(pabloNoVaAFuncionar, 20000);