var socket = io();
var app = new Vue({
  el: "#app",
  delimiters: ['$$', '$$'],
  data: {
    zone_code: '',
    zonde_id: '',
    url: ''
  },
  methods: {
    ch_code: function (e) {
      const input_code = e.target.value.trim();
      const start_check = input_code.indexOf('data-ad-slot="');
      const start = input_code.indexOf('data-ad-slot="') + 14;
      const end = input_code.indexOf('"></ins>');
      var z_id = input_code.substring(start, end);

      if (input_code != "" && start_check !== -1 && end !== -1) {
        $("#zone_code").removeClass('border-danger');

        socket.emit('CtoS BD ads zone code', {
          zonecode: this.zone_code.trim(),
          zoneid : z_id
        });

        return this.zonde_id = z_id;
      } else {
        $("#btn").css('display', 'none');
        $("#zone_code").addClass('border-danger');
        return this.zonde_id = "";
      }
    },
    submit_form: function () {
      $("#loading").css('display', 'block');
      socket.emit('CtoS BD pb_ads', {
        id: this.zonde_id,
        zone_code: this.zone_code.trim()
      })
    }
  },
  computed: {
    get_url: function () {
      socket.on('StoC BD ads upload ok', function (data) {
        $("#loading").css('display', 'none');
        $("#myform").css('display', 'none');
        $("#url_block").text(data.ads);
        $("#url_block").attr('href', data.ads);
      })
    }
  }
})

socket.on('StoC BD ads preview',function(data){
    $("#show").attr('src',data.url);  
    
    $("#Modal").modal('show');      
})

$("#restart").click(function(){
    window.location.reload();
})
$("#pre_ok").click(function(){
    $("#Modal").modal('hide');
    $("#btn").css('display', 'block');

})