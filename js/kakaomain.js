/* 스크롤 이벤트 - 정기예금,적금 ,해외송금 */
window.onload = () => {
    let standard = window.innerHeight * 0.6;
    let imgsavings = document.querySelector(".img_savings");
    let imgforeign = document.querySelector(".img_foreign");
    let skybox = document.querySelector(".document_night");

    // 뷰포트로부터 부모 요소와의 거리 (기준점 잡기)
    const savingline = imgsavings.getBoundingClientRect().top - standard
    const foreignline = imgforeign.getBoundingClientRect().top - standard
    const skybackground = skybox.getBoundingClientRect().top - standard
    

    // 스크롤 이벤트를 감지하는 이벤트 리스너 생성.
    window.addEventListener("scroll", scrollEvent);

    function scrollEvent() {
        // 스크롤 위치
        let scrollTop = window.scrollY;

        // 정기예금, 적금
        if (scrollTop >= savingline) {
            imgsavings.classList.add('on');

        } else {
            imgsavings.classList.remove('on');
        }
        // 해외송금
        if (scrollTop >= foreignline) {
            imgforeign.classList.add('on');

        } else {
            imgforeign.classList.remove('on');
        }
        // 간편서류제출
        if (scrollTop >= skybackground) {
            skybox.classList.add('on');
        } 
        else {
            skybox.classList.remove('on');
        }
    }

    // 체크카드 슬라이드 이벤트
    const swiper = new Swiper(".cardSwiper", {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,

        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });
};

