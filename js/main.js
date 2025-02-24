// ScrollTrigger를 gsap에 등록
gsap.registerPlugin(ScrollTrigger);
$(function(){
    // 네비 아이콘토글
    $(".nav_icon").click(function(){
        $("body").toggleClass("on")
    })
        // gsap
        profile()
        function profile(){
    // gsap애니메이션
            let tl =gsap.timeline();
            tl.to("#main .inner .circle>*",{
                opacity:1,
                stagger:0.5,
                x:50,
                y:50,
                duration:1
            });
        }
        // main 화면 넘어가기
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#about',
                start:'20% 80%',
                end:'80% 100%',
                // markers:true,
            },
        })
        .to('#main',{backgroundColor:"#F0F8FF",ease:'easeOutQuint',duration:5},0)    
        .fromTo('#about .inner .subtitle',{x:'-100%'},{x:"0%",ease:'easeInOutElastic',duration:5},0)
        
        // work화면 텍스트 효과
        
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#work',
                start:'0% 0%',
                end:'0% 0%',
                markers:true,
            }
        })
        .fromTo('.txt_effect_wrap .txt_personal',{y:'-100%'},{y:"0%",ease:'easeOutBounce',duration:0.5},2)
        .fromTo('.txt_effect_wrap .txt_publishing',{y:'-100%'},{y:"0%",ease:'easeOutBounce',duration:0.5},1.5)
        .fromTo('.txt_effect_wrap .txt_design',{y:'-100%'},{y:"0%",ease:'easeOutBounce',duration:0.5},1)
        .fromTo('.txt_effect_wrap .txt_yule',{y:'-100%'},{y:"0%",ease:'easeOutBounce',duration:0.5},0.5)
        .fromTo('.txt_effect_wrap .txt_portfolio',{y:'-100%'},{y:"0%",ease:'easeOutBounce',duration:0.5},0)
})