let navbar = document.getElementById('navbar')

$(window).scroll(function (){
    let scrollDown = $(document).scrollTop()
    if(scrollDown > 200){
        $("#navbar").css("background-color", "black");
    }
})
