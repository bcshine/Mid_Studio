// DOM 요소 선택
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const carousel = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const chatbotToggle = document.querySelector('.chatbot-toggle');

// 슬라이드 데이터
const slides = [
    {
        image: '/image/hero1.jpg',
        title: '당신의 아이디어, 브랜드가 되다',
        description: '브랜드 이름에서부터 웹사이트까지, 사업성공을 함께 합니다'
    },
    {
        image: '/image/hero2.jpg',
        title: '전문가와 함께하는 브랜드 구축',
        description: '중간계 스튜디오는 브랜드 구축의 전 과정을 함께하는 성공 파트너입니다.'
    },
    {
        image: '/image/hero3.jpg',
        title: '창의적인 솔루션',
        description: '당신의 비즈니스를 위한 최적의 솔루션을 제시합니다.'
    }
];

// 포트폴리오 데이터
const portfolioItems = [
    {
        image: '/image/portfolio1.jpg',
        title: '모바일 결제 시스템',
        description: '스마트폰과 연동되는 최신 결제 솔루션 구축'
    },
    {
        image: '/image/portfolio2.jpg',
        title: '카페 결제 단말기',
        description: '카페 및 소상공인 맞춤형 카드 결제 시스템'
    },
    {
        image: '/image/portfolio3.jpg',
        title: '치과 의료장비 UI',
        description: '의료기기 인터페이스 및 사용자 경험 개선'
    },
    {
        image: '/image/portfolio4.jpg',
        title: '항공기 엔진 브랜딩',
        description: '항공 산업을 위한 기술적 브랜딩 사례'
    },
    {
        image: '/image/portfolio5.jpg',
        title: '드론 촬영 서비스',
        description: '최신 드론을 활용한 영상 및 사진 촬영 프로젝트'
    },
    {
        image: '/image/portfolio6.jpg',
        title: '레트로 타자기 캠페인',
        description: '감성적인 레트로 제품 홍보 및 브랜딩'
    },
    {
        image: '/image/portfolio7.jpg',
        title: '스마트 결제 UX',
        description: '사용자 중심의 결제 경험 설계'
    },
    {
        image: '/image/portfolio8.jpg',
        title: '카드 결제 시스템',
        description: '다양한 카드 결제 환경 구축 사례'
    },
    {
        image: '/image/portfolio9.jpg',
        title: '디지털 브랜딩',
        description: '디지털 환경에서의 브랜드 가치 극대화'
    }
];

// 고객 후기 데이터
const testimonials = [
    {
        text: "★★★★★\n브랜드 네임부터 웹사이트까지 한 번에 해결!\n상담도 친절하고 결과물도 정말 만족스러웠어요.\n다음에도 꼭 다시 이용하고 싶습니다.",
        author: "이수진 대표"
    },
    {
        text: "★★★★★\n처음 창업이라 막막했는데,\n중간계 스튜디오 덕분에 브랜드가 완성됐어요.\n주변에도 꼭 추천하고 싶어요!",
        author: "박민호 대표"
    },
    {
        text: "★★★★★\n상세페이지 퀄리티가 정말 높아요.\nSNS 콘텐츠도 센스있게 만들어주셔서\n매출이 눈에 띄게 늘었습니다.",
        author: "김지연 팀장"
    },
    {
        text: "★★★★★\n웹사이트 오픈 후 문의가 3배로 증가!\n모바일에서도 너무 예쁘게 잘 보여요.\n감사합니다!",
        author: "정우성 대표"
    },
    {
        text: "★★★★★\n브랜드 전략부터 마케팅까지\n한 번에 컨설팅 받아서 시간도 절약되고\n결과도 기대 이상이었습니다.",
        author: "최유리 실장"
    },
    {
        text: "★★★★★\n디자인이 정말 감각적이에요.\n우리 브랜드만의 개성이 잘 살아났어요.\n팀원 모두 만족했습니다.",
        author: "오세훈 매니저"
    },
    {
        text: "★★★★★\n빠른 피드백과 꼼꼼한 진행 덕분에\n프로젝트가 순조롭게 끝났어요.\n믿고 맡길 수 있는 곳입니다.",
        author: "한지민 대표"
    },
    {
        text: "★★★★★\n처음엔 반신반의했는데\n결과물을 보고 정말 놀랐어요.\n브랜드 가치가 한층 높아졌습니다.",
        author: "이정훈 대표"
    },
    {
        text: "★★★★★\n고객 입장에서 생각해주는 서비스!\n세심한 설명과 제안 덕분에\n브랜드 방향을 명확히 잡을 수 있었습니다.",
        author: "장미영 대표"
    }
];

// 현재 슬라이드 인덱스
let currentSlide = 0;

// 햄버거 메뉴 토글
hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// 슬라이드 생성 함수
function createSlides() {
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <div class="slide-content">
                <h2>${slide.title}</h2>
                <p>${slide.description}</p>
                <a href="#" class="cta-button">시작하기</a>
            </div>
        `;
        carousel.appendChild(slideElement);
    });
}

// 슬라이드 전환 함수
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// 자동 슬라이드
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 슬라이드 이벤트 리스너
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// 포트폴리오 아이템 생성
function createPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// 고객 후기 생성
function createTestimonials() {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    testimonialGrid.innerHTML = '';
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial-card fade-in';
        testimonialElement.innerHTML = `
            <div class="testimonial-stars">★★★★★</div>
            <div class="testimonial-text">${testimonial.text.replace('★★★★★\n', '')}</div>
            <div class="testimonial-author">- ${testimonial.author}</div>
        `;
        testimonialGrid.appendChild(testimonialElement);
    });
}

// 스크롤 애니메이션
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 헤더 스크롤 효과
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// 챗봇 토글
chatbotToggle.addEventListener('click', () => {
    // 챗봇 구현 로직
    console.log('챗봇 토글');
});

// 이벤트 리스너 등록
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    handleHeaderScroll();
});

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    createSlides();
    createPortfolioItems();
    createTestimonials();
    setInterval(autoSlide, 5000);

    // 자세히 보기 버튼 이벤트
    const btns = document.querySelectorAll('.package-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const detail = document.getElementById(targetId);
            // 모든 상세 닫기
            document.querySelectorAll('.package-detail').forEach(d => d.style.display = 'none');
            // 현재만 토글
            if (detail) {
                if (detail.style.display === 'none') {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none';
                }
            }
        });
    });
}); 