//검색창 요소(.search) 찾기. 
const searchEl = document.querySelector('.search')       //document 객체에서 .search 선택자로 요소를 검색해 searchEl 변수에 할당
const searchInputEl = searchEl.querySelector('input');   //다시 searchEl 변수에서 input 선택자로 요소를 검색해 searchInputEl 변수에 할당
//검색착 요소를 클릭화면 실행
searchEl.addEventListener('click', function() {          //div.search 요소를 클릭했을때
    searchInputEl.focus();                               //input요소를 포커스 하도록 한다
});
//검색창 요소 내부 실제 input 요소에 포커스 되면 실행.
searchInputEl.addEventListener('focus',function() {       //input요소가 포커스 되면
    searchEl.classList.add('focused');                    //div.search 요소에 focused라는 클래스값을 추가
    searchInputEl.setAttribute('placeholder','통합검색');  //placeholder 속성을 통해 '통합검색' 값도 같이 추가
});
//검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur',function() {        //input요소가 블러 되면
    searchEl.classList.remove('focused');                 //div.search 요소에 focused라는 클래스값을 삭제
    searchInputEl.setAttribute('placeholder','');         //placeholder 속성값을 비운다
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges'); //.badges 선택자로 요소를 검색해 badgeEl변수에 할당
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function() {            //window객체에 scroll 이벤트를 추가해 사용자가 화면을 스크롤할때 실행 할 함수 작성
    console.log(window.scrollY);                          //window객체의 scrollY 속성을 console에 출력
    if (this.window.scrollY > 500){
        //Badge 요소 숨기기
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //상단으로 이동 버튼 보이기
        gsap.to(toTopEl, .6, {
            opacity: 1,
            x: 0
        });
    } else {
        //Badge 요소 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //상단으로 이동 버튼 숨기기
        gsap.to(toTopEl, .6, {
            opacity: 0,
            x: 100                                      //0.6초동안 오른쪽으로 이동하면서 투명해짐
        });
    }
});
toTopEl.addEventListener('click', function () {
    gsap.to(window, .6, {
        scrollTo: 0
    });
});
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');  //.fade-in 선택자로 요소를 검색해 faedEls변수에 할당
// 요소들 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {                   //forEach 메소드의 콜백 함수에서 gsap 객체의 to 메소드를 사용해 애니메이션할 요소, 시간, 속성들 순서대로 작성
    gsap.to(fadeEl, 1, {                                     //.fade-in요소가 1초동안 opacity: 1; 속성과 값으로 자연스럽게 전환
        delay: (index + 1) * .7,                             //각 .fade-in요소의 지연 시간이 달라야 순차적으로 나타날테니 콜백 함수의 index 매개변수를 활용해 값을 지정, 
        opacity: 1                                           //총 4개의 fade-in요소를 반복할것이지 index 매개변수는 0부터 3까지 반복되고 지연시간은 0.7초, 1.4초, 2.1초, 2.8초가 된다.
    });
});


new Swiper('.notice .swiper',{
    direction: 'vertical',                                   //수직 슬라이드
    autoplay: true,                                          //자동 재생 여부
    loop: true                                               //반복 재생 여부
});

new Swiper('.promotion .swiper', {
    //direction: 'horizontal',                               //수평 슬라이드
    autoplay: true,                                          //자동 재생 여부
    loop: true,                                              //반복 재생 여부
    slidesPerView: 3,                                        //한 번에 보여줄 슬라이드 개수
    spaceBetween: 10,                                        //슬라이드 사이 여백
    centeredSlides: true,                                    //1번 슬라이드가 가운데 보이기 시작
    pagination: {                                            //페이지 번호 사용
        el: '.promotion .swiper-pagination',                 //페이지 번호 요소
        clickable: true                                      //사용자의 페이지 번호 제어 여부
    },
    navigation: {                                            //슬라이드 이전/다음 버튼 사용
        prevEl: '.promotion .swiper-button-prev',            //이전버튼
        nextEl: '.promotion .swiper-button-next'             //다음버튼
    }
});

new Swiper('.awards .swiper', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-button-prev',
        nextEl: '.awards .swiper-button-next'
    }
});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
//토글 버튼을 클릭했을때.
promotionToggleBtn.addEventListener('click', function () {
    if (promotionEl.classList.contains('hide')) {
        promotionEl.classList.remove('hide');
    } else {
        promotionEl.classList.add('hide');
    }
})

gsap.to('.floating1', 1.5, {
    delay: 1,                   //얼마나 늦게 애니메이션을 시작할 것인지 시간을 설정.
    y: 15,                      //'transform: transLateY(수치);' 와같음. 수직으로 얼마나 움직일지 결정
    repeat: -1,                 //몇번 반복하는지를 설정, '-1'은 무한 반복
    yooyo: true,                //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut      //Easing 함수 적용
})
gsap.to('.floating2', 2, {
    delay: .5,                  //얼마나 늦게 애니메이션을 시작할 것인지 시간을 설정.
    y: 15,                      //'transform: transLateY(수치);' 와같음. 수직으로 얼마나 움직일지 결정
    repeat: -1,                 //몇번 반복하는지를 설정, '-1'은 무한 반복
    yooyo: true,                //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut      //Easing 함수 적용
})
gsap.to('.floating3', 2.5, {
    delay: 1.5,                 //얼마나 늦게 애니메이션을 시작할 것인지 시간을 설정.
    y: 15,                      //'transform: transLateY(수치);' 와같음. 수직으로 얼마나 움직일지 결정
    repeat: -1,                 //몇번 반복하는지를 설정, '-1'은 무한 반복
    yooyo: true,                //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut      //Easing 함수 적용
})

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEls){           //각 섹션을 forEach 메소드의 콜백 함수로 반복 처리
    new ScrollMagic                         //ScrollMagic 라이브러리 사용, new 키워드로 시작하는 생성자 함수 사용
    .Scene({                                //감시할 장면을 추가
        triggerElement: spyEls,             //보여짐 여부를 감시할 요소로 지정
        triggerHook: .8                     //화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEls, 'show')         //요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller());   //컨드롤러에 장면을 할당
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();