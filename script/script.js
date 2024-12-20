$(function(){
    let links = gsap.utils.toArray('#parallax__nav ul li a')
        // console.log(links);
        links.forEach(link=>{
            let element = link.getAttribute('href') //#section1,...#section9
            // console.log(element)
            let linkST = ScrollTrigger.create({
                trigger:element,
                start:"top top",
            })

            ScrollTrigger.create({
                trigger:element,
                start:"top center",
                end:"bottom center",
                onToggle: self => setActive(link)
                //해당 sectoin에 들어갔을때 자신의 상태를 true/false로 반환해줘라(시작했으면 true/끝났으면  false)
            })

            //클릭할때 화면이 해당하는 #section.top값으로 이동
            link.addEventListener('click', e=>{
                e.preventDefault(); //링크차단
                gsap.to(window,{
                    duration:1,
                    scrollTo:linkST.start,
                    overwrite:"auto", /* 애니메이션이 여러번발생해서 에러처럼 보이는것을 방지하기위해 한번만 실행 */
                })
            })
        })
        
        //해당하는 link에 클래스 추가/모든 link에 클래스제거
        function setActive(link){
            links.forEach(el => el.classList.remove('active'))
            link.classList.add('active')
        }

        
        $('.intro_btn a,#parallax__title').click(function (e) {               //링크를 클릭하면 실행
            $.scrollTo(this.hash || 0, 800);	// 해시(#eu, #us, ...)가 있는 위치로 스크롤
            e.preventDefault();             // a 링크를 통해 이동하거나 창이 새로고침 되는것을 방지.
        });
        



    /* 인트로 애니메이션 */
    
    const t2 = gsap.timeline({
        repeat: -1,     // 무한 반복
        repeatDelay: 0 // 반복 딜레이
    });
    t2.from(".icon_right", {
        duration: 1.2,
        x: 35, 
        y: 25,
        opacity:0,
        ease:'power1.out',
    }) 

    t2.to(".icon_right", {
        duration: 1.2,
        x: 35, 
        y:25,
        opacity:1,
        ease:'power1.in',
    })



    
    $('#parallax__title, #parallax__nav').hide();

    // 섹션의 높이를 가져오는 함수
    function getSectionHeight() {
        return ($('Section').outerHeight() - $(window).height() / 4) ; // 또는 .height()를 사용해도 됩니다
    }

    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        let sectionHeight = getSectionHeight(); // 섹션 높이 불러오기

        console.log(scrollTop);
        if (scrollTop <= sectionHeight) {
            $('#parallax__title, #parallax__nav').slideUp(200);
        } else {
            $('#parallax__title, #parallax__nav').slideDown(200);
        }
    });

    
     const targets = gsap.utils.toArray(".intro_title")

     targets.forEach(target=>{
         let SplitClient = new SplitType(target, {type:"lines, words, chars"})
         let lines = SplitClient.lines;
         let words = SplitClient.words;
         let chars = SplitClient.chars;

         gsap.from(chars,{
             yPercent:100,
             autoAlpha:0,
             duration:2.3,
             ease:"circ.out",
             stagger:{
                 amount:1,
                 from:"random",
             },
             scrollTrigger:{
                 trigger:target,
                 start:"top bottom",
                 end:"+=400",
                 markers:false,
             }
         })
        })

    gsap.from(".intro_title_wrap",{
        y:100,
        opacity:0,
        duration:1.8,
        /* rotation:360, */
        /* borderRadius:100, */
        scrollTrigger:{
            trigger:".intro_title_wrap",//시작점 설정
        }
    })
        

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper2 = new Swiper(".mySwiper02", {
        slidesPerView: 3,
        grid: {
            column:3,
          rows: 2,
        },
        loop:true,
        autoplay: {
            delay: 0,
            disableOnInteraction: true
        },
        speed: 5000,
        centeredSlides: true,
        spaceBetween: 25,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
        // https://blog.naver.com/teve8856/223538617573 참고
      });
      const btnStart = document.querySelector('#section4 .auto .btnStart')
    const btnStop = document.querySelector('#section4 .auto .btnStop')

    btnStart.addEventListener('click',function(){
            swiper2.autoplay.start();
        })
    btnStop.addEventListener('click',function(){
        swiper2.autoplay.stop();
    });

      



      $("#section4 .swiper-slide a").colorbox()
      // https://www.jacklmoore.com/colorbox/ 참고
    



      //프로필 애니메이션
      function getSectionHeight2() {
        return ($('Section').outerHeight() - $(window).height() / 1.8) ; // 또는 .height()를 사용해도 됩니다
    }
    $(window).scroll(function() {
        let scrollTop2 = $(window).scrollTop();
        let sectionHeight2 = getSectionHeight2();

        if(scrollTop2 >= sectionHeight2){ 
            $('.profile_picture, .profile_cont ,.education').show()
        }else{
            $('.profile_picture, .profile_cont ,.education').fadeOut()
        }
        if(scrollTop2 >= sectionHeight2){ 
            $('.career').show()
        }else{
            $('.career').fadeOut()
        }
        if(scrollTop2 >= sectionHeight2){ 
            $('.skill, .license, .keyword').show()
        }else{
            $('.skill, .license, .keyword').fadeOut()
        }
    })


})