'use strict'
var user = "";
var pass = "";

if ($("body").data("title") === "page1") {
    const switcherGoP1 = document.querySelector('.btn');
    switcherGoP1.addEventListener('click',function(){
        if((document.querySelector("div.boxes input[name='user']").value == null) || (document.querySelector("div.boxes input[name='user']").value == "")){
            //pop up add a username
            window.alert("username cant be blank");
        }
        if((document.querySelector("div.boxes input[name='pass']").value == null) || (document.querySelector("div.boxes input[name='pass']").value == "")){
            //popup add a pass
            window.alert("password cant be blank");
        }
        else{
            user = document.querySelector("div.boxes input[name='user']").value;
            pass = document.querySelector("div.boxes input[name='pass']").value;
            window.location.replace("page2.html");
        }
        console.log(user);
        console.log(pass);
        localStorage.clear();
    
    });
} // end if p1

if ($("body").data("title") === "page2") {
const switcherBackP2 = document.querySelector('.backbtn');
switcherBackP2.addEventListener('click',function(){
    window.location.replace("page1.html");
});
const switcherGoP2 = document.querySelector('btn1');
switcherGoP2.addEventListener('click',function(){

});
} //end if p2

