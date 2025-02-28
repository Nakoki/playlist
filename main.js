let audioActiu;

function selectSong(song){
    audioActiu = song.getElementsByTagName("audio")[0];
    let index = audioActiu.getAttribute("data-index");
    resetplaying();
    songs[index].playing = true;
    localStorage.setItem("songs",JSON.stringify(songs));
    song.classList.add("active");
}

function playpause(){
    let imatge = document.getElementById("play")
    if(audio.paused){
        audio.play();
        imatge = background-image: url("./icons/next.png");
    } else {
        audio.pause();
        imatge = background-image: url("./icons/pause.png");
    }
}

function next(){

}

function previus(){

}

function resetplaying(){
    let listSongs = document.getElementsByClassName("listsong");
    listSongs.forEach((e,i) => {
        e.classList.remove("active");
        songs[i].playing = false;
    });
}