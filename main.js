$("#show").click(()=>{
    $("#popup").addClass("active")
})

$("#close").click(()=>{
    $("#popup").removeClass("active")
     $("html, body").animate(
       { scrollTop: $(".sec4").offset().top },
       1000
     );
})

