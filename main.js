let audioActiu;

function selectSong(song){
    audioActiu = song.getElementsByTagName("audio")[0];
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