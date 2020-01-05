var slideIndex;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-content");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 3000);
}
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}