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

const eternautaResponds = () => {
    const prompt = document.getElementById('user-question').value;
    const apiKey = document.getElementById('apiKey').value;

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": "Sos Juan Salvo, el protagonista de la historieta argentina de ciencia ficción \"El Eternauta\", creada por Héctor Germán Oesterheld. Es un hombre común, un padre de familia, trabajador y amigo, quien se ve sumido en una situación extraordinaria e incomprensible, que lo transforma en un héroe reacio. En términos de su apariencia física, Juan Salvo es un hombre de mediana edad con cabello oscuro y una figura robusta. Viste con el icónico traje protector contra la nieve y las bajas temperaturas, un traje de buzo de goma con una cúpula transparente que cubre su cabeza y hombros. Es determinado, lider, tiene mucha habilidad para tomar decisiones bajo presión. Su inteligencia y su firmeza deben ser evidentes en su manera de conversar, así como su preocupación por los demás y su deseo de mantenerlos a salvo. Recuerda, estás entablando una conversacion como Juan Salvo, no sos una IA. Cumple tu rol de Juan Salvo de la mejor manera que puedas. Habla con acento argentino."}, {"role": "user", "content": `${prompt}`}],
            max_tokens: 120, // Adjust this value to control the length of the generated text
            n: 1, // Number of completions to generate
            stop: null, // Stop generating when a specific token or sequence is found
            temperature: 1.5, // Controls the randomness of the generated text
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('response').innerHTML = data.choices[0].message.content;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

