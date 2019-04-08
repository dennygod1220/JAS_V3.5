function formReset(id_name){document.getElementById(id_name).reset()}
function inPathConfirm(path,cfMsg){if(confirm(cfMsg)){location.href=path;}else{return false;}}
function inPath(path){location.href=path;}
function isEmail(theField){var toTest=theField.value;var regDoNot=/(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/;var regMust=/^[a-zA-Z0-9\-\.\_]+\@[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,3})$/;var ok=false;if(!regDoNot.test(toTest)&&regMust.test(toTest)){ok=true;}else{}
return ok;}
function IsNum(theField,maxVal){if(theField.value.length==0)return;if(isNaN(theField.value)){alert('格式不對喔!請填數字');theField.value=1;theField.focus();return false;}
if(maxVal!==''){if(theField.value>maxVal){alert('最大值為'+maxVal+'喔');theField.value=1;theField.focus();return false;}}}
function ValidateSingleInput(oInput){var _validFileExtensions=[".jpeg",".jpg",".png"];if(oInput.type=="file"){var sFileName=oInput.value;if(sFileName.length>0){var blnValid=false;for(var j=0;j<_validFileExtensions.length;j++){var sCurExtension=_validFileExtensions[j];if(sFileName.substr(sFileName.length-sCurExtension.length,sCurExtension.length).toLowerCase()==sCurExtension.toLowerCase()){blnValid=true;break;}}
if(!blnValid){alert("抱歉, "+sFileName+" 格式錯誤,允許的格式有: "+_validFileExtensions.join(", "));oInput.value="";return false;}}}
return true;}
function ValidateSingleInput1(oInput,vaildExtensions){if(vaildExtensions==''){return false;}else{var _validFileExtensions=vaildExtensions;if(oInput.type=="file"){var sFileName=oInput.value;if(sFileName.length>0){var blnValid=false;for(var j=0;j<_validFileExtensions.length;j++){var sCurExtension=_validFileExtensions[j];if(sFileName.substr(sFileName.length-sCurExtension.length,sCurExtension.length).toLowerCase()==sCurExtension.toLowerCase()){blnValid=true;break;}}
if(!blnValid){alert("抱歉, "+sFileName+" 格式錯誤,允許的格式有: "+_validFileExtensions.join(", "));oInput.value="";return false;}}}
return true;}}
function ValidateSingleInput2(oInput){var _validFileExtensions=[".jpeg",".jpg",".png"];if(oInput.type=="file"){var sFileName=oInput.value;if(sFileName.length>0){var blnValid=false;for(var j=0;j<_validFileExtensions.length;j++){var sCurExtension=_validFileExtensions[j];if(sFileName.substr(sFileName.length-sCurExtension.length,sCurExtension.length).toLowerCase()==sCurExtension.toLowerCase()){blnValid=true;break;}}
if(!blnValid){alert("抱歉, "+sFileName+" 格式錯誤,允許的格式有: "+_validFileExtensions.join(", "));oInput.value="";return false;}}}
return true;}
function ValidateSingleInput_pdf(oInput){var _validFileExtensions=[".pdf"];if(oInput.type=="file"){var sFileName=oInput.value;if(sFileName.length>0){var blnValid=false;for(var j=0;j<_validFileExtensions.length;j++){var sCurExtension=_validFileExtensions[j];if(sFileName.substr(sFileName.length-sCurExtension.length,sCurExtension.length).toLowerCase()==sCurExtension.toLowerCase()){blnValid=true;break;}}
if(!blnValid){alert("抱歉, "+sFileName+" 格式錯誤,允許的格式有: "+_validFileExtensions.join(", "));oInput.value="";return false;}}}
return true;}
function ValidateSingleInput_mp4(oInput){var _validFileExtensions=[".mp4"];if(oInput.type=="file"){var sFileName=oInput.value;if(sFileName.length>0){var blnValid=false;for(var j=0;j<_validFileExtensions.length;j++){var sCurExtension=_validFileExtensions[j];if(sFileName.substr(sFileName.length-sCurExtension.length,sCurExtension.length).toLowerCase()==sCurExtension.toLowerCase()){blnValid=true;break;}}
if(!blnValid){alert("抱歉, "+sFileName+" 格式錯誤,允許的格式有: "+_validFileExtensions.join(", "));oInput.value="";return false;}}}
return true;}
function add_ad_clicks(target_url,name,id){$.ajax({url:target_url,data:{'name':name,'id':id},type:"POST",error:function(){console.log("adClickError");},success:function(){}});}
function add_fbfans_clicks(target_url,url){$.ajax({url:target_url,data:{'url':url},type:"POST",error:function(){console.log("fbfansClickError");},success:function(){}});}