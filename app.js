document.addEventListener('DOMContentLoaded', () => {
  
  let keys=  [81,65,83,68,70,71,72,74,75,76,186,222,221,220]
  let blacks2=[87,69,85,73]
  let blacks3=[82,84,89,79,80,219]
  
  document.addEventListener('keydown', keyToNote)
  document.addEventListener('keyup',pressed)

  var key = document.querySelectorAll("#container .keys")
  var black2s = document.querySelectorAll("#container .black2s")
  var black3s = document.querySelectorAll("#container .black3s")
  
  var whiteNotes= [
    new Howl({src:['libs/notes/c3.ogg']}),
    new Howl({src:['libs/notes/d3.ogg']}),
    new Howl({src:['libs/notes/e3.ogg']}),
    new Howl({src:['libs/notes/f3.ogg']}),
    new Howl({src:['libs/notes/g3.ogg']}),
    new Howl({src:['libs/notes/a4.ogg']}),
    new Howl({src:['libs/notes/b4.ogg']}),
    new Howl({src:['libs/notes/c4.ogg']}),
    new Howl({src:['libs/notes/d4.ogg']}),
    new Howl({src:['libs/notes/e4.ogg']}),
    new Howl({src:['libs/notes/f4.ogg']}),
    new Howl({src:['libs/notes/g4.ogg']}),
    new Howl({src:['libs/notes/a5.ogg']}),
    new Howl({src:['libs/notes/b5.ogg']})
  ]
  


  var blacks2Notes = [
    new Howl({src:['libs/notes/c-3.ogg']}),
    new Howl({src:['libs/notes/d-3.ogg']}),
    new Howl({src:['libs/notes/c-4.ogg']}),
    new Howl({src:['libs/notes/d-4.ogg']})
  ]
  var blacks3Notes = [
    new Howl({src:['libs/notes/f-3.ogg']}),
    new Howl({src:['libs/notes/g-3.ogg']}),
    new Howl({src:['libs/notes/a-4.ogg']}),
    new Howl({src:['libs/notes/f-4.ogg']}),
    new Howl({src:['libs/notes/g-4.ogg']}),
    new Howl({src:['libs/notes/a-5.ogg']}),
  ]
  
  function keyToNote(e){
    if (e.repeat != undefined) {
      allowed = !e.repeat;
    }
    if (!allowed) return;
    allowed = false;
    //...
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i].classList.add("pressed")
        whiteNotes[i].play()
      }else if(e.keyCode === blacks2[i]){
        black2s[i].style.backgroundColor="grey"
        blacks2Notes[i].play()
      }else if(e.keyCode === blacks3[i]){
        black3s[i].style.backgroundColor="grey";
        blacks3Notes[i].play()
        
      }
    }
  }
  function pressed(e){
    allowed = true;
    for(i=0;i<=keys.length;i++){
      if(e.keyCode === keys[i]){
        key[i].classList.remove("pressed")
        whiteNotes[i].stop()
      }else if(e.keyCode === blacks2[i]){
        black2s[i].style.backgroundColor="black";
        blacks2Notes[i].stop()
      }else if(e.keyCode === blacks3[i]){
        black3s[i].style.backgroundColor="black";
        blacks3Notes[i].stop()
      }
    }
  }

  var songsButton = document.getElementById("songsButton");

  songsButton.addEventListener("click", function(){
    var content = this.nextElementSibling;
    if(content.style.opacity){
      content.style.opacity = null;
    } else{
      content.style.opacity = '1';
    }
  });

  var twinkle1 = [0,7,7,11,11,5,5,11,10,10,9,9,8,8,7,11,11,10,10,9,9,8,7,7,11,11,5,5,11,7,7,11,11,5,5,11,10,10,9,9,8,8,7];

  var playButton = document.querySelector(".song-play-icon");

  playButton.addEventListener("click", function(){
    playTwinkleSong();    
  })
  async function task(){
    await timer(500);
  }
  async function task2(){
    await timer(100);
  }
  async function task3(){
    await timer(5);
  }
  async function playTwinkleSong(){
    for (let index = 1; index < twinkle1.length; index++) {
      if((index - 1) % 7 === 0){
        await task2();
      }
      await task(whiteNotes[twinkle1[index]].play(),key[twinkle1[index]].classList.add("pressed"));
      await task3(whiteNotes[twinkle1[index]].stop(),key[twinkle1[index]].classList.remove("pressed")) 
    }
  }
  function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
    
})
 
window.onload= function()
{
  let keys=  [81,65,83,68,70,71,72,74,75,76,186,222,221,220]
  let blacks2=[87,69,85,73]
  let blacks3=[82,84,89,79,80,219]

  var key = document.querySelectorAll("#container .keys")
  var black2s = document.querySelectorAll("#container .black2s")
  var black3s = document.querySelectorAll("#container .black3s")

    for (i = 0; i < key.length; i++) {
      key[i].textContent += String.fromCharCode(keys[i]) 
    }
    for (i = 0; i < black2s.length; i++) {
      black2s[i].textContent += String.fromCharCode(blacks2[i])
    }
    for (i = 0; i < black3s.length; i++) {
      black3s[i].textContent += String.fromCharCode(blacks3[i]) 

    }
}