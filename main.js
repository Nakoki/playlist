

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
}

function playpause(){
    let imatge = document.querySelector("#play .icon")
    console.log(audioActiu.paused);
    if(audioActiu.paused){
        audioActiu.play();
        imatge.style.backgroundImage = 'url("./icons/pause.png")';
    } else {
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


/*TODO oopsi:
- elapsed songs
*/

/*TODO: nacockis
- barra 
- elapsed visual
- que la icona del pause canvii quan canvies de canço (clickant a una manualment, la pausa i es mostra el play)
*/