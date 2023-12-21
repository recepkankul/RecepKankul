$(document).ready(function(){
    function animateOnScroll() {
        $('.bolum2, .bolum3, .bolum4, .bolum5, .bolum6, .bolum7, footer').each(function(){
            var ustkenar = $(this).offset().top;
            var pencereAlt = $(window).scrollTop() + $(window).height();
            if (pencereAlt > ustkenar) {
                $(this).animate({'opacity': '1'}, 1000);
            }
        });
    }
    
    $(document).ready(function(){
        $('#book_pick_date, #book_off_date, #tarih3').datepicker({});
    
        // Sayfa yüklendiğinde çalıştır
        animateOnScroll();
    
        $(window).on('scroll load', function(){
            // Her scroll olayında ve sayfa yüklendiğinde çalıştır
            animateOnScroll();
        });
    });
    
});