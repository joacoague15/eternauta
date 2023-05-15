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
    document.getElementById("snow-audio").play();
    document.getElementById("eternauta-audio").src = randomAudio();
    document.getElementById("eternauta-audio").play();
}
