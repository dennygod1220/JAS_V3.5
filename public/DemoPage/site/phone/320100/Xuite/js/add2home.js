var addToHome=function(c){function p(){c.removeEventListener("load",p,false);if(q)d.expire&&t&&c.localStorage.setItem("addToHome",Date.now()+d.expire*6E4);else c.localStorage.setItem("addToHome",Date.now());if(!(!w&&(!x||!t||u||y||!q))){var b=d.touchIcon?document.querySelectorAll("head link[rel=apple-touch-icon],head link[rel=apple-touch-icon-precomposed]"):[],e,f="",h=j.platform.split(" ")[0];e=j.language.replace("-","_");var m,z;a=document.createElement("div");a.id="addToHomeScreen";a.style.cssText+=
"left:-9999px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);position:"+(g<5?"absolute":"fixed");if(d.message in r){e=d.message;d.message=""}if(d.message==="")d.message=e in r?r[e]:r.en_us;if(b.length){m=0;for(z=b.length;m<z;m++)if(e=b[m].getAttribute("sizes")){if(A&&e=="114x114"){f=b[m].href;break}}else f=b[m].href;f='<span style="background-image:url('+f+')" class="addToHomeTouchIcon"></span>'}a.className=(k?"addToHomeIpad":
"addToHomeIphone")+(f?" addToHomeWide":"");a.innerHTML=f+d.message.replace("%device",h).replace("%icon",g>=4.2?'<span class="addToHomeShare"></span>':'<span class="addToHomePlus">+</span>')+(d.arrow?'<span class="addToHomeArrow"></span>':"")+'<span class="addToHomeClose">\u00d7</span>';document.body.appendChild(a);(b=a.querySelector(".addToHomeClose"))&&b.addEventListener("click",D,false);setTimeout(E,d.startDelay)}}function E(){var b;b=208;if(k){if(g<5){i=c.scrollY;l=c.scrollX}else if(g<6)b=160;
a.style.top=i+d.bottomOffset+"px";a.style.left=l+b-Math.round(a.offsetWidth/2)+"px";switch(d.animationIn){case "drop":b="0.6s";a.style.webkitTransform="translate3d(0,"+-(c.scrollY+d.bottomOffset+a.offsetHeight)+"px,0)";break;case "bubble":b="0.6s";a.style.opacity="0";a.style.webkitTransform="translate3d(0,"+(i+50)+"px,0)";break;default:b="1s";a.style.opacity="0"}}else{i=c.innerHeight+c.scrollY;if(g<5){l=Math.round((c.innerWidth-a.offsetWidth)/2)+c.scrollX;a.style.left=l+"px";a.style.top=i-a.offsetHeight-
d.bottomOffset+"px"}else{a.style.left="50%";a.style.marginLeft=-Math.round(a.offsetWidth/2)+"px";a.style.bottom=d.bottomOffset+"px"}switch(d.animationIn){case "drop":b="1s";a.style.webkitTransform="translate3d(0,"+-(i+d.bottomOffset)+"px,0)";break;case "bubble":b="0.6s";a.style.webkitTransform="translate3d(0,"+(a.offsetHeight+d.bottomOffset+50)+"px,0)";break;default:b="1s";a.style.opacity="0"}}a.style.webkitTransitionDuration=b;a.style.opacity="1";a.style.webkitTransform="translate3d(0,0,0)";a.addEventListener("webkitTransitionEnd",
v,false);o=setTimeout(s,d.lifespan)}function s(){clearInterval(B);clearTimeout(o);o=null;var b=0,e=0,f="1",h="0";(h=a.querySelector(".addToHomeClose"))&&h.removeEventListener("click",s,false);if(g<5){b=k?c.scrollY-i:c.scrollY+c.innerHeight-i;e=k?c.scrollX-l:c.scrollX+Math.round((c.innerWidth-a.offsetWidth)/2)-l}a.style.webkitTransitionProperty="-webkit-transform,opacity";switch(d.animationOut){case "drop":if(k){h="0.4s";f="0";b+=50}else{h="0.6s";b=b+a.offsetHeight+d.bottomOffset+50}break;case "bubble":if(k){h=
"0.8s";b=b-a.offsetHeight-d.bottomOffset-50}else{h="0.4s";f="0";b-=50}break;default:h="0.8s";f="0"}a.addEventListener("webkitTransitionEnd",v,false);a.style.opacity=f;a.style.webkitTransitionDuration=h;a.style.webkitTransform="translate3d("+e+"px,"+b+"px,0)"}function D(){c.sessionStorage.setItem("addToHomeSession","1");u=true;s()}function v(){a.removeEventListener("webkitTransitionEnd",v,false);a.style.webkitTransitionProperty="-webkit-transform";a.style.webkitTransitionDuration="0.2s";if(o){if(g<
5&&o)B=setInterval(F,d.iterations)}else{a.parentNode.removeChild(a);a=null}}function F(){var b=new WebKitCSSMatrix(c.getComputedStyle(a,null).webkitTransform),e=k?c.scrollY-i:c.scrollY+c.innerHeight-i,f=k?c.scrollX-l:c.scrollX+Math.round((c.innerWidth-a.offsetWidth)/2)-l;if(!(e==b.m42&&f==b.m41))a.style.webkitTransform="translate3d("+f+"px,"+e+"px,0)"}var j=c.navigator,C="platform"in j&&/iphone|ipod|ipad/gi.test(j.platform),k,A,x,y,g,l=0,i=0,n=0,t,u,q,a,w,B,o,d={autostart:true,returningVisitor:false,
animationIn:"drop",animationOut:"fade",startDelay:2E3,lifespan:15E3,bottomOffset:14,expire:0,message:"",touchIcon:false,arrow:true,hookOnLoad:true,iterations:100},r={ca_es:"Per instal\u00b7lar aquesta aplicaci\u00f3 al vostre %device premeu %icon i llavors <strong>Afegir a pantalla d'inici</strong>.",cs_cz:"Pro instalaci aplikace na V\u00e1\u0161 %device, stiskn\u011bte %icon a v nab\u00eddce <strong>P\u0159idat na plochu</strong>.",da_dk:"Tilf\u00f8j denne side til din %device: tryk p\u00e5 %icon og derefter <strong>F\u00f8j til hjemmesk\u00e6rm</strong>.",
de_de:"Installieren Sie diese App auf Ihrem %device: %icon antippen und dann <strong>Zum Home-Bildschirm</strong>.",el_gr:"\u0395\u03b3\u03ba\u03b1\u03c4\u03b1\u03c3\u03c4\u03ae\u03c3\u03b5\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae\u03bd \u03c4\u03b7\u03bd \u0395\u03c6\u03b1\u03c1\u03bc\u03bf\u03b3\u03ae \u03c3\u03c4\u03ae\u03bd \u03c3\u03c5\u03c3\u03ba\u03b5\u03c5\u03ae \u03c3\u03b1\u03c2 %device: %icon \u03bc\u03b5\u03c4\u03ac \u03c0\u03b1\u03c4\u03ac\u03c4\u03b5 <strong>\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03b5 \u0391\u03c6\u03b5\u03c4\u03b7\u03c1\u03af\u03b1</strong>.",
en_us:"Install this web app on your %device: tap %icon and then <strong>Add to Home Screen</strong>.",es_es:"Para instalar esta app en su %device, pulse %icon y seleccione <strong>A\u00f1adir a pantalla de inicio</strong>.",fi_fi:"Asenna t\u00e4m\u00e4 web-sovellus laitteeseesi %device: paina %icon ja sen j\u00e4lkeen valitse <strong>Lis\u00e4\u00e4 Koti-valikkoon</strong>.",fr_fr:"Ajoutez cette application sur votre %device en cliquant sur %icon, puis <strong>Ajouter \u00e0 l'\u00e9cran d'accueil</strong>.",
he_il:'<span dir="rtl">\u05d4\u05ea\u05e7\u05df \u05d0\u05e4\u05dc\u05d9\u05e7\u05e6\u05d9\u05d4 \u05d6\u05d5 \u05e2\u05dc \u05d4-%device \u05e9\u05dc\u05da: \u05d4\u05e7\u05e9 %icon \u05d5\u05d0\u05d6 <strong>\u05d4\u05d5\u05e1\u05e3 \u05dc\u05de\u05e1\u05da \u05d4\u05d1\u05d9\u05ea</strong>.</span>',hu_hu:"Telep\u00edtse ezt a web-alkalmaz\u00e1st az \u00d6n %device-j\u00e1ra: nyomjon a %icon-ra majd a <strong>F\u0151k\u00e9perny\u0151h\u00f6z ad\u00e1s</strong> gombra.",it_it:"Installa questa applicazione sul tuo %device: premi su %icon e poi <strong>Aggiungi a Home</strong>.",
ja_jp:"\u3053\u306e\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u3092\u3042\u306a\u305f\u306e%device\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f%icon\u3092\u30bf\u30c3\u30d7\u3057\u3066<strong>\u30db\u30fc\u30e0\u753b\u9762\u306b\u8ffd\u52a0</strong>\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044\u3002",ko_kr:'%device\uc5d0 \uc6f9\uc571\uc744 \uc124\uce58\ud558\ub824\uba74 %icon\uc744 \ud130\uce58 \ud6c4 "\ud648\ud654\uba74\uc5d0 \ucd94\uac00"\ub97c \uc120\ud0dd\ud558\uc138\uc694',
nb_no:"Installer denne appen p\u00e5 din %device: trykk p\u00e5 %icon og deretter <strong>Legg til p\u00e5 Hjem-skjerm</strong>",nl_nl:"Installeer deze webapp op uw %device: tik %icon en dan <strong>Zet in beginscherm</strong>.",pl_pl:"Aby zainstalowa\u0107 t\u0119 aplikacje na %device: naci\u015bnij %icon a nast\u0119pnie <strong>Dodaj jako ikon\u0119</strong>.",pt_br:"Instale este web app em seu %device: aperte %icon e selecione <strong>Adicionar \u00e0 Tela Inicio</strong>.",pt_pt:"Para instalar esta aplica\u00e7\u00e3o no seu %device, prima o %icon e depois o <strong>Adicionar ao ecr\u00e3 principal</strong>.",
ru_ru:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u044d\u0442\u043e \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0432\u0430\u0448 %device: \u043d\u0430\u0436\u043c\u0438\u0442\u0435 %icon, \u0437\u0430\u0442\u0435\u043c <strong>\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u00ab\u0414\u043e\u043c\u043e\u0439\u00bb</strong>.",sv_se:"L\u00e4gg till denna webbapplikation p\u00e5 din %device: tryck p\u00e5 %icon och d\u00e4refter <strong>L\u00e4gg till p\u00e5 hemsk\u00e4rmen</strong>.",
th_th:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e41\u0e2d\u0e1e\u0e2f \u0e19\u0e35\u0e49\u0e1a\u0e19 %device \u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13: \u0e41\u0e15\u0e30 %icon \u0e41\u0e25\u0e30 <strong>\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e49\u0e32\u0e08\u0e2d\u0e42\u0e2e\u0e21</strong>",tr_tr:"%device i\u00e7in bu uygulamay\u0131 kurduktan sonra %icon simgesine dokunarak <strong>Ana Ekrana Ekle</strong>yin.",zh_cn:"\u60a8\u53ef\u4ee5\u5c06\u6b64\u5e94\u7528\u7a0b\u5f0f\u5b89\u88c5\u5230\u60a8\u7684 %device \u4e0a\u3002\u8bf7\u6309 %icon \u7136\u540e\u70b9\u9009<strong>\u6dfb\u52a0\u81f3\u4e3b\u5c4f\u5e55</strong>\u3002",
zh_tw:"\u60a8\u53ef\u4ee5\u5c07\u6b64\u61c9\u7528\u7a0b\u5f0f\u5b89\u88dd\u5230\u60a8\u7684 %device \u4e0a\u3002\u8acb\u6309 %icon \u7136\u5f8c\u9ede\u9078<strong>\u52a0\u5165\u4e3b\u756b\u9762\u87a2\u5e55</strong>\u3002"};(function(){if(C){var b=Date.now(),e;if(c.addToHomeConfig)for(e in c.addToHomeConfig)d[e]=c.addToHomeConfig[e];if(!d.autostart)d.hookOnLoad=false;k=/ipad/gi.test(j.platform);A=c.devicePixelRatio&&c.devicePixelRatio>1;x=/Safari/i.test(j.appVersion)&&!/CriOS/i.test(j.appVersion);
y=j.standalone;g=j.appVersion.match(/OS (\d+_\d+)/i);g=g[1]?+g[1].replace("_","."):0;n=+c.localStorage.getItem("addToHome");u=c.sessionStorage.getItem("addToHomeSession");q=d.returningVisitor?n&&n+24192E5>b:true;n||(n=b);t=q&&n<=b;if(d.hookOnLoad)c.addEventListener("load",p,false);else!d.hookOnLoad&&d.autostart&&p()}})();return{show:function(b){if(!(!C||a)){w=b;p()}},close:s,reset:function(){c.localStorage.removeItem("addToHome");c.sessionStorage.removeItem("addToHomeSession")}}}(this);