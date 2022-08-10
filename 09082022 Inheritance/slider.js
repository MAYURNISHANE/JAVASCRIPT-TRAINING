class slider {
    constructor() {
        this.slides = [
            {
                image: '1.jpg'
            },
            {
                image: '2.jpg'
            },
            {
                image: '3.jpg'
            },
            {
                image: '4.jpg'
            }
        ];
        this.currentSlide = this.slides[0];
        this.currentSlideIndex = 0;
    }

    /* Different way to change slides:
    renderSlides(){
        let allSlides =''
        this.slides.map((slide)=>{
            allSlides += '<img class="apply" src="'+slide.image+'"/>';
        })
        $('.slider').html(allSlides)
    }*/

    renderSlides() {
        let slide = '<img class="apply" src="' + this.currentSlide.image + '"/>'
        $('.slider').html(slide)
    }
    autoslide() {
        let mayur = this;
        setInterval(function () {
            if (mayur.currentSlideIndex < mayur.slides.length - 1) {
                mayur.currentSlideIndex = mayur.currentSlideIndex + 1;
                mayur.currentSlide = mayur.slides[mayur.currentSlideIndex];
                mayur.renderSlides();
            }
            else if (mayur.currentSlideIndex == mayur.slides.length - 1) {
                mayur.currentSlideIndex = 0;
                mayur.currentSlide = mayur.slides[0];
                mayur.renderSlides();
            }
        }, 2000)
    }
    prev() {
        if (this.currentSlideIndex > 0) {
            this.currentSlideIndex = this.currentSlideIndex - 1;
            this.currentSlide = this.slides[this.currentSlideIndex];
            this.renderSlides();
        }
    }
    next() {
        if (this.currentSlideIndex < this.slides.length - 1) {
            this.currentSlideIndex = this.currentSlideIndex + 1;
            this.currentSlide = this.slides[this.currentSlideIndex];
            this.renderSlides();
        }
    }
}
let slideShow = new slider();
slideShow.renderSlides();