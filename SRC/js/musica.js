const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const cover = document.getElementById("cover");

playBtn.onclick = () => {
    if (audio.paused) {
        audio.play();
        cover.classList.add("rotate");
        playIcon.src = "https://img.icons8.com/ios-filled/50/pause--v1.png";
    } else {
        audio.pause();
        cover.classList.remove("rotate");
        playIcon.src = "https://img.icons8.com/ios-filled/50/play--v1.png";
    }
};

audio.ontimeupdate = () => {
    progress.style.width = (audio.currentTime / audio.duration) * 100 + "%";

    let cur = Math.floor(audio.currentTime);
    let dur = Math.floor(audio.duration);

    time.textContent = 
        `${Math.floor(cur/60)}:${("0"+cur%60).slice(-2)} / ${Math.floor(dur/60)}:${("0"+dur%60).slice(-2)}`;
};