

function selectSong(song){
    if(audioActiu != null){
        audioActiu.pause();
    }
    audioActiu = song.querySelector("audio");
    let index = audioActiu.getAttribute("data-index");
    resetplaying();
    songs[index].playing = true;
    localStorage.setItem("songs",JSON.stringify(songs));
    song.classList.add("active");
    song.scrollIntoView();
    audioActiu.pause();
    guardarEstat();
    let imatge = document.querySelector("#play .icon")
    imatge.style.backgroundImage = 'url("./icons/play.png")';
    var durada = audioActiu.duration;
    var posAudio = Math.ceil(Math.ceil(audioActiu.currentTime) / durada * 100)
    barra.value = posAudio;

    let secondsD = durada;
    let minutesD = Math.floor(secondsD/60);
    let extraSecondsD = Math.floor(secondsD % 60);
    minutesD = minutesD < 10 ? "0" + minutesD : minutesD;
    extraSecondsD = extraSecondsD < 10 ? "0" + extraSecondsD : extraSecondsD; 

    document.getElementById("totalTime").innerHTML = minutesD + ":" + extraSecondsD;

    let seconds = audioActiu.currentTime;
    let minutes = Math.floor(seconds/60);
    let extraSeconds = Math.floor(seconds % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds; 
    document.getElementById('elTime').innerHTML =  minutes + ":" + extraSeconds;

    audioActiu.addEventListener('timeupdate', () => {
        let duradaT = audioActiu.duration;
        let secondsT = audioActiu.currentTime;
        let posicioT = Math.floor(audioActiu.currentTime);
        let minutesT = Math.floor(secondsT/60);
        let extraSecondsT = Math.floor(secondsT % 60);
        minutesT = minutesT < 10 ? "0" + minutesT : minutesT;
        extraSecondsT = extraSecondsT < 10 ? "0" + extraSecondsT : extraSecondsT;
        document.getElementById('elTime').innerHTML =  minutesT + ":" + extraSecondsT;
        document.getElementById('songProg').value = Math.ceil(posicioT / duradaT * 100);
    });

}

function playpause(){
    let imatge = document.querySelector("#play .icon")
    if(audioActiu.paused){
        audioActiu.play();
        imatge.style.backgroundImage = 'url("./icons/pause.png")';
    } else {
        guardarEstat();
        audioActiu.pause();
        imatge.style.backgroundImage = 'url("./icons/play.png")';
    }
}

function next(){
    let index = audioActiu.getAttribute("data-index");
    let songs = document.getElementsByClassName("listsong");
    let nextI = (parseInt(index) + 1);
    if(nextI >= songs.length){
        nextI = 0;
    }

    selectSong(songs[nextI]);
    playpause();
}

function previus(){
    let index = audioActiu.getAttribute("data-index");
    let songs = document.getElementsByClassName("listsong");
    let nextI = (parseInt(index) - 1);
    if(nextI < 0){
        nextI = songs.length -1;
    }

    selectSong(songs[nextI]);
    playpause();
}

function resetplaying(){
    let listSongs = document.querySelectorAll(".listsong");
    listSongs.forEach((e,i) => {
        e.classList.remove("active");
        songs[i].playing = false;
    });
}

function guardarEstat(){
    let audios = document.querySelectorAll(".listsong audio");
    audios.forEach((e,i) => {
        songs[i].elapsed = Math.floor(e.currentTime);
    });
    localStorage.setItem("songs",JSON.stringify(songs));
}



/*TODO
- barra 
- elapsed visual
*/