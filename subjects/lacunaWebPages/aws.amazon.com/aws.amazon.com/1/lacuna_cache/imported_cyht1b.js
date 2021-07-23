// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
var aws_sc = {
  mode: "production",
  awsSCVersion: "ver. 2.0.2",
  visitorNamespace: "amazonwebservices",
  trackingServer: "amazonwebservices.d2.sc.omtrdc.net",
  registrationStatus: "",
  munchkinID: "",
  isFromConsole: false,
  reportSuites: {
    DEV: "awsamazonalldev2",
    PROD: "awsamazonallprod1"
  },
  links: [{
    lhref: "portal.aws.amazon.com/gp/aws/manageyouraccount",
    pluginName: "initRegistration"
  }, {
    lhref: "console.aws.amazon.com",
    pluginName: "initRegistration"
  }, {
    lhref: "portal.aws.amazon.com",
    pluginName: "initRegistration"
  }, {
    lhref: "signin.aws.amazon.com",
    pluginName: "initRegistration"
  }, {
    lhref: "aws.amazon.com/support/",
    pluginName: "initRegistration"
  }, {
    lhref: "aws.amazon.com/gp/aws/developer/registration/index",
    pluginName: "initRegistration"
  }, {
    lhref: "aws.amazon.com/gp/aws/developer/account/index",
    pluginName: "initRegistration"
  }, {
    lhref: "docs.aws.amazon.com",
    pluginName: "htmlDocumentHandler"
  }],
  awsPublicDomains: "aws.amazon.com,aws.amazon.com.,aws-portal.amazon.com,amazonwebservices.com,docs.aws.amazon.com,elasticbeanstalk.com,amazonaws.com,sesblog.amazon.com,java.awsblog.com,mobile.awsblog.com,ruby.awsblog.com,portal.aws.amazon.com,apn-portal.com,aws-partner-directory.com,awstraining.csod.com,amazonaws.cn,www.aws.training,awsevents.com,qwiklabs.com,qwiklab.com,awseducate.com,console.aws.amazon.com,gamedev.amazon.com,awsloft.london,awssummit.london,awssummit.kr,awscloud.com,www2.aws.training,kiku.aws.training,quicksight.aws,amazonlightsail.com,chime.aws,amazonaws-china.com,partnercentral.awspartner.com,buildon.aws,awsloft-dublin.com,amazongames.com,calculator.aws,allthingsdistributed.com,atlas.aws,newworld.com,floor28.co.il,iotatlas.net,iotatlas.io,playthegrandtourgame.com,www.playthegrandtourgame.com,opendistro.github.io,intersect.aws,aws-startuphub.com,amazon.care"
};
aws_sc.isFromConsole = /^https?:\/\/[a-zA-Z0-9_\.\-]*console\.(aws\.amazon\.com|amazonaws\.cn)($|\/)/.test(document.referrer.toString());
aws_sc.getAccount = function() {
  var ret = this.reportSuites.DEV;
  var regExp = new RegExp("(" + this.awsPublicDomains.split(",").join("$|") + "$)", "gi");
  var isAWSPublicDomain = window.location.hostname.match(regExp) ? true : false;
  var regStatus = this.getCookie("regStatus");
  if (aws_sc.isFromConsole && regStatus !== "registered") {
    regStatus = "registered"
  }
  aws_sc.registrationStatus = regStatus ? regStatus : "pre-register";
  var isDev = this.mode === "dev" ? true : false;
  if (isAWSPublicDomain && !isDev) {
    ret = this.reportSuites.PROD
  }
  return ret
};
aws_sc.getCookie = function(cn) {
  var v = document.cookie.split(cn + "=")[1];
  if (v) {
    v = unescape(v.split(";")[0])
  }
  if (v && v.length > 0) {
    return v
  }
};
aws_sc.setCookie = function(cookie, value) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[2873:3115]", functionData => eval(functionData))};
aws_sc.cleanNonLocalizedPath = function(str) {
  str = str.replace(/(\/|\.\w+|\/index\.\w+)$/, "");
  if (str === "") {
    str = "null"
  }
  return str
};
var s_account = aws_sc.getAccount();
var s = s_gi(s_account);
s.server = window.location.hostname;
s.charSet = "UTF-8";
s.currencyCode = "USD";
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,txt,msi,mpb";
s.linkInternalFilters = "javascript:," + aws_sc.awsPublicDomains + ",youtube.com";
s.linkLeaveQueryString = false;
s.linkTrackVars = "prop12,prop29,prop39,prop41,prop50,prop61,prop62,eVar12,eVar28,eVar29,eVar39,eVar41,eVar50,eVar61,eVar62";
s.linkTrackEvents = "None";
s.useForcedLinkTracking = false;
s.visitorNamespace = aws_sc.visitorNamespace;
s.trackingServer = aws_sc.trackingServer;
aws_sc.resetLinkVars = "prop12,prop29,prop39,prop41,prop50,prop61,prop62,eVar12,eVar28,eVar29,eVar39,eVar41,eVar50,eVar61,eVar62";
s.ActionDepthTest = true;
s.userTypeFlag = true;
s._tpDST = {
  2012: "3/11,11/4",
  2013: "3/10,11/3",
  2014: "3/9,11/2",
  2015: "3/8,11/1",
  2016: "3/13,11/6",
  2017: "3/12,11/5",
  2018: "3/11,11/4",
  2019: "3/10,11/3"
};
aws_sc.initSearch = function(evt, data) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[4398:5629]", functionData => eval(functionData))};
aws_sc.trackRating = function(evt, data) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[5672:6079]", functionData => eval(functionData))};
aws_sc.attachCustomEvents = function() {
  if (typeof jQuery !== "undefined") {
    if (jQuery.fn.on) {
      jQuery(document).on("custom_aws_search_after-display-results", "#aws-search-result, #withScriptBody", aws_sc.initSearch);
      jQuery(document).on("custom_aws_f1-stats-rating-submit", ".m-f1-stats-rating", aws_sc.trackRating)
    } else if (jQuery.fn.bind) {
      jQuery("#withScriptBody").bind("custom_aws_search_after-display-results", aws_sc.initSearch)
    }
  }
}();
s._channelDomain = "Search Engine|google.com,about.com,altavista.com,ask.com,baidu.com,excite.com,infoseek.com,khoj.com,lycos.com,msn.com,bing.com,yahoo.com>Social|facebook.com,twitter.com,digg.com,linkedin.com,myspace.com,youtube.com,plus.google.com,tumblr.com,diigo.com,yelp.com,livejournal.com,blogspot.com,wordpress.com,stumbleupon.com,reddit.com,delicious.com,flickr.com,vimeo.com,t.co>News Sites|cnn.com,msn.com,nytimes.com,foxnews.com";
s._channelParameter = "External Campaign|sc_channel>Internal Campaign|sc_ichannel";
s._channelPattern = "Paid Search|ps,PS>Social Media|sm,SM>Banner|ba,BA>Email|em,EM>Webinar|WE,we>Amazon Internal|EL,el>House Ads|HA,ha";
s.usePlugins = true;

function s_doPlugins() {
  s.plugins = "";
  s.userType();
  if (s.linkType == "d") {
    s.awsDownloadLinkHandler(s.linkURL)
  } else if (s.linkType == "o" || s.linkType == "0") {
    s.lhref = s.linkURL;
    if (s.lhref) {
      s.lhtype = s.linkType;
      for (var i = 0; i < aws_sc.links.length; i++) {
        if (s.lhref.indexOf(aws_sc.links[i].lhref) > -1) {
          s.linkType = "o";
          s[aws_sc.links[i].pluginName](s.lhref);
          break
        }
      }
    }
  }
  if (!s.pageType && !s.pageName) {
    s.pageName = aws_sc.cleanNonLocalizedPath(window.location.hostname + window.location.pathname).toLowerCase()
  }
  s.eVar35 = s.prop35 = s.getDaysSinceLastVisit("s_dslv");
  s.eVar8 = s.getTimeParting("n", "+8");
  if (s.eVar8) {
    s.prop33 = s.eVar8
  }
  if (s.ActionDepthTest) {
    s.pdvalue = s.getActionDepth("s_depth");
    if (s.pdvalue) {
      s.prop47 = s.eVar47 = s.pdvalue
    }
    s.ActionDepthTest = false
  }
  s.prop48 = s.eVar48 = s.getVisitNum(365, "s_vn");
  s.eVar61 = location.href.toLowerCase();
  s.prop61 = s.eVar61;
  var sFidCookie = aws_sc.getCookie("s_fid");
  if (sFidCookie) {
    s.prop29 = sFidCookie;
    s.eVar29 = s.prop29
  }
  var sTidCookie = aws_sc.getCookie("aws-target-visitor-id");
  if (sTidCookie) {
    s.prop12 = sTidCookie;
    s.eVar12 = s.prop12
  }
  s.prop39 = location.hostname + location.pathname;
  s.eVar39 = s.prop39;
  aws_sc.aws_loc_code = function() {
    var path = window.location.href;
    var codes = ["ar", "en", "es", "de", "fr", "id", "it", "jp", "ko", "pt", "ru", "th", "tr", "vi", "cn", "tw"];
    for (var i = 0; i < codes.length; i++) {
      if (path.indexOf("/" + codes[i] + "/") > -1) {
        return codes[i]
      }
    }
    return "en"
  };
  s.prop41 = aws_sc.aws_loc_code();
  if (s.prop41) {
    s.eVar41 = s.prop41
  }
  if (window.location.href.indexOf("portal.aws.amazon.com") === -1 && window.location.href.indexOf("/registration-confirmation") === -1) {
    s.eVar25 = window.location.href.toLowerCase()
  }
  s.prop50 = s.eVar50 = "D=s_vi";
  s.prop13 = s.getNewRepeat(90);
  if (s.prop13) {
    s.eVar13 = s.prop13
  }
  s.prop71 = navigator.userAgent;
  if (s.prop71) {
    s.eVar71 = s.prop71
  }
  aws_sc.getConcatQueryParams = function(params, delimiter) {
    var concatValues = "";
    var isFirst = true;
    if (typeof params === "object") {
      for (var i = 0; i < params.length; i++) {
        var value = s.Util.getQueryParam(params[i]);
        if (value.length > 0) {
          concatValues += isFirst ? value : delimiter + value;
          isFirst = false
        }
      }
    }
    return concatValues
  };
  if (s.Util.getQueryParam("sc_channel")) {
    s.campaign = aws_sc.getConcatQueryParams(["sc_channel", "sc_campaign", "sc_publisher", "sc_medium", "sc_content", "sc_detail", "sc_segment", "sc_category", "sc_place", "sc_keyword", "sc_brand", "sc_outcome", "sc_matchtype", "sc_country", "sc_geo", "trk"], "|");
    s.campaign = s.getValOnce(s.campaign, "s_campaign", 0);
    if (s.campaign && s.campaign.length > 0) {
      s.prop63 = s.campaign;
      s.eVar45 = s.Util.getQueryParam("sc_channel");
      if (s.eVar45) s.prop45 = s.eVar45;
      s.eVar32 = s.Util.getQueryParam("sc_geo");
      if (s.eVar32) s.prop32 = s.eVar32;
      s.eVar51 = s.Util.getQueryParam("sc_campaign");
      if (s.eVar51) s.prop51 = s.eVar51;
      s.eVar52 = s.Util.getQueryParam("sc_publisher");
      if (s.eVar52) s.prop52 = s.eVar52;
      s.eVar53 = s.Util.getQueryParam("sc_medium");
      if (s.eVar53) s.prop53 = s.eVar53;
      s.eVar54 = s.Util.getQueryParam("sc_content");
      if (s.eVar54) s.prop54 = s.eVar54;
      s.eVar55 = s.Util.getQueryParam("sc_detail");
      if (s.eVar55) s.prop55 = s.eVar55;
      s.eVar20 = s.Util.getQueryParam("sc_segment");
      if (s.eVar20) s.prop20 = s.eVar20;
      s.eVar21 = s.Util.getQueryParam("sc_category");
      if (s.eVar21) s.prop21 = s.eVar21;
      s.eVar36 = s.Util.getQueryParam("sc_brand");
      if (s.eVar36) s.prop36 = s.eVar36;
      s.eVar37 = s.Util.getQueryParam("sc_matchtype");
      if (s.eVar37) s.prop37 = s.eVar37;
      s.eVar38 = s.Util.getQueryParam("sc_country");
      if (s.eVar38) s.prop38 = s.eVar38;
      s.eVar34 = s.Util.getQueryParam("sc_outcome");
      if (s.eVar34) s.prop31 = s.eVar34;
      s.eVar5 = s.Util.getQueryParam("trk");
      if (s.eVar5) s.prop30 = s.eVar5
    }
  }
  if (!s.campaign) {
    s.eVar60 = aws_sc.getConcatQueryParams(["sc_ichannel", "sc_icampaign", "sc_icontent", "sc_iplace", "sc_idetail", "sc_ipage", "sc_isegment", "sc_icountry", "sc_iproduct", "sc_icategory", "sc_icampaigntype", "trk"], "|");
    s.eVar60 = s.getValOnce(s.eVar60, "s_eVar60", 0)
  }
  if (s.eVar60) {
    s.prop60 = s.eVar60;
    s.eVar24 = s.Util.getQueryParam("sc_ichannel");
    if (s.eVar24) s.prop24 = s.eVar24;
    s.eVar56 = s.Util.getQueryParam("sc_icampaign");
    if (s.eVar56) s.prop56 = s.eVar56;
    s.eVar57 = s.Util.getQueryParam("sc_icontent");
    if (s.eVar57) s.prop57 = s.eVar57;
    s.eVar58 = s.Util.getQueryParam("sc_iplace");
    if (s.eVar58) s.prop58 = s.eVar58;
    s.eVar59 = s.Util.getQueryParam("sc_idetail");
    if (s.eVar59) s.prop59 = s.eVar59;
    s.eVar14 = s.Util.getQueryParam("sc_ipage");
    if (s.eVar14) s.prop14 = s.eVar14;
    s.eVar15 = s.Util.getQueryParam("sc_isegment");
    if (s.eVar15) s.prop15 = s.eVar15;
    s.eVar16 = s.Util.getQueryParam("sc_icountry");
    if (s.eVar16) s.prop16 = s.eVar16;
    s.eVar17 = s.Util.getQueryParam("sc_iproduct");
    if (s.eVar17) s.prop17 = s.eVar17;
    s.eVar18 = s.Util.getQueryParam("sc_icategory");
    if (s.eVar18) s.prop18 = s.eVar18;
    s.eVar19 = s.Util.getQueryParam("sc_icampaigntype");
    if (s.eVar19) s.prop19 = s.eVar19;
    s.eVar5 = s.Util.getQueryParam("trk");
    if (s.eVar5) s.prop30 = s.eVar5
  }
  if (aws_sc.registrationStatus) {
    s.eVar62 = aws_sc.registrationStatus;
    var c = new Date;
    c.setDate(c.getDate() + 999);
    s.c_w("regStatus", s.eVar62, c);
    s.prop62 = s.eVar62
  }
  if (s.channel) {
    s.eVar42 = s.channel
  }
  if (s.eVar42) {
    s.prop42 = s.eVar42
  }
  if (s.hier1) {
    s.eVar43 = s.hier1
  }
  if (s.eVar43) {
    s.prop43 = s.eVar43
  }
  if (s.Util.getQueryParam("sc_ichannel")) {
    s.channelManager("sc_ichannel")
  } else {
    s.channelManager("sc_channel")
  }
  if (s._channel == "Direct Load") {
    s._channel = s._campaign = "Direct"
  }
  if (s._channel == "Search Engine") {
    s._campaign = "organic : " + s._campaign
  }
  if (s._channel == "Paid Search") {
    s._channel = "Paid Search Campaign"
  }
  if (s._campaign == "direct") {
    s._channel = s._campaign = "Direct";
    s.referrer = ""
  }
  s.eVar30 = s._channel;
  s.eVar31 = s._campaign;
  s.prop11 = aws_sc.awsSCVersion;
  if (aws_sc.isFromConsole) {
    s.eVar2 = document.referrer.toString()
  }
}
aws_sc.munchkinID = aws_sc.getCookie("_mkto_trk");
if (aws_sc.munchkinID) {
  s.eVar28 = aws_sc.munchkinID
}
if (window.location.href.indexOf("/registration-confirmation") > -1 && aws_sc.getCookie("regStatus") === "registering") {
  aws_sc.setCookie("regStatus", "registered");
  s.pageName = "Registration Confirmation";
  if (aws_sc.getCookie("aws-reg-aid")) {
    aws_sc.accountID = aws_sc.getCookie("aws-reg-aid");
    s.prop1 = aws_sc.accountID
  }
  if (aws_sc.getCookie("aws-reg-guid")) {
    aws_sc.customerID = aws_sc.getCookie("aws-reg-guid");
    s.prop2 = aws_sc.customerID;
    document.cookie = "aws-reg-guid=; domain=amazon.com; path=/; secure"
  }
  s.events = "event65,event96:" + aws_sc.customerID;
  s.eVar62 = "registered";
  aws_sc.registrationStatus = "registered";
  setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[14924:15043]", functionData => eval(functionData))}, 0)
}
s.doPlugins = s_doPlugins;
! function() {
  var MediaModuleEventDelegator = function(Media) {
    var CUSTOM_EVENT_NAME = "custom_aws_video";
    var openVideos = {};
    return {
      listen: function() {
        var that = this;
        document.addEventListener(CUSTOM_EVENT_NAME, function(e) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[15347:15448]", functionData => eval(functionData))}, false)
      },
      delegateEvent: function(e) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[15499:15911]", functionData => eval(functionData))},
      play: function(e, mediaName) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[15948:16236]", functionData => eval(functionData))},
      pause: function(e, mediaName) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[16274:16321]", functionData => eval(functionData))},
      seek: function(e, mediaName) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[16358:16405]", functionData => eval(functionData))},
      complete: function(e, mediaName) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[16446:16682]", functionData => eval(functionData))},
      setEVar: function(num, val) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[16718:16757]", functionData => eval(functionData))},
      clearEVar: function(num) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[16790:16828]", functionData => eval(functionData))}
    }
  };
  var MediaModuleController = {
    init: function() {
      if (!s.enableVideoTracking) {
        return
      }
      s.loadModule("Media");
      var Media = s.Media;
      Media.autoTrack = false;
      Media.trackVars = "events,prop61,eVar61,prop70,eVar70,eVar76,eVar77,eVar78,eVar79";
      Media.trackEvents = "event21,event22,event23,event24,event25,event26,event27";
      Media.trackMilestones = "25,50,75";
      Media.segmentByMilestones = true;
      Media.trackUsingContextData = true;
      Media.contextDataMapping = {
        "a.media.name": "eVar70,prop70",
        "a.media.segment": "eVar77",
        "a.contentType": "eVar78",
        "a.media.timePlayed": "event21",
        "a.media.view": "event22",
        "a.media.segmentView": "event23",
        "a.media.complete": "event27",
        "a.media.player.metadata": "prop61,eVar61,eVar76,eVar79",
        "a.media.milestones": {
          25: "event24",
          50: "event25",
          75: "event26"
        }
      };
      MediaModuleEventDelegator(Media).listen()
    }
  };
  aws_sc.MediaModuleEventDelegator = MediaModuleEventDelegator;
  aws_sc.MediaModuleController = MediaModuleController
}();
s.enableVideoTracking = true;
aws_sc.MediaModuleController.init();
s.apl = new Function("l", "v", "d", "u", "" + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo" + "r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe" + "rCase()));}}if(!m)l=l?l+d+v:v;return l;");
s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.inList = function(v, l, d, tlc, mt) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[18529:19045]", functionData => eval(functionData))};
s.getVisitNum = new Function("tp", "c", "c2", "" + "var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}" + "if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi" + "me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!" + "c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn=" + "'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi" + "t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els" + "e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri" + "ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);" + "s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)" + ";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
s.dimo = new Function("m", "y", "" + "var d=new Date(y,m+1,0);return d.getDate();");
s.endof = new Function("x", "" + "var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==" + "'m'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(" + "x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return " + "t;");
s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
s.getDaysSinceLastVisit = new Function("c", "" + "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT" + "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s" + "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f" + "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f" + "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);" + "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da" + "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day" + "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s." + "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c" + "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c" + "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur" + "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s" + "!=f5) return '';else return cval_s;");
s.getTimeParting = new Function("h", "z", "" + "var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont" + "h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['" + "Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda" + "y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp" + "DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea" + "r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)" + "{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT" + "imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d" + ".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P" + "M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");
s.getActionDepth = new Function("c", "" + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);" + "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}" + "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");
s.getValOnce = new Function("v", "c", "e", "t", "" + "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" + "0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e" + "==0?0:a);}return v==k?'':v");
s.repl = new Function("x", "o", "n", "" + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." + "substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.channelManager = function(a, b, c, d, e, f, g) {
  var s = this,
    h = new Date,
    i = 0,
    j, k, l, m, n, o, p, q, r, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V;
  U = s.getQueryParam ? 1 : 0;
  V = s.repl ? 1 : 0;
  if (e) {
    i = 1;
    if (s.c_r(e)) i = 0;
    h.setTime(h.getTime() + 18e5);
    s.c_w(e, 1, h);
    if (f && s.c_r("s_tbm" + e + f)) i = 0
  }
  j = s.referrer ? s.referrer : document.referrer;
  if (j == "Typed/Bookmarked") j = "";
  j = decodeURIComponent(j.toLowerCase());
  if (!j) k = 1;
  else {
    l = j.indexOf("?") > -1 ? j.indexOf("?") : j.length;
    m = j.substring(0, l);
    n = j.split("/");
    n = n[2].split("?");
    o = n[0].toLowerCase();
    p = s.linkInternalFilters.toLowerCase();
    p = p.split(",");
    for (q = 0; q < p.length; q++) {
      r = o.indexOf(p[q]) == -1 ? "" : j;
      if (r) break
    }
  }
  if (!r && !k) {
    t = j;
    u = o;
    w = "Other Natural Referrers";
    v = w + ": " + o;
    x = s.seList + ">" + s._extraSearchEngines;
    if (d == 1) {
      m = V ? s.repl(m, "oogle", "%") : s.replace(m, "oogle", "%");
      m = V ? s.repl(m, "ahoo", "^") : s.replace(m, "ahoo", "^");
      j = V ? s.repl(j, "as_q", "*") : s.replace(j, "as_q", "*")
    }
    y = x.split(">");
    for (z = 0; z < y.length; z++) {
      A = y[z];
      A = A.split("|");
      B = A[0].split(",");
      for (C = 0; C < B.length; C++) {
        D = m.indexOf(B[C]);
        if (D > -1) {
          if (A[2]) E = v = A[2];
          else E = o;
          if (d == 1) {
            E = V ? s.repl(E, "#", " - ") : s.replace(E, "#", " - ");
            j = V ? s.repl(j, "*", "as_q") : s.replace(j, "*", "as_q");
            E = V ? s.repl(E, "^", "ahoo") : s.replace(E, "^", "ahoo");
            E = V ? s.repl(E, "%", "oogle") : s.replace(E, "%", "oogle")
          }
          F = A[1].split(",");
          for (G = 0; G < F.length; G++) {
            if (j.indexOf(F[G] + "=") > -1 || j.indexOf("googlequicksearchbox") > -1 || j.indexOf("http://www.google.") == 0 || j.indexOf("https://www.google.") == 0 || j.indexOf("https://search.yahoo.com/") == 0 || j.indexOf("http://r.search.yahoo.com") == 0 || j.indexOf("https://www.bing.com") == 0) H = 1;
            I = U ? s.getQueryParam(F[G], "", j).toLowerCase() : s.Util.getQueryParam(F[G], j).toLowerCase();
            if (H || I) break
          }
        }
        if (H || I) break
      }
      if (H || I) break
    }
  }
  if (!r || g != "1") {
    J = a.split(",");
    for (var q in J)
      if (J.hasOwnProperty(q))
        if (U ? s.getQueryParam(J[q]) : s.Util.getQueryParam(J[q]))
          if (b) T = T ? T + b + (U ? s.getQueryParam(J[q]) : s.Util.getQueryParam(J[q])) : U ? s.getQueryParam(J[q]) : s.Util.getQueryParam(J[q]);
          else {
            T = U ? s.getQueryParam(J[q]) : s.Util.getQueryParam(J[q]);
            if (T) break
          } if (T) {
      v = T;
      if (E) w = "Paid Search";
      else w = "Unknown Paid Channel"
    }
    if (!T && E && H) {
      w = "Natural Search";
      v = w + ": " + E
    }
  }
  if (i && k && !T) t = u = v = w = "Typed/Bookmarked";
  J = s._channelDomain;
  if (J && o && !r) {
    K = J.split(">");
    for (L = 0; L < K.length; L++) {
      M = K[L] ? K[L].split("|") : "";
      N = M[1] ? M[1].split(",") : "";
      O = N.length;
      for (P = 0; P < O; P++) {
        Q = N[P].toLowerCase();
        R = ("/" + o).indexOf(Q);
        if (R > -1) {
          w = M[0];
          v = T ? v : M[0] + ": " + o;
          break
        }
      }
      if (R > -1) break
    }
  }
  J = s._channelParameter;
  if (J) {
    K = J.split(">");
    for (L = 0; L < K.length; L++) {
      M = K[L] ? K[L].split("|") : "";
      N = M[1] ? M[1].split(",") : "";
      O = N.length;
      for (P = 0; P < O; P++) {
        R = U ? s.getQueryParam(N[P]) : s.Util.getQueryParam(N[P]);
        if (R) {
          w = M[0];
          break
        }
      }
      if (R) break
    }
  }
  J = s._channelPattern;
  if (J) {
    K = J.split(">");
    for (L = 0; L < K.length; L++) {
      M = K[L] ? K[L].split("|") : "";
      N = M[1] ? M[1].split(",") : "";
      O = N.length;
      for (P = 0; P < O; P++) {
        Q = N[P].toLowerCase();
        R = T ? T.toLowerCase() : "";
        S = R.indexOf(Q);
        if (S == 0) {
          w = M[0];
          break
        }
      }
      if (S == 0) break
    }
  }
  S = w ? T + u + w + I : "";
  c = c ? c : "c_m";
  if (c != "0") S = s.getValOnce(S, c, 0);
  if (S) {
    s._campaignID = T ? T : "n/a";
    s._referrer = t ? t : "n/a";
    s._referringDomain = u ? u : "n/a";
    s._campaign = v ? v : "n/a";
    s._channel = w ? w : "n/a";
    s._partner = E ? E : "n/a";
    s._keywords = H ? I ? I : "Keyword Unavailable" : "n/a";
    if (f && w != "Typed/Bookmarked") {
      h.setTime(h.getTime() + f * 864e5);
      s.c_w("s_tbm" + e + f, 1, h)
    }
  } else s._campaignID = s._referrer = s._referringDomain = s._campaign = s._channel = s._partner = s._keywords = ""
};
s.seList = "google.,googlesyndication.com,.googleadservices.com|q,as_q|Google>bing.com|q|Bing>yahoo.com,yahoo.co.jp|p,va|Yahoo!>ask.jp,ask.co|q,ask|Ask>search.aol.,suche.aolsvc.de|q,query|AOL>altavista.co,altavista.de|q,r|AltaVista>.mywebsearch.com|searchfor|MyWebSearch>webcrawler.com|q|WebCrawler>wow.com|q|Wow>infospace.com|q|InfoSpace>blekko.com|q|Blekko>dogpile.com|q|DogPile>alhea.com|q|Alhea>duckduckgo.com|q|DuckDuckGo>info.com|qkw|Info.com>contenko.com|q|Contenko>baidu.com|word,wd|Baidu>daum.net,search.daum.net|q|Daum>icqit.com|q|icq>myway.com|searchfor|MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query,search|Netscape Search>reference.com|q|Reference.com>seznam|w|Seznam.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query|Tiscali>virgilio.it|qs|Virgilio>yandex|text|Yandex.ru>optimum.net|q|Optimum Search>search.earthlink.net|q|Earthlink>search.comcast.net|q|Comcast>libero.it|query|libero.it>excite.co|search|Excite>mail.ru|q|Mail.ru>isearch.avg.com|q|AVG>msn.com|q|MSN>seznam.cz|q|seznam.cz>so.com|q|so.com>ixquick.com|query|ixquick.com>sogou.com|query|sogou.com>360.cn|q|360.cn";
! function(global) {
  var STD_LINK_TRACK_VARS = "prop12,prop29,prop39,prop41,prop50,prop61,prop62,eVar12,eVar28,eVar29,eVar39,eVar41,eVar50,eVar61,eVar62,events";
  var LINK_TYPE_CUSTOM = "o";
  var LinkTrackUtils = {
    callLinkTrack: function(trackerVar, linkName, eVar, event, val) {
      trackerVar[eVar] = val;
      trackerVar.linkTrackVars = eVar + "," + STD_LINK_TRACK_VARS;
      trackerVar.events = event;
      trackerVar.linkTrackEvents = trackerVar.events;
      trackerVar.tl(trackerVar, LINK_TYPE_CUSTOM, linkName);
      this._lastVars = trackerVar.linkTrackVars;
      this._lastEvents = trackerVar.linkTrackEvents;
      this.clearVars(trackerVar)
    },
    clearVars: function(trackerVar) {
      trackerVar.linkTrackVars = "None";
      trackerVar.linkTrackEvents = "None"
    },
    _lastVars: "",
    _lastEvents: ""
  };
  global.LinkTrackUtils = LinkTrackUtils
}(aws_sc);
! function(global) {
  var LINK_NAME = "DOMComplete";
  var LINK_EVAR = "eVar63";
  var LINK_EVENT = "event33";
  var LinkTrackUtils;
  var PageLoadTracker = {
    init: function(Utils) {
      LinkTrackUtils = Utils;
      this.onDOMComplete(this.callWithLoadTime)
    },
    callWithLoadTime: function() {
      var t = this.getDOMCompleteTime();
      if (t && t > 0) {
        LinkTrackUtils.callLinkTrack(s, LINK_NAME, LINK_EVAR, LINK_EVENT, t)
      }
    },
    onDOMComplete: function(cb) {
      var ctx = this;
      if (document.readyState === "complete") {
        cb.call(ctx)
      } else {
        document.addEventListener("readystatechange", function() {
          if (document.readyState === "complete") {
            cb.call(ctx)
          }
        }, false)
      }
    },
    getDOMCompleteTime: function(w) {
      w = w || window;
      var t;
      if ("performance" in w && "timing" in w.performance) {
        var timing = w.performance.timing;
        if (timing.domComplete && timing.responseEnd) {
          t = timing.domComplete - timing.responseEnd
        }
      }
      return t
    }
  };
  global.PageLoadTracker = PageLoadTracker
}(aws_sc);
aws_sc.PageLoadTracker.init(aws_sc.LinkTrackUtils);
! function(global) {
  var LINK_NAME = "Directories Cards Interaction";
  var LINK_EVAR = "eVar91";
  var CUSTOM_CARDS_EVENTS_MAP = {
    "custom_libra-directories-cards_update": "event115",
    "custom_libra-directories-cards_reset": "event116",
    "custom_libra-directories-cards_initial-load": "event117"
  };
  var LinkTrackUtils;
  var DirectoriesCardsInteraction = {
    init: function(Utils) {
      LinkTrackUtils = Utils;
      this.addEventListeners()
    },
    addEventListeners: function() {
      Object.keys(CUSTOM_CARDS_EVENTS_MAP).forEach(function(customEvt) {
        document.addEventListener(customEvt, function(event) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[31805:31931]", functionData => eval(functionData))}, false)
      })
    }
  };
  global.DirectoriesCardsInteraction = DirectoriesCardsInteraction
}(aws_sc);
aws_sc.DirectoriesCardsInteraction.init(aws_sc.LinkTrackUtils);
! function(global) {
  var LINK_NAME = "ScrollDepth";
  var LINK_EVAR = "eVar64";
  var LINK_EVENT = "event34";
  var LinkTrackUtils;
  var ScrollDepthTracker = {
    init: function(Utils) {
      LinkTrackUtils = Utils;
      this.logScrollDepth()
    }, // Returns a delimited string of depths as percentage of the total page height
    getScrollDepthValue: function(arr, pageHeight) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[32488:32721]", functionData => eval(functionData))},
    getPageHeight: function(body, html) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[32763:32973]", functionData => eval(functionData))},
    onDOMContentLoaded: function(cb) {
      var ctx = this;
      if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
        cb.call(ctx)
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          cb.call(ctx)
        }, false)
      }
    },
    logScrollDepth: function() {
      if (!("scrollY" in window)) {
        return
      }
      var lastDepth = window.scrollY;
      var maxDepth = lastDepth;
      var initialDepth = lastDepth;

      function updateInitialDepth() {
        initialDepth = window.scrollY
      }
      this.onDOMContentLoaded(updateInitialDepth);
      var count = 0;
      document.addEventListener("scroll", function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[33726:33980]", functionData => eval(functionData))}, false);
      var that = this;

      function onUnload() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[34040:34268]", functionData => eval(functionData))}
      window.addEventListener("beforeunload", onUnload, false)
    }
  };
  global.ScrollDepthTracker = ScrollDepthTracker
}(aws_sc);
aws_sc.ScrollDepthTracker.init(aws_sc.LinkTrackUtils);
s.userType = function() {
  if (!this.userTypeFlag) {
    return
  }
  var s = this,
    subm, newu, pwd = document.getElementById("ap_password");
  s.userTypeFlag = false;
  if (pwd) {
    if (document.getElementById("signInSubmit")) {
      if (document.getElementById("ap_signin_existing_radio")) {
        if (window.addEventListener) {
          pwd.addEventListener("focus", function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[34850:34904]", functionData => eval(functionData))}, false)
        } else {
          pwd.parentNode.attachEvent("onfocus", s.userTypeHandler("event60"))
        }
      }
      newu = document.getElementById("ap_signin_create_radio");
      if (newu) {
        if (window.addEventListener) {
          newu.addEventListener("focus", function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[35199:35253]", functionData => eval(functionData))}, false)
        } else {
          rbn.attachEvent("onfocus", s.userTypeHandler("event61"))
        }
      }
    }
  }
};
s.userTypeHandler = function(evt) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[35411:35604]", functionData => eval(functionData))};
s.initRegistration = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[35638:36425]", functionData => eval(functionData))};
s.htmlDocumentHandler = function(href) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[36466:36569]", functionData => eval(functionData))};
s.awsDownloadLinkHandler = function(href) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[36613:37179]", functionData => eval(functionData))};
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 1.8.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement() {
  var a = this;
  a.version = "1.8.0";
  var h = window;
  h.s_c_in || (h.s_c_il = [], h.s_c_in = 0);
  a._il = h.s_c_il;
  a._in = h.s_c_in;
  a._il[a._in] = a;
  h.s_c_in++;
  a._c = "s_c";
  var n = h.AppMeasurement.Ob;
  n || (n = null);
  var p = h,
    l, r;
  try {
    for (l = p.parent, r = p.location; l && l.location && r && "" + l.location != "" + r && p.location && "" + l.location != "" + p.location && l.location.host == r.host;) p = l, l = p.parent
  } catch (s) {}
  a.P = function(a) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[37952:38007]", functionData => eval(functionData))};
  a.La = function(a) {
    return "" + parseInt(a) == "" + a
  };
  a.replace = function(a, b, d) {
    return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d)
  };
  a.escape = function(c) {
    var b, d;
    if (!c) return c;
    c = encodeURIComponent(c);
    for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
    return c
  };
  a.unescape = function(c) {
    if (!c) return c;
    c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
    try {
      return decodeURIComponent(c)
    } catch (b) {}
    return unescape(c)
  };
  a.vb = function() {
    var c = h.location.hostname,
      b = a.fpCookieDomainPeriods,
      d;
    b || (b = a.cookieDomainPeriods);
    if (c && !a.cookieDomain && !/^[0-9.]+$/.test(c) && (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
      for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
      a.cookieDomain = 0 < d ? c.substring(d) : c
    }
    return a.cookieDomain
  };
  a.c_r = a.cookieRead = function(c) {
    c = a.escape(c);
    var b = " " + a.d.cookie,
      d = b.indexOf(" " + c + "="),
      f = 0 > d ? d : b.indexOf(";", d);
    c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
    return "[[B]]" != c ? c : ""
  };
  a.c_w = a.cookieWrite = function(c, b, d) {
    var f = a.vb(),
      e = a.cookieLifetime,
      g;
    b = "" + b;
    e = e ? ("" + e).toUpperCase() : "";
    d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ? (d = new Date, d.setTime(d.getTime() + 1e3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
    return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
  };
  a.K = [];
  a.ia = function(c, b, d) {
    if (a.Ea) return 0;
    a.maxDelay || (a.maxDelay = 250);
    var f = 0,
      e = (new Date).getTime() + a.maxDelay,
      g = a.d.visibilityState,
      k = ["webkitvisibilitychange", "visibilitychange"];
    g || (g = a.d.webkitVisibilityState);
    if (g && "prerender" == g) {
      if (!a.ja)
        for (a.ja = 1, d = 0; d < k.length; d++) a.d.addEventListener(k[d], function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[40419:40572]", functionData => eval(functionData))});
      f = 1;
      e = 0
    } else d || a.p("_d") && (f = 1);
    f && (a.K.push({
      m: c,
      a: b,
      t: e
    }), a.ja || setTimeout(a.delayReady, a.maxDelay));
    return f
  };
  a.delayReady = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[40795:41140]", functionData => eval(functionData))};
  a.setAccount = a.sa = function(c) {
    var b, d;
    if (!a.ia("setAccount", arguments))
      if (a.account = c, a.allAccounts)
        for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
      else a.allAccounts = c.split(",")
  };
  a.foreachVar = function(c, b) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[41516:42149]", functionData => eval(functionData))};
  a.r = function(c, b, d, f, e) {
    var g = "",
      k, m, h, t, l = 0;
    "contextData" == c && (c = "c");
    if (b) {
      for (k in b)
        if (!(Object.prototype[k] || e && k.substring(0, e.length) != e) && b[k] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + k + ","))) {
          h = !1;
          if (l)
            for (m = 0; m < l.length; m++) k.substring(0, l[m].length) == l[m] && (h = !0);
          if (!h && ("" == g && (g += "&" + c + "."), m = b[k], e && (k = k.substring(e.length)), 0 < k.length))
            if (h = k.indexOf("."), 0 < h) m = k.substring(0, h), h = (e ? e : "") + m + ".", l || (l = []), l.push(h), g += a.r(m, b, d, f, h);
            else if ("boolean" == typeof m && (m = m ? "true" : "false"), m) {
            if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (h = k.substring(0, 4), t = k.substring(4), k) {
              case "transactionID":
                k = "xact";
                break;
              case "channel":
                k = "ch";
                break;
              case "campaign":
                k = "v0";
                break;
              default:
                a.La(t) && ("prop" == h ? k = "c" + t : "eVar" == h ? k = "v" + t : "list" == h ? k = "l" + t : "hier" == h && (k = "h" + t, m = m.substring(0, 255)))
            }
            g += "&" + a.escape(k) + "=" + a.escape(m)
          }
        }
      "" != g && (g += "&." + c)
    }
    return g
  };
  a.usePostbacks = 0;
  a.yb = function() {
    var c = "",
      b, d, f, e, g, k, m, h, l = "",
      p = "",
      q = e = "";
    if (a.lightProfileID) b = a.O, (l = a.lightTrackVars) && (l = "," + l + "," + a.na.join(",") + ",");
    else {
      b = a.g;
      if (a.pe || a.linkType) l = a.linkTrackVars, p = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (l = a[e].Mb, p = a[e].Lb));
      l && (l = "," + l + "," + a.G.join(",") + ",");
      p && (p = "," + p + ",", l && (l += ",events,"));
      a.events2 && (q += ("" != q ? "," : "") + a.events2)
    }
    if (a.visitor && a.visitor.getCustomerIDs) {
      e = n;
      if (g = a.visitor.getCustomerIDs())
        for (d in g) Object.prototype[d] || (f = g[d], "object" == typeof f && (e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState)));
      e && (c += a.r("cid", e))
    }
    a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.r("d", a.AudienceManagement.getEventCallConfigParams()));
    for (d = 0; d < b.length; d++) {
      e = b[d];
      g = a[e];
      f = e.substring(0, 4);
      k = e.substring(4);
      !g && "events" == e && q && (g = q, q = "");
      if (g && (!l || 0 <= l.indexOf("," + e + ","))) {
        switch (e) {
          case "supplementalDataID":
            e = "sdid";
            break;
          case "timestamp":
            e = "ts";
            break;
          case "dynamicVariablePrefix":
            e = "D";
            break;
          case "visitorID":
            e = "vid";
            break;
          case "marketingCloudVisitorID":
            e = "mid";
            break;
          case "analyticsVisitorID":
            e = "aid";
            break;
          case "audienceManagerLocationHint":
            e = "aamlh";
            break;
          case "audienceManagerBlob":
            e = "aamb";
            break;
          case "authState":
            e = "as";
            break;
          case "pageURL":
            e = "g";
            255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
            break;
          case "pageURLRest":
            e = "-g";
            break;
          case "referrer":
            e = "r";
            break;
          case "vmk":
          case "visitorMigrationKey":
            e = "vmt";
            break;
          case "visitorMigrationServer":
            e = "vmf";
            a.ssl && a.visitorMigrationServerSecure && (g = "");
            break;
          case "visitorMigrationServerSecure":
            e = "vmf";
            !a.ssl && a.visitorMigrationServer && (g = "");
            break;
          case "charSet":
            e = "ce";
            break;
          case "visitorNamespace":
            e = "ns";
            break;
          case "cookieDomainPeriods":
            e = "cdp";
            break;
          case "cookieLifetime":
            e = "cl";
            break;
          case "variableProvider":
            e = "vvp";
            break;
          case "currencyCode":
            e = "cc";
            break;
          case "channel":
            e = "ch";
            break;
          case "transactionID":
            e = "xact";
            break;
          case "campaign":
            e = "v0";
            break;
          case "latitude":
            e = "lat";
            break;
          case "longitude":
            e = "lon";
            break;
          case "resolution":
            e = "s";
            break;
          case "colorDepth":
            e = "c";
            break;
          case "javascriptVersion":
            e = "j";
            break;
          case "javaEnabled":
            e = "v";
            break;
          case "cookiesEnabled":
            e = "k";
            break;
          case "browserWidth":
            e = "bw";
            break;
          case "browserHeight":
            e = "bh";
            break;
          case "connectionType":
            e = "ct";
            break;
          case "homepage":
            e = "hp";
            break;
          case "events":
            q && (g += ("" != g ? "," : "") + q);
            if (p)
              for (k = g.split(","), g = "", f = 0; f < k.length; f++) m = k[f], h = m.indexOf("="), 0 <= h && (m = m.substring(0, h)), h = m.indexOf(":"), 0 <= h && (m = m.substring(0, h)), 0 <= p.indexOf("," + m + ",") && (g += (g ? "," : "") + k[f]);
            break;
          case "events2":
            g = "";
            break;
          case "contextData":
            c += a.r("c", a[e], l, e);
            g = "";
            break;
          case "lightProfileID":
            e = "mtp";
            break;
          case "lightStoreForSeconds":
            e = "mtss";
            a.lightProfileID || (g = "");
            break;
          case "lightIncrementBy":
            e = "mti";
            a.lightProfileID || (g = "");
            break;
          case "retrieveLightProfiles":
            e = "mtsr";
            break;
          case "deleteLightProfiles":
            e = "mtsd";
            break;
          case "retrieveLightData":
            a.retrieveLightProfiles && (c += a.r("mts", a[e], l, e));
            g = "";
            break;
          default:
            a.La(k) && ("prop" == f ? e = "c" + k : "eVar" == f ? e = "v" + k : "list" == f ? e = "l" + k : "hier" == f && (e = "h" + k, g = g.substring(0, 255)))
        }
        g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
      }
      "pev3" == e && a.e && (c += a.e)
    }
    return c
  };
  a.D = function(a) {
    var b = a.tagName;
    if ("undefined" != "" + a.Rb || "undefined" != "" + a.Hb && "HTML" != ("" + a.Hb).toUpperCase()) return "";
    b = b && b.toUpperCase ? b.toUpperCase() : "";
    "SHAPE" == b && (b = "");
    b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
    return b
  };
  a.Ha = function(a) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[49688:50180]", functionData => eval(functionData))};
  a.L = function(c) {
    var b = a.D(c),
      d, f, e = "",
      g = 0;
    return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "	", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Ha(c), e) ? {
      id: e.substring(0, 100),
      type: g
    } : 0
  };
  a.Pb = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[50784:51101]", functionData => eval(functionData))};
  a.Gb = function() {
    var c, b, d = a.linkObject,
      f = a.linkType,
      e = a.linkURL,
      g, k;
    a.oa = 1;
    d || (a.oa = 0, d = a.clickObject);
    if (d) {
      c = a.D(d);
      for (b = a.L(d); d && !b && "BODY" != c;)
        if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.D(d), b = a.L(d);
      b && "BODY" != c || (d = 0);
      if (d && !a.linkObject) {
        var m = d.onclick ? "" + d.onclick : "";
        if (0 <= m.indexOf(".tl(") || 0 <= m.indexOf(".trackLink(")) d = 0
      }
    } else a.oa = 1;
    !e && d && (e = a.Ha(d));
    e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
    if (!f && e) {
      var l = 0,
        p = 0,
        n;
      if (a.trackDownloadLinks && a.linkDownloadFileTypes)
        for (m = e.toLowerCase(), g = m.indexOf("?"), k = m.indexOf("#"), 0 <= g ? 0 <= k && k < g && (g = k) : g = k, 0 <= g && (m = m.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), k = 0; k < g.length; k++)(n = g[k]) && m.substring(m.length - (n.length + 1)) == "." + n && (f = "d");
      if (a.trackExternalLinks && !f && (m = e.toLowerCase(), a.Ka(m) && (a.linkInternalFilters || (a.linkInternalFilters = h.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), l = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
        for (k = 0; k < g.length; k++) n = g[k], 0 <= m.indexOf(n) && (p = 1);
        p ? l && (f = "e") : l || (f = "e")
      }
    }
    a.linkObject = d;
    a.linkURL = e;
    a.linkType = f;
    if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), h.s_objectID && (b.id = h.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
  };
  a.zb = function() {
    var c = a.oa,
      b = a.linkType,
      d = a.linkURL,
      f = a.linkName;
    b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
    a.abort && (c = 0);
    if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
      var b = {},
        d = 0,
        e = a.cookieRead("s_sq"),
        g = e ? e.split("&") : 0,
        k, m, h, e = 0;
      if (g)
        for (k = 0; k < g.length; k++) m = g[k].split("="), f = a.unescape(m[0]).split(","), m = a.unescape(m[1]), b[m] = f;
      f = a.account.split(",");
      k = {};
      for (h in a.contextData) h && !Object.prototype[h] && "a.activitymap." == h.substring(0, 14) && (k[h] = a.contextData[h], a.contextData[h] = "");
      a.e = a.r("c", k) + (a.e ? a.e : "");
      if (c || a.e) {
        c && !a.e && (e = 1);
        for (m in b)
          if (!Object.prototype[m])
            for (h = 0; h < f.length; h++)
              for (e && (g = b[m].join(","), g == a.account && (a.e += ("&" != m.charAt(0) ? "&" : "") + m, b[m] = [], d = 1)), k = 0; k < b[m].length; k++) g = b[m][k], g == f[h] && (e && (a.e += "&u=" + a.escape(g) + ("&" != m.charAt(0) ? "&" : "") + m + "&u=0"), b[m].splice(k, 1), d = 1);
        c || (d = 1);
        if (d) {
          e = "";
          k = 2;
          !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), k = 1);
          for (m in b) !Object.prototype[m] && 0 < k && 0 < b[m].length && (e += (e ? "&" : "") + a.escape(b[m].join(",")) + "=" + a.escape(m), k--);
          a.cookieWrite("s_sq", e)
        }
      }
    }
    return c
  };
  a.Ab = function() {
    if (!a.Kb) {
      var c = new Date,
        b = p.location,
        d, f, e = f = d = "",
        g = "",
        k = "",
        h = "1.2",
        l = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
        n = "",
        q = "";
      if (c.setUTCDate && (h = "1.3", 0..toPrecision && (h = "1.5", c = [], c.forEach))) {
        h = "1.6";
        f = 0;
        d = {};
        try {
          f = new Iterator(d), f.next && (h = "1.7", c.reduce && (h = "1.8", h.trim && (h = "1.8.1", Date.parse && (h = "1.8.2", Object.create && (h = "1.8.5")))))
        } catch (r) {}
      }
      d = screen.width + "x" + screen.height;
      e = navigator.javaEnabled() ? "Y" : "N";
      f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
      g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
      k = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
      try {
        a.b.addBehavior("#default#homePage"), n = a.b.Qb(b) ? "Y" : "N"
      } catch (s) {}
      try {
        a.b.addBehavior("#default#clientCaps"), q = a.b.connectionType
      } catch (u) {}
      a.resolution = d;
      a.colorDepth = f;
      a.javascriptVersion = h;
      a.javaEnabled = e;
      a.cookiesEnabled = l;
      a.browserWidth = g;
      a.browserHeight = k;
      a.connectionType = q;
      a.homepage = n;
      a.Kb = 1
    }
  };
  a.Q = {};
  a.loadModule = function(c, b) {
    var d = a.Q[c];
    if (!d) {
      d = h["AppMeasurement_Module_" + c] ? new h["AppMeasurement_Module_" + c](a) : {};
      a.Q[c] = a[c] = d;
      d.cb = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[56452:56481]", functionData => eval(functionData))};
      d.ib = function(b) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[56508:56603]", functionData => eval(functionData))};
      try {
        Object.defineProperty ? Object.defineProperty(d, "onLoad", {
          get: d.cb,
          set: d.ib
        }) : d._olc = 1
      } catch (f) {
        d._olc = 1
      }
    }
    b && (a[c + "_onLoad"] = b, a.ia(c + "_onLoad", [a, d], 1) || b(a, d))
  };
  a.p = function(c) {
    var b, d;
    for (b in a.Q)
      if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
    return 0
  };
  a.Cb = function() {
    var c = Math.floor(1e13 * Math.random()),
      b = a.visitorSampling,
      d = a.visitorSamplingGroup,
      d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
      f = a.cookieRead(d);
    if (b) {
      b *= 100;
      f && (f = parseInt(f));
      if (!f) {
        if (!a.cookieWrite(d, c)) return 0;
        f = c
      }
      if (f % 1e4 > b) return 0
    }
    return 1
  };
  a.R = function(c, b) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[57562:57893]", functionData => eval(functionData))};
  a.Ua = function(c, b) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[57919:58086]", functionData => eval(functionData))};
  a.ub = function(a) {
    var b, d, f, e, g, k = 0,
      h, l = "",
      n = "";
    if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (h = b.substring(d + 1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? k = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (k = ",p,ei,"), k && h)))) {
      if ((a = h.split("&")) && 1 < a.length) {
        for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= k.indexOf("," + e.substring(0, d) + ",") ? l += (l ? "&" : "") + e : n += (n ? "&" : "") + e;
        l && n ? h = l + "&" + n : n = ""
      }
      d = 253 - (h.length - n.length) - b.length;
      a = b + (0 < d ? g.substring(0, d) : "") + "?" + h
    }
    return a
  };
  a.$a = function(c) {
    var b = a.d.visibilityState,
      d = ["webkitvisibilitychange", "visibilitychange"];
    b || (b = a.d.webkitVisibilityState);
    if (b && "prerender" == b) {
      if (c)
        for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[59321:59451]", functionData => eval(functionData))});
      return !1
    }
    return !0
  };
  a.ea = !1;
  a.I = !1;
  a.kb = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[59540:59569]", functionData => eval(functionData))};
  a.ca = !1;
  a.V = !1;
  a.gb = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[59617:59681]", functionData => eval(functionData))};
  a.fa = !1;
  a.W = !1;
  a.lb = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[59729:59785]", functionData => eval(functionData))};
  a.Z = !1;
  a.S = !1;
  a.Wa = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[59832:59891]", functionData => eval(functionData))};
  a.ba = !1;
  a.U = !1;
  a.Ya = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[59939:60007]", functionData => eval(functionData))};
  a.aa = !1;
  a.T = !1;
  a.Xa = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[60055:60115]", functionData => eval(functionData))};
  a.Za = function(c) {
    a.maxDelay || (a.maxDelay = 250);
    return a.p("_d") ? (c && setTimeout(function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[60229:60246]", functionData => eval(functionData))}, a.maxDelay), !1) : !0
  };
  a.da = !1;
  a.H = !1;
  a.xa = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[60320:60349]", functionData => eval(functionData))};
  a.isReadyToTrack = function() {
    var c = !0,
      b = a.visitor,
      d, f, e;
    a.ea || a.I || (a.$a(a.kb) ? a.I = !0 : a.ea = !0);
    if (a.ea && !a.I) return !1;
    b && b.isAllowed() && (a.ca || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.ca = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.gb]), a.marketingCloudVisitorID && (a.V = !0)), a.fa || a.visitorOptedOut || !b.isOptedOut || (a.fa = !0, a.visitorOptedOut = b.isOptedOut([a, a.lb]), a.visitorOptedOut != n && (a.W = !0)), a.Z || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.Z = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Wa]), a.analyticsVisitorID && (a.S = !0)), a.ba || a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.ba = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Ya]), a.audienceManagerLocationHint && (a.U = !0)), a.aa || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.aa = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Xa]), a.audienceManagerBlob && (a.T = !0)), c = a.ca && !a.V && !a.marketingCloudVisitorID, b = a.Z && !a.S && !a.analyticsVisitorID, d = a.ba && !a.U && !a.audienceManagerLocationHint, f = a.aa && !a.T && !a.audienceManagerBlob, e = a.fa && !a.W, c = c || b || d || f || e ? !1 : !0);
    a.da || a.H || (a.Za(a.xa) ? a.H = !0 : a.da = !0);
    a.da && !a.H && (c = !1);
    return c
  };
  a.o = n;
  a.u = 0;
  a.callbackWhenReadyToTrack = function(c, b, d) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[61857:62018]", functionData => eval(functionData))};
  a.j = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[62039:62175]", functionData => eval(functionData))};
  a.jb = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[62197:62243]", functionData => eval(functionData))};
  a.eb = function(c) {
    var b, d, f = n,
      e = n;
    if (!a.isReadyToTrack()) {
      b = [];
      if (c != n)
        for (d in f = {}, c) f[d] = c[d];
      e = {};
      a.Ua(e, !0);
      b.push(f);
      b.push(e);
      a.callbackWhenReadyToTrack(a, a.track, b);
      return !0
    }
    return !1
  };
  a.wb = function() {
    var c = a.cookieRead("s_fid"),
      b = "",
      d = "",
      f;
    f = 8;
    var e = 4;
    if (!c || 0 > c.indexOf("-")) {
      for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
      c = b + "-" + d
    }
    a.cookieWrite("s_fid", c, 1) || (c = 0);
    return c
  };
  a.t = a.track = function(c, b) {
    var d, f = new Date,
      e = "s" + Math.floor(f.getTime() / 108e5) % 10 + Math.floor(1e13 * Math.random()),
      g = f.getYear(),
      g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
    a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState());
    a.p("_s");
    a.eb(c) || (b && a.R(b), c && (d = {}, a.Ua(d, 0), a.R(c)), a.Cb() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.wb()), a.Gb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.visitor && !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)), a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1e3)), f = h.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Va || (a.referrer = p.document.referrer), a.Va = 1, a.referrer = a.ub(a.referrer), a.p("_g")), a.zb() && !a.abort && (a.Ab(), g += a.yb(), a.Fb(e, g), a.p("_t"), a.referrer = ""))), c && a.R(d, 1));
    a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = h.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
  };
  a.za = [];
  a.registerPreTrackCallback = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[64573:64790]", functionData => eval(functionData))};
  a.bb = function(c) {
    a.wa(a.za, c)
  };
  a.ya = [];
  a.registerPostTrackCallback = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[64895:65113]", functionData => eval(functionData))};
  a.ab = function(c) {
    a.wa(a.ya, c)
  };
  a.wa = function(c, b) {
    if ("object" == typeof c)
      for (var d = 0; d < c.length; d++) {
        var f = c[d][0],
          e = c[d][1];
        e.unshift(b);
        if ("function" == typeof f) try {
          f.apply(null, e)
        } catch (g) {
          a.debugTracking && a.P(g.message)
        }
      }
  };
  a.tl = a.trackLink = function(c, b, d, f, e) {
    a.linkObject = c;
    a.linkType = b;
    a.linkName = d;
    e && (a.l = c, a.A = e);
    return a.track(f)
  };
  a.trackLight = function(c, b, d, f) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[65693:65806]", functionData => eval(functionData))};
  a.clearVars = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[65835:66239]", functionData => eval(functionData))};
  a.tagContainerMarker = "";
  a.Fb = function(c, b) {
    var d, f = a.trackingServer;
    d = "";
    var e = a.dc,
      g = "sc.",
      h = a.visitorNamespace;
    f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (h || (h = a.account, f = h.indexOf(","), 0 <= f && (h = h.substring(0, f)), h = h.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = h + "." + e + "." + g + d);
    d = a.ssl ? "https://" : "http://";
    e = a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
    d += f + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.Jb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
    a.bb(d);
    a.sb(d);
    a.ka()
  };
  a.Ta = /{(%?)(.*?)(%?)}/;
  a.Nb = RegExp(a.Ta.source, "g");
  a.tb = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[67315:67859]", functionData => eval(functionData))};
  a.xb = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[67881:68256]", functionData => eval(functionData))};
  a.k = function(a, b) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[68281:68334]", functionData => eval(functionData))};
  a.ta = {};
  a.doPostbacks = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[68379:68984]", functionData => eval(functionData))};
  a.sb = function(c) {
    a.i || a.Bb();
    a.i.push(c);
    a.ma = a.C();
    a.Ra()
  };
  a.Bb = function() {
    a.i = a.Db();
    a.i || (a.i = [])
  };
  a.Db = function() {
    var c, b;
    if (a.ra()) {
      try {
        (b = h.localStorage.getItem(a.pa())) && (c = h.JSON.parse(b))
      } catch (d) {}
      return c
    }
  };
  a.ra = function() {
    var c = !0;
    a.trackOffline && a.offlineFilename && h.localStorage && h.JSON || (c = !1);
    return c
  };
  a.Ia = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[69486:69564]", functionData => eval(functionData))};
  a.ka = function() {
    if (a.q && (a.B && a.B.complete && a.B.F && a.B.va(), a.q)) return;
    a.Ja = n;
    if (a.qa) a.ma > a.N && a.Pa(a.i), a.ua(500);
    else {
      var c = a.nb();
      if (0 < c) a.ua(c);
      else if (c = a.Fa()) a.q = 1, a.Eb(c), a.Ib(c)
    }
  };
  a.ua = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[69868:69928]", functionData => eval(functionData))};
  a.nb = function() {
    var c;
    if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
    c = a.C() - a.Oa;
    return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
  };
  a.Fa = function() {
    if (0 < a.i.length) return a.i.shift()
  };
  a.Eb = function(c) {
    if (a.debugTracking) {
      var b = "AppMeasurement Debug: " + c;
      c = c.split("&");
      var d;
      for (d = 0; d < c.length; d++) b += "\n	" + a.unescape(c[d]);
      a.P(b)
    }
  };
  a.fb = function() {
    return a.marketingCloudVisitorID || a.analyticsVisitorID
  };
  a.Y = !1;
  var q;
  try {
    q = JSON.parse('{"x":"y"}')
  } catch (u) {
    q = null
  }
  q && "y" == q.x ? (a.Y = !0, a.X = function(a) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[70651:70681]", functionData => eval(functionData))}) : h.$ && h.$.parseJSON ? (a.X = function(a) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[70727:70760]", functionData => eval(functionData))}, a.Y = !0) : a.X = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[70791:70812]", functionData => eval(functionData))};
  a.Ib = function(c) {
    var b, d, f;
    a.fb() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest, d = 2), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.Y ? b.Ba = !0 : b = 0));
    !b && a.Sa && (c = c.substring(0, 2047));
    !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0);
    b || (b = new Image, b.alt = "", b.abort || "undefined" === typeof h.InstallTrigger || (b.abort = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[71668:71691]", functionData => eval(functionData))}));
    b.Da = function() {
      try {
        b.F && (clearTimeout(b.F), b.F = 0)
      } catch (a) {}
    };
    b.onload = b.va = function() {
      a.ab(c);
      b.Da();
      a.rb();
      a.ga();
      a.q = 0;
      a.ka();
      if (b.Ba) {
        b.Ba = !1;
        try {
          a.doPostbacks(a.X(b.responseText))
        } catch (d) {}
      }
    };
    b.onabort = b.onerror = b.Ga = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[72104:72261]", functionData => eval(functionData))};
    b.onreadystatechange = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[72301:72371]", functionData => eval(functionData))};
    a.Oa = a.C();
    if (1 == d || 2 == d) {
      var e = c.indexOf("?");
      f = c.substring(0, e);
      e = c.substring(e + 1);
      e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
      1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
    } else if (b.src = c, 3 == d) {
      if (a.Ma) try {
        f.removeChild(a.Ma)
      } catch (g) {}
      f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
      a.Ma = a.B
    }
    b.F = setTimeout(function() {
      b.F && (b.complete ? b.va() : (a.trackOffline && b.abort && b.abort(), b.Ga()))
    }, 5e3);
    a.qb = c;
    a.B = h["s_i_" + a.replace(a.account, ",", "_")] = b;
    if (a.useForcedLinkTracking && a.J || a.A) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = 250), a.ha = setTimeout(a.ga, a.forcedLinkTrackingTimeout)
  };
  a.rb = function() {
    if (a.ra() && !(a.Na > a.N)) try {
      h.localStorage.removeItem(a.pa()), a.Na = a.C()
    } catch (c) {}
  };
  a.Pa = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[73399:73548]", functionData => eval(functionData))};
  a.Ra = function() {
    if (a.trackOffline) {
      if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10;
      for (; a.i.length > a.offlineLimit;) a.Fa()
    }
  };
  a.forceOffline = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[73760:73779]", functionData => eval(functionData))};
  a.forceOnline = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[73810:73829]", functionData => eval(functionData))};
  a.pa = function() {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[73851:73924]", functionData => eval(functionData))};
  a.C = function() {
    return (new Date).getTime()
  };
  a.Ka = function(a) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[74005:74165]", functionData => eval(functionData))};
  a.setTagContainer = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[74201:74994]", functionData => eval(functionData))};
  a.Util = {
    urlEncode: a.escape,
    urlDecode: a.unescape,
    cookieRead: a.cookieRead,
    cookieWrite: a.cookieWrite,
    getQueryParam: function(c, b, d) {
      var f;
      b || (b = a.pageURL ? a.pageURL : h.location);
      d || (d = "&");
      return c && b && (b = "" + b, f = b.indexOf("?"), 0 <= f && (b = d + b.substring(f + 1) + d, f = b.indexOf(d + c + "="), 0 <= f && (b = b.substring(f + d.length + c.length + 1), f = b.indexOf(d), 0 <= f && (b = b.substring(0, f)), 0 < b.length))) ? a.unescape(b) : ""
    }
  };
  a.G = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
  a.g = a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
  a.na = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
  a.O = a.na.slice(0);
  a.Aa = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
  for (l = 0; 250 >= l; l++) 76 > l && (a.g.push("prop" + l), a.O.push("prop" + l)), a.g.push("eVar" + l), a.O.push("eVar" + l), 6 > l && a.g.push("hier" + l), 4 > l && a.g.push("list" + l);
  l = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
  a.g = a.g.concat(l);
  a.G = a.G.concat(l);
  a.ssl = 0 <= h.location.protocol.toLowerCase().indexOf("https");
  a.charSet = "UTF-8";
  a.contextData = {};
  a.offlineThrottleDelay = 0;
  a.offlineFilename = "AppMeasurement.offline";
  a.Oa = 0;
  a.ma = 0;
  a.N = 0;
  a.Na = 0;
  a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
  a.w = h;
  a.d = h.document;
  try {
    if (a.Sa = !1, navigator) {
      var v = navigator.userAgent;
      if ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6")) a.Sa = !0
    }
  } catch (w) {}
  a.ga = function() {
    a.ha && (h.clearTimeout(a.ha), a.ha = n);
    a.l && a.J && a.l.dispatchEvent(a.J);
    a.A && ("function" == typeof a.A ? a.A() : a.l && a.l.href && (a.d.location = a.l.href));
    a.l = a.J = a.A = 0
  };
  a.Qa = function() {
    a.b = a.d.body;
    a.b ? (a.v = function(c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[78401:80505]", functionData => eval(functionData))}, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.v) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && h.MouseEvent) && (a.Ca = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.v, !0)), a.b.addEventListener("click", a.v, !1))) : setTimeout(a.Qa, 30)
  };
  a.Qa();
  a.loadModule("ActivityMap")
}

function s_gi(a) {
  var h, n = window.s_c_il,
    p, l, r = a.split(","),
    s, q, u = 0;
  if (n)
    for (p = 0; !u && p < n.length;) {
      h = n[p];
      if ("s_c" == h._c && (h.account || h.oun))
        if (h.account && h.account == a) u = 1;
        else
          for (l = h.account ? h.account : h.oun, l = h.allAccounts ? h.allAccounts : l.split(","), s = 0; s < r.length; s++)
            for (q = 0; q < l.length; q++) r[s] == l[q] && (u = 1);
      p++
    }
  u || (h = new AppMeasurement);
  h.setAccount ? h.setAccount(a) : h.sa && h.sa(a);
  return h
}
AppMeasurement.getInstance = s_gi;
window.s_objectID || (window.s_objectID = 0);

function s_pgicq() {
  var a = window,
    h = a.s_giq,
    n, p, l;
  if (h)
    for (n = 0; n < h.length; n++) p = h[n], l = s_gi(p.oun), l.setAccount(p.un), l.setTagContainer(p.tagContainerName);
  a.s_giq = 0
}
s_pgicq();

function AppMeasurement_Module_Media(q) {
  var b = this;
  b.s = q;
  q = window;
  q.s_c_in || (q.s_c_il = [], q.s_c_in = 0);
  b._il = q.s_c_il;
  b._in = q.s_c_in;
  b._il[b._in] = b;
  q.s_c_in++;
  b._c = "s_m";
  b.list = [];
  b.open = function(d, c, e, k) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[82084:83035]", functionData => eval(functionData))};
  b.openAd = function(d, c, e, k, f, a, l, g) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83083:83196]", functionData => eval(functionData))};
  b.M = function(d) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83218:83320]", functionData => eval(functionData))};
  b.close = function(d) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83346:83369]", functionData => eval(functionData))};
  b.play = function(d, c, e, k) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83403:83638]", functionData => eval(functionData))};
  b.click = function(d, c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83667:83689]", functionData => eval(functionData))};
  b.complete = function(d, c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83721:83743]", functionData => eval(functionData))};
  b.stop = function(d, c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83771:83793]", functionData => eval(functionData))};
  b.track = function(d) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83819:83842]", functionData => eval(functionData))};
  b.P = function(d, c) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[83867:86441]", functionData => eval(functionData))};
  b.i = function(d, c, e, k, f) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[86475:90918]", functionData => eval(functionData))};
  b.O = function(d, c, e, k, f) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[90952:91183]", functionData => eval(functionData))};
  b.attach = function(d) {lacuna_lazy_load("lacuna_cache/imported_cyht1b.js[91210:91834]", functionData => eval(functionData))};
  b.j = function(b, c, e) {
    b.attachEvent ? b.attachEvent("on" + c, e) : b.addEventListener && b.addEventListener(c, e, !1)
  };
  void 0 == b.completeByCloseOffset && (b.completeByCloseOffset = 1);
  void 0 == b.completeCloseOffsetThreshold && (b.completeCloseOffsetThreshold = 1);
  b.Heartbeat = {};
  b.N = function() {
    var d, c;
    if (b.autoTrack && (d = b.s.d.getElementsByTagName("VIDEO")))
      for (c = 0; c < d.length; c++) b.attach(d[c])
  };
  b.j(q, "load", b.N)
}