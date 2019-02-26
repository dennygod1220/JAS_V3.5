var socket = io();

socket.emit('CtoS img upload fullcover', {
  username: $("#username").text().trim()
});

var uploader = new SocketIOFileClient(socket);
var form = document.getElementById('form');

uploader.on('start', function (fileInfo) {
  console.log('Start uploading', fileInfo);
});

uploader.on('stream', function (fileInfo) {
  console.log('Streaming... sent ' + fileInfo.sent + ' bytes.');
  $("#percent").text((((fileInfo.sent) / (fileInfo.size)) * 100).toFixed(3) + "%");
  $("#percent").css('width', Math.round((((fileInfo.sent) / (fileInfo.size)) * 100)) + "%");
});

uploader.on('complete', function (fileInfo) {
  console.log('Upload Complete', fileInfo);
});

uploader.on('error', function (err) {
  $("#percent").text(err.message);
  $("#percent").css({
    "background-color": "rgba(200,0,0,0.8)",
    "width": "100%"
  });
  $("#btn_send").css('display', 'block');
  $("#loading").css('display', 'none');
});
uploader.on('abort', function (fileInfo) {
  console.log('Aborted: ', fileInfo);
});

//當圖片上傳
form.onsubmit = function (ev) {
  $("#loading").css('display', 'block');
  $("#btn_send").css('display', 'none');
  ev.preventDefault();

  var fileEl = document.getElementById('file');
  console.log(fileEl);

  //   uploader.upload(fileEl);
  uploader.upload(fileEl, {
    data: {
      user: $("#username").text().trim()
    }
  });
};

//圖片上傳完成
socket.on('StoC img upload ok', function (data) {
  $("#percent").text("100% 完成");
  $("#percent").css('width', '100%');
  $("#percent").css("background-color", "rgba(30,210,60,0.8)");
  $("#loading").css('display', 'none');
  $("#btn_send").css('display', 'none');
  $("#form").css('display', 'none');
  
  // $("#second_form").css('display', 'block');
  // $("#img_url").text(data.img);
  socket.emit('StoC fullcover img ok',{
    img_url:data.img,
    user: $("#username").text().trim()
  })
})

//接收程式碼
socket.on('StoC fullcover html code',function(data){
  $("#display_area").css('display','block');
  $("#display_area").append('<textarea class="form-control" rows="20">'+data.temp+'</textarea>')
  var filena = data.FileName;
  var file_pa = filena.replace('public','download/public');
  $("#download_btn").css('display','block');

  
  $("#download_btn").append('<a target="_blank" href="'+file_pa+'" class="btn btn-success">下載</a>');
})