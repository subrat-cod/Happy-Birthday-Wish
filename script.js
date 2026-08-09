const emojis = [
    "🎈",
    "💖",
    "✨",
    "🌟",
    "🎉",
    "🥳",
    "🎁",
    "🌸",
    "🦋",
    "💫",
    "💕",
    "🌈",
    "🎂",
    "❤️",
    "🌷"
];

/* Background floating particles */

function createParticles() {

    const container =
        document.getElementById("particles");

    for (let i = 0; i < 80; i++) {

        const particle =
            document.createElement("div");

        particle.className = "particle";

        particle.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.fontSize =
            (12 + Math.random() * 25) + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        container.appendChild(particle);
    }
}

createParticles();


/* Start Birthday */

function startBirthday() {

    const name =
        document.getElementById("name").value.trim();

    if (name === "") {

        alert("💖 Please enter your name first!");

        return;
    }

    const music =
        document.getElementById("music");

    /*
       Browser allows music after
       user clicks the button.
    */

    music.volume = 0.55;

    music.play().catch(() => {
        console.log("Music waiting for browser permission.");
    });


    /* Hide first screen */

    document.getElementById("card").style.display = "none";

    document.querySelector(".logo").style.display = "none";


    /* Show birthday screen */

    const birthdayContent =
        document.getElementById("birthdayContent");

    birthdayContent.style.display = "block";


    document.getElementById("birthdayTitle").innerHTML =
        "🎂 Happy Birthday " + escapeHTML(name) + "! 🎂";


    generateWishes(name);
}


/* Safe text */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* Birthday wishes */

function generateWishes(name) {

    const wishBox =
        document.getElementById("wishBox");

    wishBox.innerHTML = "";


    const wishes = [

        `🎂 Happy Birthday ${name}!`,
        `💖 Wishing you endless happiness!`,
        `✨ May all your beautiful dreams come true!`,
        `🎁 May your special day be filled with wonderful memories!`,
        `🥳 Keep smiling and enjoy every moment!`,
        `🌸 May your life always be surrounded by happiness!`,
        `🌟 May your future shine brighter than the stars!`,
        `💫 Wishing you success in everything you do!`,
        `🎈 May every new day bring you a reason to smile!`,
        `🦋 May your journey be full of beautiful moments!`,
        `🌈 May happiness follow you everywhere!`,
        `❤️ Stay happy, stay blessed and keep smiling!`,
        `🎉 Have the most amazing birthday ever!`,
        `💝 You deserve countless beautiful moments!`,
        `🌷 May this year bring you new adventures!`,
        `🎂 Celebrate today with lots of happiness!`,
        `✨ May your dreams turn into reality!`,
        `💖 Keep shining and spreading happiness!`,
        `🎁 Wishing you love, peace and success!`,
        `🥳 Here's to another beautiful year!`
    ];


    /*
       1000 wishes automatically.
       No need to manually write 1000 lines.
    */

    for (let i = 1; i <= 1000; i++) {

        const wish =
            wishes[(i - 1) % wishes.length];

        const div =
            document.createElement("div");

        div.className = "wish";

        div.innerHTML =
            `${getRandomEmoji()} ${wish} 
             <small>✨ Wish #${i}</small>
             ${getRandomEmoji()}`;

        div.style.animationDelay =
            (Math.random() * 2) + "s";

        wishBox.appendChild(div);
    }
}


/* Random emoji */

function getRandomEmoji() {

    return emojis[
        Math.floor(
            Math.random() * emojis.length
        )
    ];
}