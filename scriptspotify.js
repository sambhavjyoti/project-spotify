console.log("Welcome to Spotify");

let songIndex =0
let audioElement=new Audio('WhatsApp Audio 2023-09-13 at 9.17.35 PM.mpeg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs =[
    {
songName: "Sign of the times", filePath: "WhatsApp Audio 2023-09-13 at 9.17.35 PM.mpeg" ,coverPath:"signofthetimes.jfif"
    }
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})


audioElement.addEventListener('timeupdate',()=>{
    
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})