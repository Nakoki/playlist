

function selectSong(song){
    if(audioActiu != null){
        audioActiu.pause();
        console.log(audioActiu.duration);
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
        console.log(e.duration);
        songs[i].elapsed = Math.floor(e.currentTime);
    });
    localStorage.setItem("songs",JSON.stringify(songs));
}


/*TODO
- quan s'acaba la canço el current time es posa a 0, i es passa a la seguent canço
- barra 
- elapsed visual
*/