const noticeBoard = document.querySelector('.notice-board');

function scrollNotices() {
    const firstNotice = noticeBoard.firstElementChild;
    noticeBoard.appendChild(firstNotice);
}

setInterval(scrollNotices, 2000); // Change notice every 2 seconds




const testimonialContainer = document.querySelector('.testimonial-container');
const testimonials = document.querySelectorAll('.testimonial');

let currentIndex = 0;

function scrollTestimonials() {
    const width = testimonialContainer.clientWidth;
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonialContainer.scroll({
        left: width * currentIndex,
        behavior: 'smooth'
    });
}

setInterval(scrollTestimonials, 5000); // Scroll every 5 seconds

