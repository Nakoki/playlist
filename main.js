

function selectSong(song){
    audioActiu = song.querySelector("audio");
    let index = audioActiu.getAttribute("data-index");
    resetplaying();
    songs[index].playing = true;
    localStorage.setItem("songs",JSON.stringify(songs));
    song.classList.add("active");
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

}

function previus(){

}

function resetplaying(){
    let listSongs = document.querySelectorAll(".listsong");
    listSongs.forEach((e,i) => {
        e.classList.remove("active");
        songs[i].playing = false;
    });
}


/*TODO oopsi:
- next
- prev
- elapsed songs
- que es pari la canço anterior quan canives de canço
- que quan entres a la pagina et faci scroll a la canço activa
- quan cavnies de canço tambe et faci scroll

*/

/*TODO: nacockis
- barra 
- elapsed visual
- que la icona del pause canvii quan canvies de canço (clickant a una manualment, la pausa i es mostra el play, clickant a prev o next la comença i es posa el pause)
*/