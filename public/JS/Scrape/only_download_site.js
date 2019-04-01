var fs = require('fs');
var scrape = require('website-scraper');
var adm_zip = require('adm-zip');
var zipFolder = require('zip-folder');

function only_download_site(url, SiteName, phone,io,socket) {
  console.log('only download site trigger');
  console.log(url + ',' + SiteName + ',' + phone);

  if (phone == true) {
    var a = {
      urls: [url],
      directory: 'public/DownLoadSite/' + SiteName,
      request: {
        headers: {
          'content-type': 'charset=UTF-8',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 4 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19',
        }
      },
    };
  } else {
    var a = {
      urls: [url],
      directory: 'public/DownLoadSite/' + SiteName,
      request: {
        headers: {
          'content-type': 'charset=UTF-8',
        }
      },
    };
  }

  process.setMaxListeners(0);
  scrape(a).then((result) => {
    setTimeout(function () {
      // var zip =new adm_zip();
      // zip.addLocalFile('public/DownLoadSite/'+SiteName);
      // zip.writeZip('public/DownLoadSiteZIP/'+SiteName+'.zip');  
    }, 1000)
    console.log('下載完成，等待壓縮')

    zipFolder('public/DownLoadSite/' + SiteName, 'public/DownLoadSiteZIP/' + SiteName + '.zip', function (err) {
      if (err) {
        console.log('oh no ! ZIP Fail ，Check public/JS/Scrape/only_download_site !!!!!!', err);
      } else {
        console.log('ZIP Success');
        io.sockets.connected[socket.id].emit('StoC only download site ok ', {
          zipPath: SiteName + '.zip'
        });
      }
    });

    // zipFolder('public/DownLoadSite/' + SiteName, 'public/DownLoadSiteZIP/' + SiteName + '.zip',test);

  }).catch(console.log);

  // function test(){
  //   console.log("test");
  //   console.log(io);
  //   console.log(socket);
    
    
  // }
}

module.exports = {
  only_download_site: only_download_site
}
