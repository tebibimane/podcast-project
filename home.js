document.querySelector(".sidebarr-toggler").addEventListener ("click", () => {
    document.querySelector(".sidebarr").classList.toggle("collapse");
});
let pop_podcast_left=document.getElementById('pop_podcast_left');
let pop_podcast_right=document.getElementById('pop_podcast_right');
let podcast_bx =document.getElementsByClassName('item')[0];

pop_podcast_left.addEventListener('click', () =>{
    podcast_bx.scrollLeft += 330;
});
pop_podcast_right.addEventListener('click', () =>{
    podcast_bx.scrollLeft -= 330;
});