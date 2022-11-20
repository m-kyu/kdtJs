
const elHeader = document.querySelector('header');
const elTab = document.querySelectorAll('.btn_list li');
const elTabCon = document.querySelectorAll('.tap_img_box');
const tabRedMove = document.querySelector('.sec_2 span');

let tabIdx = 0;
let scrPos = {y:0,dy:0,state:true}

window.addEventListener('scroll',()=>{
    scrPos.y = window.pageYOffset;
    scrPos.state = (scrPos.y > scrPos.dy) ? true : false;
    scrPos.dy = scrPos.y;

    if(scrPos.state){
        elHeader.classList.add('active');
    }else{
        elHeader.classList.remove('active')
    }
});


elTab.forEach((item,key)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        tabFun(key);
    })
})

function tabFun(k){
    elTab[tabIdx].classList.remove('active');
    elTabCon[tabIdx].classList.remove('active');

    elTab[k].classList.add('active');
    elTabCon[k].classList.add('active');

    tabRedMove.style.left= (elTab[k].offsetLeft + (elTab[k].offsetWidth/2))+'px';
    tabIdx = k;
}


const elSec3 = document.querySelectorAll('.sec_3_slide > li');

elSec3.forEach((item,key) =>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        accd(key);
    })
});

function accd(k){
    elSec3.forEach(item =>{
        item.classList.remove('active');
    })
    elSec3[k].classList.add('active');
}


/* 

$(function(){


    $(window).on('scroll',function(){

        var slideAni = document.querySelector('.slide_1')
        let cSlide = $('.canon-slide').offset().top;
        // console.log(cSlide-$(window).height()  <  $(window).scrollTop())
        if(cSlide-$(window).height()  <  $(window).scrollTop()){
            slideAni.classList.add('active');
        }else{
            slideAni.classList.remove('active');
        }
    });


    
    const cTapBtn = document.querySelectorAll('.btn_list li')
    const cTapCon = document.querySelectorAll('.tap_img_box')
    let num = 0;
    for(let i=0; i<cTapBtn.length; i++){
        cTapBtn[i].addEventListener('click',function(){
            for(let j=0; j<5; j++){
                cTapBtn[j].classList.remove('active');
                cTapCon[j].classList.remove('active');
            }

            cTapBtn[i].classList.add('active');
            cTapCon[i].classList.add('active');
        });
    }


    $('.top_icon img').click(function(){
        $('html, body').animate({ scrollTop:0 }, "slow");
            return false;
    });


    // var scrollHeight = document.querySelector('.bg_1 img').offsetTop;
    var scrollBtn = document.querySelector('.scroll');

    scrollBtn.addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo( 0 , 590 );
    });


        
        var tabRed = document.querySelectorAll('.btn_list li');
        var tabRedMove = document.querySelector('.sec_2 span');


        tabRed[0].addEventListener('click',function(){
            if(true){
            tabRedMove.style.left= "24%";
            }
        });
        tabRed[1].addEventListener('click',function(){
            if(true){
            tabRedMove.style.left= "37%";
            }
        });
        tabRed[2].addEventListener('click',function(){
            if(true){
            tabRedMove.style.left= "50%";
            }
        });
        tabRed[3].addEventListener('click',function(){
            if(true){
            tabRedMove.style.left= "63%";
            }
        });
        tabRed[4].addEventListener('click',function(){
            if(true){
            tabRedMove.style.left= "76%";
            }
        });


    const sec1 = document.querySelector('.sec_1');

    $(window).on('scroll',function(){
        if(sec1.offsetTop < $(window).scrollTop()  &&  sec1.offsetTop + 3000 > $(window).scrollTop() ){
            $('#rseries').css({
                position:'fixed'
            })
        }else{
            $('#rseries').css({
                position:'absolute'
            })
        }
    })

    const sec3 = document.querySelector('.sec_3');

    $(window).on('scroll',function(){
        if(sec3.offsetTop < $(window).scrollTop() && sec3.offsetTop + 300 > $(window).scrollTop() ){
            $('#rflens').css({
                position:'fixed'
            })
            }else{
                $('#rflens').css({
                    position:'absolute'
                })
            }
        })
    
        var pause = document.querySelector('#btn_pause');
        var play = document.querySelector('#btn_play');

        $("#btn_play").click(function() {
            player1.style = "display:block;"
            play.style = "display:none"
            pause.style = "display:block"
            player.playVideo();
        });

        $("#btn_pause").click(function() {
            player1.style = "display:none"
            play.style = "display:block"
            pause.style = "display:none"
            player.pauseVideo();
        });
})



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
        height: '100%',
        width: '100%',
        videoId: 'DiIQdgGvNtQ',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });            
}
function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
 */