$(document).ready(function(){
    $('.botn1').click(function(){
        $('.img1').css("margin-left", "0");
    });
    $('.botn2').click(function(){
        $('.img1').css("margin-left", "-20%");
    });
    $('.botn3').click(function(){
        $('.img1').css("margin-left", "-40%");
    });    
    $('.botn4').click(function(){
        $('.img1').css("margin-left", "-60%");
    });
    $('.botn5').click(function(){
        $('.img1').css("margin-left", "-80%");
    });
    $('.botn6').click(function(){
        $('.img1').css("margin-left", "-100%");
    });
    $('.botn7').click(function(){
        $('.img1').css("margin-left", "-120%");
    });
    $('a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
});
