document.querySelector("h1").addEventListener("click", function () {
    alert("±¥¡Œ“£¨Œ“≈¬Ã€°£");
  });
let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if (mySrc==='images/girl.jpg'){
        myImage.setAttribute('src','images/eye.jpg');
    }else{
        myImage.setAttribute('src','images/girl.jpg');
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName(){
    let myname=prompt('please input your name.');
    if (!myname){
        setUserName();
    }else{
    localStorage.setItem('name',myname);
    myHeading.textContent='the girl, so cool! welcome '+myname;
}}
myButton.onclick=function(){
    setUserName();
}