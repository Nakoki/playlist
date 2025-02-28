let songs = [
    {
        "name":"Eram, Sam, Sam",
        "duration":136,
        "img":"./img/eramsamsam.png",
        "source":"./songs/eramsamsam.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Mac, Mec, Mic!",
        "duration":95,
        "img":"./img/macmecmic.png",
        "source":"./songs/macmecmic.mp4",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Una Aventura Misteriosa!",
        "duration":105,
        "img":"./img/db.png",
        "source":"./songs/db.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Uptown Girl",
        "duration":186,
        "img":"./img/tomatic.png",
        "source":"./songs/uptowngirl.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"We Are!",
        "duration":171,
        "img":"./img/weare.png",
        "source":"./songs/weare.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"All Time Low",
        "duration":217,
        "img":"./img/fortnite.png",
        "source":"./songs/dekupaptamdem.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Sota l'aigua (feat. Marçal i Arlet)",
        "duration":137,
        "img":"./img/sotalaigua.png",
        "source":"./songs/sotalaigua.mp3",
        "playing":false,
        "elapsed":0 
    },
]

window.onload = function(){
    if(localStorage.getItem("songs") === null){
        localStorage.setItem("songs",JSON.stringify(songs));
    }
    else{
        songs = JSON.parse(localStorage.getItem("songs"));
    }
    songs.forEach((song,index) => {
        let div = document.createElement("div");
        div.classList.add("listsong");
        if(song.playing == true){
            div.classList.add("active");
        }
        div.setAttribute("data-index",index);
        let img = document.createElement("img");
        img.setAttribute("src",song.img);
        
        let title = document.createElement("p");
        title.classList.add("title");
        title.innerText = song.name;

        let duration = document.createElement("p");
        duration.classList.add("duration");
        let seconds = song.duration;
        let minutes = Math.floor(seconds/60);
        let extraSeconds = seconds % 60;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds; 
        duration.innerText = minutes + ":" + extraSeconds;
        
        let audio = document.createElement("audio");
        audio.setAttribute("id",song.source);
        audio.setAttribute("data-index",index);

        let source = document.createElement("source");
        source.setAttribute("src",song.source);

        audio.appendChild(source);
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(duration);
        div.appendChild(audio);

        document.getElementById("list").appendChild(div);
        div.addEventListener("click",(ev) => selectSong(ev.target));
    });


    document.getElementById("prev").onclick = previus;
    document.getElementById("play").onclick = playpause;
    document.getElementById("next").onclick = next;
    

    
}