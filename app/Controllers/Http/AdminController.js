'use strict'

class AdminController {
  async index({view,auth}) {
    var isAdmin = auth.user.isAdmin;
    if (isAdmin == 0) {
      return view.render('admin.index')
    }else{
        return view.render('error.notadmin')
    }
  }

  async demopage({view,auth}) {
    var isAdmin = auth.user.isAdmin;
    if (isAdmin == 0) {
      console.log('demopage admin2');

      return view.render('admin.business.demopage')
    }
  }

  async demopage_add({view,auth}){
    var isAdmin = auth.user.isAdmin;
    if (isAdmin == 0) {
      return view.render('admin.business.demopage_add')
    }else{
        return view.render('error.notadmin')
    }
  }

  async download_site({view,auth}){
    var isAdmin = auth.user.isAdmin;
    if (isAdmin == 0) {
      return view.render('admin.download_site')
    }else{
        return view.render('error.notadmin')
    }
  }

  async manage_config({view,auth}){
    var isAdmin = auth.user.isAdmin;
    if (isAdmin == 0) {
      return view.render('admin.business.manage_config')
    }else{
        return view.render('error.notadmin')
    }
  }

  async download_zip_site({request,response}){
    // var user = request.params.user;
    var file = decodeURIComponent(request.params.filename);    
    response.attachment('./public/DownLoadSiteZIP/'+file);
    return
  }
}

module.exports = AdminController
