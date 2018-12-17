'use strict'

var scrape = use('website-scraper');
var fs = use('fs');
var path = use("path");
var cron = use('node-cron');

var request = use('request');


var sc = require('../../../cusmodules/Scrape/scrape');
var FC = require('../../../cusmodules/FileControl');

var AWS = use('aws-sdk');
var key = FC.readjsonSync('S3config.json');

const utf8 = use('utf8');

class CronJobController {

  async index({
    view
  }) {
    return view.render('CronDownloadSite.index');
  }


  async start2() {
    cron.schedule('1 10 * * * *', async()=>{
        FC.readjson('public/JS/Scrape/config.json').then(async function (obj) {
          var len = obj.set.length;
          for (var x = 0; x < len; x++) {
            await sc.set_option(obj.set[x][0], obj.set[x][1], obj.set[x][2], obj.set[x][3], obj.set[x][4]);
          }
        })
      })
    }

    async now_start(){
      FC.readjson('public/JS/Scrape/config.json').then(async function (obj) {
        var len = obj.set.length;
        for (var x = 0; x < len; x++) {
          await sc.set_option(obj.set[x][0], obj.set[x][1], obj.set[x][2], obj.set[x][3], obj.set[x][4]);
        }
      })
    }

    async cf_weather(){



      request("http://opendata.epa.gov.tw/webapi/Data/ATM00698/?$skip=0&$top=1000&format=json" , function(error,response,body){
        // var bodd = utf8.encode(body);
        // bodd = utf8.decode(bodd);
        // console.log(bodd);
        var bodd = JSON.parse(JSON.stringify(body));
        console.log(typeof bodd);


        var s3 = new AWS.S3({
          accessKeyId: key.accessKeyId,
          secretAccessKey: key.secretAccessKey,
        });

        var params = {
          Bucket: key.Bucket,
          // Key: 'tos_zone/pb_adx/' + filename+'.html',
          Key: 'dev/Jason/test/JAS_test/JS_cfWeather.json',
          ACL: 'public-read',
          Body: bodd,
          ContentType:'application/json'
        };

        s3.upload(params).on('httpUploadProgress', function (evt) {
          //上傳進度
          console.log(evt);
        }).send( function (err, data) {
          console.log('send');
          
        });

      })

    }
  }

  module.exports = CronJobController
