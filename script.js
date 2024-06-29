// Left-to-Right Slider
$(document).ready(function () {
    var owlLeftToRight = $('.left-to-right');
    owlLeftToRight.owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        slideTransition: 'linear', // Change to 'ease' or 'ease-in-out' if needed
        autoplayTimeout: 2000,
        autoplaySpeed:5000,
        autoplayHoverPause: false,
        nav:true,
        dots:false,
        responsive: {
          0: {
            items: 2   
          },
          600: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 4
          }
        }
    
    });
});
// Left-to-Right Slider
$(document).ready(function () {
    var owlLeftToRight = $('.temple-left-to-right');
    owlLeftToRight.owlCarousel({
        items: 4,
        loop: true,
        autoplay: false,
        slideTransition: 'linear', // Change to 'ease' or 'ease-in-out' if needed
        autoplayTimeout: 2000,
        autoplaySpeed:5000,
        autoplayHoverPause: false,
        nav:true,
        dots:false,
        responsive: {
          0: {
            items: 1   
          },
          600: {
            items: 2
          },
          992: {
            items: 3
          },
          1200: {
            items: 4
          }
        }
    
    });
});


let temple_card = document.getElementById('temple-card-carousel'); 

function checkMobileView() {
  if (window.matchMedia("(max-width: 767px)").matches) {
      // The viewport is 767 pixels or less
      // console.log("Mobile view");
      temple_card.classList.remove('owl-carousel')
      temple_card.classList.remove('temple-left-to-right')
      // Perform actions specific to mobile view here
  } else {
      // The viewport is more than 767 pixels
      // console.log("Desktop view");
      temple_card.classList.add('owl-carousel')
      temple_card.classList.add('temple-left-to-right')
      // Perform actions specific to desktop view here
  }
}

// Call the function on page load
checkMobileView();

// Optionally, call the function on window resize
window.addEventListener('resize', checkMobileView);
