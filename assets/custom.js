/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$(".arrival-slider").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
    '<div class="slick-prev"><svg viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow"></path></svg></div>',
  nextArrow:
    '<div class="slick-next"><svg viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });


  $(".best-seller-slider").slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
    '<div class="slick-prev"><svg viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow"></path></svg></div>',
  nextArrow:
    '<div class="slick-next"><svg viewBox="0 0 100 100"><path d="M 20,50 L 60,90 L 60,85 L 25,50  L 60,15 L 60,10 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });