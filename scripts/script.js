$(document).ready(function() {
  
  //Change copyright date every year
  let current = new Date()
  year = current.getFullYear()
  $("#year").text(`${year}`)


  //Toggle dark mode
    function darkMode() {
      $(".card").toggleClass("dark-mode")
      if ($("#role").text() == "full stack web developer") {  
        $("#role").text("chemical biomedical engineer")
        $("#background").attr("src","./images/background-dark2.jpg")
      } else {
        $("#role").text("full stack web developer")
        $("#background").attr("src","./images/background3.jpg")
      }
      
    }

    function changeBackground () {
      if ($("#role").text() == "full stack web developer") {  
        $("body").css("background","linear-gradient(#B1BDDD, #AA878A)")
      } else {
        $("body").css("background","linear-gradient(#11111B, #112242)")
      }
    }

    $("#dark-mode").click(function() {
      $("body").fadeOut(1000)
      setTimeout(darkMode,1000)
      $("body").fadeIn(1000)
      setTimeout(changeBackground,2000)
      
    });

})


