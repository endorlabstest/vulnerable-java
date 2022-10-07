
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"117",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmDom"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=vp.getType();return a}catch(b){}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_defaultValue":"prospect",
      "vtp_map":["list",["map","key","customer","value","customer"],["map","key","anonymous","value","prospect"],["map","key","developer","value","prospect"],["map","key","known prospect","value","prospect"]]
    },{
      "function":"__j",
      "convert_undefined_to":["macro",5],
      "vtp_name":"visitor_type"
    },{
      "function":"__j",
      "convert_undefined_to":"null",
      "vtp_name":"traffic_type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var allowedParamsCI=[\"ban\",\"brand\",\"cc\",\"chapter\",\"chapterindex\",\"commid\",\"conf-redirect\",\"cq_ck\",\"d\",\"dcmp\",\"drivercampaignid\",\"ef_id\",\"eid\",\"elq_mid\",\"eventid\",\"fbclid\",\"forceprofile\",\"formcampaignid\",\"id\",\"ind\",\"internal\",\"ir\",\"kw\",\"leadcreated\",\"lssm\",\"mc\",\"nc\",\"optimizely_preview_layer_ids\",\"optimizely_preview_mode_CAMPAIGN\",\"optimizely_snippet\",\"optimizely_token\",\"optimizely_x\",\"optimizely_x_audiences\",\"page\",\"player\",\"playlistid\",\"podcastid\",\"q\",\"QS\",\"s_kwcid\",\"sfdc-redirect\",\"soc\",\n\"ve\",\"videoid\"];var searchParams=[\"q\",\"video-search\"];allowedParamsCI.push(\"utm_source\",\"utm_medium\",\"utm_campaign\",\"utm_content\",\"utm_term\",\"utm_keyword\",\"utm_id\",\"gclid\",\"dclid\",\"gclsrc\");var allowedParams=[];for(var i=0;i\u003CallowedParamsCI.length;i++)allowedParams.push(allowedParamsCI[i].toLowerCase());var checkParams=[\"dl\",\"dp\",\"dr\",\"dt\",\"ec\",\"ea\",\"el\",\"uid\",\"cd\\\\d{1,3}\",\"pr\\\\d{1,3}cd\\\\d{1,3}\"];var globalSendHitTaskName=\"_ga_originalSendHitTask\";var piiRegex=[{name:\"EMAIL\",regex:\/([^\u0026\\s\\\/\\?#=:]){1,}(@|%40).([^\u0026\\s\\\/\\?#]){1,}\/ig}];\nif(!",["escape",["macro",2],8,16],".match(\/(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)\/g))var customdimension43=",["escape",["macro",6],8,16],"+\":\"+",["escape",["macro",7],8,16],";return function(customTaskModel){window[globalSendHitTaskName]=window[globalSendHitTaskName]||customTaskModel.get(\"sendHitTask\");var dl=customTaskModel.get(\"\\x26dl\");dl=dl.replace(\/\\.(html|jsp)\/gi,\"\");customTaskModel.set(\"\\x26dl\",dl);customTaskModel.set(\"dimension44\",customTaskModel.get(\"clientId\"));customTaskModel.set(\"sendHitTask\",\nfunction(sendHitTaskModel){var originalSendHitTaskModel=sendHitTaskModel,originalSendHitTask=window[globalSendHitTaskName],canSendHit=true;try{var _hitPayloadParts=sendHitTaskModel.get(\"hitPayload\").split(\"\\x26\");for(var i=0;i\u003C_hitPayloadParts.length;i++){var newQueryString=\"\";var _param=_hitPayloadParts[i].split(\"\\x3d\");var _val;try{_val=decodeURIComponent(decodeURIComponent(_param[1]))}catch(e){_val=decodeURIComponent(_param[1])}for(var ii=0;ii\u003CcheckParams.length;ii++)if(_param[0].match(new RegExp(\"^(\"+\ncheckParams[ii]+\")$\"))!=null\u0026\u0026(_val.indexOf(\"?\")\u003E-1||document.location.href.indexOf(\"\/search\/\")\u003E-1\u0026\u0026location.hash)){if((_param[0]===\"dl\"||_param[0]===\"dp\")\u0026\u0026(location.hash.indexOf(\"q\")\u003E-1\u0026\u0026_val.indexOf(\"?\")\u003E-1\u0026\u0026location.href.indexOf(\"\/search\/\")\u003E-1))_val+=\"\\x26q\\x3d\"+document.location.hash.split(\"q\\x3d\")[1].split(\"\\x26\")[0];else if((_param[0]===\"dl\"||_param[0]===\"dp\")\u0026\u0026(location.hash.indexOf(\"q\")\u003E-1\u0026\u0026_val.indexOf(\"?\")===-1\u0026\u0026location.href.indexOf(\"\/search\/\")\u003E-1))_val+=\"?q\\x3d\"+document.location.hash.split(\"q\\x3d\")[1].split(\"\\x26\")[0];\nfor(s=0;s\u003CsearchParams.length;s++){var paramIndex=_val.indexOf(searchParams[s]+\"\\x3d\");if(paramIndex\u003E-1)if(_val.charAt(paramIndex-1)==\"?\"||_val.charAt(paramIndex-1)==\"\\x26\")_val=_val.replace(searchParams[s],\"search_param\")}var paramArray=_val.split(\"?\").splice(1).join(\"\\x26\").split(\"\\x26\");var paramSubArray=[];for(pa=0;pa\u003CparamArray.length;pa++)if(paramArray[pa].indexOf(\"?\")\u003E-1)paramSubArray.push(paramArray[pa].split(\"?\")[1]);paramArray=paramArray.concat(paramSubArray);for(var ix=0;ix\u003CparamArray.length;ix++){var allowedParamExists=\nfalse;for(var z=0;z\u003CallowedParams.length;z++)if(paramArray[ix].toLowerCase().indexOf(allowedParams[z].toLowerCase()+\"\\x3d\")==0||paramArray[ix].indexOf(\"search_param\\x3d\")==0){newQueryString+=paramArray[ix]+\"\\x26\";allowedParamExists=true;break}if(allowedParamExists==false)newQueryString+=paramArray[ix].split(\"\\x3d\")[0]+\"\\x3d[redacted]\\x26\"}if(!\/\\?$\/ig.test(_val)\u0026\u0026!\/%3F$\/ig.test(_val)\u0026\u0026(!\/\\? \/ig.test(_val)\u0026\u0026!\/%3F%20\/ig.test(_val)))_val=_val.replace(\/\\?.*\/,\"?\"+newQueryString.replace(\/\u0026$\/,\"\"))}piiRegex.forEach(function(pii){if(!\/\\?$\/ig.test(_param[1])\u0026\u0026\n!\/%3F$\/ig.test(_param[1])\u0026\u0026(!\/\\? \/ig.test(_param[1])\u0026\u0026!\/%3F%20\/ig.test(_param[1])))if(_param[0]!=\"el\")_val=_val.replace(pii.regex,\"[redacted]\");else if(_hitPayloadParts.indexOf(\"ec\\x3dEmail%20Clicks\")==-1)_val=_val.replace(pii.regex,\"[redacted]\")});if(_param[0]==\"el\"||_param[0]==\"ea\")_param[1]=encodeURIComponent(_val);else _param[1]=encodeURIComponent(_val.replace(\/\\?$\/,\"\"));_hitPayloadParts[i]=_param.join(\"\\x3d\")}sendHitTaskModel.set(\"hitPayload\",_hitPayloadParts.join(\"\\x26\"),true);if(canSendHit)originalSendHitTask(sendHitTaskModel)}catch(err){originalSendHitTask(originalSendHitTaskModel)}})}})();"]
    },{
      "function":"__jsm",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{return digitalData.page.locale?previous_locale=digitalData.page.locale:digitalData.page.locale=previous_locale,digitalData.page.locale}catch(a){}})();"]
    },{
      "function":"__j",
      "vtp_name":"site_section_cg"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"null",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","Login|Work.com|Forms|Industries|Essentials|Pricing|Sales Cloud|SMB|Other Products|Service Cloud|Solutions|Marketing Cloud|Commerce Cloud|Homepage|Platform \u0026 Heroku","value","Product \u0026 Solution"],["map","key","SEO Hub|Blog|Resource Center|SF Live \u0026 Webinar|Customer Stories","value","Awareness"],["map","key","Career|Company \\(Non-Career\\)|Company","value","Company"],["map","key","Event","value","Event"]]
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=navigator.userAgent,a=c.match(\/(opera|chrome|safari|firefox|msie|trident(?=\\\/))\\\/?\\s*(\\d+)\/i)||[];if(\/trident\/i.test(a[1])){var b=\/\\brv[ :]+(\\d+)\/g.exec(c)||[];return\"IE \"+(b[1]||\"\")}if(\"Chrome\"===a[1]\u0026\u0026(b=c.match(\/\\bOPR\\\/(\\d+)\/),null!=b))return\"Opera \"+b[1];a=a[2]?[a[1],a[2]]:[navigator.appName,navigator.appVersion,\"-?\"];null!=(b=c.match(\/version\\\/(\\d+)\/i))\u0026\u0026a.splice(1,1,b[1]);return a.join(\" \")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"desktop\",b=navigator.userAgent;try{if(\/iPad|Tablet|KFAPWI\/.test(b))a=\"tablet\";else if(\/(android|bb\\d+|meego).+mobile|silk|uc[\\s]?browser|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i.test(b)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=\"mobile\"}catch(c){}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,c,a){a=a?a:\"Not Passed\";var d=\"https:\/\/script.google.com\/macros\/s\/AKfycbxOfd4nVcYhA4BMfCjuXzpZKQVh2HQCcqJ5eosyPPHt8e5Valc\/exec\",e=window.location.href,f=",["escape",["macro",12],8,16],",g=",["escape",["macro",13],8,16],",h=",["escape",["macro",14],8,16],";b=d+\"?Tag_Name\\x3d\"+a+\"\\x26Error_Name\\x3d\"+b+\"\\x26Error_Msg\\x3d\"+c+\"\\x26Page\\x3d\"+e+\"\\x26Container_Version\\x3d\"+f+\"\\x26Device\\x3d\"+g+\"\\x26Browser\\x3d\"+h+\"\\x26sheetname\\x3derror_logs\";c=new Image;c.src=b}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",9],8,16],"==\"us\")return ",["escape",["macro",11],8,16],";else return undefined}catch(e){",["escape",["macro",15],8,16],"(e.message,e.name)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",9],8,16],"==\"us\")return ",["escape",["macro",10],8,16],";else return undefined}catch(e){",["escape",["macro",15],8,16],"(e.message,e.name)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=new Date,b=0===a.getMonth()?a.getFullYear():a.getFullYear()+1;return\"FY\"+b.toString().substr(-2)}catch(c){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=new Date,a=Math.floor((b.getMonth()+2)\/3);return(0===a?\"Q4\":\"Q\"+a)+\" \"+",["escape",["macro",18],8,16],"}catch(c){}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return location.protocol+\"\/\/\"+",["escape",["macro",20],8,16],"+",["escape",["macro",21],8,16],"}catch(a){return null}})();"]
    },{
      "function":"__j",
      "vtp_name":"site_section_cd"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",23],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"null",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","Login|Work.com|Direct Landing on Forms|Industries|Essentials|Pricing|Sales Cloud|SMB|Other Products|Service Cloud|Solutions|Homepage|Platform \u0026 Heroku|Marketing Cloud|Commerce Cloud","value","Product \u0026 Solution"],["map","key","SEO Hub|Stories|Blog|Resource Center|SF Live \u0026 Webinar|Customer Stories","value","Awareness"],["map","key","Career|Company \\(Non-Career\\)|Company","value","Company"],["map","key","Event","value","Event"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",9],8,16],"==\"us\")return ",["escape",["macro",24],8,16],";else return undefined}catch(e){",["escape",["macro",15],8,16],"(e.message,e.name)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{if(",["escape",["macro",9],8,16],"==\"us\")return ",["escape",["macro",23],8,16],";else return undefined}catch(e){",["escape",["macro",15],8,16],"(e.message,e.name)}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"traffic_type"
    },{
      "function":"__jsm",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{return digitalData.page.convertingpage}catch(a){}})();"]
    },{
      "function":"__jsm",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{return vp.db.employee_range?vp.db.employee_range.toLowerCase():\"\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{return(vp.db.audience?vp.db.audience+(vp.db.audience_segment?\"|\"+vp.db.audience_segment:\"\"):\"\").toLowerCase()}catch(a){}})();"]
    },{
      "function":"__jsm",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{return digitalData.page.pagename}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.type}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.location.pathname+document.location.search})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=\"\"+digitalData.page.prevpage;return\"\"!==a?a:\"[NO PREVIOUS PAGE AVAILABLE]\"}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.user[0].profile[0].transactionid}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",35],8,16],")return ",["escape",["macro",35],8,16],".split(\"|\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.authorName}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.blogpostmeta}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPercentageWatched"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoSecondsWatched"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.timestamp}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=new Date;a.getTimezoneOffset();return a}catch(b){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"calltoActionText"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.db.company_name?vp.db.company_name.toLowerCase():\"\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return(vp.db.industry?vp.db.industry+(vp.db.sub_industry?\"|\"+vp.db.sub_industry:\"\"):\"\").toLowerCase()}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.db.watch_list\u0026\u0026vp.db.watch_list.account_type?vp.db.watch_list.account_type:\"\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",b=\"\",c=\"\";try{a=vp.db.city.toLowerCase()}catch(d){}try{b=vp.db.state.toLowerCase()}catch(d){}try{c=vp.db.country.toLowerCase()}catch(d){}return a+\"|\"+b+\"|\"+c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.OrgInfo.getID()}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return\"Sales:\"+digitalData.ptc.sales.toFixed(5)+\"|Service:\"+digitalData.ptc.service.toFixed(5)+\"|Mktg:\"+digitalData.ptc.marketing.toFixed(5)+\"|Plat:\"+digitalData.ptc.platform.toFixed(5)}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b={Analytics:digitalData.ptc.convertedAnalytics,Communities:digitalData.ptc.convertedCommunities,Marketing:digitalData.ptc.convertedMarketing,Other:digitalData.ptc.convertedOther,Platform:digitalData.ptc.convertedPlatform,Sales:digitalData.ptc.convertedSales,Service:digitalData.ptc.convertedService,SuccessServices:digitalData.ptc.convertedSuccessServices},c=Object.keys(b),a=c.filter(function(a){return b[a]});a=\"\"==a?void 0:a;return a.toString()}catch(d){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return\"Sales:\"+digitalData.ptc.uncalibrated_sales.toFixed(5)+\"|Service:\"+digitalData.ptc.uncalibrated_service.toFixed(5)+\"|Mktg:\"+digitalData.ptc.uncalibrated_marketing.toFixed(5)+\"|Plat:\"+digitalData.ptc.uncalibrated_platform.toFixed(5)}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.scampaign}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.referrer}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizelyExp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"optimizelyVar"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formPrimaryProductInterest"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalDriverId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=\"\"+Page.getReferrer();return\"\"!==a?a:\"[NO PAGE REFERRER AVAILABLE]\"}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",29],8,16],"+\"_\"+",["escape",["macro",30],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formCompanyName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formCompanySize"
    },{
      "function":"__j",
      "vtp_name":"vp.db.employee_count"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.s.visitor.getMarketingCloudVisitorID()}catch(a){}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formExperienceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"custEv_formImpression\"==",["escape",["macro",66],8,16],"||\"custEv_formCompletion\"==",["escape",["macro",66],8,16],"||\"custEv_stepbystepFormProgress\"==",["escape",["macro",66],8,16],")return ",["escape",["macro",67],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formEnvironmentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"custEv_formImpression\"==",["escape",["macro",66],8,16],"||\"custEv_formCompletion\"==",["escape",["macro",66],8,16],"||\"custEv_stepbystepFormProgress\"==",["escape",["macro",66],8,16],")return ",["escape",["macro",69],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"partnerPromoCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(Page.isLogin()){var a;return a=vp.hasCurrentTrial()?\"freetrial\":\"developer\"===vp.getType()?\"developer\":\"customer\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.internaldrivers}catch(a){}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"Null Data Value",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{var b=digitalData.page.scampaign,a=b.split(\"|\")[0];return a.startsWith(\"7\")?a.substring(0,18):null}catch(c){}})();"]
    },{
      "function":"__cid"
    },{
      "function":"__v",
      "convert_undefined_to":"Null Data Value",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formCountry"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.neustar.sld+\".\"+vp.neustar.tld}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.neustar.carrier}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.neustar.organization}catch(a){}})();"]
    },{
      "function":"__u",
      "convert_undefined_to":"null",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_undefined_to":"null",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",81],8,16],",b=",["escape",["macro",82],8,16],",c=",["escape",["macro",13],8,16],",d=",["escape",["macro",78],8,16],";return[d,vp.neustar.carrier,vp.neustar.city,c,b,a].join(\"|\")}catch(e){}})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",16]],["map","index","2","group",["macro",17]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",19]],["map","index","19","dimension",["macro",18]],["map","index","45","dimension",["macro",22]],["map","index","47","dimension",["macro",25]],["map","index","46","dimension",["macro",26]],["map","index","38","dimension",["macro",27]],["map","index","25","dimension",["macro",28]],["map","index","24","dimension",["macro",9]],["map","index","32","dimension",["macro",29]],["map","index","34","dimension",["macro",30]],["map","index","1","dimension",["macro",31]],["map","index","2","dimension",["macro",32]],["map","index","3","dimension",["macro",33]],["map","index","4","dimension",["macro",34]],["map","index","5","dimension",["macro",36]],["map","index","6","dimension",["macro",37]],["map","index","7","dimension",["macro",38]],["map","index","8","dimension",["macro",39]],["map","index","9","dimension",["macro",40]],["map","index","10","dimension",["macro",41]],["map","index","11","dimension",["macro",42]],["map","index","14","dimension",["macro",35]],["map","index","22","dimension",["macro",43]],["map","index","23","dimension",["macro",44]],["map","index","31","dimension",["macro",45]],["map","index","33","dimension",["macro",46]],["map","index","35","dimension",["macro",47]],["map","index","36","dimension",["macro",48]],["map","index","37","dimension",["macro",49]],["map","index","41","dimension",["macro",50]],["map","index","49","dimension",["macro",51]],["map","index","51","dimension",["macro",52]],["map","index","53","dimension",["macro",53]],["map","index","54","dimension",["macro",54]],["map","index","55","dimension",["macro",55]],["map","index","61","dimension",["macro",56]],["map","index","62","dimension",["macro",57]],["map","index","67","dimension",["macro",58]],["map","index","70","dimension",["macro",59]],["map","index","73","dimension",["macro",60]],["map","index","85","dimension",["macro",61]],["map","index","86","dimension",["macro",62]],["map","index","87","dimension",["macro",63]],["map","index","92","dimension",["macro",64]],["map","index","93","dimension",["macro",65]],["map","index","97","dimension",["macro",68]],["map","index","98","dimension",["macro",70]],["map","index","100","dimension",["macro",71]],["map","index","101","dimension",["macro",72]],["map","index","39","dimension",["macro",73]],["map","index","40","dimension",["macro",4]],["map","index","68","dimension",["macro",74]],["map","index","99","dimension",["macro",75]],["map","index","103","dimension",["macro",9]],["map","index","90","dimension",["macro",56]],["map","index","91","dimension",["macro",57]],["map","index","21","dimension",["template",["macro",76],"-",["macro",12]]],["map","index","30","dimension",["macro",77]],["map","index","15","dimension",["macro",78]],["map","index","16","dimension",["macro",79]],["map","index","43","dimension",["macro",80]],["map","index","17","dimension",["macro",83]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-140200881-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"www.salesforce.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","4","dimension",["macro",35]],["map","index","5","dimension",["macro",77]],["map","index","6","dimension",["macro",62]],["map","index","7","dimension",["macro",63]],["map","index","8","dimension",["macro",72]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-32370442-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAct"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=[\"demandware.com\",\"salesforce.com\"],c=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1].toLowerCase(),b=0;b\u003Ca.length;b++)if(c==a[b])return a.splice(b,1),a.join()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.hostname.match(\/(([^.\\\/]+\\.[^.\\\/]{2,3}\\.[^.\\\/]{2})|(([^.\\\/]+\\.)[^.\\\/]{2,4}))(\\\/.*)?$\/)[1];return a.toLowerCase()})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var allowedParamsCI=[\"ban\",\"brand\",\"cc\",\"chapter\",\"chapterindex\",\"commid\",\"conf-redirect\",\"cq_ck\",\"d\",\"dcmp\",\"drivercampaignid\",\"ef_id\",\"eid\",\"elq_mid\",\"eventid\",\"fbclid\",\"forceprofile\",\"formcampaignid\",\"id\",\"ind\",\"internal\",\"ir\",\"kw\",\"leadcreated\",\"lssm\",\"mc\",\"nc\",\"optimizely_preview_layer_ids\",\"optimizely_preview_mode_CAMPAIGN\",\"optimizely_snippet\",\"optimizely_token\",\"optimizely_x\",\"optimizely_x_audiences\",\"page\",\"player\",\"playlistid\",\"podcastid\",\"q\",\"QS\",\"s_kwcid\",\"sfdc-redirect\",\"soc\",\n\"ve\",\"videoid\"];var searchParams=[\"q\",\"video-search\"];var visitor_type=\"\";var viType=\"\";var page_name=\"\";var login_check=\"\";allowedParamsCI.push(\"utm_source\",\"utm_medium\",\"utm_campaign\",\"utm_content\",\"utm_term\",\"utm_keyword\",\"utm_id\",\"gclid\",\"dclid\",\"gclsrc\");var allowedParams=[];for(var i=0;i\u003CallowedParamsCI.length;i++)allowedParams.push(allowedParamsCI[i].toLowerCase());var checkParams=[\"dl\",\"dp\",\"dr\",\"dt\",\"ec\",\"ea\",\"el\",\"uid\",\"cd\\\\d{1,3}\",\"pr\\\\d{1,3}cd\\\\d{1,3}\"];var globalSendHitTaskName=\"_ga_originalSendHitTask\";\nvar piiRegex=[{name:\"EMAIL\",regex:\/([^\u0026\\s\\\/\\?#=:]){1,}(@|%40).([^\u0026\\s\\\/\\?#]){1,}\/ig}];if(!",["escape",["macro",2],8,16],".match(\/(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)\/g))var customdimension43=",["escape",["macro",6],8,16],"+\":\"+",["escape",["macro",7],8,16],";return function(customTaskModel){window[globalSendHitTaskName]=window[globalSendHitTaskName]||customTaskModel.get(\"sendHitTask\");if(vp.getType())viType=vp.getType();if(viType==\"customer\")visitor_type=\"customer\";else if(",["escape",["macro",91],8,16],".match(\/.my.salesforce.com\/g)||\n",["escape",["macro",91],8,16],".match(\/salesforce.com\\\/secur\\\/logout.jsp\/g)||",["escape",["macro",91],8,16],".match(\/cloudforce.com\\\/secur\\\/logout.jsp\/g)||",["escape",["macro",91],8,16],".match(\/\\\/secur\\\/logout.jsp\/g)\u0026\u0026",["escape",["macro",91],8,16],".match(\/force.com\/g))visitor_type=\"customer\";else visitor_type=\"prospect\";var dl=customTaskModel.get(\"\\x26dl\");dl=dl.replace(\/\\.(html|jsp)\/gi,\"\");customTaskModel.set(\"\\x26dl\",dl);customTaskModel.set(\"dimension44\",customTaskModel.get(\"clientId\"));customTaskModel.set(\"dimension42\",visitor_type);\ncustomTaskModel.set(\"sendHitTask\",function(sendHitTaskModel){var originalSendHitTaskModel=sendHitTaskModel,originalSendHitTask=window[globalSendHitTaskName],canSendHit=true;try{var _hitPayloadParts=sendHitTaskModel.get(\"hitPayload\").split(\"\\x26\");for(var i=0;i\u003C_hitPayloadParts.length;i++){var newQueryString=\"\";var _param=_hitPayloadParts[i].split(\"\\x3d\");var _val;try{_val=decodeURIComponent(decodeURIComponent(_param[1]))}catch(e){_val=decodeURIComponent(_param[1])}for(var ii=0;ii\u003CcheckParams.length;ii++)if(_param[0].match(new RegExp(\"^(\"+\ncheckParams[ii]+\")$\"))!=null\u0026\u0026(_val.indexOf(\"?\")\u003E-1||document.location.href.indexOf(\"\/search\/\")\u003E-1\u0026\u0026location.hash)){if((_param[0]===\"dl\"||_param[0]===\"dp\")\u0026\u0026(location.hash.indexOf(\"q\")\u003E-1\u0026\u0026_val.indexOf(\"?\")\u003E-1\u0026\u0026location.href.indexOf(\"\/search\/\")\u003E-1))_val+=\"\\x26q\\x3d\"+document.location.hash.split(\"q\\x3d\")[1].split(\"\\x26\")[0];else if((_param[0]===\"dl\"||_param[0]===\"dp\")\u0026\u0026(location.hash.indexOf(\"q\")\u003E-1\u0026\u0026_val.indexOf(\"?\")===-1\u0026\u0026location.href.indexOf(\"\/search\/\")\u003E-1))_val+=\"?q\\x3d\"+document.location.hash.split(\"q\\x3d\")[1].split(\"\\x26\")[0];\nfor(s=0;s\u003CsearchParams.length;s++){var paramIndex=_val.indexOf(searchParams[s]+\"\\x3d\");if(paramIndex\u003E-1)if(_val.charAt(paramIndex-1)==\"?\"||_val.charAt(paramIndex-1)==\"\\x26\")_val=_val.replace(searchParams[s],\"search_param\")}var paramArray=_val.split(\"?\").splice(1).join(\"\\x26\").split(\"\\x26\");var paramSubArray=[];for(pa=0;pa\u003CparamArray.length;pa++)if(paramArray[pa].indexOf(\"?\")\u003E-1)paramSubArray.push(paramArray[pa].split(\"?\")[1]);paramArray=paramArray.concat(paramSubArray);for(var ix=0;ix\u003CparamArray.length;ix++){var allowedParamExists=\nfalse;for(var z=0;z\u003CallowedParams.length;z++)if(paramArray[ix].toLowerCase().indexOf(allowedParams[z].toLowerCase()+\"\\x3d\")==0||paramArray[ix].indexOf(\"search_param\\x3d\")==0){newQueryString+=paramArray[ix]+\"\\x26\";allowedParamExists=true;break}if(allowedParamExists==false)newQueryString+=paramArray[ix].split(\"\\x3d\")[0]+\"\\x3d[redacted]\\x26\"}if(!\/\\?$\/ig.test(_val)\u0026\u0026!\/%3F$\/ig.test(_val)\u0026\u0026(!\/\\? \/ig.test(_val)\u0026\u0026!\/%3F%20\/ig.test(_val)))_val=_val.replace(\/\\?.*\/,\"?\"+newQueryString.replace(\/\u0026$\/,\"\"))}piiRegex.forEach(function(pii){if(!\/\\?$\/ig.test(_param[1])\u0026\u0026\n!\/%3F$\/ig.test(_param[1])\u0026\u0026(!\/\\? \/ig.test(_param[1])\u0026\u0026!\/%3F%20\/ig.test(_param[1])))if(_param[0]!=\"el\")_val=_val.replace(pii.regex,\"[redacted]\");else if(_hitPayloadParts.indexOf(\"ec\\x3dEmail%20Clicks\")==-1)_val=_val.replace(pii.regex,\"[redacted]\")});if(_param[0]==\"el\"||_param[0]==\"ea\")_param[1]=encodeURIComponent(_val);else _param[1]=encodeURIComponent(_val.replace(\/\\?$\/,\"\"));_hitPayloadParts[i]=_param.join(\"\\x3d\")}sendHitTaskModel.set(\"hitPayload\",_hitPayloadParts.join(\"\\x26\"),true);if(canSendHit)originalSendHitTask(sendHitTaskModel)}catch(err){console.log(err.message);\noriginalSendHitTask(originalSendHitTaskModel)}})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formFieldEngagements"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(void 0!=",["escape",["macro",38],8,16],")return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.botcategory}catch(a){}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",9],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(au|in|hk|tw|my|ap|th)","value","UA-118367394-7"],["map","key","(jp|kr)","value","UA-118367394-6"],["map","key","(es|de|fr|it|nl|se|uk|eu|dk|fi|il)","value","UA-118367394-5"],["map","key","(mx|br)","value","UA-118367394-4"],["map","key","us","value","UA-118367394-2"],["map","key","(ca|fr-ca)","value","UA-118367394-3"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",16]],["map","index","2","group",["macro",17]]],
      "vtp_autoLinkDomains":["macro",89],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",90],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",92]]],
      "vtp_metric":["list",["map","index","2","metric",["macro",93]],["map","index","9","metric",["macro",94]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",19]],["map","index","19","dimension",["macro",18]],["map","index","45","dimension",["macro",22]],["map","index","47","dimension",["macro",25]],["map","index","46","dimension",["macro",26]],["map","index","25","dimension",["macro",28]],["map","index","24","dimension",["macro",9]],["map","index","32","dimension",["macro",29]],["map","index","34","dimension",["macro",30]],["map","index","1","dimension",["macro",31]],["map","index","2","dimension",["macro",32]],["map","index","3","dimension",["macro",33]],["map","index","4","dimension",["macro",34]],["map","index","5","dimension",["macro",36]],["map","index","6","dimension",["macro",37]],["map","index","7","dimension",["macro",38]],["map","index","8","dimension",["macro",39]],["map","index","9","dimension",["macro",40]],["map","index","10","dimension",["macro",41]],["map","index","11","dimension",["macro",42]],["map","index","14","dimension",["macro",35]],["map","index","22","dimension",["macro",43]],["map","index","23","dimension",["macro",44]],["map","index","31","dimension",["macro",45]],["map","index","33","dimension",["macro",46]],["map","index","35","dimension",["macro",47]],["map","index","36","dimension",["macro",48]],["map","index","37","dimension",["macro",49]],["map","index","41","dimension",["macro",50]],["map","index","49","dimension",["macro",51]],["map","index","51","dimension",["macro",52]],["map","index","53","dimension",["macro",53]],["map","index","54","dimension",["macro",54]],["map","index","55","dimension",["macro",55]],["map","index","61","dimension",["macro",56]],["map","index","62","dimension",["macro",57]],["map","index","67","dimension",["macro",58]],["map","index","70","dimension",["macro",59]],["map","index","73","dimension",["macro",60]],["map","index","85","dimension",["macro",61]],["map","index","86","dimension",["macro",62]],["map","index","87","dimension",["macro",63]],["map","index","92","dimension",["macro",64]],["map","index","93","dimension",["macro",65]],["map","index","97","dimension",["macro",68]],["map","index","98","dimension",["macro",70]],["map","index","100","dimension",["macro",71]],["map","index","101","dimension",["macro",72]],["map","index","39","dimension",["macro",73]],["map","index","40","dimension",["macro",4]],["map","index","68","dimension",["macro",74]],["map","index","99","dimension",["macro",75]],["map","index","103","dimension",["macro",9]],["map","index","90","dimension",["macro",56]],["map","index","91","dimension",["macro",57]],["map","index","21","dimension",["template",["macro",76],"-",["macro",12]]],["map","index","30","dimension",["macro",77]],["map","index","15","dimension",["macro",78]],["map","index","16","dimension",["macro",79]],["map","index","43","dimension",["macro",80]],["map","index","17","dimension",["macro",83]],["map","index","58","dimension",["macro",95]],["map","index","12","dimension",["macro",96]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLbl"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isFooter"
    },{
      "function":"__j",
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",99],8,16],".split(\/\\\/(.+)\/)[1]}catch(a){}})();"]
    },{
      "function":"__c",
      "vtp_value":"Other Page"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return window.Page.getServer()?window.Page.getServer():window.digitalData.page.server?window.digitalData.page.server:\"SFDC\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",99],8,16],".split(\/\\\/(.+)\/)[1].replace(\/\\\/\/g,\":\")}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a,b=",["escape",["macro",99],8,16],".split(\"\/\");for(a=0;a\u003Cb.length;a++)if(b[a].includes(\".pdf\"))return b[a]}catch(c){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formErrors"
    },{
      "function":"__jsm",
      "convert_undefined_to":"Null Data Value",
      "vtp_javascript":["template","(function(){try{return digitalData.page.offerid}catch(a){}})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",16]],["map","index","2","group",["macro",17]]],
      "vtp_autoLinkDomains":["macro",89],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",90],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",8]]],
      "vtp_metric":["list",["map","index","2","metric",["macro",93]],["map","index","9","metric",["macro",94]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","20","dimension",["macro",19]],["map","index","19","dimension",["macro",18]],["map","index","45","dimension",["macro",22]],["map","index","47","dimension",["macro",25]],["map","index","46","dimension",["macro",26]],["map","index","25","dimension",["macro",28]],["map","index","24","dimension",["macro",9]],["map","index","32","dimension",["macro",29]],["map","index","34","dimension",["macro",30]],["map","index","1","dimension",["macro",31]],["map","index","2","dimension",["macro",32]],["map","index","3","dimension",["macro",33]],["map","index","4","dimension",["macro",34]],["map","index","5","dimension",["macro",36]],["map","index","6","dimension",["macro",37]],["map","index","7","dimension",["macro",38]],["map","index","8","dimension",["macro",39]],["map","index","9","dimension",["macro",40]],["map","index","10","dimension",["macro",41]],["map","index","11","dimension",["macro",42]],["map","index","14","dimension",["macro",35]],["map","index","22","dimension",["macro",43]],["map","index","23","dimension",["macro",44]],["map","index","31","dimension",["macro",45]],["map","index","33","dimension",["macro",46]],["map","index","35","dimension",["macro",47]],["map","index","36","dimension",["macro",48]],["map","index","37","dimension",["macro",49]],["map","index","41","dimension",["macro",50]],["map","index","49","dimension",["macro",51]],["map","index","51","dimension",["macro",52]],["map","index","53","dimension",["macro",53]],["map","index","54","dimension",["macro",54]],["map","index","55","dimension",["macro",55]],["map","index","61","dimension",["macro",56]],["map","index","62","dimension",["macro",57]],["map","index","67","dimension",["macro",58]],["map","index","70","dimension",["macro",59]],["map","index","73","dimension",["macro",60]],["map","index","85","dimension",["macro",61]],["map","index","86","dimension",["macro",62]],["map","index","87","dimension",["macro",63]],["map","index","92","dimension",["macro",64]],["map","index","93","dimension",["macro",65]],["map","index","97","dimension",["macro",68]],["map","index","98","dimension",["macro",70]],["map","index","100","dimension",["macro",71]],["map","index","101","dimension",["macro",72]],["map","index","39","dimension",["macro",73]],["map","index","40","dimension",["macro",4]],["map","index","68","dimension",["macro",74]],["map","index","99","dimension",["macro",75]],["map","index","103","dimension",["macro",9]],["map","index","90","dimension",["macro",56]],["map","index","91","dimension",["macro",57]],["map","index","21","dimension",["template",["macro",76],"-",["macro",12]]],["map","index","30","dimension",["macro",77]],["map","index","15","dimension",["macro",78]],["map","index","16","dimension",["macro",79]],["map","index","43","dimension",["macro",80]],["map","index","17","dimension",["macro",83]],["map","index","42","dimension",["macro",6]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formViews"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAct"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNet"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chatLocation"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"custEv_chatPopUp\"==",["escape",["macro",66],8,16],")return\"popup\";if(\"custEv_chatDrop\"==",["escape",["macro",66],8,16],")return\"drop\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"formCompletions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"autoFormCompletions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navItem"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"navLocation"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",123],
      "vtp_map":["list",["map","key","top","value","global nav click"],["map","key","left","value","side nav click"],["map","key","bottom","value","footer click"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",66],
      "vtp_map":["list",["map","key","custEv_podcastFirstPlay","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"percentComplete"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",66],
      "vtp_map":["list",["map","key","custEv_podcastFirstPlay","value","initial play"],["map","key","custEv_podcastPlay","value","play"],["map","key","custEv_podcastStop","value","stop"],["map","key","custEv_podcastPercentComplete","value",["template",["macro",126],"%"]],["map","key","custEv_podcastTakeawayClick","value","takeaway click"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"podcastName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"episodeName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"takeawayName"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",66],
      "vtp_defaultValue":["template",["macro",128]," | ",["macro",129]],
      "vtp_map":["list",["map","key","custEv_podcastTakeawayClick","value",["template",["macro",128]," | ",["macro",129]," | ",["macro",130]]]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoLoads"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",88],
      "vtp_map":["list",["map","key","Form Views","value","1"],["map","key","Form Completion","value","2"],["map","key","Auto Form Completion","value","4"],["map","key","Form Error","value","3"],["map","key","Form Errors","value","3"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",88],
      "vtp_map":["list",["map","key","Form Views","value",["macro",110]],["map","key","Form Completion","value",["macro",110]],["map","key","Auto Form Completion","value",["macro",110]],["map","key","Form Error","value",["macro",99]],["map","key","Form Errors","value",["macro",99]]]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPlays"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoCompletions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"custEv_precentComplete\"===",["escape",["macro",66],8,16],"\u0026\u0026\"100% Completion\"===",["escape",["macro",99],8,16],")return ",["escape",["macro",137],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"tzRegID"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]],["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"www.salesforce.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",35]],["map","index","3","dimension",["macro",77]],["map","index","4","dimension",["macro",62]],["map","index","5","dimension",["macro",63]],["map","index","6","dimension",["macro",72]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-524727-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",88],
      "vtp_map":["list",["map","key","Form Views","value","1"],["map","key","Form Completion","value","2"],["map","key","Auto Form Completion","value","4"],["map","key","Form Error","value","3"],["map","key","Form Errors","value","3"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chatEndedBy"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return\"www.salesforce.com\"!==location.hostname}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return Page.getLocale()}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return vp.activityData.pv}catch(a){return null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return-1\u003Clocation.href.indexOf(\"\/login-messages\/\")}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var c=location.pathname,b=location.href,a=\"\";\"\/\"===c?a=\"rxr05acqt\":-1\u003Cb.indexOf(\"salesforce.com\/marketing-cloud\/guided-tour\/?d\\x3d701300000021ITc\")?a=\"sco0n9pgn\":-1\u003Cb.indexOf(\"salesforce.com\/dreamforce\/\")?a=\"scjtzlan8\":-1\u003Cb.indexOf(\"salesforce.com\/video\/\")?a=\"r9ktpbzhp\":-1\u003Cb.indexOf(\"salesforce.com\/blog\")?a=\"r9ktjmocd\":-1\u003Cb.indexOf(\"salesforce.com\/events\/webinars\")?a=\"sco0ainoi\":-1\u003Cb.indexOf(\"salesforce.com\/quotable\/\")?a=\"sco0c9gsn\":-1\u003Cb.indexOf(\"salesforce.com\/nam-manufacturers\/\")?\na=\"scq4br5ok\":-1\u003Cb.indexOf(\"salesforce.com\/jp\/video\/\")?a=\"scq4rls25\":-1\u003Cb.indexOf(\"salesforce.com\/br\/blog\")?a=\"sltvue225\":-1\u003Cb.indexOf(\"salesforce.com\/company\/careers\/university-recruiting\/\")?a=\"snkg6navx\":-1\u003Cb.indexOf(\"salesforce.com\/uk\/blog\")?a=\"thbb4cwoc\":-1\u003Cb.indexOf(\"salesforce.com\/de\/blog\")?a=\"tqg7i2fn5\":-1\u003Cb.indexOf(\"salesforce.com\/au\/video\")?a=\"uxp1mum12\":-1\u003Cb.indexOf(\"salesforce.com\/jp\/\")?a=\"rxr6bpavd\":-1\u003Cb.indexOf(\"salesforce.com\/eu\/\")?a=\"rzjgjyy4j\":-1\u003Cb.indexOf(\"salesforce.com\/de\/\")?a=\n\"rzjglsewd\":-1\u003Cb.indexOf(\"salesforce.com\/mx\/\")?a=\"rxr7wxro8\":-1\u003Cb.indexOf(\"salesforce.com\/au\/\")?a=\"roh9hbppn\":-1\u003Cb.indexOf(\"salesforce.com\/ap\/\")?a=\"rzfpuz8m0\":-1\u003Cb.indexOf(\"salesforce.com\/cn\/\")?a=\"rzfzjhte8\":-1\u003Cb.indexOf(\"salesforce.com\/in\/\")?a=\"rzfzij3qg\":-1\u003Cb.indexOf(\"salesforce.com\/my\/\")?a=\"rzfzmscc6\":-1\u003Cb.indexOf(\"salesforce.com\/hk\/\")?a=\"rzfzqx3ij\":-1\u003Cb.indexOf(\"salesforce.com\/th\/\")?a=\"rzfznvrig\":-1\u003Cb.indexOf(\"salesforce.com\/tw\/\")?a=\"rzfzrxe6n\":-1\u003Cb.indexOf(\"salesforce.com\/kr\/\")?a=\"t3qhi12d9\":\n-1\u003Cb.indexOf(\"salesforce.com\/ca\/\")?a=\"rxr687f67\":-1\u003Cb.indexOf(\"salesforce.com\/fr-ca\/\")?a=\"r4tbe769u\":-1\u003Cb.indexOf(\"salesforce.com\/eu\/\")?a=\"r2a00w4l2\":-1\u003Cb.indexOf(\"salesforce.com\/uk\/\")?a=\"r2a052q1o\":-1\u003Cb.indexOf(\"salesforce.com\/fr\/\")?a=\"r2a1qiyra\":-1\u003Cb.indexOf(\"salesforce.com\/es\/\")?a=\"r2a1txs9q\":-1\u003Cb.indexOf(\"salesforce.com\/nl\/\")?a=\"r2a1wzqtx\":-1\u003Cb.indexOf(\"salesforce.com\/se\/\")?a=\"r2a1833gf\":-1\u003Cb.indexOf(\"salesforce.com\/it\/\")?a=\"r2a2casbh\":-1\u003Cb.indexOf(\"salesforce.com\/\")\u0026\u0026(a=\"rxr05acqt\");return a}catch(d){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OptanonActiveGroups"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var d=[\"d\",\"leadcreated\",\"r\"],a=[\"q\",\"video-search\"],c=\"\",f=document.location.href;if(document.location.search)var b=document.location.search;document.location.hash\u0026\u0026(b=document.location.hash);if(document.location.search||document.location.hash){f=document.location.href.replace(b,\"\");for(s=0;s\u003Ca.length;s++){var e=b.indexOf(a[s]+\"\\x3d\");-1\u003Ce\u0026\u0026(\"?\"==b.charAt(e-1)||\"\\x26\"==b.charAt(e-1))\u0026\u0026(b=b.replace(a[s],\"search_param\"))}a=b.substr(1).split(\"\\x26\");b=[];for(pa=0;pa\u003Ca.length;pa++)-1\u003Ca[pa].indexOf(\"?\")\u0026\u0026\nb.push(a[pa].slice(a[pa].indexOf(\"?\")+1));a=a.concat(b);for(i=0;i\u003Ca.length;i++)for(z=0;z\u003Cd.length;z++)if(-1\u003Ca[i].indexOf(d[z]+\"\\x3d\")||-1\u003Ca[i].indexOf(\"search_param\\x3d\"))if(0==a[i].indexOf(d[z]+\"\\x3d\")||-1\u003Ca[i].indexOf(\"search_param\\x3d\")){c+=a[i]+\"\\x26\";break}}\"\"!=c\u0026\u0026(c=\"?\"+c.substring(0,c.length-1));return f+=c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVal"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",8]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",31]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-140200881-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f,g,c,a){var d=new Date,e=\"\",b=0;a\u0026\u0026(a.minutes?b=6E4*a.minutes:a.hours?b=36E5*a.hours:a.days?b=864E5*a.days:a.months?b=2592E6*a.months:a.years\u0026\u0026(b=31536E6*a.years),d.setTime(d.getTime()+b),e=\"expires\\x3d\"+d.toUTCString()+\";\");c=c?c:\".\"+document.domain.replace(\"www.\",\"\");document.cookie=f+\"\\x3d\"+g+\";\"+e+\"domain\\x3d\"+c+\";path\\x3d\/\"}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"visitor_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"DL - Click Text"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"isCTA"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.user[0].profile[0].transactionid}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return\"Sales:\"+digitalData.ptc.sales.toFixed(5)+\"|Service:\"+digitalData.ptc.service.toFixed(5)+\"|Mktg:\"+digitalData.ptc.marketing.toFixed(5)+\"|Plat:\"+digitalData.ptc.platform.toFixed(5)}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b={Analytics:digitalData.ptc.convertedAnalytics,Communities:digitalData.ptc.convertedCommunities,Marketing:digitalData.ptc.convertedMarketing,Other:digitalData.ptc.convertedOther,Platform:digitalData.ptc.convertedPlatform,Sales:digitalData.ptc.convertedSales,Service:digitalData.ptc.convertedService,SuccessServices:digitalData.ptc.convertedSuccessServices},c=Object.keys(b),a=c.filter(function(a){return b[a]});a=\"\"==a?void 0:a;return a.toString()}catch(d){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return\"Sales:\"+digitalData.ptc.uncalibrated_sales.toFixed(5)+\"|Service:\"+digitalData.ptc.uncalibrated_service.toFixed(5)+\"|Mktg:\"+digitalData.ptc.uncalibrated_marketing.toFixed(5)+\"|Plat:\"+digitalData.ptc.uncalibrated_platform.toFixed(5)}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return digitalData.page.crossvisittrafficdrivertype}catch(a){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoPauses"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blogTagImpressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chatViews"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chatInitiations"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalDriverClicks"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"chatDrops"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",120],8,16],"+",["escape",["macro",121],8,16],"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*SEO\\|.*","value","SEO"],["map","key",".*SFDC Network\\|.*","value","SFDC Network"],["map","key",".*\\|Other.*","value","Other"],["map","key",".*\\|SEM.*","value","SEM"],["map","key",".*\\|BAN.*","value","BAN"],["map","key",".*Typed\/Bookmarked.*","value","Typed\/Bookmarked"],["map","key",".*\\|Paid Social Media.*","value","Paid Social Media"],["map","key",".*\\|Social Media.*","value","Social Media"],["map","key",".*\\|Email.*","value","Email"],["map","key",".*External Websites\\|.*","value","External Websites"],["map","key",".*Social Media\\|.*","value","Social Media"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",6],8,16],",b=",["escape",["macro",7],8,16],";return a+\":\"+b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"episodeID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f){try{var b={},c;var d=f.split(\"\\x26\");var a=0;for(c=d.length;a\u003Cc;a++){var e=d[a].split(\"\\x3d\");b[e[0]]=e[1]}return b}catch(g){}}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"internal_driver_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"internal_drivers"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vp_name"
    },{
      "function":"__j",
      "vtp_name":"site_section"
    },{
      "function":"__j",
      "vtp_name":"previous_locale"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar page_name=",["escape",["macro",31],8,16],",site_section_cg;\nsite_section_cg=page_name.match(\":login\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"Login\":\"SFDC:us:work\"==page_name||page_name.match(\"^SFDC:us:work\")||page_name.match(\"SFDC:us:products:emergency-response|SFDC:us:products:workplace-command-center|SFDC:us:products:contact-tracing\")?\"Work.com\":page_name.match(\"Direct Landing\")||page_name.match(\"unspecified\")||!page_name||page_name.match(\"SFDC:us:leadcapture:SignupServlet\")||page_name.match(\":form:\")\u0026\u0026!page_name.match(\":events:|:event:|dreamforce|DREAM:us|:df|:connections|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp|:sflive|:webinar|:video|:company:|:blog\")?\n\"Forms\":page_name.match(\":products:health-cloud:|:products:financial-services-cloud:|:solutions:industries|:campaign:nrf|:campaign:himss|:campaigns:industries:himss|:campaign:government:|:products:manufacturing-cloud:|:products:consumer-goods-cloud:\")\u0026\u0026!page_name.match(\"form:|events:|company:\")?\"Industries\":page_name.match(\":solutions:essentials|:campaign:service-essentials\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"Essentials\":page_name.match(\":editions-pricing:\")\u0026\u0026!page_name.match(\":form:|:events:|:company:|sfdcstatic\")?\n\"Pricing\":page_name.match(\":sales-cloud:\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"Sales Cloud\":page_name.match(\":solutions:small-business-solutions:\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"SMB\":page_name.match(\":products|:services:\")\u0026\u0026!page_name.match(\":emergency-response|:workplace-command-center|:contact-tracing|:sales-cloud:|:service-cloud:|:marketing-cloud:|:heroku:|:platform:|:commerce-cloud:|:products:field-service:|:products:health-cloud:|:products:financial-services-cloud:|:products:manufacturing-cloud:|:products:consumer-goods-cloud:|:form:|:events:|:company:\")?\n\"Other Products\":page_name.match(\":service-cloud:|:field-service:\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"Service Cloud\":page_name.match(\":solutions:\")\u0026\u0026!page_name.match(\":solutions:mobile:|:essentials|:small-business-solutions|:industries|:products|:form:|:events:| :company:\")?\"Solutions\":page_name.match(\"marketing-cloud:\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"Marketing Cloud\":page_name.match(\":commerce-cloud:\")\u0026\u0026!page_name.match(\":form:|:events:|:company:\")?\"Commerce Cloud\":\npage_name.match(\/^SFDC\/g)\u0026\u0026page_name.match(\":homepage\")\u0026\u0026!page_name.match(\":blog|us::homepage|:events:|:company:\")?\"Homepage\":page_name.match(\":heroku:|:platform:|:solutions:mobile:\")\u0026\u0026!page_name.match(\":form:|:commerce-cloud|:events:|:company:\")?\"Platform \\x26 Heroku\":page_name.match(\"dreamforce|DREAM:us|:df|:connections|:salesforce-live-series:|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\")\u0026\u0026!page_name.match(\":company:|:blog:|:blogs:|:products:|:solutions:|:content:|:community:\")?\"Event\":\npage_name.match(\":hub:|:crm\")\u0026\u0026!page_name.match(\":form:|:products:|:solutions:\")?\"SEO Hub\":page_name.match(\":company:careers\")\u0026\u0026!page_name.match(\":form:|:events:|:blog:\")?\"Career\":page_name.match(\/^SFDC:us:resources\/g)?\"Resource Center\":page_name.match(\":company|:news\")\u0026\u0026!page_name.match(\":careers|:form:|:events:|:blog:\")?\"Company (Non-Career)\":page_name.match(\":customer-success-stories\")\u0026\u0026!page_name.match(\":form:|:products:|:solutions:\")?\"Customer Stories\":page_name.match(\":blog:\")\u0026\u0026!page_name.match(\":form:|:products:|:solutions:\")?\n\"Blog\":page_name.match(\":company\")\u0026\u0026!page_name.match(\":form:|:events:|:blog:\")?\"Company\":page_name.match(\/^SFDC:us:work:\/g)\u0026\u0026\"SFDC:us:work\"==page_name||page_name.match(\":products|:integration:|:sales-cloud:|:service-cloud:|:marketing-cloud:|:heroku:|:platform:|:commerce-cloud:\")||!(!page_name.match(\":form:\")||page_name.match(\":sflive|:webinar|:video\")||page_name\u0026\u0026page_name.match(\":form:event|:events:|:form:conf:event\")\u0026\u0026!page_name.match(\"dreamforce|DREAM:us|:df|cnx|:connections|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\"))||\npage_name.match(\":homepage|:blog:|:blogs:|:financial-services-cloud:|:health-cloud:|:solutions:|:login|:editions-pricing:|:customer-success-stories|:hub:|:crm|Direct Landing|unspecified|SFDC:us:leadcapture:SignupServlet|:campaign:nrf|:himss|:campaign:government:|SFDC:us:resources|:company|:campaign:service-essentials|dreamforce|DREAM:us|:df|cnx|:connections|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\")?\"undefined\":\"SF Live \\x26 Webinar\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":507
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar converting_page=",["escape",["macro",28],8,16],",page_name=",["escape",["macro",31],8,16],",site_section_cd;\nsite_section_cd=\"Null Data Value\"!==converting_page?converting_page.match(\":login\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\"Login\":\"SFDC:us:work\"==converting_page||converting_page.match(\/^SFDC:us:work\/g)||converting_page.match(\"SFDC:us:products:emergency-response|SFDC:us:products:workplace-command-center|SFDC:us:products:contact-tracing\")?\"Work.com\":converting_page.match(\"Direct Landing\")\u0026\u0026!page_name.match(\":sflive|:webinar|:video|:events|:event:|dreamforce|DREAM:us|:df|:connections|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\")||converting_page.match(\"unspecified\")||\n!converting_page||converting_page.match(\"SFDC:us:leadcapture:SignupServlet\")||converting_page.match(\":form:\")\u0026\u0026!converting_page.match(\":sflive|:webinar|:video|:events|:event:|dreamforce|DREAM:us|:df|:connections|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp|:company:|:blog\")?\"Direct Landing on Forms\":converting_page.match(\":products:health-cloud:|:products:financial-services-cloud:|solutions:industries|:campaign:nrf|:campaign:himss|:campaigns:industries:himss|:campaign:government:|:products:manufacturing-cloud:|:products:consumer-goods-cloud:\")\u0026\u0026\n!converting_page.match(\":form:|:events:|:company:\")?\"Industries\":converting_page.match(\":solutions:essentials|:campaign:service-essentials\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\"Essentials\":converting_page.match(\":editions-pricing:\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:|sfdcstatic\")?\"Pricing\":converting_page.match(\":sales-cloud:\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\"Sales Cloud\":converting_page.match(\":solutions:small-business-solutions:\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\n\"SMB\":converting_page.match(\":products|:services:\")\u0026\u0026!converting_page.match(\":emergency-response|:workplace-command-center|:contact-tracing|:sales-cloud:|:service-cloud:|:marketing-cloud:|:heroku:|:platform:|:commerce-cloud:|:products:field-service:|:products:health-cloud:|:products:financial-services-cloud:|:products:manufacturing-cloud:|:products:consumer-goods-cloud:|:form:|:events:|:company:\")?\"Other Products\":converting_page.match(\":service-cloud:|:field-service:\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\n\"Service Cloud\":converting_page.match(\":solutions:\")\u0026\u0026!converting_page.match(\":solutions:mobile:|:essentials|:small-business-solutions|:industries|:products|:form:|:events:|:company:\")?\"Solutions\":converting_page.match(\":marketing-cloud:\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\"Marketing Cloud\":converting_page.match(\":commerce-cloud:\")\u0026\u0026!converting_page.match(\":form:|:events:|:company:\")?\"Commerce Cloud\":converting_page.match(\/^SFDC\/g)\u0026\u0026converting_page.match(\":homepage\")\u0026\u0026!converting_page.match(\":blog|us::homepage|:events:|:company:\")?\n\"Homepage\":converting_page.match(\":heroku:|:platform:|:solutions:mobile:\")\u0026\u0026!converting_page.match(\":form:|:commerce-cloud|:events:|:company:\")?\"Platform \\x26 Heroku\":converting_page.match(\"dreamforce|DREAM:us|:df|:connections|:salesforce-live-series:|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\")||\"Direct Landing\"==converting_page\u0026\u0026page_name.match(\"dreamforce|DREAM:us|:df|:connections|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\")\u0026\u0026!converting_page.match(\":company:|:video:|:blog:|:blogs:|:products:|:solutions:|:content:|:community:\")?\n\"Event\":converting_page.match(\":hub:|:crm\")\u0026\u0026!converting_page.match(\":form:|:products:|:solutions:\")?\"SEO Hub\":converting_page.match(\":company:careers\")\u0026\u0026!converting_page.match(\":form:|:events:|:blog:\")?\"Career\":converting_page.match(\/^SFDC:us:resources\/g)?\"Resource Center\":converting_page.match(\":company|:news\")\u0026\u0026!converting_page.match(\":careers|:form:|:events:|:blog:\")?\"Company (Non-Career)\":converting_page.match(\":customer-success-stories\")\u0026\u0026!converting_page.match(\":form:|:products:|:solutions:\")?\n\"Customer Stories\":converting_page.match(\":blog:\")\u0026\u0026!converting_page.match(\":form:|:products:|:solutions:\")?\"Blog\":converting_page.match(\":company\")\u0026\u0026!converting_page.match(\":form:|:events:|:blog:\")?\"Company\":page_name.match(\/^SFDC:us:work:\/g)\u0026\u0026\"SFDC:us:work:\"==page_name||converting_page.match(\"Direct Landing\")\u0026\u0026!page_name.match(\":sflive|:webinar|:video:\")\u0026\u0026(!page_name.match(\":event\")||page_name.match(\"dreamforce|DREAM:us|:df|cnx|c2u|:connections|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\"))||\n!converting_page.match(\":sflive:|:webinar|:video:\")\u0026\u0026converting_page.match(\":form:\")||converting_page.match(\":products|:integration:|:sales-cloud:|:service-cloud:|:marketing-cloud:|:heroku:|:platform:|:commerce-cloud:|:homepage|:blog:|:blogs:|:financial-services-cloud:|:health-cloud:|:sloutions:|:login|:editions-pricing:|:customer-success-stories|:hub:|:crm|unspecified|SFDC:us:leadcapture:SignupServlet|:campaign:nrf|:himss|:campaign:government:|SFDC:us:resources|:company|:campaign:service-essentials|dreamforce|DREAM:us|:df|:connections|cnx|c2u|tdx|trailheadx|worldtour|world-tour|sfwt|basecamp\")?\n\"Null Data Value\":\"SF Live \\x26 Webinar\":\"Null Data Value\";\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":508
    },{
      "function":"__ua",
      "priority":99,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":9
    },{
      "function":"__ua",
      "priority":90,
      "metadata":["map"],
      "setup_tags":["list",["tag",71,0]],
      "teardown_tags":["list",["tag",70,2]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":457
    },{
      "function":"__ua",
      "priority":90,
      "metadata":["map"],
      "teardown_tags":["list",["tag",70,2]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":603
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"963135594",
      "vtp_customParamsFormat":"NONE",
      "vtp_rdp":true,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",85],
      "vtp_enableRdpCheckbox":true,
      "tag_id":11
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",70,2]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",86],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":12
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"963135594",
      "vtp_conversionLabel":"wV3MCJ6B0AkQ6pChywM",
      "vtp_rdp":true,
      "vtp_url":["macro",85],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":13
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"963135594",
      "vtp_conversionLabel":"GUd9CJ2-n3wQ6pChywM",
      "vtp_rdp":true,
      "vtp_url":["macro",85],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":14
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Call Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",99],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":199
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",72,1]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",101],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","13","metric","1"]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",45],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":200
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",104]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",98],
      "vtp_dimension":["list",["map","index","2","dimension",["macro",105]],["map","index","3","dimension",["macro",104]],["map","index","4","dimension",["template",["macro",106],":",["macro",9],":",["macro",107]]],["map","index","45","dimension",["macro",99]],["map","index","73","dimension",["macro",2]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":201
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","18","metric","1"]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":202
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Form Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric",["macro",109]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Form Error",
      "vtp_eventLabel":["macro",99],
      "vtp_dimension":["list",["map","index","28","dimension",["macro",110]],["map","index","30","dimension",["macro",77]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":205
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Form Engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Form Step Engagement",
      "vtp_eventLabel":["macro",99],
      "vtp_dimension":["list",["map","index","28","dimension",["macro",110]],["map","index","30","dimension",["macro",77]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":212
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound Link Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":213
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",112]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",110],
      "vtp_dimension":["list",["map","index","28","dimension",["macro",110]],["map","index","30","dimension",["macro",77]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":216
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Internal Link Clicks",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",114],
      "vtp_eventLabel":["macro",102],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":217
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":238
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",70,2]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":252
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cookie Consent Manager",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Consent Banner",
      "vtp_eventLabel":"Accept and Continue",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":254
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Cookie Consent Manager",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Consent Banner",
      "vtp_eventLabel":"Cookie Preferences",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":256
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",115],
      "vtp_gaSettings":["macro",98],
      "vtp_socialActionTarget":["macro",116],
      "vtp_socialNetwork":["macro",117],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":263
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Chat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","10","metric","1"]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["template","Chat View - ",["macro",118]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":359
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Chat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","14","metric","1"]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["template","Chat Prompt - ",["macro",119]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":363
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Chat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","11","metric","1"]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["template","Chat Initialize - ",["macro",118]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":365
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":371
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric",["macro",120]],["map","index","17","metric",["macro",120]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",110],
      "vtp_dimension":["list",["map","index","28","dimension",["macro",110]],["map","index","30","dimension",["macro",77]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":372
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","12","metric",["macro",121]],["map","index","17","metric",["macro",121]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",110],
      "vtp_dimension":["list",["map","index","28","dimension",["macro",110]],["map","index","30","dimension",["macro",77]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":373
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",124],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",122],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":390
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"podcast engagement",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","19","metric",["macro",125]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",127],
      "vtp_eventLabel":["macro",131],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":396
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","8","metric",["macro",132]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",99],
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":415
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",133],"metric","1"]],
      "vtp_gaSettings":["macro",86],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",134],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":426
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"global nav click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["template","events master : ",["macro",114]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":433
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","5","metric",["macro",136]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",99],
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":477
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","7","metric",["macro",138]]],
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",99],
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":478
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Events Master TZ Login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",139],
      "vtp_dimension":["list",["map","index","57","dimension",["macro",139]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":484
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",70,2]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":488
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index",["macro",141],"metric","1"]],
      "vtp_gaSettings":["macro",140],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",134],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":491
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Chat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Chat Closed",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":528
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Chat",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["template","Chat Ended - ",["macro",142]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":532
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",21],"?q=",["macro",88]]]],
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":548
    },{
      "function":"__cvt_8940756_551",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_cvars":["list",["map","slot","1","name","Page Type","value",["macro",32]],["map","slot","2","name","User Type","value",["macro",4]]],
      "vtp_TagUrl":"https:\/\/a.sfdcstatic.com\/contentsquare\/426c50651b14f.js",
      "tag_id":552
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",87],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",88],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":574
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",62,0]],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"login click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",111],
      "vtp_eventAction":["macro",122],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":577
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contact click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",114],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":593
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"feedback",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"feedback submitted",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":597
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",21],"?search_param=",["macro",88]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":598
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"newsroom",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"subscribe",
      "vtp_eventLabel":["macro",144],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":608
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-5NFPC39","nickname","SFDC - US"]],
      "vtp_boundaries":["list",["zb","_re",["macro",145],"^us$",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true],["zb","_re",["macro",2],"(www(-(qa1|dev1|dev2|dev3|dev4|uat1|play1)-pub)?)\\.salesforce\\.com\\\/(connections|dreamforce|trailheadx)\/*",true,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":609
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WQDH2Z5","nickname","SFDC - CA"]],
      "vtp_boundaries":["list",["zb","_re",["macro",145],"^(fr-ca|ca)$",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":610
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WZW8LNX","nickname","SFDC - LACA"]],
      "vtp_boundaries":["list",["zb","_re",["macro",145],"^(br|mx)$",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":611
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WW6VQTG","nickname","SFDC - EMEA"]],
      "vtp_boundaries":["list",["zb","_re",["macro",145],"^(de|dk|es|eu|fi|fr|it|pl|nl|se|tr|uk|no)$",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":612
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PT5HGXT","nickname","SFDC - JP"]],
      "vtp_boundaries":["list",["zb","_re",["macro",145],"^(jp|kr)$",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":613
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-W374NLK","nickname","SFDC - APAC"]],
      "vtp_boundaries":["list",["zb","_re",["macro",145],"^(ap|cn|au|hk|in|my|th|tw)$",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":614
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N4QVCLK","nickname","WWW - BizTech Hotfixes"]],
      "vtp_boundaries":["list",["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":true,
      "vtp_whitelistedTypes":["list",["map","typeId","hl"],["map","typeId","sdl"],["map","typeId","fsl"],["map","typeId","cl"],["map","typeId","tg"],["map","typeId","tl"],["map","typeId","ecl"],["map","typeId","jel"],["map","typeId","ytl"],["map","typeId","lcl"],["map","typeId","evl"],["map","typeId","vis"],["map","typeId","ctv"],["map","typeId","remm"],["map","typeId","smm"],["map","typeId","c"],["map","typeId","d"],["map","typeId","e"],["map","typeId","f"],["map","typeId","j"],["map","typeId","k"],["map","typeId","r"],["map","typeId","u"],["map","typeId","v"],["map","typeId","uv"],["map","typeId","dbg"],["map","typeId","ev"],["map","typeId","cid"],["map","typeId","aev"],["map","typeId","gas"],["map","typeId","html"],["map","typeId","jsm"]],
      "tag_id":615
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K9F57Z6","nickname","WWW - Events"]],
      "vtp_boundaries":["list",["zb","_re",["macro",2],"(www(-(qa1|dev1|dev2|dev3|dev4|uat1|play1)-pub)?)\\.salesforce\\.com\\\/(connections|dreamforce|trailheadx)\/*",false,true],["zb","_re",["macro",2],"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",true,true]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":616
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8940756_255",
      "tag_id":617
    },{
      "function":"__cl",
      "tag_id":618
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8940756_434",
      "tag_id":619
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8940756_464",
      "tag_id":620
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"8940756_604",
      "tag_id":621
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar visitor_type=\"\",viType=\"\",page_name=\"\",login_check=\"\";try{Page.getName()\u0026\u0026(page_name=Page.getName()),vp.getType()\u0026\u0026(viType=vp.getType()),",["escape",["macro",122],8,16],"\u0026\u0026(login_check=",["escape",["macro",122],8,16],"),visitor_type=\"customer\"==viType?\"customer\":page_name.match(\/homepage\/g)\u0026\u0026login_check.match(\/login\/)\u0026\u0026!login_check.match(\/marketing cloud|trailhead|social studio\/)\u0026\u0026\"1\"==",["escape",["macro",146],8,16],"?\"customer\":\"prospect\"}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag - Set Visitor Category - Login Event Check - Custom HTML\")};\u003C\/script\u003E\n       "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":232
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar get_anchors=document.querySelectorAll(\"a.social\");\ntry{var socialNet,socialAct,socialTarg,eventAct,clas_Name;for(i=0;i\u003Cget_anchors.length;i++)get_anchors[i].addEventListener(\"click\",function(){clas_Name=this.querySelector(\"svg\").getAttribute(\"class\");-1\u003Cclas_Name.indexOf(\"twitter\")?(socialNet=\"twitter\",socialAct=\"tweet\",socialTarg=\"twitter.com\",eventAct=\"Twitter Tweet\"):-1\u003Cclas_Name.indexOf(\"facebook\")?(socialNet=\"facebook\",socialAct=\"share\",socialTarg=\"facebook.com\",eventAct=\"Facebook Share\"):-1\u003Cclas_Name.indexOf(\"linkedin\")\u0026\u0026(socialNet=\"linkedin\",\nsocialAct=\"share\",socialTarg=\"linkedin.com\",eventAct=\"Linkedin Share\");dataLayer.push({event:\"socialTracker\",socialNet:socialNet,socialAct:socialAct,socialTarg:socialTarg});dataLayer.push({event:\"eventTrackers\",eventCat:\"Social\",eventAct:eventAct,eventLbl:",["escape",["macro",2],8,16],",eventVal:0})})}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag - Social Engagement Tracker - Custom HTML\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":240
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar list_link=document.querySelectorAll('a[href^\\x3d\"http\"]');try{for(var i=0;i\u003Clist_link.length;i++)list_link[i].href.match(\/\\.salesforce.com\/g)||list_link[i].addEventListener(\"click\",function(a){dataLayer.push({event:\"eventTracker\",eventCat:\"Outbound Link Click\",eventAct:a.target.innerText,eventLbl:this.href.split(\"\/\/\")[1],eventVal:0,nonInteraction:0})})}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag -OutBound link click - Custom HTML\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":311
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar tel_elem=document.querySelectorAll('a[href^\\x3d\"tel\"]');try{for(var i=0;i\u003Ctel_elem.length;i++)tel_elem[i].addEventListener(\"click\",function(){dataLayer.push({event:\"eventTracker\",eventCat:\"Telephone Clicks\",eventAct:\"Click\",eventLbl:this.innerText,eventVal:0,nonInteraction:0})})}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag - Call Clicks - Custom HTML\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":312
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar download_elem=document.querySelectorAll('a[href$\\x3d\".pdf\"]'),ext;\ntry{if(0\u003Cdownload_elem.length)for(var i=0;i\u003Cdownload_elem.length;i++)download_elem[i].addEventListener(\"click\",function(){ext=this.href.split(\".\")[this.href.split(\".\").length-1];dataLayer.push({event:\"eventTracker\",eventCat:\"Document Download\",eventAct:ext,eventLbl:this.href.split(\"\/\/\")[1],eventVal:0,nonInteraction:0,vp_name:this.href.split(\"\/\")[this.href.split(\"\/\").length-1]})})}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag- Downlaod Click - Custom HTML\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":313
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" class=\"kxct\" data-id=\"",["escape",["macro",148],3],"\" data-timing=\"async\" data-version=\"3.0\"\u003Ewindow.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"===location.protocol?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/",["escape",["macro",148],7],".js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":470
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar download_image=document.querySelectorAll('.thumbnail-content.thumbnail-linked[data-href*\\x3d\".pdf\"]'),ext;\ntry{if(0\u003Cdownload_image.length)for(var i=0;i\u003Cdownload_image.length;i++)download_image[i].addEventListener(\"click\",function(){ext=this.firstElementChild.href.split(\".\")[this.firstElementChild.href.split(\".\").length-1];dataLayer.push({event:\"eventTracker\",eventCat:\"Document Download\",eventAct:ext,eventLbl:this.firstElementChild.href.split(\"\/\/\")[1],eventVal:0,nonInteraction:0,vp_name:this.firstElementChild.href.split(\"\/\")[this.firstElementChild.href.split(\"\/\").length-1]})})}catch(a){",["escape",["macro",15],8,16],"(a.message,\na.name,\"Tag- Downlaod Click - Custom HTML\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":545
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var inter_p_links=document.querySelectorAll(\".text-snow a\");if(0\u003Cinter_p_links.length)for(var i=0;inter_p_links.length;i++)inter_p_links[i].addEventListener(\"click\",function(){dataLayer.push({event:\"internal_click\",eventCat:\"Internal Link Clicks\",eventAct:this.innerText,eventLbl:this.href})})}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag - Inter link click paragraph - Custom HTML\")};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":572
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof digitalData\u0026\u0026\"object\"===typeof digitalData.util.gaPageviewComplete?digitalData.util.gaPageviewComplete.resolve():document.dispatchEvent(new CustomEvent(\"gaPageviewRequestSent\"));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":251
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar userState;\n(function(){function y(a,c,g){return userState[a]\u0026\u0026vp.getVisitNumber()\u003EuserState[a+\"VisitNumber\"]\u0026\u0026!d(\"converted\"+c,g)}function n(a,c){a*=100;if(a in Object.keys(c))return c[a];down=Math.floor(a);up=Math.ceil(a);down_diff=Math.abs(a-down);up_diff=Math.abs(a-up);full_diff=down_diff+up_diff;down_diff_ratio=down_diff\/full_diff;low=c[down];high=c[up];calibrated_score=low*(1-down_diff_ratio)+high*down_diff_ratio;a=Math.pow(10,5);return a=Math.round(calibrated_score*a)\/a}var t=\"SFDC:us:form:marketingcloud:financial-services-marketing-trends|7010M000002MxOeQAK SFDC:us:form:demo:crm-marketing-demo|70130000000tQliAAE SFDC:us:form:demo:crm-marketing-request-demo|70130000000iCzfAAE SFDC:us:form:datorama:request-a-demo|7010M000002N7kQQAS SFDC:us:form:pdf:5th-state-of-marketing|7010M000000ZP24QAG SFDC:us:form:demo:crm-marketing-demo-social-studio|70130000000m2G9AAI SFDC:us:form:marketingcloud:guided-tour|701300000021HfaAAE SFDC:us:form:demo:crm-marketing-demo-email|70130000000lzEkAAI SFDC:us:form:demo:crm-marketing-demo-audience-studio|7010M000000NnylQAC SFDC:us:form:demo:crm-marketing-demo-journey-builder|70130000000iCqxAAE SFDC:us:form:contact:marketingcloud_contactme|70130000000tCP8AAM SFDC:us:form:marketingcloud:customer-journey-map|7010M000001yGDUQA2 SFDC:us:form:demo:crm-marketing-demo-ads|70130000000iCzpAAE SFDC:us:form:marketingcloud:trends-and-tactics-driving-marketing-roi|7010M000002JRx7QAG SFDC:us:form:demo:crm-marketing-demo-mobile|70130000000iCr2AAE SFDC:us:form:demo:crm-marketing-demos|70130000000tQliAAE SFDC:us:form:pdf:state-of-the-connected-customer|7010M000000NkodQAC SFDC:us:form:demo:crm-marketing-demo-journey-builder|70130000000lzEfAAI SFDC:us:form:marketingcloud:50-email-marketer-best-practices|7010M000002JIH4QAO SFDC:us:form:datorama:how-ai-is-transforming-marketing|7010M000002N7kfQAC SFDC:us:form:marketingcloud:interaction-studio-demo|7010M000000j0IWQAY SFDC:us:form:marketingcloud:50-social-media-best-practices-ebook|7010M000000uV3bQAE SFDC:us:form:marketingcloud:digital-ads-2020-research|7010M000001ygA6QAI SFDC:us:form:marketingcloud:customer-journey-worksheet-set|7010M000000Z4piQAC SFDC:us:form:demo:salesforce-for-marketing-demo|7010M000000NkhSQAS SFDC:us:form:datorama:7-steps-to-integrated-marketing-analytics|7010M000002N7kWQAS SFDC:us:form:pdf:5th-state-of-marketing|7010M000002JHJJQA4 SFDC:us:form:marketingcloud:success-through-social-listening|70130000000mCUOAA2 SFDC:us:form:marketingcloud:forrester-wave-dmp-q2-2019|7010M000002JQkKQAW SFDC:us:form:datorama:5-ways-to-transform-agency-analytics|7010M000002N7kcQAC SFDC:us:form:pdf:5th-state-of-marketing|7010M000000ZP2EQAW SFDC:us:form:demo:account-based-marketing-demo|7010M000000u65MQAQ SFDC:us:form:marketingcloud:get-started-with-customer-journeys|7010M000000NmNAQA0 SFDC:us:form:datorama:ticketmaster-case-study|7010M000002N7kKQAS SFDC:us:form:pdf:5th-state-of-marketing|7010M000000ucSzQAI SFDC:us:form:datorama:ibm-case-study|7010M000002N7kEQAS SFDC:us:form:demo:crm-marketing-demo-predictive-intelligence|70130000000iGR7AAM SFDC:us:form:marketingcloud:customer-journey-map|7010M000002N7tPQAS SFDC:us:form:marketingcloud:8-email-strategies|70130000002DuoSAAS SFDC:us:form:marketingcloud:retail-consumer-goods-marketing-trends|7010M000002JMBoQAO SFDC:us:form:demo:crm-marketing-demo-email|7010M000000uJIyQAM SFDC:us:form:demo:crm-marketing-demo-social-studio|70130000000i5c6AAA SFDC:us:form:datorama:marketing-performance-optimization|7010M000002N7kTQAS SFDC:us:form:datorama:trivago-case-study|7010M000002N7kLQAS SFDC:us:form:datorama:neo-ogilvy-case-study|7010M000002N7kIQAS SFDC:us:form:marketingcloud:migrating-to-salesforce-email|7010M000001yH9wQAE SFDC:us:form:marketingcloud:salesforce-marketing-command-center|7010M000000NkO6QAK SFDC:us:form:marketingcloud:guided-tour|7010M000000moukQAA SFDC:us:form:marketingcloud:trailblazers-for-email|7010M000000O1RwQAK SFDC:us:form:datorama:forrester-tei-datorama|7010M000002N7kUQAS SFDC:us:form:marketingcloud:guide-to-second-party-data|7010M000000u76RQAQ SFDC:us:form:marketingcloud:mobilize-customer-journey|7010M000000NkNrQAK SFDC:us:form:datorama:dds-sweden-case-study|7010M000002N7kDQAS SFDC:us:form:marketingcloud:trends-and-tactics-driving-marketing-roi|7010M0000025ewmQAA SFDC:us:form:datorama:msix-reporting|7010M000002N7kFQAS SFDC:us:form:datorama:pernod-ricard-case-study|7010M000002N7kJQAS SFDC:us:form:marketingcloud:gartner-mq-report-2019|7010M000002N1WSQA0 SFDC:us:form:pdf:5th-state-of-marketing|7010M000002JHOTQA4 SFDC:us:form:datorama:top-7-kpis-cheat-sheet|7010M000002N7kkQAC SFDC:us:form:datorama:3-cross-channel-marketing-dashboards|7010M000002N7koQAC SFDC:us:form:marketingcloud:guide-to-account-based-marketing|7010M000000u6OGQAY SFDC:us:form:demo:small-business:marketing|7010M000000ndtyQAA SFDC:us:form:marketingcloud:50-email-marketer-best-practices|7010M000000ngg8QAA SFDC:us:form:industries:manufacturing:digitize-lifecycle-marketing-for-manufacturing|7010M000000uYAeQAM SFDC:us:form:industries:financial-services:financial-marketing-trends|7010M000002E2hFQAS SFDC:us:form:datorama:3-challenges-impacting-financial-services-marketing|7010M000000jIzOQAU SFDC:us:form:marketingcloud:trends-and-tactics-driving-marketing-roi|7010M000002E4gPQAS SFDC:us:form:datorama:3-trends-retail|7010M000002E4PiQAK SFDC:us:form:datorama:3-marketing-dashboards|7010M000002N7kaQAC SFDC:us:form:marketingcloud:sc:advertising-index-q2-2016|7010M000000mMMdQAM SFDC:us:form:marketingcloud:delivering-better-customer-experiences|7010M000002JIH9QAO SFDC:us:form:marketingcloud:social-ads-benchmark|70130000000i69NAAQ SFDC:us:form:pdf:5th-state-of-marketing|7010M000000neOwQAI SFDC:us:form:contact:connect-sales-marketing|7010M000002N0nYQAS SFDC:us:form:demo:crm-marketing-email-studio|7010M000000mSC4QAM SFDC:us:form:marketingcloud:demystifying-digital-transformation|7010M000002JRJZQA4 SFDC:us:form:marketingcloud:forrester-wave-real-time-interaction-management-q1-2019|7010M000002My5SQAS SFDC:us:form:marketingcloud:webinar-second-party-data-revolution-evolution|7010M000000Nnz0QAC SFDC:us:form:marketingcloud:50-social-media-best-practices|70130000000mCbRAAU SFDC:us:form:marketingcloud:healthcare-life-sciences-marketing-trends|7010M000002MxOjQAK SFDC:us:form:marketingcloud:50-social-media-best-practices-ebook|7010M000000uOJ4QAM SFDC:us:form:demo:interaction-studio-request-demo|7010M000001yiyxQAA SFDC:us:form:industries:government:economic-impact-for-government-of-marketing-cloud|7010M000002QPCEQA4 SFDC:us:form:marketingcloud:best-practices-email-marketing|7010M000001yiJWQAY SFDC:us:form:sem:drip-marketing|7010M0000025d8fQAA SFDC:us:form:marketingcloud:request-for-proposal|7010M000000Nlq6QAC SFDC:us:form:marketingcloud:salesforce-for-marketers|70130000000m3doAAA SFDC:us:form:marketingcloud:retail-consumer-goods-marketing-trends:|7010M000002JMBoQAO SFDC:us:form:marketingcloud:contact-us|7010M000001yDgTQAU SFDC:us:form:marketingcloud:trends-and-tactics-driving-marketing-roi|7010M000001yvApQAI SFDC:us:form:marketingcloud:mc-state-of-marketing-leadership|70130000000i6lpAAA SFDC:us:form:pdf:state-of-the-connected-customer|7010M000000NlIYQA0 SFDC:us:form:demo:small-business:marketing|7010M000000moGZQAY SFDC:us:form:datorama:how-ai-is-transforming-marketing|7010M000002N7khQAC SFDC:us:form:contact:marketingcloud_contactme|70130000000i9fSAAQ SFDC:us:form:marketingcloud:digital-assessment-tool|7010M000001ygM2QAI SFDC:us:form:marketingcloud:customer-journey-map|7010M000000j4W8QAI SFDC:us:form:marketingcloud:top-4-innovation-trends-communications-media-marketers|7010M000001ywYIQAY SFDC:us:form:contact:marketingcloud_contactme|70130000000i9fcAAA SFDC:us:form:marketingcloud:4-email-practices-of-marketing-masters|7010M000000Z1olQAC SFDC:us:form:marketingcloud:customer-journey-map|7010M000001yGDUQA2 SFDC:us:form:marketingcloud:digital-ads-2020-research|7010M000001ygA6QAI\".split(\" \"),p=\n\"SFDC:us:form:platform:enterprise-technology-trends|7010M000001yxgPQAQ SFDC:us:form:demo:platform-overview|70130000002Dpb8AAC SFDC:us:form:signup:freetrial-platform|7010M000000nQr6QAE SFDC:us:form:platform:guided-tour|7010M000000inpdQAA SFDC:us:form:signup:freetrial-platform-mobi|70130000000tLQFAA2 SFDC:us:form:demo:platform-heroku|7010M000002J5tyQAC SFDC:us:form:platform:build-apps-in-30-minutes-or-less|7010M000002Jh22QAC SFDC:us:form:platform:journey-to-lightning-experience-video-playlist|7010M000002MzhZQAS SFDC:us:form:app-cloud:create-mobile-app-mysalesforce|7010M000000ioKwQAI SFDC:us:form:demo:app-cloud-connect-demo|70130000002DvXYAA0 SFDC:us:form:platform:gartner-voice-of-customer|7010M000002JIrbQAG SFDC:us:form:platform:gartner-lcap-report|7010M000002JVEAQA4 SFDC:us:form:app-cloud:trailblazer-guide-to-apps|7010M000000mW7cQAE SFDC:us:form:pdf:platform-lightning-connect-solution-guide|70130000000NEQeAAO SFDC:us:form:demo:platform-lightning-app-builder|70130000000lxJiAAI SFDC:us:form:contact:platform-contact|70130000000tLOEAA2 SFDC:us:form:platform:build-employee-communities-increase-engagement|7010M000000ipuiQAA SFDC:us:form:app-cloud:mysalesforce-datasheet|7010M000000nH30QAE SFDC:us:form:platform:inside-stories-concierge|7010M000000ip51QAA SFDC:us:form:demo:platform-lightning-demo|7010M000000mMyUQAU SFDC:us:form:demo:meet-the-platform-demo|70130000000lxJdAAI SFDC:us:form:platform:mysalesforce-interactive|7010M000000nH35QAE SFDC:us:form:pdf:2017-state-of-it|7010M000000NoUtQAK SFDC:us:form:pdf:salesforce-shield|7010M000000nH5zQAE SFDC:us:form:platform:integration-white-paper|7010M000000nK1kQAE SFDC:us:form:demo:platform-heroku:|7010M000002J5tyQAC SFDC:us:form:demo:platform-sf1-demo|70130000000lllBAAQ SFDC:us:form:platform:idc-roi-study-2018|7010M000002MnZLQA0 SFDC:us:form:demo:platform-identity-customer|70130000000NIT5AAO SFDC:us:form:pdf:platform-encryption-architecture|70130000000NOInAAO SFDC:us:form:platform:exclusive-app-building-kit|7010M000000O2KoQAK SFDC:us:form:platform:lex-readiness-check-overview|7010M000002MzhtQAC SFDC:us:form:demo:app-cloud-shield-demo|701300000025YBVAA2 SFDC:us:form:platform:inside-stories-full-story|7010M000000io3zQAA SFDC:us:form:platform:heroku-connect|7010M000002J1VmQAK SFDC:us:form:demo:salesforce-for-it-demo|7010M000000mXOyQAM SFDC:us:form:platform:cio-playbook|7010M000002JjZYQA0 SFDC:us:form:app-cloud:gdpr-white-paper|7010M000000nH93QAE SFDC:us:form:platform:governing-low-code-white-paper|7010M000000NpsCQAS SFDC:us:form:pdf:platform-industry-hr|70130000000lbJAAAY SFDC:us:form:platform:digital-experiences|7010M000002J0hwQAC SFDC:us:form:platform:frost-sullivan-guide-digital-workplace-technology|7010M000002JjZOQA0 SFDC:us:form:platform:roi-calc|7010M000000mk9YQAQ SFDC:us:form:demo:platform-lightning-demo-sem|7010M000000ui8iQAA SFDC:us:form:platform:it-guide-to-lightning-platform|7010M000000ndu8QAA SFDC:us:form:pdf:2017-state-of-it|7010M000001yPIfQAM SFDC:us:form:pdf:app-cloud-sap-white-paper|701300000025XtbAAE SFDC:us:form:platform:cio-playbook|7010M000002Jh8yQAC SFDC:us:form:platform:mobile-guide|7010M000002Mw2JQAS SFDC:us:form:platform:it-guide-to-heroku|7010M000002JLOIQA4 SFDC:us:form:platform:build-real-time-event-driven-integrations|7010M000002JVLVQA4 SFDC:us:form:platform:closing-the-customer-experience-gap|7010M000000Nus8QAC SFDC:us:form:platform:salesforce-dx-datasheet|7010M000000nGrsQAE SFDC:us:form:platform:introducing-lightning-adoption-workshopinabox|7010M000001ytl7QAA SFDC:us:form:platform:gdpr-whitepaper|7010M000002IxQSQA0 SFDC:us:form:platform:governing-low-code-white-paper|7010M000001ywuQQAQ SFDC:us:form:pdf:platform-event-monitoring|70130000000NDYSAA4 SFDC:us:form:platform:10-simple-steps-and-3-easy-tips-for-lex|7010M000002MzhoQAC SFDC:us:form:app-cloud:trailblazer-guide-to-hls-breakout|7010M000000mc9WQAQ SFDC:us:form:pdf:platform-field-audit|70130000000NFnoAAG SFDC:us:form:platform:kupperingercole-report|7010M000000mkKUQAY SFDC:us:form:platform:lightning-strikes-enhancing-user-experience-2|7010M000002JUJbQAO SFDC:us:form:platform:inside-stories-v2mom|7010M000000nH2lQAE SFDC:us:form:platform:gartner-lcap-report|7010M000002E4b5QAC SFDC:us:form:app-cloud:trailblazer-guide-to-hls-breakout|7010M000000maW3QAI SFDC:us:form:platform:lightning-strikes-playlist|7010M000002JUJRQA4 SFDC:us:form:platform:it-guide-to-low-code-application-development-on-the-lightning-platform|7010M000002JLNyQAO SFDC:us:form:platform:unleash-productivity-with-lightning-flow|7010M000002JWTVQA4 SFDC:us:form:platform:digitize-manual-processes-demo|7010M000002JTyuQAG SFDC:us:form:platform:hbr-service-platform|7010M000001ycFuQAI SFDC:us:form:platform:state-of-low-code-report|7010M000000NqTfQAK SFDC:us:form:platform:introducing-lightning-platform-workshopinabox|7010M000002J3UoQAK SFDC:us:form:platform:offload-heavy-compute|7010M000002E1wVQAS SFDC:us:form:pdf:2017-state-of-it|7010M000000NoZPQA0 SFDC:us:form:platform:cio-playbook|7010M000002JjqjQAC SFDC:us:form:platform:inside-stories-volunteerforce|7010M000000iqsvQAA SFDC:us:form:platform:best-practices-sox|7010M000002N3NkQAK SFDC:us:form:platform:streamline-engagement-with-salesforce-identity|7010M000002JVL1QAO SFDC:us:form:demo:platform-lightning-demo-sem|7010M000002QQh2QAG SFDC:us:form:platform:building-modern-web-apps|7010M000002E1wfQAC SFDC:us:form:platform:frost-sullivan-guide-digital-workplace-technology|7010M000002JThcQAG SFDC:us:form:platform:lightning-strikes-enhancing-user-experience-1|7010M000002JUJWQA4 SFDC:us:form:platform:frost-sullivan-guide-digital-workplace-technology|7010M000002JjqZQAS SFDC:us:form:platform:lex-infographic|7010M000002MzhjQAC SFDC:us:form:platform:inside-stories-ebc|7010M000000nH2vQAE SFDC:us:form:platform:citizen-apps-development|7010M000002JPz0QAG SFDC:us:form:platform:forrester-wave-salesforce-leader|7010M000002N0uoQAC SFDC:us:form:platform:combining-mobile-web-salesforce-and-back-office-data|7010M000002E1wkQAC SFDC:us:form:platform:salesforce-environments-datasheet|7010M000000nGrxQAE SFDC:us:form:platform:lightning-strikes-oil-features|7010M000002JUJgQAO SFDC:us:form:platform:scalable-web-apps|7010M000002E1waQAC SFDC:us:form:app-cloud:identity-datasheet|7010M000000NsshQAC SFDC:us:form:pdf:enterprise-mobile-apps|70130000000lf43AAA SFDC:us:form:platform:lightningappcookbook|7010M000000O22TQAS SFDC:us:form:app-cloud:lightning-ebook|7010M000000memxQAA SFDC:us:form:platform:data-integration|7010M000002E1wpQAC SFDC:us:form:platform:exclusive-apps-development-kit|7010M000002Mn95QAC SFDC:us:form:platform:forrester--tei-report|7010M000000nMsVQAU SFDC:us:form:platform:it-visionaries-podcast|7010M0000021NJQQA2\".split(\" \"),\nh=\"SFDC:us:form:signup:freetrial-service-elf-v2|7010M000000jBOQQA2 SFDC:us:form:demo:crm-service-demos|70130000000DhfHAAS SFDC:us:form:signup:freetrial-service-essentials|7010M000000j021QAA SFDC:us:form:demo:crm-service-demo-communities|701300000021FpnAAE SFDC:us:form:signup:freetrial-service|7010M000001yUB5QAM SFDC:us:form:signup:freetrial-service-essentials-mobi|7010M000002Md2iQAC SFDC:us:form:demo:crm-service-demo-field-service-lightning|701300000025ZMKAA2 SFDC:us:form:service-cloud:3rd-state-of-service|7010M0000025co1QAA SFDC:us:form:demo:customer-service-demo|7010M000002JMYuQAO SFDC:us:form:service-cloud:how-salesforce-uses-self-service|7010M000000OC5OQAW SFDC:us:form:signup:freetrial-service-mobi|70130000000t3fuAAA SFDC:us:form:service-cloud:livemessage-demo|7010M000001yH2RQAU SFDC:us:form:signup:freetrial-service-ee|7010M000001yUBAQA2 SFDC:us:form:service-cloud:digital-customer-service-playbook|7010M000002N7yyQAC SFDC:us:form:service-cloud:unify-sales-and-service|7010M000002JgYlQAK SFDC:us:form:signup:freetrial-service-elf-v2|7010M000002E1RvQAK SFDC:us:form:service-cloud:astros-wonderland-vip|7010M000002JhnhQAC SFDC:us:form:service-cloud:demo:essentials|7010M000002MdxZQAS SFDC:us:form:demo:crm-service-demo-live-agent|701300000021FpEAAU SFDC:us:form:signup:freetrial-service-elf-v2|7010M000000jAcgQAE SFDC:us:form:demo:salesforce-for-service-demo|7010M000001y88fQAA SFDC:us:form:signup:freetrial-service-essentials|7010M000002QR3XQAW SFDC:us:form:service-cloud:connected-field-service|70130000002DyUIAA0 SFDC:us:form:demo:service-cloud-einstein-demo|7010M000000uQvfQAE SFDC:us:form:service-cloud:2019-gartner-magic-quadrant-crm-customer-engagement-center|7010M000000uiOMQAY SFDC:us:form:service-cloud:service-cloud-business-value-calculator|7010M000001yRRIQA2 SFDC:us:form:pdf:2017-state-of-service|7010M000000NltyQAC SFDC:us:form:service-cloud:10-steps-empowered-agents|7010M000000mWylQAE SFDC:us:form:service-cloud:contact-me|701300000025XX9AAM SFDC:us:form:service-cloud:3rd-state-of-service|7010M000000jBM5QAM SFDC:us:form:service-cloud:2018-gartner-magic-quadrant-crm-customer-engagement-center|7010M000002Mhs8QAC SFDC:us:form:signup:freetrial-service-elf-v2b|7010M000002N7w6QAC SFDC:us:form:service-cloud:lightning-service-console|7010M000000OC54QAG SFDC:us:form:demo:small-business:service|7010M000000ndu3QAA SFDC:us:form:service-cloud:livemessage-ebook|7010M000001yH2MQAU SFDC:us:form:quip:quip-for-service-contact-us|7010M000002MzznQAC SFDC:us:form:cloud-services:lightning-value-assessment|7010M000002MjFWQA0 SFDC:us:form:service-cloud:gartner-magic-quadrant-2019|7010M000002JODSQA4 SFDC:us:form:service-cloud:trailblazer-summit|7010M000002QSkVQAW SFDC:us:form:service-cloud:iot-and-future-of-field-service|7010M000000ZSO3QAO SFDC:us:form:service-cloud:knock-knock|7010M000000uMbHQAU SFDC:us:form:demo:crm-service-demo-field-service-lightning|7010M000000OAZ4QAO SFDC:us:form:demo:small-business:service|7010M000000moGZQAY SFDC:us:form:signup:freetrial-service-essentials-offer|7010M000002Md2iQAC SFDC:us:form:service-cloud:lex-service-cloud-tei|7010M000000ZUWYQA4 SFDC:us:form:demo:crm-service-demo-snap-ins|7010M000000mNcmQAE SFDC:us:form:service-cloud:nucleus-report-service-cloud-smarter-with-einstein|7010M000000uQvkQAE SFDC:us:form:service-cloud:digital-customer-service-demo|7010M000002NCNAQA4 SFDC:us:form:service-cloud:case-study-ncr-silver|7010M000001yH2WQAU SFDC:us:form:demo:customer-service-demo|7010M000000OAZTQA4 SFDC:us:form:service-cloud:state-of-connected-customer|7010M000000Nl34QAC SFDC:us:form:service-cloud:reports:smb-service-trends|7010M000000O1YnQAK SFDC:us:form:service-cloud:modern-field-service|7010M000002N6XsQAK SFDC:us:form:service-cloud:digital-engagement-campfire-nyc|7010M000002NI2wQAG SFDC:us:form:service-cloud:call-center-profit|7010M000001ycFzQAI SFDC:us:form:pdf:2017-state-of-service|7010M000000Nlu3QAC SFDC:us:form:service-cloud:mobile-workers-become-face-of-brands|7010M000002NHUOQA4 SFDC:us:form:service-cloud:transforming-customer-experience-roundtable-sf|7010M000002JgkNQAS SFDC:us:form:demo:crm-service-demo-social-customer-service|701300000021FpJAAU SFDC:us:form:sem:field-service-lightning|701300000025ZMKAA2 SFDC:us:form:signup:freetrial-service|7010M000000jB9LQAU SFDC:us:form:service-cloud:transforming-customer-experience-roundtable-nyc|7010M000002JgkSQAS SFDC:us:form:service-cloud:energy-company-and-field-service-lightning-nucleus|7010M000001yoMgQAI SFDC:us:form:service-cloud:unify-sales-and-service|7010M000002NGk0QAG SFDC:us:form:service-cloud:self-service-redefining-the-new-normal|7010M000002QTEGQA4 SFDC:us:form:service-cloud:digital-engagement-campfire-dallas|7010M000002NI2rQAG SFDC:us:form:service-cloud:forrester-wave-customer-service-solutions-midsize-teams|701300000025VZCAA2 SFDC:us:form:service-cloud:transforming-customer-experience-roundtable-chicago|7010M000002JgkIQAS SFDC:us:form:signup:freetrial-service|7010M000000u9L4QAI SFDC:us:form:demo:servicecloud-demo-agent-productivity|70130000000t9tRAAQ SFDC:us:form:service-cloud:go-for-growth|7010M000000mQeDQAU SFDC:us:form:service-cloud:2017-gartner-magic-quadrant-crm-customer-engagement-center|7010M000002MTEXQA4 SFDC:us:form:service-cloud:call-center-profit|7010M000000uBbQQAU SFDC:us:form:demo:servicecloud-demo|70130000000t9tRAAQ SFDC:us:form:service-cloud:customer-service-conversations|7010M000001yO11QAE SFDC:us:form:service-cloud:livemessage-ebook|7010M000002JNExQAO SFDC:us:form:service-cloud:einstein-bots|7010M000000ndEjQAI SFDC:us:form:demo:crm-service-cloud-demos|7010M000000ui9RQAQ SFDC:us:form:service-cloud:digital-engagement-campfire-slc|7010M000002NI2mQAG SFDC:us:form:service-cloud:implementing-intelligent-service-platform|7010M000001yPeKQAU SFDC:us:form:service-cloud:trailblazer-summit|7010M000002NCXtQAO SFDC:us:form:sem:service-cloud-lightning|70130000000iL8UAAU SFDC:us:form:pdf:2017-state-of-service|7010M000000mkCfQAI SFDC:us:form:demo:crm-service-demos-b|70130000002I8TgAAK SFDC:us:form:cloud-services:success-plans-overall-brochure|7010M000001yKfiQAE SFDC:us:form:service-cloud:future-of-customer-portals|7010M000002JNExQAO SFDC:us:form:signup:freetrial-service-elf-v2b|7010M000002N7w1QAC SFDC:us:form:demo:crm-service-demo-live-agent|7010M000000OAYfQAO SFDC:us:form:pdf:smart-agent-console-ebook|70130000000i54mAAA SFDC:us:form:sem:service-cloud-lightning|7010M000001y8zeQAA SFDC:us:form:service-cloud:executive-alignment-the-key-to-service-transformation|7010M000000uhipQAA SFDC:us:form:signup:freetrial-service-elf-v2b|7010M000002N7vwQAC SFDC:us:form:service-cloud:lex-service-cloud-tei|7010M000002JRw4QAG SFDC:us:form:pdf:executive-field-guide-to-customer-engagement|7010M000000mY0nQAE SFDC:us:form:demo:crm-service-demos|70130000000iKk3AAE SFDC:us:form:service-cloud:trailblazers-guide-to-customer-communities|7010M000000uIKfQAM SFDC:us:form:demo:1-crm-service|70130000000DhfHAAS SFDC:us:form:pdf:2017-state-of-service|70130000002DzyOAAS SFDC:us:form:service-cloud:digital-engagement-campfire-minneapolis|7010M000002NI2nQAG SFDC:us:form:signup:freetrial-service-essentials|7010M000000j021QAA SFDC:us:form:signup:wave-for-service-guided-tour|7010M000001yJxNQAU SFDC:us:form:signup:freetrial-service|7010M000001yUB5QAM\".split(\" \"),\nk=\"SFDC:us:form:signup:freetrial-elf-v2|7010M000000nfP3QAI SFDC:us:form:signup:freetrial-elf-v2|7010M000002QRIhQAO SFDC:us:form:signup:freetrial-sales-essentials|7010M000000uOgPQAU SFDC:us:form:demo:crm-sales-demos|70130000000DhfCAAS SFDC:us:form:signup:freetrial-elf-v2-hp|7010M000000nfP3QAI SFDC:us:form:demo:sales:demos|70130000000DhfCAAS SFDC:us:form:signup:freetrial-elf-v2|7010M000000nf66QAA SFDC:us:form:signup:freetrial-elf-v2|7010M000000nf61QAA SFDC:us:form:signup:testdrive|70130000000YtImAAK SFDC:us:form:signup:freetrial-sales-essentials-get25|7010M000002E2ZkQAK SFDC:us:form:signup:freetrial-salesforce-essentials|7010M000001yti3QAA SFDC:us:form:demo:sales:essentials|7010M000000uBeKQAU SFDC:us:form:signup:freetrial-sales-pe|70130000000m5ahAAA SFDC:us:form:pdf:2019-small-business-trends-report|7010M000000jM5DQAU SFDC:us:form:signup:freetrial-sales-essentials-activecampaign|7010M000002JOE1QAO SFDC:us:form:cpq:demo-cpq-billing|7010M000000OAEuQAO SFDC:us:form:signup:freetrial-sales-essentials-activecampaign|7010M000002N33WQAS SFDC:us:form:signup:freetrial_training.captcha|70130000000lun7AAA SFDC:us:form:pdf:crm-handbook|70130000000tfL2AAI SFDC:us:form:signup:freetrial-sales-ee|70130000000m5acAAA SFDC:us:form:other:subscribe-to-quotable|7010M000002MGTEQA4 SFDC:us:form:signup:freetrial_training|70130000000lun7AAA SFDC:us:form:cpq:demo-cpq|7010M000000ZPGHQA4 SFDC:us:form:pdf:sales:5-things-productive-salespeople-do|7010M000002MChoQAG SFDC:us:form:pdf:state-of-sales-3rd-edition|7010M000000O4CpQAK SFDC:us:form:sales:story-of-sales|7010M000000OAbFQAW SFDC:us:form:quip:quip-for-sales-contact-us|7010M000002MzziQAC SFDC:us:form:pdf:2019-small-business-trends-report|7010M000000jBZdQAM SFDC:us:form:signup:freetrial-sales-essentials-offer|7010M000000uNsEQAU SFDC:us:form:sales:gartner-mq-sfa-2019-report|7010M000002N7BZQA0 SFDC:us:form:signup:freetrial-salesforce-essentials|7010M000000nfP3QAI SFDC:us:form:cpq:demo-cpq-billing:|7010M000000OAEuQAO SFDC:us:form:signup:freetrial-sales-essentials-mobi|7010M000000j1dUQAQ SFDC:us:form:signup:essentials|7010M0000021NLCQA2 SFDC:us:form:signup:freetrial-elf-v2-hp|7010M000000jAPrQAM SFDC:us:form:signup:freetrial-elf-v2-hp|7010M000000jAPmQAM SFDC:us:form:signup:freetrial-sales-essentials-sdr-v2|7010M000000uQnbQAE SFDC:us:form:pdf:sales:5-things-productive-salespeople-do|70130000002DusFAAS SFDC:us:form:demo:salesforce-for-sales-demo|7010M000001x1l6QAA SFDC:us:form:pdf:skeptics-guide-to-crm|7010M000001ykhoQAA SFDC:us:form:signup:einstein-product-tour|7010M000000O1Z2QAK SFDC:us:form:pdf:crm-solution|70130000000ldY8AAI SFDC:us:form:signup:freetrial-sales-ue|70130000000m5amAAA SFDC:us:form:sales:sc-deepdive-on-mobile|7010M000000j3ePQAQ SFDC:us:form:cpq:ebook-cpq-made-simple|701300000025Y6kAAE SFDC:us:form:demo:sales-cloud-demo|70130000000ljNmAAI SFDC:us:form:demo:sales:demo-einstein|7010M000001yKZfQAM SFDC:us:form:demo:sales:demos|70130000000sDHJAA2 SFDC:us:form:sem:save25|7010M000000uiTMQAY SFDC:us:form:sales:drive-strategic-growth-ebook|7010M000002N329QAC SFDC:us:form:cpq:demo-billing|7010M000000ZPT5QAO SFDC:us:form:industries:life-sciences:intelligent-sales-ebook|7010M000002QRuMQAW SFDC:us:form:sales:sales-cloud-einstein|7010M000001yiHzQAI SFDC:us:form:signup:cpq-guided-tour|7010M0000021PFbQAM SFDC:us:form:sales:drive-strategic-growth-ebook|7010M000002N6DnQAK SFDC:us:form:sem:salesforce|70130000002DuioAAC SFDC:us:form:demo:best-crm|70130000000m5uGAAQ SFDC:us:form:signup:salesforce-for-startups|7010M000002JKnHQAW SFDC:us:form:pdf:sales:5-things-productive-salespeople-do|70130000002DusKAAS SFDC:us:form:contact:essentials|7010M0000021NLHQA2 SFDC:us:form:sales:contact-sales-cloud-einstein|7010M000001yiOuQAI SFDC:us:form:demo:sales-cloud-prm-demo|7010M000001yPqgQAE SFDC:us:form:sem:salesforce|70130000000iDWXAA2 SFDC:us:form:sem:salesforce-crm|70130000000FyuWAAS SFDC:us:form:sales:gartner-mq-sfa-2019-report|7010M000002N7U2QAK SFDC:us:form:pdf:state-of-sales-3rd-edition|7010M000001yovqQAA SFDC:us:form:sales:gartner-mq-sfa-2019-report|7010M000002N7TdQAK SFDC:us:form:sales:forrester-wave-crm-suites-2018|7010M000000uaqSQAQ SFDC:us:form:sem:sales_manage_sales_crm|70130000000FyuWAAS SFDC:us:form:demo:high-velocity-sales-demo|7010M000002NG9XQAW SFDC:us:form:sem:sales_salesforce|70130000000FyuWAAS SFDC:us:form:cloud-services:forrester-lightning-tei|7010M000000nWmsQAE SFDC:us:form:signup:friends-and-family-essentials|7010M000002JKnCQAW SFDC:us:form:pdf:sales:5-things-productive-salespeople-do-v2|7010M000002MChoQAG SFDC:us:form:sales:boost-sales-productivity|7010M0000021OZpQAM SFDC:us:form:demo:high-velocity-sales-demo|7010M000000ZPbkQAG SFDC:us:form:demo:sales:demos|70130000000t0o4AAA SFDC:us:form:demo:sales-cloud-prm-demo|7010M000001yUknQAE SFDC:us:form:signup:cpq-guided-tour:|7010M0000021PFbQAM SFDC:us:form:cpq:contactme|7010M000000O3dGQAS SFDC:us:form:signup:freetrial-sales-essentials-activecampaign|7010M000002N337QAC SFDC:us:form:demo:sales:demos|70130000000li7lAAA SFDC:us:form:sales:drive-strategic-growth-ebook|7010M000000ZUKcQAO SFDC:us:form:signup:freetrial-sales-essentials-gsuite|7010M000002MYhLQAW SFDC:us:form:sales:ai-for-sales|7010M000000nelWQAQ SFDC:us:form:demo:sales:demos|70130000000m4yxAAA SFDC:us:form:signup:freetrial-sales-essentials-offer|7010M000000jAUmQAM SFDC:us:form:event:sflive:sales-cloud|70130000002Dq65AAC SFDC:us:form:other:quotable-history-of-sales|7010M000001x18SQAQ SFDC:us:form:sem:sales_real_estate|70130000000NDsXAAW SFDC:us:form:sem:save25|7010M000000uiTgQAI SFDC:us:form:pdf:sales:5-things-productive-salespeople-do|7010M000002N7tAQAS SFDC:us:form:sales:gartner-mq-for-cpq|7010M000000OAN3QAO SFDC:us:form:sales:gartner-mq-sfa-2019-report|7010M000002N7aKQAS SFDC:us:form:signup:cpq-guided-tour:|7010M000002MChAQAW\".split(\" \"),\nu=\"SFDC:us:form:demo:salesforce-lightning-demo-csg|7010M000000iohPQAQ SFDC:us:form:services-training:trailhead-noclass|70130000000NAEBAA4 SFDC:us:form:services-training:contact-salesforce-success-cloud|70130000000f3hhAAA SFDC:us:form:success-cloud:digital-transformation-survey|7010M000000uPztQAE SFDC:us:form:success-cloud:success-cloud-overview|7010M000000iwt9QAA SFDC:us:form:sem:customer-success-platform|70130000000NDt6AAG SFDC:us:form:success-cloud:caesars-marketing-excellence|7010M000002MxcfQAC SFDC:us:form:success-cloud:success-cloud-overview|7010M000000nVvyQAE SFDC:us:form:success-cloud:3-kpis-operational-excellence|7010M000002JMYfQAO SFDC:us:form:digital-transformation-strategies-for-success|7010M000000uU9rQAE SFDC:us:form:success-cloud:salesforce-architects-new|7010M000000u8RoQAI SFDC:us:form:success-cloud:digital-trends|7010M000000uNdEQAU SFDC:us:form:digital-transformation-strategies-for-success|7010M000002JjHiQAK SFDC:us:form:success-cloud:5-steps-value-ebook|7010M000000OBImQAO SFDC:us:form:inbox:demo-drive-crm-adoption|7010M000001yhzjQAA SFDC:us:form:premier-customer-story-ebook|7010M000002N303QAC SFDC:us:form:success-cloud:3-kpis-operational-excellence|7010M000000ZSIUQA4 SFDC:us:form:digital-transformation-strategies-for-success|7010M000002JVmWQAW SFDC:us:form:services-training:cloud-services-lob-ebook|7010M000001y9cqQAA SFDC:us:form:success-cloud:digital-trends|7010M000002QR7jQAG SFDC:us:form:digital-transformation-strategies-for-success|7010M000001yv8UQAQ SFDC:us:form:success-cloud:customer-experience-transformation|7010M000000ndrEQAQ SFDC:us:form:success-cloud:Premier-ROI-Workbook|7010M000002JMC8QAO SFDC:us:form:cloud-services:it-lob-e-book|7010M000001yKfdQAE SFDC:us:form:digital-transformation-strategies-for-success|7010M000000uW5cQAE SFDC:us:form:demo:salesforce-lightning-demo|7010M000000iohPQAQ SFDC:us:form:cloud-services:sales-lob-e-book|7010M000001yKf9QAE SFDC:us:form:contact:optimizer-rescue-contact-me|7010M000000iwHKQAY SFDC:us:form:success-cloud:digital-trends|7010M000002Jjm8QAC SFDC:us:form:inbox:demo-drive-crm-adoption|7010M000001yh5HQAQ SFDC:us:form:cloud-services:success-plans-premier-brochure|7010M000001yKfnQAE SFDC:us:form:success-cloud:5-steps-value-ebook|7010M0000021M8NQAU SFDC:us:form:success-cloud:salesforce-architects-new|7010M000002JRqGQAW SFDC:us:form:premier-customer-story-ebook|7010M000000nYdSQAU SFDC:us:form:contact:contactus-accelerators|70130000000NKGoAAO SFDC:us:form:success-cloud:caesars-marketing-excellence|7010M000002MyxvQAC SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000000uO2IQAU SFDC:us:form:success-cloud:caesars-marketing-excellence|0343Z333335WB6jDBT SFDC:us:form:success-cloud:digital-operating-model|7010M000000uQo5QAE SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000002E8syQAC SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000000uUB9QAM SFDC:us:form:success-cloud:edmentum-dreamforce-session|7010M000001ynYgQAI SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000000OB3NQAW SFDC:us:form:services-training:contact-cloud-services-accelerators|70130000000f4O3AAI SFDC:us:form:success-cloud:sf-fitness-plan|7010M000001yoApQAI SFDC:us:form:services-training:contact-customer-success-cloud|70130000000f3hhAAA SFDC:us:form:digital-transformation-strategies-for-success|7010M000000uUuKQAU?d SFDC:us:form:success-cloud:caesars-marketing-excellence|7010M000002JO3wQAG SFDC:us:form:services-training:marketing-cloud-announcement-contact|70130000002DvpIAAS SFDC:us:form:services-training:contact-strategic-projects|70130000000f3iuAAA SFDC:us:form:cloud-services:as-customer-stories-e-book|7010M000001yKepQAE SFDC:us:form:success-cloud:salesforce-architects-new|7010M000001yYbaQAE SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000000uUB9QAM3fd SFDC:us:form:premier-customer-story-ebook|7010M000000ZRrnQAG SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000002N70KQAS SFDC:us:form:success-cloud:success-cloud-overview|7010M000002JUnnQAG SFDC:us:form:services-training:contact-salesforce-success-cloud|7010M000002N0JJQA0 SFDC:us:form:success-cloud:digital-trends|7010M000002QRD8QAO SFDC:us:form:event:circles-of-success-working-solutions|7010M000000O32UQAS SFDC:us:form:cloud-services:forrester-lightning-tei|7010M000000nWmsQAE SFDC:us:form:services-training:impact-of-training-and-certification|7010M000000uKVGQA2 SFDC:us:form:cloud-services:lightning-value-assessment|7010M000002MjFWQA0 SFDC:us:form:cloud-services:forrester-lightning-tei|7010M000000ODMJQA4 SFDC:us:form:services-training:6-secrets-of-successful-customers|70130000002DpY9AAK SFDC:us:form:cloud-services:sf-on-sf-lightning-story|7010M000000nVvAQAU SFDC:us:form:services-training:impact-of-training-and-certification|7010M000000iZsoQAE SFDC:us:form:cloud-services:forrester-case-study-salesforce|7010M000001ywuuQAA\".split(\" \"),\nv=\"SFDC:us:form:analytics:einstein-data-discovery|7010M000000NnnOQAS SFDC:us:form:contact:analytics_contactme|70130000000m08sAAA SFDC:us:form:analytics:einstein-analytics-for-health-services|7010M000000uU0VQAU SFDC:us:form:analytics:resource-kit|70130000000m6GGAAY SFDC:us:form:analytics:event-monitoring|7010M000002IMeLQAW SFDC:us:form:analytics:insight-to-action|7010M000001yLtCQAU SFDC:us:form:analytics:soa|7010M000000OCleQAG SFDC:us:form:sem:analytics-demo-reporting|7010M000001y9gEQAQ SFDC:us:form:analytics:gartner-augmented-analytics|7010M000000ip8eQAA SFDC:us:form:analytics:technical-white-paper|70130000000mD3kAAE SFDC:us:form:analytics:operational-reports-and-wave-data-sheet|70130000002Dp8uAAC SFDC:us:form:analytics:einstein-analytics-for-manufacturing|7010M000002Mj5dQAC SFDC:us:form:analytics:gartner-critical-capabilities-report-2019|7010M000002N2WqQAK SFDC:us:form:analytics:soa|7010M000002QRMoQAO SFDC:us:form:analytics:sales-wave-analytics-guide|701300000021KZYAA2 SFDC:us:form:analytics:analytics-playground-contact-us|70130000000m5vTAAQ SFDC:us:form:analytics:sales-analytics-use-cases|7010M000001yVAqQAM SFDC:us:form:analytics:learn-einstein-analytics-smart-decisions|7010M000001ycLiQAI SFDC:us:form:analytics:einstein-analytics-for-fins|7010M000002Mj6CQAS SFDC:us:form:sales-wave-analytics:sales-wave-demo|70130000000mEn8AAE SFDC:us:form:analytics:retail-ebook|7010M000002MjjBQAS SFDC:us:form:analytics:hospitality|7010M000002JOaHQAW SFDC:us:form:analytics:usbank-case-study|7010M000000irdqQAA SFDC:us:form:analytics:service-wave-overview|70130000002DpAvAAK SFDC:us:form:analytics:wave-apps-product-guide|7010M000001y9kuQAA SFDC:us:form:analytics:how-salesforce-and-google-simplify-big-data|70130000000YsRTAA0 SFDC:us:form:analytics:beyondcore-webinar|7010M000001yBkSQAU SFDC:us:form:analytics:gartner-augmented-analytics-report|7010M000000OBfaQAG SFDC:us:form:analytics:ai-ethics-issues-for-business|7010M000002JO29QAG SFDC:us:form:analytics:5-questions-answered-by-einsteinanalytics-for-service|70130000000mGaBAAU SFDC:us:form:analytics:einstein-analytics-for-hls|7010M000002N2mLQAS SFDC:us:form:analytics:service-einsteinanalytics-demo|7010M000000mPQ7QAM SFDC:us:form:signup:wave-for-sales-guided-tour|7010M000001yJxDQAU SFDC:us:form:industries:government:analytics-for-government|7010M000000ZSimQAG SFDC:us:form:analytics:analytics-for-sales-reps-webinar|701300000021LTRAA2 SFDC:us:form:analytics:einstein-analytics-industry-look-book|7010M000002NI2XQAW SFDC:us:form:industries:government:einstein-analytics|7010M000002JGEnQAO SFDC:us:form:analytics:state-of-analytics|70130000002Dp8zAAC SFDC:us:form:analytics:einstein-analytics-for-fins|7010M000002N2pyQAC SFDC:us:form:sem:analytics-demo|70130000000m0umAAA SFDC:us:form:demo:webinar-hmh-managing-pipeline|70130000000lzHFAAY SFDC:us:form:analytics:smarter-marketing-b2b-analytics|7010M000002IXHGQA4 SFDC:us:form:analytics:win-with-einsteinanalytics-stories|70130000002Dp8fAAC SFDC:us:form:analytics:hospitality|7010M000002N2q8QAC SFDC:us:form:analytics:einstein-analytics-for-health-services|7010M000002Mj6HQAS SFDC:us:form:analytics:einstein-analytics-use-cases|7010M000001yAU9QAM SFDC:us:form:analytics:sales-einsteinanalytics-demo|7010M000001yLtWQAU SFDC:us:form:analytics:nucleus-technology-matrix-report|7010M000000OBnyQAG SFDC:us:form:analytics:the-future-of-analytics-webinar|7010M000001yLW4QAM SFDC:us:form:analytics:5-ways-mobile-analytics-transform-business|70130000000mCwKAAU SFDC:us:form:analytics:einstein-analytics-for-manufacturing|7010M000002N2q3QAC SFDC:us:form:analytics:gartner-augmented-analytics-report|7010M000002QRMjQAO SFDC:us:form:analytics:gartner-critical-capabilities-report-2019|7010M000000ZTCXQA4 SFDC:us:form:analytics:einstein-analytics-roi-calculator|7010M000001yJ7KQAU SFDC:us:form:analytics:sales-einsteinanalytics-demo|7010M000002Ihw6QAC SFDC:us:form:analytics:nyc-breakfast-registration|7010M000002N2mkQAC SFDC:us:form:analytics:predictive-pipeline-webinar|70130000002DwktAAC SFDC:us:form:analytics:trailblazer_stories|7010M000000OCszQAG SFDC:us:form:analytics:playground|7010M000000OCqPQAW SFDC:us:form:analytics:service-analytics-use-cases|7010M000001yLBVQA2 SFDC:us:form:analytics:how-salesforce-and-google-simplify-big-data-webinar|701300000021F3CAAU SFDC:us:form:sales-wave-analytics:demo-sales-analytics-at-salesforce-for-leaders|7010M000001yhEyQAI SFDC:us:form:analytics:nucleus-zenconnect-case-study|7010M000002N2wzQAC SFDC:us:form:analytics:fastrack-pharma-with-wave-analytics-webinar|701300000021FK3AAM SFDC:us:form:signup:wave-for-sales-guided-tour|7010M000001yVB0QAM SFDC:us:form:analytics:beyond-excel-webinar|70130000002I7iGAAS SFDC:us:form:analytics:sales-einsteinanalytics-demo|7010M000001yg2QQAQ SFDC:us:form:analytics:einstein-analytics-for-fins|7010M000000jGkRQAU SFDC:us:form:pdf:forrester-wave-report-sales|70130000000iGBwAAM SFDC:us:form:analytics:trailblazer_stories|7010M000002MvzFQAS SFDC:us:form:quip:quip-demo-video|7010M000001yQnnQAE SFDC:us:form:industries:government:government-lightning-apps|7010M000002JVUDQA4 SFDC:us:form:industries:wave-analytics-apps-for-every-industries|7010M000001y9kpQAA SFDC:us:form:industries:guide-to-financial-services-cloud|7010M000001yZXoQAM SFDC:us:form:analytics:hospitality|7010M000000OBCAQA4\".split(\" \"),\nl=\"SFDC:us:form:contact:contactme|701300000002kQoAAI SFDC:us:form:contact:contactme|7010M0000025iJgQAI SFDC:us:form:demo:small-business:hats|70130000000m5uGAAQ SFDC:us:form:industries:financial-services:demo:demo-finserv-cloud-overview|7010M000002IvhjQAC SFDC:us:form:industries:connected-patient-journey|7010M000000mn02QAA SFDC:us:form:smb:getting-started-with-crm-trail-guide-1|7010M000001yVQwQAM SFDC:us:form:pdf:state-of-the-connected-customer-2nd-edition|7010M000000O4fxQAC SFDC:us:form:datorama:datorama-overview-demo|7010M000002N7kMQAS SFDC:us:form:contact:contactme-heroku-connect|70130000000lj3qAAA SFDC:us:form:app-cloud:mobile-overview-demo|7010M000000mN0zQAE SFDC:us:form:contact:contactme_training|70130000000NKGoAAO SFDC:us:form:contact:contactme-success-services|70130000000NI7KAAW SFDC:us:form:contact:contactme|701300000002kQoAAI\".split(\" \"),\nq=[\"SFDC:us:form:signup:freetrial-sales-mobi-v2|70130000000EqoKAAS\",\"SFDC:us:form:signup:freetrial-sales|70130000000EqoKAAS\",\"SFDC:us:form:signup:freetrial-sales-mobi-v2|70130000000EqoKAAS\"],f=[],z=[],e={0:2.6578535335086527E-4,1:1.7378806580268003E-4,2:2.508030032014751E-4,3:3.563375892265137E-4,4:.001136466615169984,5:.0014169198813517836,6:.002462197606374524,7:.009066899033100977,8:.012236001998710286,9:.006663439996132931,10:.002347899318598889,11:.0051709756620632544,12:.012739609560025325,\n13:.007421905848358635,14:.007642855094262826,15:.009846901657195836,16:.009595541648438484,17:.011472978016715204,18:.00475550359458343,19:.008782464550275806,20:.018003915001372613,21:.01605596554666424,22:.025461206920716982,23:.02151435441636658,24:.010513376833346829,25:.025725999054285766,26:.01704357010830989,27:.013784635893452938,28:.016881964063874186,30:.026946028903197628,31:.02200941920681739,32:.005340951894280526,33:.010844919449905623,34:.024546272790581244,35:.01622023504569337,36:.025054207808745965,\n37:.04700465423577653,38:.04699914368104813,39:.03239330099688024,40:.03532426818748952,41:.037054963901975914,42:.03674876817148122,43:.04266387446395734,44:.03881095056985969,45:.03569609944435525,46:.04464189442728744,47:.05113463289212071,48:.047210094779445315,49:.0433567445802277,50:.035949954645796194,51:.03243298193311585,52:.03748923409363463,53:.03727414380008703,54:.03276523377484864,55:.046915032699991324,56:.02813361359620839,57:.03727435833955311,59:.03922590569650516,60:.0486119478290528,\n61:.06314702436497553,62:.060430860747807284,63:.05255251774590639,64:.03441342634354182,65:.0329568476503055,66:.04449442749323778,67:.06715991321859031,68:.0774706966395935,69:.045043625300602526,70:.044568439225708294,71:.06486920760268845,72:.051191994786537534,73:.056162207310062585,74:.09041966723876994,75:.07501530060951293,76:.08290413332673394,77:.09177432703200307,78:.06914035750748836,79:.07647623437163631,80:.11364663962902727,81:.12211048981414722,82:.1382242104831266,83:.1359238848731907,\n84:.11970565934330582,85:.1052796752149722,86:.10634074577517891,87:.15078976091464624,88:.16388571211355138,89:.1339135691662058,90:.141361376354955,91:.15742006067517225,92:.1613081664494757,93:.1415030218532321,94:.15405777231145695,95:.1960392846388433,96:.17753605806018877,97:.18415450283505289,98:.1424039236371296,99:.1916871091986882,100:.7042799971809905,29:.021913996483535907,58:.03825013201802913},A={0:1.025245949906326E-4,1:2.179819219932512E-4,2:8.807110453512648E-4,3:.0016732116453131163,\n4:.0019186859592026065,5:.01594328918214289,6:.02453136160024658,7:.0026636980306376508,8:.004795478179652836,9:.011843961368925354,10:.013254107272818855,11:.006467865031958787,12:.009805647083573241,13:.03826657074914956,14:.03197538752246626,15:.021118223316487716,16:.01662369241457224,17:.021365857793965527,18:.03168998431664911,19:.017476227187851526,20:.014987954932878314,21:.05241020703795936,22:.038742770621089925,23:.037975050283648414,24:.07732716539153671,25:.015767453980249663,26:.04712187336360245,\n27:.06340215073496247,28:.06327316072408531,30:.06807588140873976,31:.02745288193432815,32:.04328648603514917,33:.07822190363119856,34:.041367916165486046,35:.052517441733515455,36:.07861500141577184,37:.062260789776273265,38:.027814222771475827,39:.07600658059731623,40:.1015532696941235,41:.07323021374045499,42:.07217439010035409,43:.10208171621740292,44:.07727326051343571,45:.06322454596208445,46:.1002910530487522,47:.04824560203460889,48:.017943477873487698,49:.06324687867277096,50:.09268172692255952,\n51:.08960883608546527,52:.09139097996183129,53:.06691482142151953,54:.11054718463531661,55:.10457877564479845,56:.09493366342072078,57:.07057037521977849,59:.12727280682329437,60:.12084535469105787,61:.10775367963411432,62:.12957537143566633,63:.11782979837314131,64:.12595978388943418,65:.1446441525412711,66:.22286856234578437,67:.157589376837216,68:.1361585956249056,69:.20628286618037042,70:.1593912806036768,71:.13059528965535777,72:.1435131014273764,73:.2264677649926361,74:.16981449463570802,75:.17236331469128152,\n76:.3467539808340112,77:.20480367384059497,78:.3704962682826078,79:.3809306546310802,80:.27537317902452957,81:.34074395854758255,82:.2613084105963979,83:.27959858475026633,84:.27884791609603726,85:.37004899717047807,86:.21791769910473371,87:.41217342366841137,88:.2818716488896672,89:.45524518766629835,90:.38873909263723844,91:.28918000004733346,92:.34780872037146343,93:.46724391252465525,94:.3706959324997309,95:.3842258717009806,96:.3850750685472838,97:.386341198710461,98:.3730878589668975,99:.375180102516984,\n100:.7618894677834955,29:.06567452106641253,58:.09892159102153643},B={0:7.157832260796839E-5,1:2.1517866130990167E-4,2:7.35220649838495E-4,3:5.469025980042304E-4,4:3.82056858602138E-4,5:5.086875657046825E-4,6:7.354835999400231E-4,7:8.801354014724846E-4,8:9.936308883125979E-4,9:.0013951692552718316,10:.0036643633958164208,11:.010691517565307866,12:.01752697176254075,13:.008369971040753755,14:.001995932587479035,15:.0013461780230030961,16:.002178352812622885,17:.003558151015890598,18:.005370928554663334,\n19:.008431276057664468,20:.009541825533493394,21:.006139909601391566,22:.005747825821288277,23:.008964394986670513,24:.00967920623113735,25:.0077516779956841204,26:.006978414579393934,27:.007402016062087192,28:.016104286867857382,30:.10046594741023167,31:.25587675125684956,32:.12541655245338285,33:.03085613478983219,34:.022933856178552765,35:.06076941228982294,36:.1108770011103982,37:.07352438255126904,38:.03379433184666452,39:.02371357775628181,40:.030561078545087897,41:.04426676415439789,42:.047633025868232565,\n43:.04410887346159174,44:.03914861681387684,45:.02399590642296783,46:.015703541542158663,47:.014307924574058554,48:.01761511109635654,49:.02657477916675334,50:.033989251441554874,51:.027396326945073133,52:.02275072234064054,53:.02383618551786487,54:.028834875883961494,55:.03559650583822052,56:.05838384421138948,57:.10983447226496298,59:.14819050057872096,60:.09261066662139542,61:.044136454031472955,62:.03813262188344254,63:.06258697474178275,64:.045489679305810944,65:.013520154144309878,66:.01526765019414378,\n67:.05767415496672,68:.12206973746754728,69:.14454827129812262,70:.16082459736908888,71:.13904674209832477,72:.06750977489830852,73:.045195350577390804,74:.06592884683292159,75:.108407827999597,76:.10020665973537539,77:.05910000832072666,78:.06829598407030499,79:.10515075027707944,80:.08657315089836919,81:.08023909043749354,82:.13010481417288397,83:.11925248974567577,84:.05736607397746566,85:.05295880661136875,86:.07423317985748919,87:.07234583402198332,88:.07007051583814292,89:.07584790282954675,\n90:.08222366888280244,91:.09195036188092542,92:.1104031043204477,93:.1101786832369377,94:.1232223976594401,95:.15282846620524795,96:.15760108239286388,97:.1519200032160194,98:.14912890642367493,99:.1629472564533797,100:.19741813540659425,29:.05828511713904452,58:.129012486421842},C={0:8.28429091606297E-5,1:1.0617510996046561E-4,2:3.23262496305718E-4,3:5.788023725611866E-4,4:5.822952692823812E-4,5:8.504506608147951E-4,6:.0018300904353172923,7:.003604458403817609,8:.004215723480820249,9:.003310554313218459,\n10:.002349305235627242,11:.002071582863462988,12:.0022589659318211297,13:.00280142006878011,14:.003974861432357255,15:.0062200620764993365,16:.009660362990259559,17:.010184505809973802,18:.007260380298139743,19:.005396467186768801,20:.0063984218129770785,21:.01018654807928636,22:.014229245192235658,23:.013684044868083906,24:.011712252943150005,25:.012901842779322253,26:.016290334348532012,27:.018705067761257726,28:.02006719460591682,30:.0194334231530185,31:.019607893227169913,32:.01976306386670638,\n33:.02121274920719806,34:.024812215354542373,35:.027069540507469514,36:.02561260372749535,37:.02256921780870688,38:.022437306854944574,39:.029987106560303126,40:.04347144161088687,41:.04190235160203375,42:.02615279265413202,43:.019799017843898686,44:.025539843877156042,45:.034622399379196825,46:.03333219503115555,47:.02605140046412968,48:.022677629909059104,49:.022813191668434547,50:.021921389086417453,51:.02308186039009764,52:.03241589350506024,53:.044320843109972356,54:.04072217315797445,55:.02931615135848362,\n56:.029781597283914947,57:.03793277161730262,59:.03736246054680098,60:.03345657625552434,61:.03651373701185683,62:.04715813700721467,63:.051339778671802554,64:.06279417890289925,65:.09899415741303409,66:.11749210203634453,67:.06491570110797713,68:.027330993512735883,69:.021255403345588883,70:.029946665972944275,71:.049979037845978104,72:.07107213784795749,73:.06540353623780155,74:.047553228607576443,75:.04251015979442406,76:.05195258694394906,77:.06563301946579865,78:.06706854951830246,79:.05976618492252587,\n80:.05500319450846801,81:.058025634490947275,82:.07251367656449,83:.09102590756723264,84:.09815458476404824,85:.09024532748807636,86:.08187035196413395,87:.08950509836134654,88:.11867024627777034,89:.14734036236598982,90:.14643204596678244,91:.13664278391259738,92:.13855486688161905,93:.14542331339139686,94:.15277979623237073,95:.16876320054994864,96:.17460549355485142,97:.14007245013486172,98:.1131865507499923,99:.2318387393529891,100:.731955149393354,29:.01975030887946766,58:.037647616082051805},\nD={numberOfPagesVisited:{weight:.140832223,logic:function(){return vp.activityData.pv}},targetAudienceResidential:{weight:.6164957755,logic:function(){return b(\"residential\")}},lastDriverTypeSEOCatchAll:{weight:-.1634370958,logic:function(){return\"SEO\"===vp.activityData.l_dtype}},hasSeenEssentialsPage:{weight:2.289043822,logic:function(){return userState.hasSeenEssentialsPage||-1\u003CdigitalData.page.pagename.indexOf(\"essentials\")}},lastDriverTypeSFDCNetwork:{weight:-3.380763083,logic:function(){return\"SFDC Network\"===\nvp.activityData.l_dtype}},hasSeenSalesCloudPage:{weight:11.26320861,logic:function(){return m(\":sales-cloud\",\"hasSeenSalesCloudPage\")}},targetAudienceEnterpriseBusinessSoftwareTechnology:{weight:-1.46201815,logic:function(){return b(\"enterprise business:software \\x26 technology\")}},hasSeenAnyPricingPage:{weight:.6602553417,logic:function(){return userState.hasSeenAnyPricingPage||-1\u003CdigitalData.page.pagename.indexOf(\"pricing\")\u0026\u0026-1===digitalData.page.pagename.indexOf(\"blog\")}},sawSalesFreeTrialForm:{weight:.0622605064,\nlogic:function(){return userState.sawSalesFreeTrialForm||-1\u003CdigitalData.page.pagename.indexOf(\":form:signup:freetrial-sales\")}},targetAudienceEnterpriseBusinessFinancialServices:{weight:-1.103484909,logic:function(){return b(\"enterprise business:financial services\")}},firstDriverTypeSFDCNetwork:{weight:-1.670017784,logic:function(){return\"SFDC Network\"===userState.firstEverChannel}},multiCloudConvert:{weight:2.190827109,logic:function(){return d(\"multiCloud_IDs\",l)}},sawMainSalesDemoForm:{weight:3.610727165,\nlogic:function(){return userState.sawMainSalesDemoForm||-1\u003CdigitalData.page.pagename.indexOf(\":crm-sales-demos\")}},visitedSalesPageButNotConverted:{weight:-11.29357235,logic:function(){return w(\"Sales\",\"hasSeenSalesCloudPage\",k)}},firstDriverTypeSEOCatchAll:{weight:-.6004508209,logic:function(){return\"SEO\"===userState.firstEverChannel}},firstDriverTypeTypedBookmarkedOrUnspecified:{weight:-.8106525289,logic:function(){return\"Typed\/Bookmarked\"===userState.firstEverChannel||\"\"===userState.firstEverChannel}},\nfirstDriverTypeExternalWebsites:{weight:-1.732827893,logic:function(){return\"External Websites\"===userState.firstEverChannel}},lastDriverTypeSocialMedia:{weight:-.658246472,logic:function(){return\"Social Media\"===vp.activityData.l_dtype}},lastDriverTypeTypeBookMarkedOrUnspecified:{weight:-.6035798247,logic:function(){return\"Typed\/Bookmarked\"===vp.activityData.l_dtype||!vp.activityData.l_dtype}},firstDriverTypeSocialMedia:{weight:-.7835601984,logic:function(){return\"Social Media\"===userState.firstEverChannel}},\nvisitedAnySalesFeaturesPage:{weight:.7453657283,logic:function(){return userState.visitedAnySalesFeaturesPage||-1\u003CdigitalData.page.pagename.indexOf(\"products:sales-cloud:features\")}},visitedSalesOverviewPage:{weight:-.1496863932,logic:function(){return userState.visitedSalesOverviewPage||-1\u003CdigitalData.page.pagename.indexOf(\"sales-cloud\")\u0026\u0026-1\u003CdigitalData.page.pagename.indexOf(\"overview\")}},targetAudienceSMBSoftwareTechnology:{weight:-.5668532282,logic:function(){return b(\"smb:software \\x26 technology\")}},\nconvertedService:{weight:1.876511731,logic:function(){return d(\"convertedService\",h)}},convertedPlatform:{weight:2.079656576,logic:function(){return d(\"convertedPlatform\",p)}},baseline:{weight:-.7829349916,logic:function(){return 1}}},E={numberOfPagesVisited:{weight:.1442494157,logic:function(){return vp.activityData.pv}},hasSeenServiceCloudPage:{weight:12.46554956,logic:function(){return m(\":service-cloud\",\"hasSeenServiceCloudPage\")}},lastDriverTypeSFDCNetwork:{weight:-2.838120994,logic:function(){return\"SFDC Network\"===\nvp.activityData.l_dtype}},convertedSales:{weight:2.294506878,logic:function(){return d(\"convertedSales\",k)}},multiCloudConvert:{weight:2.017777131,logic:function(){return d(\"multiCloud_IDs\",l)}},firstDriverTypeTypedBookmarkedOrUnspecified:{weight:-1.331152918,logic:function(){return\"Typed\/Bookmarked\"===userState.firstEverChannel||\"\"===userState.firstEverChannel}},sawMainServiceDemoForm:{weight:3.636666103,logic:function(){return userState.sawMainServiceDemoForm||-1\u003CdigitalData.page.pagename.indexOf(\":crm-service-demos\")}},\ntargetAudienceEnterpriseBusinessSoftwareTechnology:{weight:-1.382401742,logic:function(){return b(\"enterprise business:software \\x26 technology\")}},firstDriverTypeExternalWebsites:{weight:-.8726638241,logic:function(){return\"External Websites\"===userState.firstEverChannel}},firstDriverTypeSEOCatchAll:{weight:-.5816261985,logic:function(){return\"SEO\"===userState.firstEverChannel}},convertedMarketing:{weight:1.228886175,logic:function(){return d(\"convertedMarketing\",t)}},convertedPlatform:{weight:2.816753089,\nlogic:function(){return d(\"convertedPlatform\",p)}},targetAudienceNoData:{weight:-.4098126949,logic:function(){return b(\"NO DATA\")}},sawServiceFreeTrialForm:{weight:3.53440978,logic:function(){return userState.sawServiceFreeTrialForm||-1\u003CdigitalData.page.pagename.indexOf(\":form:signup:freetrial-service\")}},convertedOther:{weight:1.326210951,logic:function(){return d(\"convertedOther\",q)}},visitedServicePageButNotConverted:{weight:-11.10855926,logic:function(){return w(\"Service\",\"hasSeenServiceCloudPage\",\nh)}},firstPageService:{weight:.4441242053,logic:function(){return userState.firstPageService||vp.isNewVisitor()\u0026\u00261===vp.activityData.pv\u0026\u0026-1\u003CdigitalData.page.pagename.indexOf(\":service-cloud:\")\u0026\u0026-1===digitalData.page.pagename.indexOf(\":form:\")}},firstDriverTypeSFDCNetwork:{weight:-1.014268353,logic:function(){return\"SFDC Network\"===userState.firstEverChannel}},firstDriverTypeSocialMedia:{weight:-.8164271834,logic:function(){return\"Social Media\"===userState.firstEverChannel}},hasSeenAnyPricingPage:{weight:.4514788845,\nlogic:function(){return userState.hasSeenAnyPricingPage||-1\u003CdigitalData.page.pagename.indexOf(\"pricing\")\u0026\u0026-1===digitalData.page.pagename.indexOf(\"blog\")}},targetAudienceSMBSoftwareTechnology:{weight:-.6607519101,logic:function(){return b(\"smb:software \\x26 technology\")}},targetAudienceEnterpriseBusinessRetailDistribution:{weight:-1.085995141,logic:function(){return b(\"enterprise business:retail \\x26 distribution\")}},visitedServiceFormPageButNotConverted:{weight:2.302810514,logic:function(){var a=\n\"Service\";return a=userState[\"visited\"+a+\"FormPageButNotConverted\"]||y(\"hasSeenServiceCloudFormPage\",a,h)}},targetAudienceMidMarketSoftwareAndTech:{weight:-.5921316661,logic:function(){return b(\"mid-market business:software \\x26 technology\")}},lastDriverTypeSEOMicrosoft:{weight:-.1102460007,logic:function(){return userState.lastCampaign?-1\u003CuserState.lastCampaign.indexOf(\"SEO|Microsoft\"):!1}},baseline:{weight:-1.052346507,logic:function(){return 1}}},F={numberOfPagesVisited:{weight:.2312568542,logic:function(){return vp.activityData.pv}},\nvisitedAnyPlatformFeaturesPage:{weight:2.487150519,logic:function(){return userState.visitedAnyPlatformFeaturesPage||-1\u003CdigitalData.page.pagename.indexOf(\":products:platform:solutions\")||-1\u003CdigitalData.page.pagename.indexOf(\":products:platform:lightning\")||-1\u003CdigitalData.page.pagename.indexOf(\":products:platform:products\")}},lastDriverTypeSFDCNetwork:{weight:-1.488140919,logic:function(){return\"SFDC Network\"===vp.activityData.l_dtype}},convertedSales:{weight:2.604521462,logic:function(){return d(\"convertedSales\",\nk)}},multiCloudConvert:{weight:1.887192524,logic:function(){return d(\"multiCloud_IDs\",l)}},convertedService:{weight:3.199927179,logic:function(){return d(\"convertedService\",h)}},sawMainPlatformDemoForm:{weight:4.75940353,logic:function(){return userState.sawMainPlatformDemoForm||-1\u003CdigitalData.page.pagename.indexOf(\"demo:platform-overview\")}},firstDriverTypeSFDCNetwork:{weight:-1.993626782,logic:function(){return\"SFDC Network\"===userState.firstEverChannel}},convertedOther:{weight:1.388422582,logic:function(){return d(\"convertedOther\",\nq)}},targetAudienceEnterpriseBusinessRetailDistribution:{weight:-1.583063004,logic:function(){return b(\"enterprise business:retail \\x26 distribution\")}},lastDriverTypeSEOMicrosoft:{weight:.6962989026,logic:function(){return userState.lastCampaign?-1\u003CuserState.lastCampaign.indexOf(\"SEO|Microsoft\"):!1}},convertedAnalytics:{weight:2.342410282,logic:function(){return d(\"convertedAnalytics\",v)}},hasSeenPlatformPricingPage:{weight:1.53809555,logic:function(){return userState.hasSeenPlatformPricingPage||\n-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:editions-pricing:app-cloud\")||-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:products:platform:pricing\")||-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:platform:pricing\")||-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:crm:editions-pricing-platform\")||-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:editions-pricing:platform\")}},targetAudienceEnterpriseBusinessServices:{weight:.6105991177,logic:function(){return b(\"enterprise business:business services\")}},\ntargetAudienceEducationK12:{weight:-.9894480299,logic:function(){return b(\"education:k12\")}},sawPlatformFreeTrialForm:{weight:2.957311612,logic:function(){return userState.sawPlatformFreeTrialForm||-1\u003CdigitalData.page.pagename.indexOf(\":form:signup:freetrial-platform\")}},firstDriverTypeSEOOther:{weight:-.5609386045,logic:function(){return\"undefined\"!==typeof userState.firstEverCampaign\u0026\u0026-1\u003CuserState.firstEverCampaign.indexOf(\"SEO|\")\u0026\u0026-1\u003C !userState.firstEverCampaign.indexOf(\"SEO|Google\")\u0026\u0026-1\u003C !userState.firstEverCampaign.indexOf(\"SEO|Microsoft\")}},\ntargetAudienceSMBFinancialServices:{weight:.0878736805,logic:function(){return b(\"smb:financial services\")}},targetAudienceMidMarketFinancialServices:{weight:.3297054867,logic:function(){return b(\"mid-market business:financial services\")}},targetAudienceWirelessHotspot:{weight:-.2098546249,logic:function(){return b(\"wireless:hotspot\")}},targetAudienceMidMarketHealthcareMedical:{weight:-1.125923798,logic:function(){return b(\"mid-market business:healthcare \\x26 medical\")}},targetAudienceSMBRetailDistribution:{weight:-.6734249049,\nlogic:function(){return b(\"smb:retail \\x26 distribution\")}},targetAudienceEnterpriseBusinessRealEstate:{weight:-.3140249901,logic:function(){return b(\"enterprise business:real estate\")}},hasSeenPlatformPage:{weight:1.997133566,logic:function(){return m(\":platform\",\"hasSeenPlatformPage\")||m(\":app-cloud\",\"hasSeenPlatformPage\")}},convertedSuccessServices:{weight:1.84903826,logic:function(){return d(\"convertedSuccessServices\",u)}},baseline:{weight:-2.075025277,logic:function(){return 1}}},G={numberOfPagesVisited:{weight:.1465770977,\nlogic:function(){return vp.activityData.pv}},hasSeenMarketingCloudPage:{weight:13.52045891,logic:function(){return m(\":marketing-cloud\",\"hasSeenMarketingCloudPage\")}},lastDriverTypeExternalWebsites:{weight:2.452969158,logic:function(){return\"External Websites\"===vp.activityData.l_dtype}},lastDriverTypeSFDCNetwork:{weight:-3.244695847,logic:function(){return\"SFDC Network\"===vp.activityData.l_dtype}},convertedSales:{weight:2.331092661,logic:function(){return d(\"convertedSales\",k)}},targetAudienceResidential:{weight:.3971134414,\nlogic:function(){return b(\"residential\")}},sawMainMarketingDemoForm:{weight:3.924997484,logic:function(){return userState.sawMainMarketingDemoForm||-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:form:demo:crm-marketing-demo\")}},convertedOther:{weight:2.804839829,logic:function(){return d(\"convertedOther\",q)}},multiCloudConvert:{weight:1.479276907,logic:function(){return d(\"multiCloud_IDs\",l)}},targetAudienceEnterpriseBusinessSoftwareTechnology:{weight:-1.340384024,logic:function(){return b(\"enterprise business:software \\x26 technology\")}},\nvisitedMarketingOverviewPage:{weight:.6499519247,logic:function(){return userState.visitedMarketingOverviewPage||-1\u003CdigitalData.page.pagename.indexOf(\"marketing-cloud\")\u0026\u0026-1\u003CdigitalData.page.pagename.indexOf(\"overview\")}},visitedMarketingPageButNotConverted:{weight:-12.33836677,logic:function(){return w(\"Marketing\",\"hasSeenMarketingCloudPage\",t)}},convertedService:{weight:1.637582172,logic:function(){return d(\"convertedService\",h)}},sawMarketingRequestDemoForm:{weight:2.386395581,logic:function(){return userState.sawMarketingRequestDemoForm||\n-1\u003CdigitalData.page.pagename.indexOf(\"SFDC:us:form:demo:crm-marketing-request-demo\")}},firstDriverTypeSEOOther:{weight:-1.320032366,logic:function(){return\"undefined\"!==typeof userState.firstEverCampaign\u0026\u0026-1\u003CuserState.firstEverCampaign.indexOf(\"SEO|\")\u0026\u0026-1\u003C !userState.firstEverCampaign.indexOf(\"SEO|Google\")\u0026\u0026-1\u003C !userState.firstEverCampaign.indexOf(\"SEO|Microsoft\")}},visitedMarketingJourneyManagementPage:{weight:1.826308231,logic:function(){return userState.visitedMarketingJourneyManagementPage||-1\u003C\ndigitalData.page.pagename.indexOf(\"marketing-cloud:journey-management\")}},targetAudienceEducationK12:{weight:-1.377177742,logic:function(){return b(\"education:k12\")}},convertedAnalytics:{weight:1.755647312,logic:function(){return d(\"convertedAnalytics\",v)}},convertedSuccessServices:{weight:2.748795657,logic:function(){return d(\"convertedSuccessServices\",u)}},targetAudienceMidMarketHealthcareMedical:{weight:-.4477536165,logic:function(){return b(\"mid-market business:healthcare \\x26 medical\")}},targetAudienceSMBRetailDistribution:{weight:-.5133493873,\nlogic:function(){return b(\"smb:retail \\x26 distribution\")}},firstDriverTypeExternalWebsites:{weight:-.7055408438,logic:function(){return\"External Websites\"===userState.firstEverChannel}},targetAudienceEnterpriseBusinessRetailDistribution:{weight:-.3583238155,logic:function(){return b(\"enterprise business:retail \\x26 distribution\")}},convertedPlatform:{weight:1.083750653,logic:function(){return d(\"convertedPlatform\",p)}},targetAudienceEnterpriseBusinessHospitalityTravel:{weight:-.6800203124,logic:function(){return b(\"enterprise business:hospitality \\x26 travel\")}},\nbaseline:{weight:-2.000301786,logic:function(){return 1}}};var x=\"undefined\"!==typeof digitalData\u0026\u0026\"undefined\"!==typeof digitalData.ptc?0===Object.keys(digitalData.ptc).length?'\"\"':digitalData.ptc:localStorage.getItem(\"ptc\")?localStorage.getItem(\"ptc\"):'\"\"';userState=\"object\"===typeof x?x:JSON.parse(x)||{};vp.isNewVisitor()\u0026\u00261===vp.activityData.pv\u0026\u0026(userState.firstEverChannel=vp.activityData.l_dtype?vp.activityData.l_dtype:\"\",userState.firstEverCampaign=digitalData.page.scampaign?digitalData.page.scampaign:\n\"\",userState.convertedAnyCloud=!1);userState.lastCampaign=digitalData.page.scampaign||Util.getCookie(\"v0\");var H=function(){var a=Page.getPrevious();Util.getParam(\"landing_page\")\u0026\u0026(a=Page.calculateName(Util.getParam(\"landing_page\")));return a+\"|\"+vp.fcid.split(\"|\")[0]},d=function(a,c){return userState.hasOwnProperty(a)\u0026\u0026userState[a]||Page.isConfirmation()\u0026\u0026void 0!==vp.fcid\u0026\u0026-1\u003Cc.indexOf(H())};f=t.concat(p,h,k,u,v,z,l,q,f);userState.convertedAnyCloud=d(\"convertedAnyCloud\",f);f=function(a,c){var g=\nc;return(a=-1\u003Ca.join(\"|\").indexOf(digitalData.page.pagename)\u0026\u0026!userState[g])?(userState[c+\"VisitNumber\"]=vp.getVisitNumber(),!0):userState.hasOwnProperty(c)\u0026\u0026userState[c]?userState.hasOwnProperty(c):!1};userState.hasSeenServiceCloudFormPage=f(h,\"hasSeenServiceCloudFormPage\");var m=function(a,c){var g=c;return(a=-1\u003CPage.getName().indexOf(a)\u0026\u0026!userState[g])?(userState[c+\"VisitNumber\"]=vp.getVisitNumber(),-1===digitalData.page.pagename.indexOf(\":form:\")):userState.hasOwnProperty(c)\u0026\u0026userState[c]?userState.hasOwnProperty(c):\n!1},w=function(a,c,g){return userState[\"visited\"+a+\"PageButNotConverted\"]||y(c,a,g)},b=function(a){\"object\"===typeof digitalData\u0026\u0026digitalData.util\u0026\u0026digitalData.util.getLocalStorage?userState.targetAudience=digitalData.util.getLocalStorage(\"db.aud\"):vp.getTargeting\u0026\u0026(userState.targetAudience=vp.getTargeting(\"db\",\"aud\"));return userState.targetAudience===a};f=function(a){var c=Object.keys(a).reduce(function(g,r){userState[r]=a[r].logic();return g+a[r].weight*userState[r]},0);return 1\/(1+Math.exp(-c))};\nuserState.uncalibrated_sales=f(D);userState.uncalibrated_service=f(E);userState.uncalibrated_platform=f(F);userState.uncalibrated_marketing=f(G);userState.sales=n(userState.uncalibrated_sales,A);userState.service=n(userState.uncalibrated_service,e);userState.platform=n(userState.uncalibrated_platform,B);userState.marketing=n(userState.uncalibrated_marketing,C);e=\"|\";s.eVar88=\"Sales:\"+userState.sales+e+\"Service:\"+userState.service+e+\"Mktg:\"+userState.marketing+e+\"Plat:\"+userState.platform;s.eVar89=\n((userState.convertedSales?\"sales,\":\"\")+(userState.convertedService?\"service,\":\"\")+(userState.convertedPlatform?\"platform,\":\"\")+(userState.convertedMarketing?\"marketing\":\"\")).replace(\/,$\/,\"\");s.eVar90=\"Sales:\"+userState.uncalibrated_sales+e+\"Service:\"+userState.uncalibrated_service+e+\"Mktg:\"+userState.uncalibrated_marketing+e+\"Plat:\"+userState.uncalibrated_platform;e=function(){return\"event88\\x3d\"+userState.sales+\",event89\\x3d\"+userState.service+\",event90\\x3d\"+userState.marketing+\",event91\\x3d\"+userState.platform+\n\",event95\\x3d\"+userState.uncalibrated_sales+\",event96\\x3d\"+userState.uncalibrated_service+\",event97\\x3d\"+userState.uncalibrated_platform+\",event98\\x3d\"+userState.uncalibrated_marketing};s.events=s.events?s.events+e():e();localStorage.setItem(\"ptc\",JSON.stringify(userState))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":454
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar eventCat;eventCat=\"custEv_internalDriverClick\"==",["escape",["macro",66],8,16],"\u0026\u0026void 0!=",["escape",["macro",59],8,16],"?\"CTA Clicks\":\"Internal Link Clicks\";var footer_click=document.querySelectorAll(\"footer a\");try{for(var i=0;i\u003Cfooter_click.length;i++)footer_click[i].addEventListener(\"click\",function(a){dataLayer.push({isFooter:!0})})}catch(a){",["escape",["macro",15],8,16],"(a.message,a.name,\"Tag - CTA Clicks - Custom HTML\")};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".+"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":",3,"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"((c\\.salesforce\\.com\\\/login\\-messages)|(login\\.salesforce\\.com))(\\\/)?(.*)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"OneTrustLoaded"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".+",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":",4,"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/form\/datorama"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(.*)(((login|console)\\.salesforce\\.com)|(\\\/login(\\-messages)?))(.*)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"custEv_autoFormComplete|OneTrustLoaded|custEv_formCompletion"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"^((|\\\/.{2})\\\/form\\\/datorama|\\\/(au|ap)\\\/form\\\/(((pdf|demo|conf)\\\/datorama)|(demo|conf)\\\/request-a-demo\\\/))",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(.*)\/form\/datorama\/(conf\/)?request-a-demo(.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_formCompletion"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_autoFormComplete"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"^(.*)(\\\/form\\\/datorama(\\\/conf)?\\\/)((datorama\\-overview\\-demo)|(3\\-cross\\-channel\\-marketing\\-dashboards)|(7\\-steps\\-to\\-integrated\\-marketing\\-analytics)|(5\\-ways\\-to\\-transform\\-agency\\-analytics)|(marketing\\-intelligence\\-report\\-growth\\-marketing))(\\\/)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"Telephone Clicks"
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"Click"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"eventTracker"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":".pdf"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_internalDriverClick"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"Document Download"
    },{
      "function":"_cn",
      "arg0":["macro",102],
      "arg1":".pdf"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"\/resources\/guides\/covid19-response-playbook\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"(^$|((^|,)8940756_604($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"Form Errors"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_formErrors"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_stepbystepFormProgress"
    },{
      "function":"_cn",
      "arg0":["macro",99],
      "arg1":"salesforce.com"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":"salesforce.com|unavailable"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"internal_link_click"
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"Form Views"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_formImpression"
    },{
      "function":"_cn",
      "arg0":["macro",102],
      "arg1":"salesforce.com"
    },{
      "function":"_css",
      "arg0":["macro",113],
      "arg1":"div#globalnavbar-header-container *"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"(^$|((^|,)8940756_464($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"custEv_(top|left|bottom)NavLinkClick"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"Social"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"eventTrackers"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"us"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"trackOptanonEvent"
    },{
      "function":"_css",
      "arg0":["macro",113],
      "arg1":"#alert-box-message \u003E a.optanon-toggle-display.banner-policy-link[tabindex=\"2\"]"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"(^$|((^|,)8940756_255($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"socialTracker"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_chatView"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"custEv_chatDrop|custEv_chatPopUp"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_chatInitialization"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_optimizely"
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"Form Completion"
    },{
      "function":"_cn",
      "arg0":["macro",88],
      "arg1":"Auto Form Completion"
    },{
      "function":"_cn",
      "arg0":["macro",122],
      "arg1":"login"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_topNavLinkClick"
    },{
      "function":"_eq",
      "arg0":["macro",114],
      "arg1":"Contact Us"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"custEv_podcast(FirstPlay|Play|Stop|PercentComplete|TakeawayClick)"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"Video Engagement"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_videoLoad"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"custEv_(autoFormComplete|formImpression|formCompletion|formErrors|formError)"
    },{
      "function":"_eq",
      "arg0":["macro",135],
      "arg1":"nav-item-link salesforce-sans-regular"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"(^$|((^|,)8940756_434($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"\/news\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_videoPlay"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_precentComplete"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_eventRegID"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\\\/form\\\/sfdo",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"(\\\/form\\\/sfdo|\\\/philanthropy\\\/corporate-social-responsibility|\\\/solutions\\\/industries\\\/(nonprofit\\\/overview|higher-ed\\\/overview))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_chatClose"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_chatEnded"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_siteSearch"
    },{
      "function":"_eq",
      "arg0":["macro",143],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"internal_click"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_feedbackSubmitted"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"custEv_newsroomSubscribe"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",114],
      "arg1":"login|marketing cloud|social studio|trailhead",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",31],
      "arg1":"homepage"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"\/blog"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",147],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"products"
    }],
  "rules":[
    [["if",0,1,2,3,4],["add",2,0,1]],
    [["if",0,1,3,5],["add",2,0,1]],
    [["if",2,4,6,7,8],["add",5]],
    [["if",5,6,7,8],["add",5]],
    [["if",1,5,6,11],["add",6]],
    [["if",1,2,4,6,11],["add",6]],
    [["if",6,7,12,13],["add",7]],
    [["if",6,7,12,14],["add",7]],
    [["if",6,7,14,15],["add",8]],
    [["if",6,7,13,15],["add",8]],
    [["if",1,6,16,17,18],["add",9],["block",15,17]],
    [["if",1,6,21],["unless",19,20],["add",10],["block",17]],
    [["if",1,6,18,22],["add",11,12],["block",15,17]],
    [["if",1,6,23,24,25,26],["add",11,12]],
    [["if",1,6,27,28],["add",13]],
    [["if",1,6,29],["add",14]],
    [["if",1,6,18],["unless",30],["add",15],["block",17]],
    [["if",1,6,33,34],["add",16]],
    [["if",1,6,25,35,37],["unless",36],["add",17]],
    [["if",1,6,39,40],["add",18]],
    [["if",1,2,4,6],["unless",3,41],["add",19]],
    [["if",1,5,6],["unless",3,41],["add",19]],
    [["if",1,6,42],["add",20]],
    [["if",1,6,25,43,44],["add",21]],
    [["if",1,6,45],["add",22]],
    [["if",1,6,46],["add",23]],
    [["if",1,6,47],["add",24]],
    [["if",1,6,48],["add",25]],
    [["if",1,6,49],["add",26]],
    [["if",1,6,13,50],["add",27]],
    [["if",1,6,14,51],["add",28]],
    [["if",1,6,38],["add",29],["block",17]],
    [["if",1,6,55],["add",30]],
    [["if",1,6,56,57],["add",31]],
    [["if",1,6,11,58],["add",32]],
    [["if",1,6,25,59,60],["add",33]],
    [["if",1,2,4,6,41],["unless",3],["add",3,0,1]],
    [["if",1,5,6,41],["unless",3],["add",3,0,1]],
    [["if",1,6,56,62],["add",34]],
    [["if",1,6,56,63],["add",35]],
    [["if",1,6,64],["add",36]],
    [["if",1,2,4,6,65],["add",37]],
    [["if",1,5,6,66],["add",37]],
    [["if",1,6,58,65],["add",38]],
    [["if",1,6,67],["add",39]],
    [["if",1,6,68],["add",40]],
    [["if",1,6,69],["add",41,47]],
    [["if",0,1,2,4],["unless",3],["add",42]],
    [["if",0,1,5],["unless",3],["add",42]],
    [["if",1,6,71],["add",43]],
    [["if",1,6,52,53],["add",44],["block",29]],
    [["if",1,6,53,54],["add",45],["block",29]],
    [["if",1,6,72],["add",46]],
    [["if",1,5,6,41,61],["unless",3],["add",4],["block",3]],
    [["if",1,2,4,6,41,61],["unless",3],["add",4],["block",3]],
    [["if",1,6,73],["add",48]],
    [["if",74],["add",49,50,51,52,53,54,55,56,57,58,59,60,61]],
    [["if",75,76,77],["add",62]],
    [["if",78,79],["add",63]],
    [["if",79],["unless",3],["add",64,65,66,68]],
    [["if",0,5,7],["unless",3],["add",67]],
    [["if",79,81],["add",69]],
    [["if",9,10],["block",5,7,8]],
    [["if",5,9],["block",5]],
    [["if",1,6,31,32],["unless",20],["block",15]],
    [["if",5,70],["block",42]],
    [["if",4,70],["block",42]],
    [["if",5,80],["block",67]]]
},
"runtime":[[50,"__cvt_8940756_551",[46,"a"],[41,"k"],[52,"b",["require","copyFromWindow"]],[52,"c",["require","injectScript"]],[52,"d",["require","getUrl"]],[52,"e",["require","createQueue"]],[41,"f"],[3,"f",["e","_uxa"]],[41,"g"],[3,"g",["b","CS_CONF"]],[41,"h"],[3,"h",["d","path"]],[41,"i"],[3,"i",["d","fragment"]],[41,"j"],[3,"j",[17,[15,"a"],"TagUrl"]],[22,[2,[15,"a"],"hasOwnProperty",[7,"cvars"]],[46,[3,"k",0],[42,[23,[15,"k"],[17,[17,[15,"a"],"cvars"],"length"]],[33,[15,"k"],[3,"k",[0,[15,"k"],1]]],false,[46,["f",[7,"setCustomVariable",[17,[16,[17,[15,"a"],"cvars"],[15,"k"]],"slot"],[17,[16,[17,[15,"a"],"cvars"],[15,"k"]],"name"],[17,[16,[17,[15,"a"],"cvars"],[15,"k"]],"value"],3]]]]]],[22,[20,[40,[15,"g"]],"undefined"],[46,["f",[7,"setPath",[0,[15,"h"],[2,[15,"i"],"replace",[7,"#","?__"]]]]],["c",[15,"j"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]],[46,["f",[7,"trackPageview",[0,[15,"h"],[2,[15,"i"],"replace",[7,"#","?__"]]]]]]]]]
,"permissions":{"__cvt_8940756_551":{"access_globals":{"keys":[{"key":"_uxa","read":true,"write":true,"execute":true},{"key":"CS_CONF","read":true,"write":true,"execute":true}]},"inject_script":{"urls":["https:\/\/a.sfdcstatic.com\/contentsquare\/426c50651b14f.js"]},"get_url":{"urlParts":"specific","path":true,"fragment":true}}}
,"sandboxed_scripts":["__cvt_8940756_551"]


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={Vf:!0},ia={};try{ia.__proto__=ha;fa=ia.Vf;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,la=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,pa=null,qa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},ra=function(a){return a};var ta=function(a,b){this.a=a;this.i=b};var ua=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},va=function(){this.s={};this.m=!1;this.F={}};va.prototype.get=function(a){return this.s["dust."+a]};va.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.s[a]=b))};va.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var wa=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new va;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ua(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!ua(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else ua(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():ua(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.oc=function(){for(var a=wa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var ya=function(a,b){if(ua(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.s[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return ua(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Aa=function(){function a(f,g){if(b[f]){if(b[f].cc+g>b[f].max)throw Error("Quota exceeded");b[f].cc+=g}}var b={},c=void 0,d=void 0,e={xh:function(f){c=f},pe:function(){c&&a(c,1)},zh:function(f){d=f},Ia:function(f){d&&a(d,f)},Uh:function(f,g){b[f]=b[f]||{cc:0};b[f].max=g},Qg:function(f){return b[f]&&b[f].cc||0},reset:function(){b={}},xg:a};e.onFnConsume=e.xh;e.consumeFn=e.pe;e.onStorageConsume=e.zh;e.consumeStorage=e.Ia;e.setMax=e.Uh;e.getConsumed=e.Qg;e.reset=e.reset;e.consume=e.xg;return e};var Ba=function(a,b){this.F=a;this.S=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new va;this.a=this.s=void 0};Ba.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.i.m)if(a.F.Ia(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ba.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ia(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ba.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ba.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Da=function(a){var b=new Ba(a.F,a);a.s&&(b.s=a.s);b.S=a.S;b.a=a.a;return b};var Ea=function(){},Fa=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ga=function(a){return"number"==typeof a&&!isNaN(a)},Ha=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ja=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||
!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Oa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Qa=function(a){return Math.round(Number(a))||0},Ra=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Sa=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ua=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Va=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},$a=function(a){for(var b=A,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},ab=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},bb=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var cb=function(a,b){va.call(this);this.a=a;this.S=b};la(cb,va);cb.prototype.toString=function(){return this.a};cb.prototype.oc=function(){return new k(wa(this))};cb.prototype.i=function(a,b){a.F.pe();return this.S.apply(eb(this,a),Array.prototype.slice.call(arguments,1))};var eb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ha(d)?fb(e,d):d};c.prototype.F=function(d){return gb(this.m,d)};c.prototype.s=function(){return b.F};return new c(a,b)};
cb.prototype.La=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var gb=function(a,b){for(var c,d=0;d<b.length&&!(c=fb(a,b[d]),c instanceof ta);d++);return c},fb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof cb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var hb=function(){va.call(this)};la(hb,va);hb.prototype.oc=function(){return new k(wa(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ib=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,jb=function(a){if(null==a)return String(a);var b=ib.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},kb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},lb=function(a){if(!a||"object"!=jb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!kb(a,"constructor")&&!kb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||kb(a,b)},E=function(a,b){var c=b||("array"==jb(a)?[]:{}),d;for(d in a)if(kb(a,d)){var e=a[d];"array"==jb(e)?("array"!=jb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):lb(e)?(lb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var nb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=wa(h),m=0;m<n.length;m++)l[n[m]]=g(h.get(n[m]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var m=h.oc(),r=0;r<m.length();r++)n[m.get(r)]=g(h.get(m.get(r)));return n}if(h instanceof hb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof cb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=mb(u[v],b);var w=b?b.F:Aa(),y=new Ba(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null;default:if(c)return c(h,b)}};return g(a)},mb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(Ha(h)||Oa(h)){var n=new k([]);d.push(h);e.push(n);for(var m in h)h.hasOwnProperty(m)&&n.set(m,
g(h[m]));return n}if(lb(h)){var r=new hb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new cb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=nb(this.a(v[w]),b);return g((0,this.m.S)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;if(void 0!==h&&c)return c(h,b)};return g(a)};var ob={control:function(a,b){return new ta(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ia(a.length+f.length);return new cb(a,function(){return function(g){var h=Da(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof ta)return l[n];for(var m=e.get("length"),r=
0;r<m;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=gb(h,f);if(t instanceof ta)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ia(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ia(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new hb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ia(g);c.set(e,f)}return c},undefined:function(){}};var pb=function(){this.m=Aa();this.a=new Ba(this.m)},qb=function(a,b,c){var d=new cb(b,c);d.m=!0;a.a.set(b,d)};pb.prototype.kc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};pb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=fb(this.a,arguments[c]);return b};pb.prototype.s=function(a,b){var c=Da(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=fb(c,arguments[e]);return d};var sb=function(a){if(a instanceof sb)return a;this.oa=a};sb.prototype.toString=function(){return String(this.oa)};var tb=function(a,b){return nb(a,b,function(c){})},ub=function(a,b){var c=void 0;return mb(a,b,c)};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},wb=function(a){if(void 0==a||Ha(a)||lb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var xb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ya(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ya(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var yb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),zb=new ta("break"),Ab=new ta("continue"),Db=function(a,b){return this.a(a)+this.a(b)},Eb=function(a,b){return this.a(a)&&this.a(b)},Fb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ia(yb,b))return ub(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof cb){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ia(xb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return xb[b].apply(a,f)}}if(a instanceof cb||a instanceof hb){if(a.has(b)){var g=a.get(b);if(g instanceof cb){var h=vb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof cb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}if(a instanceof sb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Gb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Hb=function(a){var b=Da(this.m),c=gb(b,Array.prototype.slice.apply(arguments));if(c instanceof ta)return c},Ib=function(){return zb},Jb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ta)return d}},Kb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ca(b,d,e,
!0)}}},Lb=function(){return Ab},Mb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Nb=function(a,b){return this.a(a)/this.a(b)},Ob=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof sb,d=b instanceof sb;return c||d?c&&d?a.oa==b.oa:!1:a==b},Pb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Qb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=gb(e,c);if(f instanceof ta){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof hb||b instanceof k||b instanceof cb)for(var g=b.oc(),h=g.length(),l=0;l<h;l++){var n=a(g.get(l)),m=gb(n,c);if(m instanceof ta){if("break"==m.a)break;if("return"==m.a)return m}}}
var Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){d.set(a,e);return d},b,c)},Ub=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},Vb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Qb(function(e){var f=Da(d);f.add(a,e);return f},b,c)},Wb=function(a,b,c,d){function e(m,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,m.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Da(g);for(e(g,h);fb(h,b);){var l=gb(h,d);if(l instanceof ta){if("break"===l.a)break;if("return"===l.a)return l}var n=Da(g);e(h,n);fb(n,c);h=n}},Xb=function(a){return this.m.get(this.a(a))},Yb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof hb||a instanceof k||a instanceof cb)c=a.get(b);else if("string"==
typeof a)"length"==b?c=a.length:ua(b)&&(c=a[b]);else if(a instanceof sb)return;return c},Zb=function(a,b){return this.a(a)>this.a(b)},$b=function(a,b){return this.a(a)>=this.a(b)},ac=function(a,b){a=this.a(a);b=this.a(b);a instanceof sb&&(a=a.oa);b instanceof sb&&(b=b.oa);return a===b},bc=function(a,b){return!ac.call(this,a,b)},cc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ta)return e},dc=function(a,b){return this.a(a)<this.a(b)},ec=function(a,
b){return this.a(a)<=this.a(b)},hc=function(a,b){return this.a(a)%this.a(b)},ic=function(a,b){return this.a(a)*this.a(b)},jc=function(a){return-this.a(a)},kc=function(a){return!this.a(a)},lc=function(a,b){return!Ob.call(this,a,b)},mc=function(){return null},nc=function(a,b){return this.a(a)||this.a(b)},oc=function(a,b){var c=this.a(a);this.a(b);return c},pc=function(a){return this.a(a)},qc=function(a){return Array.prototype.slice.apply(arguments)},rc=function(a){return new ta("return",this.a(a))},
sc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof cb||a instanceof k||a instanceof hb)&&a.set(b,c);return c},tc=function(a,b){return this.a(a)-this.a(b)},uc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ta){var l=f.a;if("break"==
l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof ta&&("return"==f.a||"continue"==f.a)))return f},vc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},wc=function(a){a=this.a(a);return a instanceof cb?"function":typeof a},xc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},yc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof ta)){if("break"==
e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof ta){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},zc=function(a){return~Number(this.a(a))},Ac=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Bc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Dc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Hc=function(a,
b){return Number(this.a(a))|Number(this.a(b))};var Jc=function(){this.a=new pb;Ic(this)};Jc.prototype.kc=function(a){return Kc(this.a.i(a))};
var Mc=function(a,b){return Kc(Lc.a.s(a,b))},Ic=function(a){var b=function(d,e){var f=a.a,g=String(e);ob.hasOwnProperty(d)&&qb(f,g||d,ob[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){qb(a.a,String(d),e)};c(0,Db);c(1,Eb);c(2,Fb);c(3,Gb);c(53,Hb);c(4,Ib);c(5,Jb);c(52,Kb);c(6,Lb);c(9,Jb);c(50,Mb);c(10,Nb);c(12,Ob);c(13,Pb);c(47,Rb);c(54,Ub);c(55,Vb);c(63,Wb);c(15,Xb);c(16,Yb);c(17,Yb);c(18,Zb);c(19,$b);c(20,ac);c(21,bc);c(22,cc);c(23,dc);c(24,ec);c(25,hc);
c(26,ic);c(27,jc);c(28,kc);c(29,lc);c(45,mc);c(30,nc);c(32,oc);c(33,oc);c(34,pc);c(35,pc);c(46,qc);c(36,rc);c(43,sc);c(37,tc);c(38,uc);c(39,vc);c(40,wc);c(41,xc);c(42,yc);c(58,zc);c(57,Ac);c(60,Bc);c(61,Cc);c(56,Dc);c(62,Gc);c(59,Hc)},Oc=function(){var a=Lc,b=Nc();qb(a.a,"require",b)},Pc=function(a,b){a.a.a.S=b};function Kc(a){if(a instanceof ta||a instanceof cb||a instanceof k||a instanceof hb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Qc=[],Rc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sc=function(a){return Rc[a]},Tc=/[\x00\x22\x26\x27\x3c\x3e]/g;Qc[3]=function(a){return String(a).replace(Tc,Sc)};var Xc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Yc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Zc=function(a){return Yc[a]};Qc[7]=function(a){return String(a).replace(Xc,Zc)};
Qc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xc,Zc)+"'"}};var gd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,hd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},id=function(a){return hd[a]};Qc[16]=function(a){return a};var ld;
var md=[],nd=[],od=[],pd=[],qd=[],rd={},sd,td,ud,vd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},wd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=rd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.me&&b.me(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):ld(c,e,b)},yd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=xd(a[e],b,c));return d},zd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=rd[b];return c?c.priorityOverride||0:0},xd=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(xd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=md[f];if(!g||b.qd(g))return;c[f]=!0;try{var h=yd(g,b,c);h.vtp_gtmEventId=b.id;d=wd(h,b);ud&&(d=ud.zg(d,h))}catch(y){b.Ie&&b.Ie(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[xd(a[l],b,c)]=xd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,m=1;m<a.length;m++){var r=xd(a[m],b,c);td&&(n=n||r===td.Wb);d.push(r)}return td&&n?td.Cg(d):d.join("");case "escape":d=xd(a[1],b,c);if(td&&Ha(a[1])&&"macro"===a[1][0]&&td.fh(a))return td.Eh(d);d=String(d);for(var t=2;t<a.length;t++)Qc[a[t]]&&(d=Qc[a[t]](d));return d;case "tag":var q=a[1];if(!pd[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{ve:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ad(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ad=function(a,b,c){try{return sd(yd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Bd=function(){var a=function(b){return{toString:function(){return b}}};return{nf:a("consent"),Qd:a("convert_case_to"),Rd:a("convert_false_to"),Sd:a("convert_null_to"),Td:a("convert_true_to"),Ud:a("convert_undefined_to"),fi:a("debug_mode_metadata"),sa:a("function"),vf:a("instance_name"),zf:a("live_only"),Bf:a("malware_disabled"),Cf:a("metadata"),hi:a("original_vendor_template_id"),Gf:a("once_per_event"),Wd:a("once_per_load"),$d:a("setup_tags"),ae:a("tag_id"),be:a("teardown_tags")}}();var Cd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Cd,Error);function Dd(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Dd(a[c],b[c])}};var Ed=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Ed,Error);var Fd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Hd=function(){return function(a,b){a instanceof Ed||(a=new Ed(a,Gd));b&&a.a.push(b);throw a;}};function Gd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Id=null,Ld=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Id=Jd(a);for(var e=0;e<nd.length;e++){var f=nd[e],g=Kd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],m=0;m<pd.length;m++)c[m]&&!d[m]&&(n[m]=!0);return n},Kd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Id(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Id(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Jd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ad(od[c],a));return b[c]}};var Md={zg:function(a,b){b[Bd.Qd]&&"string"===typeof a&&(a=1==b[Bd.Qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Bd.Sd)&&null===a&&(a=b[Bd.Sd]);b.hasOwnProperty(Bd.Ud)&&void 0===a&&(a=b[Bd.Ud]);b.hasOwnProperty(Bd.Td)&&!0===a&&(a=b[Bd.Td]);b.hasOwnProperty(Bd.Rd)&&!1===a&&(a=b[Bd.Rd]);return a}};var Nd=function(){this.a={}};function Od(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Cd(c,d,g);}}function Pd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Od(e,b,d,g);Od(f,b,d,g)}}}};var Td=function(a){var b=Qd.C,c=this;this.i=new Nd;this.a={};var d={},e=Pd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var h={};Na(g,function(l,n){var m=Rd(l,n);h[l]=m.assert;d[l]||(d[l]=m.K)});c.a[f]=function(l,n){var m=h[l];if(!m)throw Sd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);m.apply(void 0,r);e.apply(void 0,r)}})},Vd=function(a){return Ud.a[a]||
function(){}};function Rd(a,b){var c=vd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Sd;try{return wd(c)}catch(d){return{assert:function(e){throw new Cd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Sd(a,b,c){return new Cd(a,b,c)};var Wd=!1;var Xd={};Xd.ai=Ra('');Xd.Ig=Ra('');var Yd=Wd,Zd=Xd.Ig,$d=Xd.ai;
var pe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},qe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;pe(b,"/*")&&(b=b.slice(0,-2));pe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},re=/^[a-z0-9-]+$/i,se=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ue=function(a,b){var c;if(!(c=!te(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!re.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!se.exec(n))throw Error("Invalid Wildcard");var m=n.slice(8),r=m.slice(0,m.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=m.slice(m.indexOf("/"));h=qe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},te=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var xe=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,ye={Fn:"function",DustMap:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=xe.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var m=typeof l;l instanceof cb?m="Fn":l instanceof k?m="List":l instanceof hb?m="DustMap":
l instanceof sb&&(m="OpaqueValue");if(m!=h)throw Error("Error in "+a+". Argument "+f+" has type "+m+", which does not match required type "+(ye[h]||h)+".");}}};function ze(a){return""+a}
function Ae(a,b){var c=[];return c};var Be=function(a,b){var c=new cb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Ce=function(a,b){var c=new hb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,Be(a+"_"+d,e)):(Ga(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var De=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new hb;return d=Ce("AssertApiSubject",c)};var Ee=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new hb;return d=Ce("AssertThatSubject",c)};function Fe(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(tb(arguments[d],c));return ub(a.apply(null,b))}}var He=function(){for(var a=Math,b=Ge,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Fe(a[e].bind(a)))}return c};var Ie=function(a){var b;return b};var Je=function(a){var b;return b};var Ke=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Le=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Me=function(a){F(this.i.a,["message:?string"],arguments);};var Ne=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Oe=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.ig.apply(null,Array.prototype.slice.call(arguments,1))};var Pe=function(){Oe(this,"read_container_data");var a=new hb;a.set("containerId",'GTM-WRXS6TH');a.set("version",'117');a.set("environmentName",'');a.set("debugMode",Yd);a.set("previewMode",$d);a.set("environmentMode",Zd);a.m=!0;return a};var Qe=function(){return(new Date).getTime()};var Re=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof cb)return"function";if(a instanceof sb){a=a.oa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Se=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Yd||$d)&&a.call(this,e.message)}}}return{parse:b(function(c){return ub(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(tb(c))})}};var Te=function(a){return Qa(tb(a,this.m))};var Ue=function(a){return Number(tb(a,this.m))};var Ve=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var We=function(a,b,c){var d=null,e=!1;return e?d:null};var Ge="floor ceil round max min abs pow sqrt".split(" ");var Xe=function(){var a={};return{Rg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Vh:function(b,c){a[b]=c},reset:function(){a={}}}},Ye=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ze=function(){this.a={};this.i={}};Ze.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ze.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Fa(b)?Be(a,b):Ce(a,b)};
var af=function(a){var b=$e;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Fa(b)?Be("getUserAgent",b):Ce("getUserAgent",b)};function bf(){var a={};return a};var H={cb:"_ee",$c:"_syn",ki:"_uei",ii:"_pci",Jc:"event_callback",Ub:"event_timeout",ka:"gtag.config"};H.fa="allow_ad_personalization_signals";H.Yc="restricted_data_processing";H.jb="allow_google_signals";H.ia="cookie_expires";H.Rb="cookie_update";H.Bb="session_duration";H.na="user_properties";H.Ha="transport_url";H.O="ads_data_redaction";H.o="ad_storage";
H.M="analytics_storage";H.lf="region";H.pf="wait_for_update";H.bf=[H.fa,H.jb,H.Rb];H.cf=[H.ia,H.Ub,H.Bb];var cf={},df=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},ef=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){df("GTM",a)};var ff=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ff);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};qa(ff,Error);ff.prototype.name="CustomError";var gf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ff.call(this,d+c[e])};qa(gf,ff);gf.prototype.name="AssertionError";var hf=function(a,b){throw new gf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var jf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var kf;var lf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var mf;a:{var nf=ma.navigator;if(nf){var of=nf.userAgent;if(of){mf=of;break a}}mf=""}var pf=function(a){return-1!=mf.indexOf(a)};var rf=function(a,b,c){this.a=c===qf?a:""};rf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var sf=function(a){if(a instanceof rf&&a.constructor===rf)return a.a;var b=typeof a;hf("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},qf={},tf=new rf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,qf);var uf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},vf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=sf(tf);return!c.parentElement}),wf=function(a,b){if(a.tagName&&uf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(vf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=sf(b)};var xf=function(a){var b;if(void 0===kf){var c=null,d=ma.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:ra,createScript:ra,createScriptURL:ra})}catch(f){ma.console&&ma.console.error(f.message)}kf=c}else kf=c}var e=(b=kf)?b.createHTML(a):a;return new rf(e,null,qf)};var A=window,L=document,yf=navigator,zf=L.currentScript&&L.currentScript.src,Af=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},Bf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Cf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Bf(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var h=g.nonce||g.getAttribute("nonce");if(h&&na.test(h)){pa=h;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=L.getElementsByTagName("script")[0]||L.body||L.head;l.parentNode.insertBefore(d,l);return d},Df=function(){if(zf){var a=zf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ef=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||
L.body||L.head;d.parentNode.insertBefore(c,d);Bf(c,b);void 0!==a&&(c.src=a);return c},Ff=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Gf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Hf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},M=function(a){A.setTimeout(a,0)},If=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Jf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Kf=function(a){var b=L.createElement("div");wf(b,xf("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Lf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Mf=function(a){yf.sendBeacon&&yf.sendBeacon(a)||Ff(a)},Nf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Of={},Pf=function(a){return void 0==Of[a]?!1:Of[a]};var Qf=[];function Rf(){var a=Af("google_tag_data",{});a.ics||(a.ics={entries:{},set:Sf,update:Tf,addListener:Uf,notifyListeners:Vf,active:!1});return a.ics}
function Sf(a,b,c,d,e,f){var g=Rf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,m=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(m===e||(m===d?n!==e:!m&&!n)){var r=!!(f&&0<f&&void 0===l.update),t={region:m,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&A.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,Wf(a),Vf(),df("TAGGING",2))},f)}}}
function Tf(a,b){var c=Rf();c.active=!0;if(void 0!=b){var d=Xf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Xf(a);f.quiet?(f.quiet=!1,Wf(a)):g!==d&&Wf(a)}}function Uf(a,b){Qf.push({oe:a,Mg:b})}function Wf(a){for(var b=0;b<Qf.length;++b){var c=Qf[b];Ha(c.oe)&&-1!==c.oe.indexOf(a)&&(c.Qe=!0)}}function Vf(a){for(var b=0;b<Qf.length;++b){var c=Qf[b];if(c.Qe){c.Qe=!1;try{c.Mg({ne:a})}catch(d){}}}}
var Xf=function(a){var b=Rf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Yf=function(a){return!(Rf().entries[a]||{}).quiet},Zf=function(){return Pf("gtag_cs_api")?Rf().active:!1},$f=function(a,b){Rf().addListener(a,b)},ag=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Yf(b[e]))return!0;return!1}if(c()){var d=!1;$f(b,function(e){d||c()||(d=!0,a(e))})}else a({})},bg=function(a,b){if(!1===Xf(b)){var c=!1;$f([b],function(d){!c&&Xf(b)&&(a(d),c=!0)})}};var cg=[H.o,H.M],dg=function(a){var b=a[H.lf];b&&I(40);var c=a[H.pf];c&&I(41);for(var d=Ha(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<cg.length;f++){var g=cg[f],h=a[cg[f]],l=d[e];Rf().set(g,h,l,"US","US-CA",c)}},eg=function(a,b){for(var c=0;c<cg.length;c++){var d=cg[c],e=a[cg[c]];Rf().update(d,e)}Rf().notifyListeners(b)},fg=function(a){var b=Xf(a);return void 0!=b?b:!0},gg=function(){for(var a=[],b=0;b<cg.length;b++){var c=Xf(cg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},hg=function(a,b){ag(a,b)};var jg=function(a){return ig?L.querySelectorAll(a):null},kg=function(a,b){if(!ig)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lg=!1;if(L.querySelectorAll)try{var mg=L.querySelectorAll(":root");mg&&1==mg.length&&mg[0]==L.documentElement&&(lg=!0)}catch(a){}var ig=lg;var Qd={},R=null,Ag=Math.random();Qd.C="GTM-WRXS6TH";Qd.$b="990";Qd.gi="";var Bg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Cg={__paused:!0,__tg:!0},Dg;for(Dg in Bg)Bg.hasOwnProperty(Dg)&&(Cg[Dg]=!0);var Eg="www.googletagmanager.com/gtm.js";
var Fg=Eg,Gg=null,Hg=null,Ig="//www.googletagmanager.com/a?id="+Qd.C+"&cv=117",Jg={},Kg={},Lg=function(){var a=R.sequence||1;R.sequence=a+1;return a};
var Mg=function(){return"&tc="+pd.filter(function(a){return a}).length},Pg=function(){2022<=Ng().length&&Og()},Rg=function(){Qg||(Qg=A.setTimeout(Og,500))},Og=function(){Qg&&(A.clearTimeout(Qg),Qg=void 0);void 0===Sg||Tg[Sg]&&!Ug&&!Vg||(Wg[Sg]||Xg.hh()||0>=Yg--?(I(1),Wg[Sg]=!0):(Xg.Lh(),Ff(Ng()),Tg[Sg]=!0,Zg=$g=ah=Vg=Ug=""))},Ng=function(){var a=Sg;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[bh,Tg[a]?"":"&es=1",ch[a],b?"&u="+b:"",c?"&ut="+c:"",Mg(),Ug,Vg,ah?ah:"",$g,Zg,"&z=0"].join("")},
dh=function(){return[Ig,"&v=3&t=t","&pid="+Ka(),"&rv="+Qd.$b].join("")},eh="0.005000">Math.random(),bh=dh(),fh=function(){bh=dh()},Tg={},Ug="",Vg="",Zg="",$g="",ah="",Sg=void 0,ch={},Wg={},Qg=void 0,Xg=function(a,b){var c=0,d=0;return{hh:function(){if(c<a)return!1;Ua()-d>=b&&(c=0);return c>=a},Lh:function(){Ua()-d>=b&&(c=0);c++;d=Ua()}}}(2,1E3),Yg=1E3,gh=function(a,b){if(eh&&!Wg[a]&&Sg!==a){Og();Sg=a;Zg=Ug="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";ch[a]="&e="+c+"&eid="+
a;Rg()}},hh=function(a,b,c){if(eh&&!Wg[a]&&b){a!==Sg&&(Og(),Sg=a);var d,e=String(b[Bd.sa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Ug=Ug?Ug+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(rd[g]?"1":"2")+d;Zg=Zg?Zg+"."+h:"&ti="+h;Rg();Pg()}},ih=function(a,b,c){if(eh&&!Wg[a]){a!==Sg&&(Og(),Sg=
a);var d=c+b;Vg=Vg?Vg+"."+d:"&epr="+d;Rg();Pg()}},jh=function(a,b,c){if(eh&&!Wg[a]){a!==Sg&&(Og(),Sg=a);var d={aev:"1",c:"2",jsm:"3",v:"4",j:"5",smm:"6",rmm:"7",input:"8"}[b]||"0",e;e=c instanceof A.Element?"1":c instanceof A.Event?"2":c instanceof A.RegExp?"3":c===A?"4":c===L?"5":c instanceof A.Promise?"6":c instanceof A.Storage?"7":c instanceof A.Date?"8":c instanceof A.History?"9":c instanceof A.Performance?"a":c instanceof A.Crypto?"b":c instanceof A.Location?"c":c instanceof A.Navigator?"d":
"object"!==typeof c||lb(c)?"0":"e";ah=ah?ah+"."+d+e:"&pcr="+d+e;Rg();Pg()}};var kh={},lh=new La,mh={},nh={},qh={name:"dataLayer",set:function(a,b){E(ab(a,b),mh);oh()},get:function(a){return ph(a,2)},reset:function(){lh=new La;mh={};oh()}},ph=function(a,b){if(2!=b){var c=lh.get(a);eh&&c!==rh(a.split("."))&&I(5);return c}return rh(a.split("."))},rh=function(a){for(var b=mh,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},sh=function(a,b){nh.hasOwnProperty(a)||(lh.set(a,b),E(ab(a,b),mh),oh())},oh=function(a){Na(nh,function(b,c){lh.set(b,c);
E(ab(b,void 0),mh);E(ab(b,c),mh);a&&delete nh[b]})},th=function(a,b,c){kh[a]=kh[a]||{};var d=1!==c?rh(b.split(".")):lh.get(b);"array"===jb(d)||"object"===jb(d)?kh[a][b]=E(d):kh[a][b]=d},uh=function(a,b){if(kh[a])return kh[a][b]},vh=function(a,b){kh[a]&&delete kh[a][b]};var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||df("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ia(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||df("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Fh=function(a){function b(n){var m=n.split("=")[0];return 0>d.indexOf(m)?n:m+"=0"}function c(n){return n.split("&").map(b).filter(function(m){return void 0!=
m}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Gh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ih=function(a,b,c,d){return Hh(d)?Gh(a,String(b||document.cookie),c):[]},Mh=function(a,b,c,d,e){if(Hh(e)){var f=Jh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Kh(f,function(g){return g.ic},b);if(1===f.length)return f[0].id;f=Kh(f,function(g){return g.Db},c);return f[0]?f[0].id:void 0}}};function Nh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Ih(b,f,!1,d).indexOf(c)}
var Rh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Hh(c.Ka))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Oh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.sh);g=e(g,"samesite",
c.Ph);c.Sh&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var m=Ph(),r=void 0,t=!1,q=0;q<m.length;++q){var u="none"!==m[q]?m[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!Qh(u,c.path)&&Nh(v,a,b,c.Ka))return 0}if(r&&!t)throw r;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Qh(n,c.path)?1:Nh(g,a,b,c.Ka)?0:1},Sh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Rh(a,b,c)};
function Kh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Jh(a,b,c){for(var d=[],e=Ih(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),ic:1*l[0]||1,Db:1*l[1]||1}))}}return d}
var Oh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Th=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Uh=/(^|\.)doubleclick\.net$/i,Qh=function(a,b){return Uh.test(document.location.hostname)||"/"===b&&Th.test(a)},Ph=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Uh.test(e)||Th.test(e)||a.push("none");
return a},Hh=function(a){if(!Pf("gtag_cs_api")||!a||!Zf())return!0;if(!Yf(a))return!1;var b=Xf(a);return null==b?!0:!!b};var Vh=function(){for(var a=yf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=A.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ua()/1E3)].join(".")},Yh=function(a,b,c,d,e){var f=Wh(b);return Mh(a,f,Xh(c),d,e)},Zh=function(a,b,c,d){var e=""+Wh(c),f=Xh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Wh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Xh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function $h(a,b,c){var d,e=a.Ab;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ua())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var ai=["1"],bi={},fi=function(a){var b=ci(a.prefix);bi[b]||di(b,a.path,a.domain)||(ei(b,Vh(),a),di(b,a.path,a.domain))};function ei(a,b,c){var d=Zh(b,"1",c.domain,c.path),e=$h(c);e.Ka="ad_storage";Sh(a,d,e)}function di(a,b,c){var d=Yh(a,b,c,ai,"ad_storage");d&&(bi[a]=d);return d}function ci(a){return(a||"_gcl")+"_au"};function gi(){for(var a=hi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function ii(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var hi,ji;function ki(a){hi=hi||ii();ji=ji||gi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,m=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(m=64));b.push(hi[l],hi[n],hi[m],hi[r])}return b.join("")}
function li(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),m=ji[n];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}hi=hi||ii();ji=ji||gi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var mi;var qi=function(){var a=ni,b=oi,c=pi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Gf(L,"mousedown",d);Gf(L,"keyup",d);Gf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ri=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};pi().decorators.push(f)},si=function(a,b,c){for(var d=pi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,m=!!g.sameHost;if(l&&(m||n!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[r])||m&&0<=l[r].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},pi=function(){var a=Af("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ti=/(.*?)\*(.*?)\*(.*)/,ui=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,vi=/^(?:www\.|m\.|amp\.)+/,wi=/([^?#]+)(\?[^#]*)?(#.*)?/;function xi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var zi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(ki(String(d))))}var e=b.join("*");return["1",yi(e),e].join("*")},yi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=mi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}mi=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^mi[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Bi=function(){return function(a){var b=Eh(A.location.href),c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=Ai(d)||{};var e=Ch(b,"fragment").match(xi("_gl"));a.fragment=Ai(e&&e[3]||"")||{}}},Ci=function(a){var b=Bi(),c=pi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Ai=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ti.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],m=0;m<b;++m)if(n===yi(h,m)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=li(t[q+1]);return r}}}}catch(u){}};
function Di(a,b,c,d){function e(m){var r=m,t=xi(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}m=q;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+n}d=void 0===d?!1:d;var f=wi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Ei(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=si(b,1,c),e=si(b,2,c),f=si(b,3,c);if(Ya(d)){var g=zi(d);c?Fi("_gl",g,a):Gi("_gl",g,a,!1)}if(!c&&Ya(e)){var h=zi(e);Gi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,m=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Gi(n,m,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Fi(n,m,r);break a}}"string"==typeof r&&Di(n,m,r,void 0)}}
function Gi(a,b,c,d){if(c.href){var e=Di(a,b,c.href,void 0===d?!1:d);lf.test(e)&&(c.href=e)}}
function Fi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Di(a,b,c.action);lf.test(n)&&(c.action=n)}}}
var ni=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ei(e,e.hostname)}}catch(g){}},oi=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");Ei(a,b)}}catch(c){}},Hi=function(a,b,c,d){qi();ri(a,b,"fragment"===c?2:1,!!d,!1)},Ii=function(a,b){qi();ri(a,[Bh(A.location,"host",!0)],b,!0,!0)},Ji=function(){var a=L.location.hostname,b=ui.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(vi,""),l=e.replace(vi,""),n;if(!(n=h===l)){var m="."+l;n=h.substring(h.length-m.length,h.length)===m}return n},Ki=function(a,b){return!1===a?!1:a||b||Ji()};var Li=/^\w+$/,Mi=/^[\w-]+$/,Ni=/^~?[\w-]+$/,Oi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Pi=function(){if(!Pf("gtag_cs_api")||!Zf())return!0;var a=Xf("ad_storage");return null==a?!0:!!a},Qi=function(a,b){Yf("ad_storage")?Pi()?a():bg(a,"ad_storage"):b?df("TAGGING",3):ag(function(){Qi(a,!0)},["ad_storage"])},Ti=function(a){var b=[];if(!L.cookie)return b;var c=Ih(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ri(c[d]);e&&-1===Ia(b,e)&&b.push(e)}return Si(b)};
function Ui(a){return a&&"string"==typeof a&&a.match(Li)?a:"_gcl"}
var Wi=function(){var a=Eh(A.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||zh(e,"gclid",!1,void 0);c=c||zh(e,"gclsrc",!1,void 0)}return Vi(b,c,d)},Vi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Mi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Pf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Yi=function(a){var b=Wi();Qi(function(){Xi(b,a)})};
function Xi(a,b,c){function d(l,n){var m=Zi(l,e);m&&Sh(m,n,f)}b=b||{};var e=Ui(b.prefix);c=c||Ua();var f=$h(b,c,!0);f.Ka="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Ei?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var aj=function(a,b){var c=Ci(!0);Qi(function(){for(var d=Ui(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Oi[f]){var g=Zi(f,d),h=c[g];if(h){var l=Math.min($i(h),Ua()),n;b:{for(var m=l,r=Ih(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if($i(r[t])>m){n=!0;break b}n=!1}if(!n){var q=$h(b,l,!0);q.Ka="ad_storage";Sh(g,h,q)}}}}Xi(Vi(c.gclid,c.gclsrc),b)})},Zi=function(a,b){var c=Oi[a];if(void 0!==c)return b+c},$i=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ri(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var bj=function(a,b,c,d,e){if(Ha(b)){var f=Ui(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Zi(a[l],f);if(n){var m=Ih(n,L.cookie,void 0,"ad_storage");m.length&&(h[n]=m.sort()[m.length-1])}}return h};Qi(function(){Hi(g,b,c,d)})}},Si=function(a){return a.filter(function(b){return Ni.test(b)})},cj=function(a,b){for(var c=Ui(b.prefix),d={},e=0;e<a.length;e++)Oi[a[e]]&&(d[a[e]]=Oi[a[e]]);Qi(function(){Na(d,function(f,g){var h=Ih(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=$i(l),
m={};m[f]=[Ri(l)];Xi(m,b,n)}})})};function dj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ej=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(Zf()){var c=Wi();if(dj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Ii(function(){return d},3);Ii(function(){var e={};return e._up="1",e},1)}}},fj=function(){var a;if(Pi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Jd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Jd]||(g[b[h].Jd]=[]),g[b[h].Jd].push({timestamp:l[1],Og:l[2]}))}a=g}else a={};return a};var gj=/^\d+\.fls\.doubleclick\.net$/;function hj(a,b){Yf(H.o)?fg(H.o)?a():bg(a,H.o):b?I(42):hg(function(){hj(a,!0)},[H.o])}function ij(a){var b=Eh(A.location.href),c=Ch(b,"host",!1);if(c&&c.match(gj)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function jj(a,b,c){if("aw"==a||"dc"==a){var d=ij("gcl"+a);if(d)return d.split(".")}var e=Ui(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!fg(H.o)&&c,g;g=Wi()[a]||[];if(0<g.length)return f?["0"]:g}var h=Zi(a,e);return h?Ti(h):[]}
var kj=function(a){var b=ij("gac");if(b)return!fg(H.o)&&a?"0":decodeURIComponent(b);var c=fj(),d=[];Na(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Og);g=Si(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},lj=function(a,b){var c=Wi().dc||[];hj(function(){fi(b);var d=bi[ci(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Mf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=ci(b.prefix),m=bi[n];m&&ei(n,m,b)}})};var mj=/[A-Z]+/,nj=/\s/,oj=function(a){if(p(a)&&(a=Ta(a),!nj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(mj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},qj=function(a){for(var b={},c=0;c<a.length;++c){var d=oj(a[c]);d&&(b[d.id]=d)}pj(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function pj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var rj=function(){var a=!1;return a};var tj=function(a,b,c,d){return(2===sj()||d||"http:"!=A.location.protocol?a:b)+c},sj=function(){var a=Df(),b;if(1===a)a:{var c=Fg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Hj=function(a){return fg(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var Ij=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Jj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Kj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Lj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Nj=function(a){var b;b||(b=ph("gtm.whitelist"));b&&I(9);
var c=b&&Za(Sa(b),Jj),d;d||(d=ph("gtm.blacklist"));d||(d=ph("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Mj()&&(d=Sa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(Sa(d),"google")&&I(2);var e=d&&Za(Sa(d),Kj),f={};return function(g){var h=
g&&g[Bd.sa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kg[h]||[],n=a(h,l);if(b){var m;if(m=n)a:{if(0>Ia(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Ia(c,l[r])){I(11);m=!1;break a}}else{m=!1;break a}m=!0}n=m}var t=!1;if(d){var q=0<=Ia(e,h);if(q)t=q;else{var u=Ma(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Ia(l,"sandboxedScripts"))||c&&-1!==Ia(c,"sandboxedScripts")||(v=Ma(e,Lj));return f[h]=v}},Mj=function(){return Ij.test(A.location&&A.location.hostname)};var Oj={active:!0,isAllowed:function(){return!0}},Pj=function(a){var b=R.zones;return b?b.checkState(Qd.C,a):Oj},Qj=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var Rj=function(){};var Sj=!1,Tj=0,Uj=[];function Vj(a){if(!Sj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Sj=!0;for(var e=0;e<Uj.length;e++)M(Uj[e])}Uj.push=function(){for(var f=0;f<arguments.length;f++)M(arguments[f]);return 0}}}function Wj(){if(!Sj&&140>Tj){Tj++;try{L.documentElement.doScroll("left"),Vj()}catch(a){A.setTimeout(Wj,50)}}}var Xj=function(a){Sj?a():Uj.push(a)};var Yj={},Zj={},ak=function(a,b,c,d){if(!Zj[a]||Cg[b]||"__zone"===b)return-1;var e={};lb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Zj[a].tags.push(e)-1},bk=function(a,b,c,d){if(Zj[a]){var e=Zj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ck(a){for(var b=Yj[a]||[],c=0;c<b.length;c++)b[c]();Yj[a]={push:function(d){d(Qd.C,Zj[a])}}}
var fk=function(a,b,c){Zj[a]={tags:[]};Fa(b)&&dk(a,b);c&&A.setTimeout(function(){return ck(a)},Number(c));return ek(a)},dk=function(a,b){Yj[a]=Yj[a]||[];Yj[a].push(Wa(function(){return M(function(){b(Qd.C,Zj[a])})}))};function ek(a){var b=0,c=0,d=!1;return{add:function(){c++;return Wa(function(){b++;d&&b>=c&&ck(a)})},hg:function(){d=!0;b>=c&&ck(a)}}};var gk=function(){function a(d){return!Ga(d)||0>d?0:d}if(!R._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ga(qh.get("gtm.start"))?qh.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Hg-b)}}};var kk={},lk=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},mk=!1;
var nk=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}gk();return A[b]},ok=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=lk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var qk=function(a){},pk=function(){return A.GoogleAnalyticsObject||"ga"},rk=function(a,b){return function(){var c=lk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var wk=function(){return!1},xk=function(){var a={};return function(b,c,d){}};function yk(a,b,c,d){var e=pd[a],f=zk(a,b,c,d);if(!f)return null;var g=xd(e[Bd.$d],c,[]);if(g&&g.length){var h=g[0];f=yk(h.index,{J:f,I:1===h.ve?b.terminate:f,terminate:b.terminate},c,d)}return f}
function zk(a,b,c,d){function e(){if(f[Bd.Bf])h();else{var w=yd(f,c,[]);var B=ak(c.id,String(f[Bd.sa]),Number(f[Bd.ae]),w[Bd.Cf]),C=!1;w.vtp_gtmOnSuccess=function(){if(!C){C=!0;var G=Ua()-D;hh(c.id,pd[a],"5");bk(c.id,B,"success",
G);g()}};w.vtp_gtmOnFailure=function(){if(!C){C=!0;var G=Ua()-D;hh(c.id,pd[a],"6");bk(c.id,B,"failure",G);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;hh(c.id,f,"1");var z=function(){var G=Ua()-D;hh(c.id,f,"7");bk(c.id,B,"exception",G);C||(C=!0,h())};var D=Ua();try{wd(w,c)}catch(G){z(G)}}}var f=pd[a],g=b.J,h=b.I,l=b.terminate;if(c.qd(f))return null;var n=xd(f[Bd.be],c,[]);if(n&&n.length){var m=n[0],r=yk(m.index,{J:g,I:h,terminate:l},c,d);if(!r)return null;g=r;h=2===m.ve?l:r}if(f[Bd.Wd]||f[Bd.Gf]){var t=f[Bd.Wd]?qd:c.Xh,q=g,u=h;if(!t[a]){e=Wa(e);
var v=Ak(a,t,e);g=v.J;h=v.I}return function(){t[a](q,u)}}return e}function Ak(a,b,c){var d=[],e=[];b[a]=Bk(d,e,c);return{J:function(){b[a]=Ck;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Dk;for(var f=0;f<e.length;f++)e[f]()}}}function Bk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ck(a){a()}function Dk(a,b){b()};var Gk=function(a,b){for(var c=[],d=0;d<pd.length;d++)if(a.Aa[d]){var e=pd[d];var f=b.add();try{var g=yk(d,{J:f,I:f,terminate:f},a,d);g?c.push({Ze:d,Re:zd(e),kc:g}):(Ek(d,a),f())}catch(l){f()}}b.hg();c.sort(Fk);for(var h=0;h<c.length;h++)c[h].kc();return 0<c.length};function Fk(a,b){var c,d=b.Re,e=a.Re;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ze,h=b.Ze;f=g>h?1:g<h?-1:0}return f}
function Ek(a,b){if(!eh)return;var c=function(d){var e=b.qd(pd[d])?"3":"4",f=xd(pd[d][Bd.$d],b,[]);f&&f.length&&c(f[0].index);hh(b.id,pd[d],e);var g=xd(pd[d][Bd.be],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Hk=!1,Ik=function(a,b,c,d){if("gtm.js"==b){if(Hk)return!1;Hk=!0}var e=Pj(a),f=!1;if(!e.active){var g=!0;if("gtm.js"===b){for(var h=0;h<pd.length;h++)if(Bg[String(pd[h][String(Bd.sa)])]){I(50);break}}if(g)return!1}gh(a,b);var l=fk(a,c,d);th(a,"event",
1);th(a,"ecommerce",1);th(a,"gtm");var n={id:a,name:b,qd:Nj(e.isAllowed),Aa:[],Xh:[],Ie:function(){I(6)},me:function(u){eh&&(wb(u)||jh(a,"input",u))}};n.Aa=Ld(n);var t=Gk(n,l);"gtm.js"!==b&&"gtm.sync"!==b||qk(Qd.C);if(!t)return t;for(var q=0;q<n.Aa.length;q++)if(n.Aa[q]&&pd[q]&&!Cg[String(pd[q][Bd.sa])])return!0;return!1};function Jk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Eh(""+c+b).href}}function Kk(a,b){return Lk()?Jk(a,b):void 0}function Lk(){var a=!1;return a};var Mk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},Nk=function(a){var b=new Mk;b.eventModel=a;return b},Ok=function(a,b){a.targetConfig=b;return a},Pk=function(a,b){a.containerConfig=b;return a},Qk=function(a,b){a.a=b;return a},Rk=function(a,b){a.globalConfig=b;return a},Sk=function(a,b){a.J=b;return a},Tk=function(a,b){a.I=b;return a};
Mk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Uk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var Vk;if(3===Qd.$b.length)Vk="g";else{var Wk="G";Vk=Wk}
var Xk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vk,OPT:"o"},Yk=function(a){var b=Qd.C.split("-"),c=b[0].toUpperCase(),d=Xk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Qd.$b.length){var g="w";f="2"+g}else f="";return f+d+Qd.$b+e};var Zk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var $k=function(){return pf("iPhone")&&!pf("iPod")&&!pf("iPad")};pf("Opera");pf("Trident")||pf("MSIE");pf("Edge");!pf("Gecko")||-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")||pf("Trident")||pf("MSIE")||pf("Edge");-1!=mf.toLowerCase().indexOf("webkit")&&!pf("Edge")&&pf("Mobile");pf("Macintosh");pf("Windows");pf("Linux")||pf("CrOS");var al=ma.navigator||null;al&&(al.appVersion||"").indexOf("X11");pf("Android");$k();pf("iPad");pf("iPod");$k()||pf("iPad")||pf("iPod");mf.toLowerCase().indexOf("kaios");var bl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var cl=function(){};var dl=function(a){this.i=a;this.a=null;this.s={};this.F=0;this.m=null};la(dl,cl);var fl=function(a){return"function"===typeof a.i.__tcfapi||null!=el(a)};
dl.prototype.addEventListener=function(a){gl(this,"addEventListener",function(b,c){var d=c?b:{};d.internalErrorState=void 0!==d.tcString&&"string"!==typeof d.tcString||void 0!==d.gdprApplies&&"boolean"!==typeof d.gdprApplies||void 0!==d.listenerId&&"number"!==typeof d.listenerId||void 0!==d.addtlConsent&&"string"!==typeof d.addtlConsent?2:d.cmpStatus&&"error"!==d.cmpStatus?0:3;0!==d.internalErrorState&&(d.tcString="tcunavailable");a(d)})};
dl.prototype.removeEventListener=function(a){a&&a.listenerId&&gl(this,"removeEventListener",null,a.listenerId)};
var il=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=hl(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&hl(a.purpose.consents,b)},jl=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));return 0===h?il(a,b,d):1===h?
a.purpose&&a.vendor?hl(a.purpose.legitimateInterests,b)&&hl(a.vendor.legitimateInterests,void 0===d?"755":d):!1:!0},hl=function(a,b){return!(!a||!a[b])},gl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(el(a)){kl(a);var f=++a.F;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},el=function(a){if(a.a)return a.a;a.a=bl(a.i,"__tcfapiLocator");return a.a},kl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},Zk(a.i,a.m))};var ll={1:0,3:0,4:0,7:3,9:3,10:3};function ml(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var nl=ml("",550),ol=ml("",500);function pl(){var a=R.tcf||{};return R.tcf=a}
var ql=function(a,b){this.m=a;this.a=b;this.i=Ua();},rl=function(a){},sl=function(a){},yl=function(){var a=pl(),b=new dl(A,3E3),c=new ql(b,a);if((tl()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||fl(b))){a.active=!0;a.Eb={};ul();var d=setTimeout(function(){vl(a);wl(a);d=null},ol);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)vl(a),wl(a),rl(c);else{var f;if(!1===e.gdprApplies)f=xl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in ll)ll.hasOwnProperty(h)&&("1"===h?g["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString?!0:Pf("tcf_restrictions")?jl(e,"1",0):il(e,"1"):!1:g[h]=jl(e,h,ll[h]));f=g}f&&(a.tcString=e.tcString||"tcempty",a.Eb=f,wl(a),rl(c))}}),
sl(c)}catch(e){d&&(clearTimeout(d),d=null),vl(a),wl(a)}}};function vl(a){a.type="e";a.tcString="tcunavailable";a.Eb=xl()}function ul(){var a={};dg((a.ad_storage="denied",a.wait_for_update=nl,a))}var tl=function(){var a=!1;a=!0;return a};function xl(){var a={},b;for(b in ll)ll.hasOwnProperty(b)&&(a[b]=!0);return a}function wl(a){var b={};eg((b.ad_storage=a.Eb["1"]?"granted":"denied",b))}
var zl=function(){var a=pl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Al=function(){var a=pl();return a.active?a.tcString||"":""},Bl=function(a){if(!ll.hasOwnProperty(String(a)))return!0;var b=pl();return b.active&&b.Eb?!!b.Eb[String(a)]:!0};function Cl(a,b,c){function d(r){var t;R.reported_gclid||(R.reported_gclid={});t=R.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(Zf()){var y=fg(H.o);v("gcs",gg());r&&v("gcu","1");v("rnd",m);if((!f||g&&"aw.ds"!==g)&&fg(H.o)){var x=Ti("_gcl_aw");v("gclaw",x.join("."))}v("url",String(A.location).split(/[?#]/)[0]);v("dclid",Dl(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",Al());"1"===Ci(!1)._up&&v("gtm_up","1");v("gclid",Dl(b,f));v("gclsrc",g);v("gtm",Yk(!c));var B=w+"/pagead/landing?"+u.join("&");Mf(B)}}var e=Wi(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=Zf();if(l||n){var m=""+Vh();n?hg(function(){d();fg(H.o)||bg(function(r){return d(!0,r.ne)},H.o)},[H.o]):d()}}function Dl(a,b){var c=a&&!fg(H.o);return b&&c?"0":b}var mm=function(){var a=!0;Bl(7)&&Bl(9)&&Bl(10)||(a=!1);var b=!0;b&&!lm()&&(a=!1);return a},lm=function(){var a=!0;Bl(3)&&Bl(4)||(a=!1);return a};function Gm(){var a=R;return a.gcq=a.gcq||new Hm}
var Im=function(a,b,c){Gm().register(a,b,c)},Jm=function(a,b,c,d){Gm().push("event",[b,a],c,d)},Km=function(a,b){Gm().push("config",[a],b)},Lm=function(a,b,c){Gm().push("get",[a,b],c)},Mm={},Nm=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Om=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},Hm=function(){this.m={};this.i={};this.a=[]},Pm=function(a,b){var c=oj(b);return a.m[c.containerId]=a.m[c.containerId]||new Nm},
Qm=function(a,b,c){if(b){var d=oj(b);if(d&&1===Pm(a,b).status){Pm(a,b).status=2;var e={};eh&&(e.timeoutId=A.setTimeout(function(){I(38);Rg()},3E3));a.push("require",[e],d.containerId);Mm[d.containerId]=Ua();if(rj()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Kk(c,g)||h;Cf(l)}}}},Rm=function(a,b,c,d){if(d.ca){var e=Pm(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),n=E(e.i),m=E(a.i),r=ph("gtm.uniqueEventId"),t=oj(d.ca).prefix,q=Tk(Sk(Rk(Qk(Pk(Ok(Nk(g),h),l),n),m),function(){ih(r,t,"2");}),function(){
ih(r,t,"3");});try{ih(r,t,"1");f(d.ca,b,d.m,q)}catch(u){ih(r,t,"4");}}}};
Hm.prototype.register=function(a,b,c){if(3!==Pm(this,a).status){Pm(this,a).m=b;Pm(this,a).status=3;c&&(Pm(this,a).i=c);var d=oj(a),e=Mm[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var h=ph("gtm.uniqueEventId"),l=g,n=Ua()-f;if(eh&&!Wg[h]){h!==Sg&&(Og(),Sg=h);var m=l+"."+Math.floor(f-e)+"."+Math.floor(n);$g=$g?$g+","+m:"&cl="+m}delete Mm[d.containerId]}this.flush()}};
Hm.prototype.push=function(a,b,c,d){var e=Math.floor(Ua()/1E3);Qm(this,c,b[0][H.Ha]||this.i[H.Ha]);this.a.push(new Om(a,e,c,b,d));d||this.flush()};
Hm.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Pm(this,c.ca).status&&!a)return;eh&&A.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(m,r){E(ab(m,r),b.i)});break;case "config":var d=c.a[0],e=!!d[H.Vb];delete d[H.Vb];var f=Pm(this,c.ca),g=oj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||Rm(this,H.ka,d,c);f.a=!0;delete d[H.cb];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":Rm(this,c.a[1],c.a[0],c);break;case "get":}this.a.shift()}};var Sm=function(a,b,c){};var Tm=function(a,b,c,d){};var Um=function(a){};var Vm=function(a,b,c){};var Wm=function(a,b){return!0};var Xm=function(a,b){var c;return c};var Ym=function(a){};var Zm=!1,$m=[];function an(){if(!Zm){Zm=!0;for(var a=0;a<$m.length;a++)M($m[a])}}var bn=function(a){Zm?M(a):$m.push(a)};var cn=function(a){F(this.i.a,["listener:!Fn"],arguments);Oe(this,"process_dom_events","window","load");bn(nb(a))};var dn=function(a,b){var c;var d=ub(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var en=function(a){var b;F(this.i.a,["path:!string"],arguments);Oe(this,"access_globals","read",a);var c=a.split("."),d=A,e;for(e=0;e<c.length-1;e++){var f=c[e];d===A&&d[f]&&!d.hasOwnProperty(f)&&I(47);d=d[c[e]];if(null==d)return;d===L&&I(48);d===A&&I(49)}var g=c[e];d===A&&d[g]&&!d.hasOwnProperty(g)&&I(47);b=d[c[e]];var h=ub(b,this.m);void 0===h&&void 0!==b&&I(45);return h};var fn=function(a,b){var c=null;return ub(c,this.m)};var gn=function(a){var b;F(this.i.a,["path:!string"],arguments);Oe(this,"access_globals","readwrite",a);var c=a.split("."),d=$a(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Fa(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return ub(b,this.m)};var hn=function(a){var b;return b};var jn=function(a,b){b=void 0===b?!0:b;var c;return c};var kn=function(a){var b=null;return b};var ln=function(a,b){var c;return c};var mn=function(a,b){var c;return c};var nn=function(a){var b="";return b};var on=function(a){var b="";F(this.i.a,["component:?string"],arguments),Oe(this,"get_url",a),b=Ch(Eh(A.location.href),a);return b};var $e=function(){Oe(this,"get_user_agent");return A.navigator.userAgent};var pn=function(a,b){};var qn={},rn=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Oe(this,"inject_script",a);var e=this.m,f=function(){b instanceof cb&&b.La(e)},g=function(){c instanceof cb&&c.La(e)};if(!d){Cf(a,f,g);return}var h=d;qn[h]?(qn[h].onSuccess.push(f),qn[h].onFailure.push(g)):(qn[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=qn[h].onSuccess,n=0;n<l.length;n++)M(l[n]);l.push=function(m){M(m);
return 0}},g=function(){for(var l=qn[h].onFailure,n=0;n<l.length;n++)M(l[n]);qn[h]=null},Cf(a,f,g));};var sn=function(){return!1},tn={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var un=function(){};var vn=function(a,b){var c=!1;return c};var wn=function(){var a="";return a};var xn=function(){var a="";return a};var yn=function(a,b,c){};var zn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var An=function(a,b,c){return!1};var Bn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Cn=function(a,b,c){var d=this;};var Dn={},En={};Dn.getItem=function(a){var b=null;return b};
Dn.setItem=function(a,b){};
Dn.removeItem=function(a){};Dn.clear=function(){};var Fn=function(a){var b;return b};var Nc=function(){var a=new Ze;rj()?(a.add("injectHiddenIframe",Ea),a.add("injectScript",Ea)):(a.add("injectHiddenIframe",pn),a.add("injectScript",rn));var b=yn;a.add("Math",He());a.add("TestHelper",bf());a.add("addEventCallback",Um);a.add("aliasInWindow",Wm);a.add("assertApi",De);a.add("assertThat",Ee);a.add("callInWindow",
Xm);a.add("callLater",Ym);a.add("copyFromDataLayer",dn);a.add("copyFromWindow",en);a.add("createArgumentsQueue",fn);a.add("createQueue",gn);a.add("decodeUri",Ie);a.add("decodeUriComponent",Je);a.add("encodeUri",Ke);a.add("encodeUriComponent",Le);a.add("fail",Me);a.add("fromBase64",hn,!("atob"in A));a.add("generateRandom",Ne);a.add("getContainerVersion",Pe);a.add("getCookieValues",jn);a.add("getQueryParameters",ln);a.add("getReferrerQueryParameters",mn);a.add("getReferrerUrl",nn);a.add("getTimestamp",
Qe);a.add("getTimestampMillis",Qe);a.add("getType",Re);a.add("getUrl",on);a.add("localStorage",tn,!sn());a.add("logToConsole",un);a.add("makeInteger",Te);a.add("makeNumber",Ue);a.add("makeString",Ve);a.add("makeTableMap",We);a.add("mock",Ye);a.add("queryPermission",vn);a.add("readCharacterSet",wn);a.add("readTitle",xn);a.add("sendPixel",b);a.add("setCookie",zn);a.add("setInWindow",An);a.add("sha256",Cn);a.add("templateStorage",Dn);a.add("toBase64",Fn,!("btoa"in A));a.add("JSON",Se(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.rb();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Lc,Ud;
function Gn(){var a=data.runtime||[],b=data.runtime_lines;Lc=new Jc;Hn();ld=function(e,f,g){In(f);var h=new hb;Na(f,function(q,u){var v=ub(u);void 0===v&&void 0!==u&&I(44);h.set(q,v)});Lc.a.a.s=Hd();var l={ig:Vd(e),eventId:void 0!==g?g.id:void 0,rb:function(){return e},log:function(){}};if(wk()){var n=xk(),m=void 0,r=void 0;l.da={i:{},a:function(q,u,v){1===u&&(m=q);7===u&&(r=v);n(q,u,v)},m:Xe()};l.log=function(q,u){if(m){var v=Array.prototype.slice.call(arguments,1);n(m,4,{level:q,source:r,message:v})}}}var t=
Mc(l,[e,h]);Lc.a.a.s=void 0;t instanceof ta&&"return"===t.a&&(t=t.i);return tb(t)};Oc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ha(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Dd(d,b[c]);Lc.kc(d)}}function In(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){M(b)});Fa(c)&&(a.gtmOnFailure=function(){M(c)})}
function Hn(){var a=Lc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Pc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}function Jn(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kg[e]=Kg[e]||[];Kg[e].push(b)}})};var Kn="HA GF G UA AW DC".split(" "),Ln=!1,Mn={},Nn=!1;function On(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Jc]&&(c.eventCallback=b[H.Jc]),b[H.Ub]&&(c.eventTimeout=b[H.Ub]));return c}function Pn(){return Ln}
var Sn={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!lb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=On(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Nn=!0,Pn(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ud.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&lb(a[1])?b=E(a[1]):3==a.length&&p(a[1])&&(b={},lb(a[2])||Ha(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Pn()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Lg(),d=a[1];"default"===d?(b(),dg(a[2])):"update"===d&&(b(),eg(a[2],c))}}};var Tn={policy:!0};var Un=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Wn=function(a){var b=Vn(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var no=function(a){if(mo(a))return a;this.a=a};no.prototype.Vg=function(){return this.a};var mo=function(a){return!a||"object"!==jb(a)||lb(a)?!1:"getUntrustedUpdateValue"in a};no.prototype.getUntrustedUpdateValue=no.prototype.Vg;var oo=[],po=!1,qo=function(a){return A["dataLayer"].push(a)},ro=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function so(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&sh(f,void 0),sh(f,g))});Gg||(Gg=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Lg(),a["gtm.uniqueEventId"]=d,sh("gtm.uniqueEventId",d));var e=Ik(a["gtm.uniqueEventId"],a.event,a.eventCallback,a.eventTimeout)?!0:!1;switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function to(){for(var a=!1;!po&&0<oo.length;){po=!0;delete mh.eventModel;oh();var b=oo.shift();if(null!=b){var c=mo(b);if(c){var d=b;b=mo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ph(g,1);if(Ha(h)||lb(h))h=E(h);nh[g]=h}}try{if(Fa(b))try{b.call(qh)}catch(v){}else if(Ha(b)){var l=
b;if(p(l[0])){var n=l[0].split("."),m=n.pop(),r=l.slice(1),t=ph(n.join("."),2);if(void 0!==t&&null!==t)try{t[m].apply(t,r)}catch(v){}}}else{if(Oa(b)){a:{var q=b;if(q.length&&p(q[0])){var u=Sn[q[0]];if(u&&(!c||!Tn[q[0]])){b=u(q);break a}}b=void 0}if(!b){po=!1;continue}}a=so(b)||a}}finally{c&&oh(!0)}}po=!1}return!a}
function uo(){var a=to();try{Un(A["dataLayer"],Qd.C)}catch(b){}return a}
var wo=function(){var a=Af("dataLayer",[]),b=Af("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Xj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});bn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<R.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new no(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);oo.push.apply(oo,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return to()&&h};var d=a.slice(0);oo.push.apply(oo,d);vo()&&M(uo)},vo=function(){var a=!0;return a};var xo={};xo.Wb=new String("undefined");
var yo=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===xo.Wb?b:a[d]);return c.join("")}};yo.prototype.toString=function(){return this.a("undefined")};yo.prototype.valueOf=yo.prototype.toString;xo.Of=yo;xo.Xc={};xo.Cg=function(a){return new yo(a)};var zo={};xo.Mh=function(a,b){var c=Lg();zo[c]=[a,b];return c};xo.qe=function(a){var b=a?0:1;return function(c){var d=zo[c];if(d&&"function"===typeof d[b])d[b]();zo[c]=void 0}};xo.fh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};xo.Eh=function(a){if(a===xo.Wb)return a;var b=Lg();xo.Xc[b]=a;return'google_tag_manager["'+Qd.C+'"].macro('+b+")"};xo.th=function(a,b,c){a instanceof xo.Of&&(a=a.a(xo.Mh(b,c)),b=Ea);return{od:a,J:b}};var Ao=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||If(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Bo=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Co=function(a,b,c){Bo(a)[b]=c},Do=function(a,b,c,d){var e=Bo(a),f=Va(e,b,d);e[b]=c(f)},Eo=function(a,b,c){var d=Bo(a);return Va(d,b,c)};var Fo=["input","select","textarea"],Go=["button","hidden","image","reset","submit"],Ho=function(a){var b=a.tagName.toLowerCase();return!Ja(Fo,function(c){return c===b})||"input"===b&&Ja(Go,function(c){return c===a.type.toLowerCase()})?!1:!0},Io=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Lf(a,["form"],100)},Jo=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Ho(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Ko=!!A.MutationObserver,Lo=void 0,Mo=function(a){if(!Lo){var b=function(){var c=L.body;if(c)if(Ko)(new MutationObserver(function(){for(var e=0;e<Lo.length;e++)M(Lo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Gf(c,"DOMNodeInserted",function(){d||(d=!0,M(function(){d=!1;for(var e=0;e<Lo.length;e++)M(Lo[e])}))})}};Lo=[];L.body?b():M(b)}Lo.push(a)};var gp=A.clearTimeout,hp=A.setTimeout,U=function(a,b,c){if(rj()){b&&M(b)}else return Cf(a,b,c)},ip=function(){return new Date},jp=function(){return A.location.href},kp=function(a){return Ch(Eh(a),"fragment")},lp=function(a){return Dh(Eh(a))},mp=function(a,b){return ph(a,b||2)},np=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=qo(a)):d=qo(a);return d},op=function(a,b){A[a]=b},W=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},pp=function(a,b,c){return Ih(a,b,void 0===c?!0:!!c)},qp=function(a,b,c){return 0===Sh(a,b,c)},rp=function(a,b){if(rj()){b&&M(b)}else Ef(a,b)},sp=function(a){return!!Eo(a,"init",!1)},tp=function(a){Co(a,"init",!0)},up=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Fg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(tj("https://","http://",c))},vp=function(a,
b){var c=a[b];return c},wp=function(a,b,c){eh&&(wb(a)||jh(c,b,a))};
var xp=xo.th;function Up(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Vp=new La;function Wp(a,b){function c(g){var h=Eh(g),l=Ch(h,"protocol"),n=Ch(h,"host",!0),m=Ch(h,"port"),r=Ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==m||"https"==l&&"443"==m)l="web",m="default";return[l,n,m,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Xp(a){return Yp(a)?1:0}
function Yp(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ha(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Xp(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return Up(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ia(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var m=a.ignore_case?"i":void 0;try{var r=String(c)+m,t=Vp.get(r);t||(t=new RegExp(c,m),Vp.set(r,t));n=t.test(b)}catch(q){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Wp(b,c)}return!1};var Zp={},$p=encodeURI,Y=encodeURIComponent,aq=Ff;var bq=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var cq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Zp.gh=function(){var a=!1;return a};function Br(){return A.gaGlobal=A.gaGlobal||{}}var Cr=function(){var a=Br();a.hid=a.hid||Ka();return a.hid},Dr=function(a,b){var c=Br();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Mr=window,Nr=document,Or=function(a){var b=Mr._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Mr["ga-disable-"+a])return!0;try{var c=Mr.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Gh("AMP_TOKEN",String(Nr.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Nr.getElementById("__gaOptOutExtension")?!0:!1};function Rr(a){delete a.eventModel[H.cb];Tr(a.eventModel)}var Tr=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Wr=function(a,b,c){Jm(b,c,a)},Xr=function(a,b,c){Jm(b,c,a,!0)},Zr=function(a,b){};
function Yr(a,b){}var Z={b:{}};Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"117"})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);wp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(Fa(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=cq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Yk()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Al();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){U(b,d,c)};Zf()?hg(function(){fg(H.o)?e():bg(e,H.o)},[H.o]):(gk(),e())})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){wp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(uh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=mp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):lp(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ao(c,"gtm.click");np(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!sp("cl")){var c=W("document");Gf(c,"click",a,!0);tp("cl")}M(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];wp(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return pp(a.vtp_name,mp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(m,r,t){if(!p(t))throw d(m,{},"Key must be a string.");if("read"===r){if(-1<Ia(e,t))return}else if("write"===r){if(-1<Ia(f,t))return}else if("readwrite"===r){if(-1<Ia(f,t)&&-1<Ia(e,t))return}else if("execute"===r){if(-1<Ia(g,t))return}else throw d(m,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(m,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=mp("gtm.url",1);c=c||jp();var d=b[a("vtp_component")];if(!d||"URL"==d)return lp(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?Ha(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var m=0;m<n.length;m++){var r=Ch(e,"QUERY",void 0,void 0,n[m]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=mp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;wp(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.ua=["google"],function(){function a(m,r){if(Zf()&&!d[m]){var t=function(){var q=lk(),u="gtm"+Lg(),v=l(r),w={name:u};h(v,w,!0);q("create",m,w);q(function(){q.remove(u)})};bg(t,H.M);bg(t,H.o);d[m]=!0}}var b,c={},d={},e=function(m){hg(function(){n(m)},[H.M,H.o])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h=function(m,r,t){var q=0;if(m)for(var u in m)if(m.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=g[u]?Ra(m[u]):m[u];"anonymizeIp"!=u||v||(v=void 0);r[u]=v;q++}return q},l=
function(m){var r={};m.vtp_gaSettings&&E(cq(m.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);E(cq(m.vtp_fieldsToSet,"fieldName","value"),r);fg(H.M)||(r.storage="none");fg(H.o)||(r.allowAdFeatures=!1,r.storeGac=!1);mm()||(r.allowAdFeatures=!1);lm()||(r.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(r._x_19=m.vtp_transportUrl);return r},n=function(m){function r(sa,
T){void 0!==T&&D("set",sa,T)}var t={},q={},u={},v={};if(m.vtp_gaSettings){var w=m.vtp_gaSettings;E(cq(w.vtp_contentGroup,"index","group"),q);E(cq(w.vtp_dimension,"index","dimension"),u);E(cq(w.vtp_metric,"index","metric"),v);var y=E(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;m=E(m,y)}E(cq(m.vtp_contentGroup,"index","group"),q);E(cq(m.vtp_dimension,"index","dimension"),u);E(cq(m.vtp_metric,"index","metric"),v);var x=l(m),B=nk(m.vtp_functionName);
if(Fa(B)){var C="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?""!==m.vtp_trackerName&&(z=m.vtp_trackerName,C=z+"."):(z="gtm"+Lg(),C=z+".");var D=function(sa){var T=[].slice.call(arguments,0);T[0]=C+T[0];B.apply(window,T)},G=function(sa,T){return void 0===T?T:sa(T)},J=function(sa,T){if(T)for(var db in T)T.hasOwnProperty(db)&&D("set",sa+db,T[db])},Q=function(){},V={name:z};h(x,V,!0);var ba=m.vtp_trackingId||t.trackingId;B("create",ba,V);D("set","&gtm",Yk(!0));Zf()&&(D("set","&gcs",gg()),a(ba,m));x._x_19&&(null==zf&&delete x._x_19,x._x_20&&!c[z]&&(c[z]=!0,B(rk(z,String(x._x_20)))));m.vtp_enableRecaptcha&&
D("require","recaptcha","recaptcha.js");(function(sa,T){void 0!==m[T]&&D("set",sa,m[T])})("nonInteraction","vtp_nonInteraction");J("contentGroup",q);J("dimension",u);J("metric",v);var P={};h(x,P,!1)&&D("set",P);var ea;m.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var sa=x&&x.hitCallback;Fa(sa)&&
sa();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var N={hitType:"event",eventCategory:String(m.vtp_eventCategory||t.category),eventAction:String(m.vtp_eventAction||t.action),eventLabel:G(String,m.vtp_eventLabel||t.label),eventValue:G(Qa,m.vtp_eventValue||t.value)};h(ea,N,!1);D("send",N);}else if("TRACK_SOCIAL"==
m.vtp_trackType){var K={hitType:"social",socialNetwork:String(m.vtp_socialNetwork),socialAction:String(m.vtp_socialAction),socialTarget:String(m.vtp_socialActionTarget)};h(ea,K,!1);D("send",K);}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==m.vtp_trackType){}else{m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var za="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");D("require","displayfeatures",void 0,{cookieName:za})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Ec="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Ec})}ea?D("send","pageview",ea):D("send","pageview");m.vtp_autoLinkDomains&&ok(C,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);}if(!b){var Sb=
m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&(Sb="internal/"+Sb);b=!0;var ee=Kk(x._x_19,"/analytics.js"),Bb=tj("https:","http:","//www.google-analytics.com/"+Sb,x&&!!x.forceSSL);U("analytics.js"===Sb&&ee?ee:Bb,function(){var sa=lk();sa&&sa.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else M(m.vtp_gtmOnFailure)};Z.__ua=e;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();
Z.b.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.g="get_url";Z.__get_url.h=!0;Z.__get_url.priorityOverride=0})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||
[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!p(g))throw e(f,{},"URL component must be a string.");if(c&&0>Ia(c,g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!p(h))throw e(f,{},"Query key must be a string.");if(0>Ia(d,h))throw e(f,{},"Prohibited query key: "+h);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");
},K:a}})}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ue(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.g="cid";Z.__cid.h=!0;Z.__cid.priorityOverride=0})(function(){return Qd.C})}();


Z.b.aev=["google"],function(){function a(q,u){var v=uh(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(m.hasOwnProperty(y))x=m[y];else{var B=a(q,w);if(B&&(x=v(B),m[y]=x,r.push(y),35<r.length)){var C=r.shift();delete m[C]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e(jp());Ha(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!bq(q,w)}function e(q){n.test(q)||(q="http://"+q);return Ch(Eh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return If(q,"value");case "button":return Jf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)Ho(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&If(w,u)||v}var n=/^https?:\/\//i,m={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Jf)||v;case "URL":var x;a:{var B=String(a(u,"elementUrl")||v||""),C=Eh(B),z=String(q.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,q.vtp_affiliatedDomains);break a;default:x=Ch(C,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var G=q.vtp_attribute,J=a(u,"element");D=J&&If(J,G)||v||""}return D;case "MD":var Q=q.vtp_mdValue,V=b(u,"MD",To);return Q&&V?Wo(V,Q)||
v:V||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:var ba=c(u,w,v);wp(ba,"aev",q.vtp_gtmEventId);return ba}})}();
Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Bd.sa]=null;c[Bd.vf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.b.awct=["google"],function(){var a=!1,b=[],c=function(h){var l=W("google_trackConversion"),n=h.gtm_onFailure;"function"==typeof l?l(h)||n():n()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(h){function l(){
q("gdpr_consent",Al());}function n(w){var y=!0;y&&b.push(m)}gk();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,
google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Yk()};h.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=mp(H.O)&&!1!==mp(H.O)&&(m.google_gtm_url_processor=function(w){return w=Hj(w)});var r=function(w){return function(y,x,B){var C="DATA_LAYER"==w?mp(B):h[x];C&&(m[y]=C)}},t=r("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&
(t=r(h.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(w){return{value:w.price,
quantity:w.quantity,item_id:w.id}})));var q=function(w,y){void 0!==y&&((m.google_additional_conversion_params=m.google_additional_conversion_params||{})[w]=y)},u=function(w){return function(y,x,B,C){var z="DATA_LAYER"==w?mp(B):h[x];C(z)&&q(y,z)}};h.vtp_transportUrl&&(m.google_transport_url=h.vtp_transportUrl);var v=Kk(h.vtp_transportUrl,"/pagead/conversion_async.js");v||(v=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
h.vtp_enableNewCustomerReporting&&(t=u(h.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!h.hasOwnProperty("vtp_enableConversionLinker")||h.vtp_enableConversionLinker?(h.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=h.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===
Ci(!1)._up&&q("gtm_up","1");l();(function(){Zf()?hg(function(){l();var w=fg(H.o),y=!w&&void 0!=mp(H.O)&&!1!==mp(H.O);!h.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");q("gcs",gg());n(w);w||bg(function(){l();m=E(m);!h.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;q("gcs",gg());q("gcu","1");n(!0)},H.o)},[H.o]):n(!0)})();a||(a=!0,U(v,f(),e(v)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();
Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var n=c[g].value;a.vtp_replaceAfterMatch&&(n=String(b).replace(l,n));f=n;break}}wp(f,"remm",a.vtp_gtmEventId);return f})}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=cq(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;wp(d,"smm",a.vtp_gtmEventId);return d})}();





Z.b.zone=[],function(){function a(r){for(var t=r.vtp_boundaries||[],q=0;q<t.length;q++)if(!t[q])return!1;return!0}function b(r){var t=Qd.C,q=t+":"+r.vtp_gtmTagId,u=mp("gtm.uniqueEventId")||0,v=Qj(function(){return new g}),w=a(r),y=r.vtp_enableTypeRestrictions?r.vtp_whitelistedTypes.map(function(G){return G.typeId}):null;y=y&&Za(y,f);if(v.registerZone(q,u,w,y))for(var x=r.vtp_childContainers.map(function(G){return G.publicId}),B=0;B<x.length;B++){var C=String(x[B]);if(v.registerChild(C,t,q)){var z=
0!==C.indexOf("GTM-");if(z){var D=function(G,J){np(arguments)};D("js",new Date);n?(D("config",C),l||up(C,z)):(R.addTargetToGroup(C),Km({},C))}else up(C,z)}}}var c={active:!1,isAllowed:function(){return!1},ih:function(){return!1}},d={active:!0,isAllowed:function(){return!0},ih:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.a={};this.i={}};g.prototype.checkState=function(r,t){var q=
this.a[r];if(!q)return d;var u=this.checkState(q.Ne,t);if(!u.active)return c;for(var v=[],w=0;w<q.Nd.length;w++){var y=this.i[q.Nd[w]];y.vb(t)&&v.push(y)}return v.length?{active:!0,isAllowed:function(x,B){B=B||[];var C=u.isAllowed;if(!C(x,B))return!1;for(var z=0;z<v.length;++z)if(v[z].isAllowed(x,B))return!0;return!1}}:c};g.prototype.unregisterChild=function(r){delete this.a[r]};g.prototype.registerZone=function(r,t,q,u){var v=this.i[r];if(v)return v.m(t,q),!1;if(!q)return!1;this.i[r]=new h(t,u);
return!0};g.prototype.registerChild=function(r,t,q){var u=this.a[r];if(!u&&R[r]||u&&u.Ne!==t)return!1;if(u)return u.Nd.push(q),!1;this.a[r]={Ne:t,Nd:[q]};return!0};var h=function(r,t){this.a=[{eventId:r,vb:!0}];this.i=null;if(t){this.i={};for(var q=0;q<t.length;q++)this.i[t[q]]=!0}};h.prototype.m=function(r,t){var q=this.a[this.a.length-1];r<=q.eventId||q.vb!=t&&this.a.push({eventId:r,vb:t})};h.prototype.vb=function(r){if(!this.a||0==this.a.length)return!1;for(var t=this.a.length-1;0<=t;t--)if(this.a[t].eventId<=
r)return this.a[t].vb;return!1};h.prototype.isAllowed=function(r,t){t=t||[];if(!this.i||e[r]||this.i[r])return!0;for(var q=0;q<t.length;++q)if(this.i[t[q]])return!0;return!1};var l=!1;var n=!0;n=!1;var m=function(r){b(r);M(r.vtp_gtmOnSuccess)};Z.__zone=m;Z.__zone.g="zone";Z.__zone.h=!0;Z.__zone.priorityOverride=0}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=L.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var m=h.getAttribute("data-gtmsrc");m&&(n.src=m,Bf(n,l));d.insertBefore(n,null);m||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){M(g)}}}var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=xp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.od,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Kf(g),h,e)()}else hp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();






Z.b.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.eh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Lf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=Eo("lcl",h?"nv.mwt":"mwt",0),n;n=h?Eo("lcl","nv.ids",[]):Eo("lcl","ids",[]);if(n.length){var m=Ao(g,"gtm.linkClick",n);if(b(f,g,c)&&!h&&l&&g.href){var r=String(vp(g,"rel")||""),t=!!Ja(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var q=W((vp(g,"target")||"_self").substring(1)),u=!0;if(np(m,ro(function(){var v;if(v=u&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.eh=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(q.location.href=vp(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else np(m,function(){},l||2E3);return!0}}};Gf(c,"click",e,!1);Gf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=vp(d,"href"),g=f.indexOf("#"),h=vp(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=lp(f),n=lp(e.location);return l!==n}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(n){return Math.max(f,n)};Do("lcl","mwt",h,0);e||Do("lcl","nv.mwt",h,0)}var l=function(n){n.push(g);return n};Do("lcl","ids",l,[]);e||Do("lcl","nv.ids",l,[]);sp("lcl")||(a(),tp("lcl"));M(c.vtp_gtmOnSuccess)})}();


var $r={};$r.macro=function(a){if(xo.Xc.hasOwnProperty(a))return xo.Xc[a]},$r.onHtmlSuccess=xo.qe(!0),$r.onHtmlFailure=xo.qe(!1);$r.dataLayer=qh;$r.callback=function(a){Jg.hasOwnProperty(a)&&Fa(Jg[a])&&Jg[a]();delete Jg[a]};function as(){R[Qd.C]=$r;Xa(Kg,Z.b);td=td||xo;ud=Md}
function bs(){Of.gtm_3pds=!0;Of.gtag_cs_api=!0;R=A.google_tag_manager=A.google_tag_manager||{};yl();if(R[Qd.C]){var a=R.zones;a&&a.unregisterChild(Qd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)md.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)pd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)od.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var m=l[n],r={},t=0;t<m.length;t++)r[m[t][0]]=Array.prototype.slice.call(m[t],1);nd.push(r)}rd=Z;sd=Xp;var q=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Gn();Ud=new Td(q);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Kg[x]=w}Jn(v);as();wo();
Sj=!1;Tj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Vj();else{Gf(L,"DOMContentLoaded",Vj);Gf(L,"readystatechange",Vj);if(L.createEventObject&&L.documentElement.doScroll){var B=!0;try{B=!A.frameElement}catch(G){}B&&Wj()}Gf(A,"load",Vj)}Zm=!1;"complete"===L.readyState?an():Gf(A,"load",an);
a:{if(!eh)break a;A.setInterval(fh,864E5);}Hg=(new Date).getTime();}}
(function(a){a()})(bs);

})()
