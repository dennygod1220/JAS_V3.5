'use strict'

const fs = use('fs');
const FC = require('../../../cusmodules/FileControl');

class BdController {
    async pb_cap({request,response}){
        const zone_code = request.all().zone_code.trim();
        const zone_id = request.all().zone_id.trim();
        const temp = FC.ReadFileSync('public/BD_temp/pb_cap.txt');
        
        const newHtml = temp+zone_code;
        FC.writeFileSync('public/BD_temp/cap/'+zone_id+'.html',newHtml);
        
    }
}

module.exports = BdController
