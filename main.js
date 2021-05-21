// var slide=document.getElementById('slide');
// var action=document.getElementById('action');
// var line1=document.getElementById('line1');
// var line2=document.getElementById('line2');
// var line3=document.getElementById('line3');
// line1.onclick=function(){
//     slide.style.transform=('translateX(0)');
//     action.style.top='0px';
// }
// line2.onclick=function(){
//     slide.style.transform=('translateX(-25%)');
//     action.style.top='60px';
// }
// line3.onclick=function(){
//     slide.style.transform=('translateX(-50%)')
//     action.style.top='180px'
// }
// line4.onclick=function(){
//     slide.style.transform=('translateX(-75%)')
//     action.style.top='240px'
// }

$("document").ready(function(){
    $(".btn-nav").click(function(){
        $(".navoption").toggleClass("active");
    })
});