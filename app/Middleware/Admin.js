'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,auth,session,view }, next) {
    // call next to advance the request
    console.log(auth.user.isAdmin);
    // if(auth.user.isAdmin == 0){
    //   session.put('isAdmin',0);
    // }
    // const View = use('View')

    // View.global('currentTime', function () {
    //   if(auth.user.isAdmin == 0){
    //     return this.safe(`<h1>FUCK</h1>`)
    //   }else{
    //     return this.safe(`<div>False</div>`)
    //   }
    //   // return new Date().getTime()
    // })
    
    await next()
  }
}

module.exports = Admin
