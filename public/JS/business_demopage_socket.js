  var socket = io();

  var zone_size_arr = [];
  var site_arr = [];


  function block(d,z,s,sitename){
    if(d == 'phone' && z == '320480' && s == sitename){
      $("#zone_ch_block").css('display', 'block');
      $("#cus_zone_block").css('display','none');
    }else if(d == 'PC' && z == '800600' && s == sitename){
      $("#zone_ch_block").css('display', 'block');
      $("#cus_zone_block").css('display','none');
    }
  }
  function block_phone_300250(d,z,s,sitename){
    if(d == 'phone' && z == '300250' && s == sitename){
      $("#zone_ch_block").css('display', 'block');
      $("#cus_zone_block").css('display','none');
    }
  }

  var app = new Vue({
    // el: "#demopage_choise",
    el: "#home",
    delimiters: ['$$', '$$'],
    data: {
      device: '',
      zone_size_arr: zone_size_arr,
      zonesize: '',
      site_arr: site_arr,
      site: '',
      df_zone: '',
      matiral_id: '',
      zone_info: '',
      zone_cus:''
    },
    methods: {
      ch_device: function (device) {
        //當選擇裝置時，避免不同裝置底下網站不同，將網站洗掉讓使用者重新選擇
        site_arr.length = 0;
        this.site = '';
        zone_size_arr.length = 0;
        this.zonesize = '';
        this.df_zone = '';
        $("#store_btn").css('display','none');
        //=================
        this.device = device;
        socket.emit('CtoS which device', {
          device: device
        });
      },
      //點了 版位大小 後 觸發事件
      ch_zone_size: function (size) {
        site_arr.length = 0;
        this.site = '';
        this.zonesize = size;
        this.df_zone = '';
        $("#store_btn").css('display','none');
        socket.emit('CtoS which ZoneSize', {
          Device: this.device,
          ZoneSize: size
        })
      },
      //點了 網站 後 觸發事件
      ch_site: function (site) {
        $("#store_btn").css('display','none');
        this.site = site;
        this.df_zone = '';
      },
      //選擇 預設版位 或是 自訂版未
      ch_zone_df: function (zone_cus) {
        this.zone_cus=zone_cus;
        if (zone_cus == 'default') {
          //用版位大小 給定 預設cfadc 版位ID
          switch (this.zonesize) {
            case '300250':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8707:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
            case '300600':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8708:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
            case '320480':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8725:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              
              break;
            case '32050':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8783:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
            case '320100':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8784:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
            case '72890':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8726:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
            case '970250':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=8727:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
            case '800600':
              var url = '/DemoPage/site/' + this.device + '/' + this.zonesize + '/' + this.site + '/DefaultZone.html?cfadc=9125:' + this.matiral_id;
              var win = window.open(url, '_blank');
              win.focus();
              break;
          }
          $("#store_btn").css('display','block');
        } else {
          this.df_zone = zone_cus;
          socket.emit('CtoS which Site', {
            Device: this.device,
            ZoneSize: this.zonesize,
            site: this.site,
            df_zone: zone_cus,
            zone_info: this.zone_info
          });
        }
      },
      trimarea: function (e) {
        this.zone_info = e.target.value.trim();
      },
      Store_Site:function(){
        
        socket.emit('CtoS DemoPage Store', {
          Device: this.device,
          ZoneSize: this.zonesize,
          site: this.site,
          df_zone: this.zone_cus,
          user:$("#username").text().trim(),
          matiral_id:this.matiral_id
        });
      }
    },
    computed: {
      // 接收Server告知的版位大小(陣列)選項後，
      // 將此陣列內容顯示於畫面中
      display_zone_size: function () {
        socket.on('StoC device dir', function (dir) {
          $("#zone_size_block").css('display', 'block');
          zone_size_arr.length = 0;
          dir.dir.forEach(ele => {
            if (ele == "內文全屏") {

            }else if(ele == "fly_vdo"){}
             else {
              zone_size_arr.push(ele);
            }
          });
        })
      },
      //選擇可用的網站
      display_can_use_site: function () {
        socket.on('StoC site dir', function (dir) {
          $("#site_block").css('display', 'block');
          site_arr.length = 0;
          dir.dir.forEach(ele => {
            site_arr.push(ele);
          });
        })
      },
      //是否顯示 可選網站
      display_site_block: function () {
        if (this.device == '' || this.zonesize == '') {
          $("#site_block").css('display', 'none');
        } else {
          $("#site_block").css('display', 'block');
        }
      },
      //是否顯示 自訂版位或預設版位
      display_df_zone_block: function () {



        if (this.device == '' || this.zonesize == '' || this.site == '') {
          $("#zone_ch_block").css('display', 'none');
          $("#cus_zone_block").css('display','none');
        }
        // else if(this.device == 'phone' && this.zonesize == '320480' && this.site == '潮人物'){
        //   $("#zone_ch_block").css('display', 'block');
        //   $("#cus_zone_block").css('display','none');
        // }
        // else if(this.device == 'phone' && this.zonesize == '320480' && this.site == '台灣英文新聞'){
        //   $("#zone_ch_block").css('display', 'block');
        //   $("#cus_zone_block").css('display','none');
        // }
        // else if(this.device == 'phone' && this.zonesize == '320480' && this.site == 'juksy_m'){
        //   $("#zone_ch_block").css('display', 'block');
        //   $("#cus_zone_block").css('display','none');
        // }
         else {
           $("#cus_zone_block").css('display','block');
          $("#zone_ch_block").css('display', 'block');
        }
        block(this.device,this.zonesize,this.site,'juksy_m');
        block(this.device,this.zonesize,this.site,'商周');
        block(this.device,this.zonesize,this.site,'台灣英文新聞');
        block(this.device,this.zonesize,this.site,'潮人物');
        block(this.device,this.zonesize,this.site,'樂時尚');
        block(this.device,this.zonesize,this.site,'良醫健康網');
        block(this.device,this.zonesize,this.site,'少女前線');
        block_phone_300250(this.device,this.zonesize,this.site,'Ettoday');
        block_phone_300250(this.device,this.zonesize,this.site,'痞客邦(內文下方)');
        block_phone_300250(this.device,this.zonesize,this.site,'商周');

        
      },
    }
  })


  //==============PREROLL===============
  socket.emit('CtoS tell me PreRoll site');

  var pre_site_arr = [];

  var PREROLL = new Vue({
    el: "#profile",
    delimiters: ['$$', '$$'],
    data: {
      pre_site: pre_site_arr,
    },
    methods: {
      //取得使用者 選擇哪個preroll網站
      ch_pre_site: function (item) {
        window.open('/DemoPage/preroll/' + item + '/index.html', '_blank');
      }
    },
    computed: {
      //詢問Server Preroll有啥網站
      getPreRollSite: function () {
        socket.on('StoC can use PreRoll Site', function (prerollsite) {
          prerollsite.dir.forEach(ele => {
            pre_site_arr.push(ele);
          });
        })
      }
    }
  })

  //==========內文全屏=========================
  socket.emit('CtoS tell me Content_zone site');
  var content_site_arr = [];

  var ContentCover = new Vue({
    el: "#content_zone",
    delimiters: ['$$', '$$'],
    data: {
      content_site_arr: content_site_arr,
      site: '',
      material_id: '',
      zone_code: ''
    },
    methods: {
      //取得使用者 選擇哪個preroll網站
      ch_Content_site: function (item) {
        this.site = item;
      },
      default_zone: function () {
        window.open('/DemoPage/site/phone/內文全屏/' + this.site + '/DefaultZone.html?cfadc=8730:' + this.material_id, '_blank');
      },
      Cus_zone: function () {
        socket.emit('CtoS Content_zone Site', {
          zone_code: this.zone_code,
          site: this.site,
        });
      }

    },
    computed: {
      //詢問Server 內文全屏有啥網站
      getContentZoneSite: function () {
        socket.on('StoC can use Content_zone Site', function (ContentZone) {
          ContentZone.dir.forEach(ele => {
            content_site_arr.push(ele);
          });
        })
      }
    }
  })


    //==========漂浮影音=========================
    socket.emit('CtoS tell me fly_vdo site');
    var flyvdo_arr = [];
  
    var FlyVdo = new Vue({
      el: "#fly_vdo",
      delimiters: ['$$', '$$'],
      data: {
        flyvdo_arr: flyvdo_arr,
        site: '',
        material_id: '',
        // zone_code: ''
      },
      methods: {
        ch_Content_site: function (item) {
          this.site = item;
        },
        default_zone: function () {
          window.open('/DemoPage/site/phone/fly_vdo/' + this.site + '/DefaultZone.html?cfadc=8810:' + this.material_id, '_blank');
        },
        // Cus_zone: function () {
        //   socket.emit('CtoS fly_vdo Site', {
        //     zone_code: this.zone_code,
        //     site: this.site,
        //   });
        // }
  
      },
      computed: {
        //詢問Server 漂浮影音有啥網站
        getFlyVdoSite: function () {
          socket.on('StoC can use fly_vdo Site', function (FlyVdo_zone) {
            
            FlyVdo_zone.dir.forEach(ele => {
              flyvdo_arr.push(ele);
            });
          })
        }
      }
    })


  //接收 Server 傳來的 自訂版位 建立完成事件
  socket.on('StoC cus zone ok', function (CusZoneUrl) {
    window.open(CusZoneUrl.CusZoneUrl, '_blank');
  })
  socket.on('StoC cus content zone ok', function (CusZoneUrl) {
    window.open(CusZoneUrl.CusZoneUrl, '_blank');
  })

  socket.on('StoC no index html', function () {
    console.log("檔案不存在");
  })
  socket.on('StoC index html ok', function (data) {
    console.log(data.url);

    //假網頁存在，client給Server素材ID
    //建立input 框
  })





  socket.on('connect_timeout', (timeout) => {
    // ...
    console.log(timeout);
  });

  socket.on('error', (error) => {
    // ...
    console.log(error)
  });

  var img_ad = new Vue({
    el:'#img_ad',
    data:{
      matiral_id:''
    },
    delimiters: ['$$', '$$'],
    methods:{
      img_ad:function(site,zone){
        window.open('../DemoPage/img_site/'+site+'.html?cfadc='+zone+':'+this.matiral_id,'_blank');
        
      }
    }
  })