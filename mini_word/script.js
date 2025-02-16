const color=document.getElementById("color");
const size=document.getElementById("size");
const font=document.getElementById("select");
const paragraph=document.getElementById("paragraph");
color.addEventListener('input',function(){
    paragraph.style.color=color.value;
});
size.addEventListener('input',function(){
    paragraph.style.fontSize=size.value + 'px';
});
font.addEventListener('change',function(){
    paragraph.style.fontFamily=font.value;

});









