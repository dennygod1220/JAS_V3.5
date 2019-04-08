 
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() * 0.98) {
        $('#footer').slideDown('fast');

    } else {
        $('#footer').slideUp('fast');

    }
     
    
    if ($(window).scrollTop() > 100) {

        $('#totop').fadeIn(300);

    } else {

        $('#totop').fadeOut(300);
    }



   
}); 


  
 
  $(function() {
    $( ".datepicker" ).datepicker(
    {
          
         firstDay: 0,
         constrainInput: false,
         dateFormat: "yy/mm/dd",
         yearRange: "2000:2020",
         selectOtherMonths: true,
         maxDate: "+0m ",
         minDate: "-10ym",
         duration: "slow",
         showOtherMonths: true,   /* to avoid Nah=Nah-Nah */    
         dayNamesMin: [ "日", "一", "二", "三", "四", "五", "六" ],       
          monthNames: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ]
     
         
    });
      
  });
 
 
    function IsetCookie(TempcookieName, TempcookieValue, HowLong) {
        if (document.cookie.indexOf(TempcookieName) >= 0) {
            var currentDate = new Date();
            currentDate.setTime(currentDate.getTime() + (-1 * 24 * 60 * 60 * 1000));
            var xxexpires = "expires=" + currentDate.toUTCString();
            document.cookie = TempcookieName + "=" + TempcookieValue + "; " + xxexpires;
        }
        var d = new Date();
        d.setTime(d.getTime() + (HowLong * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = TempcookieName + "=" + TempcookieValue + "; " + expires;
    }


    function IgetCookie(TempcookieName) {
        var name = TempcookieName + "=";
        var cookieArray = document.cookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var c = cookieArray[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "";
    }
 

    $("#linecontactus").hover(
         function () {
         $("#linecontactus").animate({ height: "225px" }); 
     });
 
