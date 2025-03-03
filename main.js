

function selectSong(song){
    audioActiu = song.querySelector("audio");
    let index = audioActiu.getAttribute("data-index");
    resetplaying();
    songs[index].playing = true;
    localStorage.setItem("songs",JSON.stringify(songs));
    song.classList.add("active");
}

function playpause(){
    let imatge = document.getElementById("play")
    console.log(audioActiu);
    if(audioActiu.paused){
        audioActiu.play();
        imatge.style.backgroundImage = 'url("./icons/pause.png")';
    } else {
        audioActiu.pause();
        imatge.style.backgroundImage = 'url("./icons/play.png")';
    }
}

function next(){

}

function previus(){

}

function resetplaying(){
    let listSongs = document.querySelectorAll(".listsong");
    console.log(listSongs);
    listSongs.forEach((e,i) => {
        e.classList.remove("active");
        songs[i].playing = false;
    });
}