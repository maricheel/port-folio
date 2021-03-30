$(document).ready(function () {
    let $btns = $('.project-area .button-group button');
    $btns.click(function (e) {
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

    gsap.to('.layer-1', {y: '-100vh', delay: .5});
    gsap.to('.layer-2', {y: '-100vh', delay: .7});
    gsap.to('.layer-3', {y: '-100vh', delay: .9});
    gsap.to('.overlay', {y: '-100vh', delay: 1.5});

    gsap.fromTo('.text',
        {x: '30rem', opacity: 0},
        {x: 0, opacity: 1, ease: 'back.out(1.7)', delay:1.9});
    function f(){
        document.getElementById("a1").innerHTML="An email will be sent to you!!";
    }


         const c1 =document.querySelector(".sf");
         const cc=c1.textContent;
         const ccc=cc.split("");
         c1.textContent=" ";
         for (var i =0; i < ccc.length; i++) {
            c1.innerHTML+='<span id="d9">'+ ccc[i] +"</span>";
         }
         let char =0; 
          function complete(){
                clearInterval(timer);
                timer=null;
               } 
          let timer=setInterval(onTick, 500);
          function onTick(){
                const span =c1.querySelectorAll("#d9")[char];
                span.classList.add('fade');
                char++;
                if (char === ccc.length) {
                    complete();
                    return;
                }
        }
         
      const ratio = .4;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry){
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options); 
observer.observe(document.querySelectorAll('.reveal')[0]);
observer.observe(document.querySelectorAll('.reveal')[1]);
observer.observe(document.querySelectorAll('.reveal')[2]);














