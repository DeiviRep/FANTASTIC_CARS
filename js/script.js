// <!-- Initialize Swiper -->
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: 
            {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: 
            {
                560: {//before 560px screen width and after 900px
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                900: {//before 900px screen width and after 1300px
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1300: {//before 1300px screen width
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
        });