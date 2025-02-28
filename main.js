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