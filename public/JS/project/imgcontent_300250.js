var socket = io();

socket.emit('CtoS img upload', {
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
  console.log(data);

  $("#percent").text("100% 完成");
  $("#percent").css('width', '100%');
  $("#percent").css("background-color", "rgba(30,210,60,0.8)");
  $("#loading").css('display', 'none');
  $("#btn_send").css('display', 'none');
  $("#form").css('display', 'none');

  $("#second_form").css('display', 'block');
  var old_cdn = data.img;
  var new_cdn = old_cdn.replace('//cdn.doublemax.net','//cdncf-hinetwork.cdn.hinet.net');
  $("#img_url").text(new_cdn);
})
//使用者輸入 圖文的內容
$("#btn_sure").click(function () {

  socket.emit('CtoS img content 300250', {
    url: $("#img_url").text(),
    title: $("#title").val(),
    content: $("#content").val(),
    customer: $("#customer").val(),
    btntext: $("#btntext").val(),
    user: $("#username").text().trim(),
    bkc_300250: "white"
  })
})
//Server 丟出 圖文 預覽
socket.on('StoC im content preview', function (data) {
  // $("#second_form").css('display', 'none');
  $("#preview").css('display', 'block');
  $("#download_block").css('display', 'block');

  $("#pre_300100").attr('src', '../' + data.pre_url[0]);
  $("#pre_320100").attr('src', '../' + data.pre_url[1]);
  $("#pre_300250").attr('src', '../' + data.pre_url[2]);
  $("#pre_320480").attr('src', '../' + data.pre_url[3]);
  $("#pre_970250").attr('src', '../' + data.pre_url[4]);

  $("#d1").attr('href', 'download/' + data.download_url[0]);
  $("#d2").attr('href', 'download/' + data.download_url[1]);
  $("#d3").attr('href', 'download/' + data.download_url[2]);
  $("#d4").attr('href', 'download/' + data.download_url[3]);
  $("#d5").attr('href', 'download/' + data.download_url[4]);
})
//影片壓縮失敗
socket.on('StoC video convert has error', function () {
  $("#percent").text("影片壓縮失敗!");
  $("#percent").css({
    "background-color": "rgba(200,0,0,0.8)",
    "width": "100%"
  });
  $("#loading").css('display', 'none');
  $("#btn_send").css('display', 'block');
})

function chg_bkc(id, id2) {
  socket.emit('CtoS img content bkg_300250', {
    url: $("#img_url").text(),
    title: $("#title").val(),
    content: $("#content").val(),
    customer: $("#customer").val(),
    btntext: $("#btntext").val(),
    user: $("#username").text().trim(),
    bkc_300250: $("#" + id2).val(),
    src: $("#" + id).attr('src'),
    id: id
  })
}

$("#bkg_300100").change(function () {
  chg_bkc('pre_300100', 'bkg_300100')
});
$("#bkg_320100").change(function () {
  chg_bkc('pre_320100', 'bkg_320100')
});
$("#bkg_300250").change(function () {
  chg_bkc('pre_300250', 'bkg_300250')
});
$("#bkg_320480").change(function () {
  chg_bkc('pre_320480', 'bkg_320480')
});
$("#bkg_970250").change(function () {
  chg_bkc('pre_970250', 'bkg_970250')
});

socket.on('StoC im content preview chg bkg', function (data) {
  $('#' + data.id).attr('src', $('#' + data.id).attr('src'));
})
