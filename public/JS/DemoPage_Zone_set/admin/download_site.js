var socket = io();

var app = new Vue({
  el: "#content",
  delimiters: ['$$', '$$'],
  data: {
    url:'',
    SiteName:'',
    PCorPhone:''
  },
  methods: {
    send:function(){
      $("#content").hide();
      $("#container2").show();
      $('#mySpinner').addClass('spinner');
     
        socket.emit('CtoS download site info',{
            url:this.url,
            SiteName:this.SiteName,
            PCorPhone:this.PCorPhone
        })
    }
  },
  computed: {

  }

})
