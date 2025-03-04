let songs = [
    {
        "name":"Eram, Sam, Sam",
        "duration":136.961065,
        "img":"./img/eramsamsam.png",
        "source":"./songs/eramsamsam.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Mac, Mec, Mic!",
        "duration":95.712,
        "img":"./img/macmecmic.png",
        "source":"./songs/macmecmic.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Una Aventura Misteriosa!",
        "duration":104.211166,
        "img":"./img/db.png",
        "source":"./songs/makafushigi.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Uptown Girl",
        "duration":186.985555,
        "img":"./img/tomatic.png",
        "source":"./songs/uptowngirl.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"We Are!",
        "duration":110.248354,
        "img":"./img/onepiece.png",
        "source":"./songs/weare.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"All Time Low",
        "duration":217.603401,
        "img":"./img/fortnite.png",
        "source":"./songs/dekupaptamdem.mp3",
        "playing":false,
        "elapsed":0
    },
    {
        "name":"Sota l'aigua (feat. Marçal i Arlet)",
        "duration":137.76,
        "img":"./img/sotalaigua.png",
        "source":"./songs/sotalaigua.mp3",
        "playing":false,
        "elapsed":0 
    },
]

let audioActiu;
let barra;

window.onload = function(){
    if(localStorage.getItem("songs") === null){
        localStorage.setItem("songs",JSON.stringify(songs));
    }
    else{
        songs = JSON.parse(localStorage.getItem("songs"));
    }
    barra = document.getElementById('songProg');

    songs.forEach((song,index) => {
        let div = document.createElement("div");
        div.classList.add("listsong");
        div.setAttribute("data-index",index);
        let img = document.createElement("img");
        img.setAttribute("src",song.img);
        
        let title = document.createElement("p");
        title.classList.add("title");
        title.innerText = song.name;


        
        let audio = document.createElement("audio");
        audio.setAttribute("data-index",index);

        let source = document.createElement("source");
        source.setAttribute("src",song.source);

        audio.currentTime = song.elapsed;

        audio.appendChild(source);
        div.appendChild(img);
        div.appendChild(title);

        div.appendChild(audio);

        let durationP = document.createElement("p");
        durationP.classList.add("duration");
        let seconds = song.duration;
        let minutes = Math.floor(seconds/60);
        let extraSeconds = Math.floor(seconds % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds; 
        durationP.innerText = minutes + ":" + extraSeconds;

        div.appendChild(durationP);
        document.getElementById("list").appendChild(div);
        div.addEventListener("click",(ev) => selectSong(ev.currentTarget));

        if(song.playing == true){
            div.classList.add("active");
            audioActiu = div.querySelector("audio");
            div.scrollIntoView();
            audioActiu.addEventListener("loadedmetadata", function(){
                selectSong(div);
            })
        }

        audio.addEventListener("ended",function(){
            audioActiu.currentTime = 0;
            next();
        });
        



    });


    document.getElementById("prev").onclick = previus;
    document.getElementById("play").onclick = playpause;
    document.getElementById("next").onclick = next;

    
    barra.addEventListener('click', function (event) {
        var durada = audioActiu.duration;
        var dimBarra = this.max;
        var pos = event.offsetX / this.offsetWidth * dimBarra;
        this.value = pos;
        var posAudio = Math.ceil(pos * durada / dimBarra);
        audioActiu.currentTime = posAudio;
        guardarEstat();
    });

}

