$(function(){
/* 메인 슬라이드 */
/*     $('.slide').append($('.slide li').first().clone())

    //다음 버튼을 클릭했을 때
    let main_n = 0;
    $('.arrow_right').click(function(){
        main_n++;
        if(main_n==4){
            $('.slide').css({left:0})
            main_n=1
        }
        $('.slide').stop().animate({left:-100 * main_n + "%"})

    // pignation on클래스
        if(main_n == 3){
            $('.pignation li').removeClass('on')
            $('.pignation li').eq(0).addClass('on')
        }else{
            $('.pignation li').removeClass('on')
            $('.pignation li').eq(main_n).addClass('on')
        }
        clearInterval(rolling) // 하던거 멈추고 setInterval 다시 시작
        rolling = setInterval(main_v,5000)
    })

    //이번 버튼을 클릭했을 때
    $('.arrow_left').click(function(){
        main_n--;
        if(main_n==-1){
            main_n=2
        }
        $('.slide').stop().animate({left:-100 * main_n + "%"})
        $('.pignation li').removeClass('on')
        $('.pignation li').eq(main_n).addClass('on')

        clearInterval(rolling) // 하던거 멈추고 setInterval 다시 시작
        rolling = setInterval(main_v,5000)
    })

    //pignation을 클릭했을 때
    $('.pignation li').click(function(){
        main_n = $(this).index()
        if($(this).hasClass('on')==false){
            $('.slide').stop().animate({left:-100 * main_n + "%"})
        }
        $('.pignation li').removeClass('on')
        $(this).addClass('on')

        clearInterval(rolling) // 하던거 멈추고 setInterval 다시 시작
        rolling = setInterval(main_v,5000)
    })


    //자동롤링
    let rolling = setInterval(main_v,5000)
    function main_v (){
        $('.arrow_right').click()
    }  */
    

   
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
    //   spaceBetween: 0,
      loop: true,
      autoplay : {delay : 5000},
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });






/* 베스트 슬라이드 */
    $('.best_menu_body').append($('.best_menu_body ul').first().clone())
    let best_n=0
    $('.best_arrow_right').click(function(){
        best_n++;
        if(best_n==3){
            $('.best_menu_body').css({left:0})
            best_n=1
        }
        $('.best_menu_body').stop().animate({left:-100 * best_n + "%"})
        
        clearInterval(rolling)
        rolling = setInterval(best_V,7000)
    })
    
    $('.best_arrow_left').click(function(){
        best_n--;
        if(best_n==-1){
            best_n=1
        }
        $('.best_menu_body').stop().animate({left:-100 * best_n + "%"})

        clearInterval(rolling)
        rolling = setInterval(best_V,7000)        
    })

    let rolling = setInterval(best_V,7000)
    function best_V (){
        $('.best_arrow_right').click()
    }
    /* setInterval(function(){
        best_n++;
        if(best_n==3){
            $('.best_menu_body').css({left:0})
            best_n=1
        }$('.best_menu_body').stop().animate({left:-100 * best_n + "%"})
    },5000) */

/* 스크롤시 메뉴 사라짐 */

let headerVisible = true;

$(window).scroll(function() {
    // 현재 윈도우의 너비를 가져옴
    let windowWidth = $(window).width();

    // 너비가 1200px 이상일 경우에만 실행
    if (windowWidth >= 1024) {
        let scrollTop = $(window).scrollTop();
        
        if (scrollTop <= 150 && !headerVisible) {
            $('#header').stop(true, true).slideDown(200);
            headerVisible = true;
        } else if (scrollTop > 150 && headerVisible) { 
            $('#header').stop(true, true).slideUp(200);
            headerVisible = false;
        }
    } else {
        // 화면이 1200px 미만일 경우 헤더를 항상 표시할 수도 있음
        $('#header').show(); // 또는 다른 동작을 추가 가능
    }
});

/* $(window).scroll(function(){
    let scrollTop = $(window).scrollTop()
    /* console.log(scrollTop) */
   /*  if(scrollTop <= 150){
        $('#header').slideDown(200)
    }else{ 
        $('#header').slideUp(200)
    }
    })
     */ 


    const tl = gsap.timeline({
        repeat: -1,     // 무한 반복
        repeatDelay: 0 // 반복 딜레이
    });

    tl.from(".review_box,.intro_banner_img", {
        duration: 0.8,
        y: 10, 
        opacity:1,
        ease:'power1.out',
    }) 

    tl.to(".review_box,.intro_banner_img", {
        duration: 0.8,
        y: 10, 
        opacity:1,
        ease:'power1.in',
    })


    const tl_car = gsap.timeline({
        repeat: -1,     // 무한 반복
        repeatDelay: 2 // 반복 딜레이
    });

    tl_car.from(".delivery_icon", {
        duration: 1,
        x: -100, 
        opacity:0,
        ease:'power1.out',
    })

/*     gsap.from(".review_box,.intro_banner_img",{
        y:50,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".review_box",
        }
    }) */

    gsap.from(".intro_img",{
        x:-100,
        opacity:0,
        duration:2.5,
        /* rotation:360, */
        /* borderRadius:100, */
        scrollTrigger:{
            trigger:".intro_img",//시작점 설정
        }
    })

    gsap.from(".intro_font",{
        x:100,
        opacity:0,
        duration:2.5,
        /* rotation:360, */
        /* borderRadius:100, */
        scrollTrigger:{
            trigger:".intro_font",//시작점 설정
        }
    })

    gsap.from("#best .container",{
        y:100,
        opacity:0,
        duration:1,
        /* rotation:360, */
        /* borderRadius:100, */
        scrollTrigger:{
            trigger:".best_wrap",//시작점 설정
        }
    })

    gsap.from("#review .container",{
        y:100,
        opacity:0,
        duration:1,
        /* rotation:360, */
        /* borderRadius:100, */
        scrollTrigger:{
            trigger:".review_list",//시작점 설정
        }
    })

/*     gsap.from(".delivery_icon",{
        x:-100,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:".delivery_icon",
        }
    })
 */

$(".m_icon_01").click(function(){
    $(".nav_m_wrap, .nav_m_wrap_bg").stop().fadeIn()
})
$(".close, .nav_m_wrap_bg").click(function(){
    $(".nav_m_wrap, .nav_m_wrap_bg").stop().fadeOut()
})

})