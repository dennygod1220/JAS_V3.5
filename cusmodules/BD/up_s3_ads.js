var AWS = use('aws-sdk');
var FC = require('../FileControl');
var key = FC.readjsonSync('S3config.json');
var fs = use('fs');


function ads(code, filename, io, socket) {
  
  // function sendSocket() {
  //   
    
  // }

  const zone_code = code.trim();
  const zone_id = filename.trim();
  const temp = FC.ReadFileSync('public/BD_temp/pb_ads.txt');
  
  const newHtml = temp+zone_code;
  FC.writeFileSync('public/BD_temp/ads/'+zone_id+'.html',newHtml);


  var s3 = new AWS.S3({
    accessKeyId: key.accessKeyId,
    secretAccessKey: key.secretAccessKey,
  });


  var fi = fs.readFileSync('public/BD_temp/ads/'+zone_id+'.html');

  var params = {
    Bucket: key.Bucket,
    // Key: 'tos_zone/pb_ads/' + filename+'.html',
    Key: 'dev/Jason/test/JAS_test/' + filename+'.html',
    ACL: 'public-read',
    Body: fi,
    ContentType:'text/html'
  };

 s3.upload(params).on('httpUploadProgress', function (evt) {
    //上傳進度
    console.log(evt);
  }).send( function (err, data) {
    console.log('send');
    
    //上傳完畢或是碰到錯誤
    // sendSocket();
    io.sockets.connected[socket.id].emit('StoC BD ads upload ok', {ads: 'https://adx.doublemax.net/' + params.Key});
  });
  
}



module.exports = {
  ads: ads
}
