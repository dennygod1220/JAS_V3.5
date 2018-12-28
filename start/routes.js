'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//==========auth===========================
Route.on('/signup').render('auth.signup');
Route.post('/signup', 'UserController.create').validator('CreateUser');
Route.get('/logout', 'UserController.logout');
Route.on('/login').render('auth.login');
Route.post('/login', 'UserController.login').validator('LoginUser');

//=====================================
Route.group(() => {
  Route.get('/', 'WelcomeController.index');
  //業務
  Route.get('/Business', ({view}) => view.render('business/index'));
  //專案
  Route.get('/Project',({view})=>view.render('project/index'));
  Route.get('/Project/test2',({view})=>view.render('project/test2'));
  Route.get('/Project/test','ProjectController.test');
  Route.get('/Project/contentcover_nobanner',({view})=>view.render('project/contentcover_nobanner'));
  Route.get('/Project/imgcontent300250',({view})=>view.render('project/imgcontent300250'));
  //BD
  Route.get('/BD',({view}) => view.render('BD/index') );
  Route.get('/BD/pb_cap',({view})=> view.render('BD/pb_cap'));
  Route.get('/BD/pb_adg',({view})=> view.render('BD/pb_adg'));
  Route.get('/BD/pb_ads',({view})=> view.render('BD/pb_ads'));
  Route.get('/BD/pb_adx',({view})=> view.render('BD/pb_adx'));
  //下載檔案
  Route.get('/Project/download/public/UserProfile/:user/Project/:filename','ProjectController.downloadContentCover_nobanner');
  Route.get('/Project/download/public/UserProfile/:user/Project/:filename','ProjectController.downloadimgcontent');
  //=======啟動 Crontab==========
  Route.get('Cron', 'CronJobController.index')
  // Route.get('CronStart', 'CronJobController.start')
  Route.get('CronStart','CronJobController.start2')
  Route.get('nowStart','CronJobController.now_start')

  Route.get('cf_weather','CronJobController.cf_weather');
}).middleware(['auth']);

Route.group(()=>{
  //======管理頁面===============
  Route.get('/','AdminController.index') 
  Route.get('/business/demopage','AdminController.demopage')
  Route.get('/business/demopage/add','AdminController.demopage_add')
  Route.get('/business/demopage/manage_config','AdminController.manage_config')
  Route.get('/download_site','AdminController.download_site')
}).prefix('/admin');
