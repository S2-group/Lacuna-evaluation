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
! function n(o, s, u) {
  function l(r, e) {
    if (!s[r]) {
      if (!o[r]) {
        var t = "function" == typeof require && require;
        if (!e && t) return t(r, !0);
        if (d) return d(r, !0);
        var a = new Error("Cannot find module '" + r + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      var i = s[r] = {
        exports: {}
      };
      o[r][0].call(i.exports, function(e) {
        return l(o[r][1][e] || e)
      }, i, i.exports, n, o, s, u)
    }
    return s[r].exports
  }
  for (var d = "function" == typeof require && require, e = 0; e < u.length; e++) l(u[e]);
  return l
}({
  1: [function(e, r, t) {
    r.exports = {
      name: "reverb",
      version: "1.0.1",
      smarttagVersion: "5.17.1",
      description: "web analytics module for BBC pages",
      main: "index.js",
      scripts: {
        test: "./node_modules/.bin/gulp test",
        build: "./node_modules/.bin/gulp default",
        lint: "./node_modules/.bin/gulp lint",
        "build-dev": "./node_modules/.bin/gulp build-dev"
      },
      "pre-commit": ["lint"],
      author: "",
      license: "ISC",
      dependencies: {},
      devDependencies: {
        "@babel/core": "^7.4.0",
        "@babel/preset-env": "^7.4.2",
        "@babel/register": "^7.4.0",
        assert: "^1.4.1",
        babelify: "^10.0.0",
        browserify: "^16.2.3",
        "browserify-istanbul": "^3.0.1",
        chai: "^4.2.0",
        "core-js": "^3.0.0",
        eslint: "^5.16.0",
        "eslint-config-airbnb-base": "^13.1.0",
        "eslint-plugin-import": "^2.16.0",
        gulp: "^4.0.0",
        "gulp-babel": "^8.0.0",
        "gulp-clean": "^0.4.0",
        "gulp-cli": "^2.1.0",
        "gulp-concat": "^2.6.1",
        "gulp-eslint": "^5.0.0",
        "gulp-htmlmin": "^4.0.0",
        "gulp-js-escape": "^1.0.1",
        "gulp-mustache": "^4.1.1",
        "gulp-remove-lines": "^0.1.0",
        "gulp-rename": "^1.4.0",
        "gulp-replace": "1.0.0",
        "gulp-size": "^3.0.0",
        "gulp-template": "^5.0.0",
        "gulp-uglify": "^3.0.2",
        "gulp-util": "^3.0.8",
        karma: "^4.0.1",
        "karma-babel-preprocessor": "^8.0.0",
        "karma-browserify": "^6.0.0",
        "karma-chai": "^0.1.0",
        "karma-chrome-launcher": "^2.2.0",
        "karma-coverage": "^1.1.2",
        "karma-html-reporter": "^0.2.7",
        "karma-jasmine": "^2.0.1",
        "karma-mocha": "^1.3.0",
        "karma-nested-reporter": "^0.1.6",
        "karma-phantomjs-launcher": "^1.0.4",
        "karma-requirejs": "^1.1.0",
        "karma-sinon-chai": "^2.0.2",
        mocha: "^6.1.4",
        "pre-commit": "^1.2.2",
        requirejs: "^2.3.6",
        sinon: "^7.3.1",
        "sinon-chai": "^3.3.0",
        "vinyl-buffer": "^1.0.1",
        "vinyl-source-stream": "^2.0.0"
      }
    }
  }, {}],
  2: [function(e, r, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Destinations = void 0;
    var a = e("./producers"),
      i = {
        DEFAULT: {
          id: "596068",
          defaultProducer: a.Producers.BBC
        },
        ACCOUNT: {
          id: "598250",
          defaultProducer: a.Producers.ACCOUNT
        },
        ACCOUNT_TEST: {
          id: "598252",
          defaultProducer: a.Producers.ACCOUNT
        },
        AUDIENCE_PORTAL: {
          id: "602136",
          defaultProducer: a.Producers.AUDIENCE_SERVICES
        },
        AUDIENCE_PORTAL_TEST: {
          id: "602137",
          defaultProducer: a.Producers.AUDIENCE_SERVICES
        },
        AUDIENCE_SERVICES_PS: {
          id: "602167",
          defaultProducer: a.Producers.AUDIENCE_SERVICES
        },
        AUDIENCE_SERVICES_PS_TEST: {
          id: "602168",
          defaultProducer: a.Producers.AUDIENCE_SERVICES
        },
        BBC_ARCHIVE_PS: {
          id: "605565",
          defaultProducer: a.Producers.BBC_ARCHIVE
        },
        BBC_ARCHIVE_PS_TEST: {
          id: "605566",
          defaultProducer: a.Producers.BBC_ARCHIVE
        },
        BBC_CORPORATE_PS: {
          id: "603550",
          defaultProducer: a.Producers.BBC
        },
        BBC_CORPORATE_PS_TEST: {
          id: "603551",
          defaultProducer: a.Producers.BBC
        },
        BBC_OTHER_NONJS: {
          id: "598253",
          defaultProducer: a.Producers.BBC_OTHER_NONJS
        },
        BBC_OTHER_NONJS_TEST: {
          id: "598254",
          defaultProducer: a.Producers.BBC_OTHER_NONJS
        },
        BBC_SYNDICATION: {
          id: "601718",
          defaultProducer: a.Producers.BBC
        },
        BBC_SYNDICATION_TEST: {
          id: "601719",
          defaultProducer: a.Producers.BBC
        },
        BBC_THREE: {
          id: "598255",
          defaultProducer: a.Producers.BBC_THREE
        },
        BBC_THREE_TEST: {
          id: "598256",
          defaultProducer: a.Producers.BBC_THREE
        },
        BITESIZE: {
          id: "598257",
          defaultProducer: a.Producers.BITESIZE
        },
        BITESIZE_TEST: {
          id: "598258",
          defaultProducer: a.Producers.BITESIZE
        },
        BLOGS_PS: {
          id: "603546",
          defaultProducer: a.Producers.BBC
        },
        BLOGS_PS_TEST: {
          id: "603547",
          defaultProducer: a.Producers.BBC
        },
        BRITBOX: {
          id: "598259",
          defaultProducer: a.Producers.BRITBOX
        },
        BRITBOX_TEST: {
          id: "598260",
          defaultProducer: a.Producers.BRITBOX
        },
        CBBC: {
          id: "598261",
          defaultProducer: a.Producers.CBBC
        },
        CBBC_TEST: {
          id: "598262",
          defaultProducer: a.Producers.CBBC
        },
        CBEEBIES: {
          id: "598263",
          defaultProducer: a.Producers.CBEEBIES
        },
        CBEEBIES_TEST: {
          id: "598264",
          defaultProducer: a.Producers.CBEEBIES
        },
        FEATURE_SITES_GNL: {
          id: "598265",
          defaultProducer: a.Producers.GNL_HOMEPAGE
        },
        FEATURE_SITES_GNL_TEST: {
          id: "598266",
          defaultProducer: a.Producers.GNL_HOMEPAGE
        },
        FOOD: {
          id: "598267",
          defaultProducer: a.Producers.BBC_FOOD
        },
        FOOD_TEST: {
          id: "598268",
          defaultProducer: a.Producers.BBC_FOOD
        },
        GAMES_PS: {
          id: "599452",
          defaultProducer: a.Producers.BBC
        },
        GAMES_PS_TEST: {
          id: "599454",
          defaultProducer: a.Producers.BBC
        },
        GATEWAY: {
          id: "598269",
          defaultProducer: a.Producers.GATEWAY
        },
        GATEWAY_TEST: {
          id: "598270",
          defaultProducer: a.Producers.GATEWAY
        },
        HOMEPAGE_GNL: {
          id: "598271",
          defaultProducer: a.Producers.GNL_HOMEPAGE
        },
        HOMEPAGE_GNL_TEST: {
          id: "598272",
          defaultProducer: a.Producers.GNL_HOMEPAGE
        },
        HOMEPAGE_PS: {
          id: "598273",
          defaultProducer: a.Producers.PS_HOMEPAGE
        },
        HOMEPAGE_PS_TEST: {
          id: "598274",
          defaultProducer: a.Producers.PS_HOMEPAGE
        },
        IDEAS: {
          id: "598275",
          defaultProducer: a.Producers.BBC
        },
        IDEAS_TEST: {
          id: "598276",
          defaultProducer: a.Producers.BBC
        },
        IPLAYER: {
          id: "598277",
          defaultProducer: a.Producers.IPLAYER
        },
        IPLAYER_TEST: {
          id: "598278",
          defaultProducer: a.Producers.IPLAYER
        },
        MEDIA_ACTION: {
          id: "598279",
          defaultProducer: a.Producers.MEDIA_ACTION
        },
        MEDIA_ACTION_TEST: {
          id: "598280",
          defaultProducer: a.Producers.MEDIA_ACTION
        },
        MONITORING: {
          id: "598281",
          defaultProducer: a.Producers.MONITORING
        },
        MONITORING_TEST: {
          id: "598282",
          defaultProducer: a.Producers.MONITORING
        },
        MUSIC: {
          id: "598283",
          defaultProducer: a.Producers.BBC_MUSIC
        },
        MUSIC_TEST: {
          id: "598284",
          defaultProducer: a.Producers.BBC_MUSIC
        },
        NATIONAL_MOMENTS_PS: {
          id: "605567",
          defaultProducer: a.Producers.BBC
        },
        NATIONAL_MOMENTS_PS_TEST: {
          id: "605568",
          defaultProducer: a.Producers.BBC
        },
        NEWS_PS: {
          id: "598285",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_PS_TEST: {
          id: "598286",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_GNL: {
          id: "598287",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_GNL_TEST: {
          id: "598288",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_LANGUAGES_GNL: {
          id: "598289",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_LANGUAGES_GNL_TEST: {
          id: "598290",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_LANGUAGES_PS: {
          id: "598291",
          defaultProducer: a.Producers.NEWS
        },
        NEWS_LANGUAGES_PS_TEST: {
          id: "598292",
          defaultProducer: a.Producers.NEWS
        },
        NEWSROUND: {
          id: "598293",
          defaultProducer: a.Producers.NEWSROUND
        },
        NEWSROUND_TEST: {
          id: "598294",
          defaultProducer: a.Producers.NEWSROUND
        },
        OTHER: {
          id: "598295",
          defaultProducer: a.Producers.OTHER
        },
        OTHER_TEST: {
          id: "598297",
          defaultProducer: a.Producers.OTHER
        },
        OWN_IT: {
          id: "598298",
          defaultProducer: a.Producers.CBBC
        },
        OWN_IT_TEST: {
          id: "598299",
          defaultProducer: a.Producers.CBBC
        },
        PROGRAMMES_PS: {
          id: "598300",
          defaultProducer: a.Producers.PROGRAMMES
        },
        PROGRAMMES_PS_TEST: {
          id: "598301",
          defaultProducer: a.Producers.PROGRAMMES
        },
        RED_BUTTON_PS: {
          id: "601192",
          defaultProducer: a.Producers.BBC
        },
        RED_BUTTON_PS_TEST: {
          id: "601193",
          defaultProducer: a.Producers.BBC
        },
        REWIND_PS: {
          id: "603552",
          defaultProducer: a.Producers.BBC
        },
        REWIND_PS_TEST: {
          id: "603553",
          defaultProducer: a.Producers.BBC
        },
        SEARCH_GNL: {
          id: "598302",
          defaultProducer: a.Producers.SEARCH
        },
        SEARCH_GNL_TEST: {
          id: "598303",
          defaultProducer: a.Producers.SEARCH
        },
        SEARCH_PS: {
          id: "598304",
          defaultProducer: a.Producers.SEARCH
        },
        SEARCH_PS_TEST: {
          id: "598305",
          defaultProducer: a.Producers.SEARCH
        },
        SOUNDS: {
          id: "598306",
          defaultProducer: a.Producers.SOUNDS
        },
        SOUNDS_TEST: {
          id: "598307",
          defaultProducer: a.Producers.SOUNDS
        },
        SPORT_GNL: {
          id: "598308",
          defaultProducer: a.Producers.SPORT
        },
        SPORT_GNL_TEST: {
          id: "598309",
          defaultProducer: a.Producers.SPORT
        },
        SPORT_PS: {
          id: "598310",
          defaultProducer: a.Producers.SPORT
        },
        SPORT_PS_TEST: {
          id: "598311",
          defaultProducer: a.Producers.SPORT
        },
        STORYWORKS_GNL: {
          id: "598312",
          defaultProducer: a.Producers.GNL_STORYWORKS
        },
        STORYWORKS_GNL_TEST: {
          id: "598313",
          defaultProducer: a.Producers.GNL_STORYWORKS
        },
        SUBTITLES_PS: {
          id: "603548",
          defaultProducer: a.Producers.PROGRAMMES
        },
        SUBTITLES_PS_TEST: {
          id: "603549",
          defaultProducer: a.Producers.PROGRAMMES
        },
        SYNDICATION_PARTNERS_GNL: {
          id: "598314",
          defaultProducer: a.Producers.WS_PARTNERS_B2B
        },
        SYNDICATION_PARTNERS_GNL_TEST: {
          id: "598315",
          defaultProducer: a.Producers.WS_PARTNERS_B2B
        },
        TASTER: {
          id: "598316",
          defaultProducer: a.Producers.TASTER
        },
        TASTER_TEST: {
          id: "598317",
          defaultProducer: a.Producers.TASTER
        },
        TEACH: {
          id: "598318",
          defaultProducer: a.Producers.BBC
        },
        TEACH_TEST: {
          id: "598320",
          defaultProducer: a.Producers.BBC
        },
        VOICE: {
          id: "598326",
          defaultProducer: a.Producers.VOICE
        },
        VOICE_TEST: {
          id: "598328",
          defaultProducer: a.Producers.VOICE
        },
        WEATHER_GNL: {
          id: "598330",
          defaultProducer: a.Producers.WEATHER
        },
        WEATHER_GNL_TEST: {
          id: "598332",
          defaultProducer: a.Producers.WEATHER
        },
        WEATHER_PS: {
          id: "598338",
          defaultProducer: a.Producers.WEATHER
        },
        WEATHER_PS_TEST: {
          id: "598339",
          defaultProducer: a.Producers.WEATHER
        },
        WS_LEARNING_ENGLISH: {
          id: "598340",
          defaultProducer: a.Producers.WS_LEARNING_ENGLISH
        },
        WS_LEARNING_ENGLISH_TEST: {
          id: "598341",
          defaultProducer: a.Producers.WS_LEARNING_ENGLISH
        },
        WS_NEWS_LANGUAGES: {
          id: "598342",
          defaultProducer: a.Producers.BBC_WORLD_NEWS
        },
        WS_NEWS_LANGUAGES_TEST: {
          id: "598343",
          defaultProducer: a.Producers.BBC_WORLD_NEWS
        },
        WS_PARTNERS_B2B: {
          id: "598820",
          defaultProducer: a.Producers.WS_PARTNERS_B2B
        },
        WS_PARTNERS_B2B_TEST: {
          id: "598823",
          defaultProducer: a.Producers.WS_PARTNERS_B2B
        },
        WS_PROGRAMMES: {
          id: "598344",
          defaultProducer: a.Producers.PROGRAMMES
        },
        WS_PROGRAMMES_TEST: {
          id: "598345",
          defaultProducer: a.Producers.PROGRAMMES
        },
        WS_SYNDICATION_PARTNERS: {
          id: "598346",
          defaultProducer: a.Producers.WS_PARTNERS_B2B
        },
        WS_SYNDICATION_PARTNERS_TEST: {
          id: "598347",
          defaultProducer: a.Producers.WS_PARTNERS_B2B
        },
        get: function(e) {
          var r;
          return e && (r = this[e.toUpperCase()]), r
        }
      };
    t.Destinations = i
  }, {
    "./producers": 4
  }],
  3: [function(e, r, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ATILabelKeys = void 0;
    t.ATILabelKeys = {
      BBC_COUNTER_NAME: "name",
      LEVEL_1_SITE: "site",
      LEVEL_2_SITE: "level2",
      SECTION: "section",
      CHAPTER_1: "chapter1",
      CONTENT_ID: "bbc_content_id",
      APP_TYPE: "bbc_app_type",
      APP_NAME: "bbc_app_name",
      LANGUAGE: "language",
      URL: "bbc_url",
      REFERRER_URL: "bbc_referrer_url",
      CONTENT_TYPE: "bbc_content_type",
      LIBRARY_VERSION: "bbc_library_version",
      PAGE_TITLE: "page_title",
      CUSTOM_VAR_1: "custom_var_1",
      CUSTOM_VAR_2: "custom_var_2",
      CUSTOM_VAR_3: "custom_var_3",
      CUSTOM_VAR_4: "custom_var_4",
      CUSTOM_VAR_5: "custom_var_5",
      CUSTOM_VAR_6: "custom_var_6",
      CUSTOM_VAR_7: "custom_var_7",
      CUSTOM_VAR_8: "custom_var_8",
      CUSTOM_VAR_9: "custom_var_9",
      CUSTOM_VAR_10: "custom_var_10",
      SOURCE: "source",
      CONTAINER: "container",
      METADATA: "metadata",
      PERSONALISATION: "personalisation",
      RESULT: "result",
      COLLECT_DOMAIN: "collectDomain",
      COLLECT_DOMAIN_SSL: "collectDomainSSL"
    }
  }, {}],
  4: [function(e, r, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Producers = void 0;
    t.Producers = {
      ACADEMY: 125,
      ACCOUNT: 1,
      AFAAN_OROMOO: 2,
      AFRIQUE: 3,
      AMHARIC: 4,
      ARABIC: 5,
      AZERI: 6,
      BBC: 7,
      BBC_ALBA: 8,
      BBC_ARCHIVE: 127,
      BBC_ARTS: 9,
      BBC_ASIAN_NETWORK: 10,
      BBC_FOOD: 11,
      BBC_FOUR: 12,
      BBC_HD: 13,
      BBC_MUSIC: 14,
      BBC_NEWS_CHANNEL: 15,
      BBC_ONE: 16,
      BBC_PARLIAMENT_CHANNEL: 17,
      BBC_RADIO: 18,
      BBC_RADIO_1: 19,
      BBC_RADIO_1XTRA: 20,
      BBC_RADIO_2: 21,
      BBC_RADIO_3: 22,
      BBC_RADIO_4: 23,
      BBC_RADIO_4_EXTRA: 24,
      BBC_RADIO_5_LIVE: 25,
      BBC_RADIO_6_MUSIC: 26,
      BBC_SCOTLAND: 120,
      BBC_SEND: 121,
      BBC_OTHER_NONJS: 27,
      BBC_THREE: 28,
      BBC_TWO: 29,
      BBC_WORLD_NEWS: 30,
      BENGALI: 31,
      BITESIZE: 32,
      BRASIL: 33,
      BRITBOX: 34,
      BURMESE: 35,
      CBBC: 36,
      CBEEBIES: 37,
      CHINESE: 38,
      ENGLISH_REGIONS: 39,
      GAHUZA: 40,
      GATEWAY: 41,
      GNL_AUTOS: 42,
      GNL_CAPITAL: 43,
      GNL_CULTURE: 44,
      GNL_EARTH: 45,
      GNL_FUTURE: 46,
      GNL_HOMEPAGE: 47,
      GNL_STORYWORKS: 48,
      GNL_TRAVEL: 49,
      GUJARATI: 50,
      HAUSA: 51,
      HINDI: 52,
      IGBO: 53,
      INDONESIAN: 54,
      IPLAYER: 55,
      JAPANESE: 56,
      KOREAN: 57,
      KYRGYZ: 58,
      MARATHI: 59,
      MEDIA_ACTION: 60,
      MONITORING: 61,
      MUNDO: 62,
      NEPALI: 63,
      NEWS: 64,
      NEWSROUND: 65,
      NORTHERN_IRELAND: 66,
      OTHER: 67,
      OWN_IT: 118,
      PASHTO: 68,
      PERSIAN: 69,
      PIDGIN: 70,
      PROGRAMMES: 71,
      PS_HOMEPAGE: 72,
      PUNJABI: 73,
      RD: 126,
      RECEPTION: 124,
      REEL: 74,
      RUSSIAN: 75,
      S4C: 76,
      SCHOOL_RADIO: 77,
      SCHOOL_REPORT: 78,
      SCOTLAND: 79,
      SEARCH: 80,
      SERBIAN: 81,
      SINHALA: 82,
      SOMALI: 83,
      SOUNDS: 84,
      SPORT: 85,
      SWAHILI: 86,
      TAMIL: 87,
      TASTER: 88,
      TEACH: 119,
      TELUGU: 89,
      THAI: 90,
      TIGRINYA: 91,
      TURKISH: 92,
      UK_CHINA: 93,
      UKRAINIAN: 94,
      URDU: 95,
      UZBEK: 96,
      VIETNAMESE: 97,
      VOICE: 98,
      VOICE_FIRST_FORMATS: 99,
      VOLT: 122,
      WALES: 100,
      WEATHER: 101,
      WEATHER_WATCHERS: 102,
      WORLD_SERVICE_ENGLISH: 103,
      WORKLIFE: 104,
      WS_LEARNING_ENGLISH: 105,
      WS_PARTNERS_B2B: 106,
      YORUBA: 107,
      NEWS_ENGLISH_REGIONS: 108,
      SPORT_ENGLISH_REGIONS: 109,
      NEWS_SCOTLAND: 110,
      SPORT_SCOTLAND: 111,
      NEWS_WALES: 112,
      SPORT_WALES: 113,
      NEWS_NORTHERN_IRELAND: 114,
      SPORT_NORTHERN_IRELAND: 115,
      AUDIENCE_SERVICES: 116,
      WORLD_NEWS_PROGRAMMES: 117,
      getId: function(e) {
        var r;
        return e && (r = this[e.toUpperCase()]), r
      }
    }
  }, {}],
  5: [function(e, r, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.CustomVariables = void 0;
    var a, i = e("../package.json"),
      o = e("./util/label-cleanser"),
      n = e("./config/label-keys");

    function s(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e
    }
    var u = "bbc_website",
      l = (s(a = {}, n.ATILabelKeys.CONTENT_ID, 1), s(a, n.ATILabelKeys.APP_TYPE, 2), s(a, n.ATILabelKeys.APP_NAME, 3), s(a, n.ATILabelKeys.LANGUAGE, 4), s(a, n.ATILabelKeys.URL, 5), s(a, n.ATILabelKeys.REFERRER_URL, 6), s(a, n.ATILabelKeys.CONTENT_TYPE, 7), s(a, n.ATILabelKeys.LIBRARY_VERSION, 8), s(a, n.ATILabelKeys.PAGE_TITLE, 9), s(a, n.ATILabelKeys.CUSTOM_VAR_1, 11), s(a, n.ATILabelKeys.CUSTOM_VAR_2, 12), s(a, n.ATILabelKeys.CUSTOM_VAR_3, 13), s(a, n.ATILabelKeys.CUSTOM_VAR_4, 14), s(a, n.ATILabelKeys.CUSTOM_VAR_5, 15), s(a, n.ATILabelKeys.CUSTOM_VAR_6, 16), s(a, n.ATILabelKeys.CUSTOM_VAR_7, 17), s(a, n.ATILabelKeys.CUSTOM_VAR_8, 18), s(a, n.ATILabelKeys.CUSTOM_VAR_9, 19), s(a, n.ATILabelKeys.CUSTOM_VAR_10, 20), s(a, "create", function(r, e, t) {
        var a, i = this;
        return a = this._setCustomVariable(a, n.ATILabelKeys.APP_TYPE, "responsive"), a = this._setCustomVariable(a, n.ATILabelKeys.APP_NAME, this._getAppName(null, u)), a = this._setCustomVariable(a, n.ATILabelKeys.LIBRARY_VERSION, this.getLibraryVersion()), e && (a = this._setOrbitCustomVariables(a, e)), t && (a = this._setDocumentCustomVariables(a, t)), r && Object.keys(r).forEach(function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[20676:20775]", functionData => eval(functionData))}, this), a
      }), s(a, "_initialise", function() {
        return {
          site: {}
        }
      }), s(a, "_getAppName", function(e, r) {
        return e && r ? "".concat(e, "-").concat(r) : e ? "".concat(e, "-").concat(u) : r || u
      }), s(a, "getLibraryVersion", function() {
        return "".concat(i.name, "-").concat(i.version)
      }), s(a, "_isCustomVariable", function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[21170:21271]", functionData => eval(functionData))}), s(a, "_setCustomVariable", function(e, r, t) {
        if (t) {
          e || (e = this._initialise());
          var a = o.LabelCleanser.removeSensitiveInfo(t),
            i = o.LabelCleanser.cleanCustomVariable(a),
            n = this[r];
          e.site[n] = "[" + encodeURIComponent(i) + "]"
        }
        return e
      }), s(a, "_setDocumentCustomVariables", function(e, r) {
        return r && (e = this._setCustomVariable(e, n.ATILabelKeys.URL, r.URL), e = this._setCustomVariable(e, n.ATILabelKeys.PAGE_TITLE, r.title)), e
      }), s(a, "_setOrbitCustomVariables", function(e, r) {
        return r && (e = this._setCustomVariable(e, n.ATILabelKeys.CONTENT_ID, r.contentId), e = this._setCustomVariable(e, n.ATILabelKeys.CONTENT_TYPE, r.contentType), e = this._setCustomVariable(e, n.ATILabelKeys.LANGUAGE, r.language), e = this._setCustomVariable(e, n.ATILabelKeys.REFERRER_URL, r.referrer), e = this._setProductCustomVariables(e, r.additionalProperties)), e
      }), s(a, "_setProductCustomVariables", function(e, r) {
        return r && (e = this._setCustomVariable(e, n.ATILabelKeys.APP_TYPE, r.app_type), e = this._setCustomVariable(e, n.ATILabelKeys.APP_NAME, this._getAppName(r.app_category, r.app_name)), r.content_language && (e = this._setCustomVariable(e, n.ATILabelKeys.LANGUAGE, r.content_language)), r.referrer_url && (e = this._setCustomVariable(e, n.ATILabelKeys.REFERRER_URL, r.referrer_url)), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_1, r.custom_var_1), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_2, r.custom_var_2), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_3, r.custom_var_3), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_4, r.custom_var_4), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_5, r.custom_var_5), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_6, r.custom_var_6), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_7, r.custom_var_7), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_8, r.custom_var_8), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_9, r.custom_var_9), e = this._setCustomVariable(e, n.ATILabelKeys.CUSTOM_VAR_10, r.custom_var_10)), e
      }), a);
    t.CustomVariables = l
  }, {
    "../package.json": 1,
    "./config/label-keys": 3,
    "./util/label-cleanser": 10
  }],
  6: [function(e, r, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ReverbClient = void 0;
    var _ = e("./config/label-keys"),
      o = e("./util/label-cleanser"),
      s = e("./custom-variables"),
      i = e("./config/destinations"),
      n = e("./config/producers"),
      u = e("./util/orbit-variables"),
      E = e("./user-action-event"),
      l = e("./util/debug");

    function d(e, r) {
      for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    var a = function() {
      function e() {
        ! function(e, r) {
          if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.counterName = "", this.referrer = "", this.tag, this.ready = !1, this.pageValues = {}, this.customParams = {}, this.echoDeviceId = null, this.bbcHid, this.signedIn = !1, this.atiInitPromise = null, this.echoDeviceIdCookie = "ckns_echo_device_id", this.eventHistory = [], this.suppressView = !1, this.pageSentPromise = this._resetPageSentPromise(), this.__resolvePageSent
      }
      var r, t, a;
      return r = e, (t = [{
        key: "_resetPageSentPromise",
        value: function() {
          var r = this;
          return new Promise(function(e) {
            r.__resolvePageSent = e
          })
        }
      }, {
        key: "_readCookie",
        value: function(e) {
          var r = document.cookie.split(";");
          if (r)
            for (var t = 0; t < r.length; t++) {
              var a = r[t];
              if (0 === (a = a.trim()).indexOf(e + "=")) {
                var i = a.split("=");
                if (1 < i.length) return encodeURIComponent(i[1])
              }
            }
          return null
        }
      }, {
        key: "_setPageValues",
        value: function() {
          var n = this;
          return u.OrbitVariables.getPageVariables().then(function(e) {
            if (n.pageValues = {}, e) {
              n._setReferrer(e), n.setDestination(e.destination), e.producer && n.setProducer(e.producer), n.setCounterName(e.name || n._generateCounterName()), n.addLabel(_.ATILabelKeys.BBC_COUNTER_NAME, n.getCounterName());
              var r = s.CustomVariables.create(void 0, e, document),
                t = n.pageValues,
                a = {};
              if (e && e[_.ATILabelKeys.SECTION] && (t[_.ATILabelKeys.CHAPTER_1] = o.LabelCleanser.cleanCustomVariable(e[_.ATILabelKeys.SECTION])), r && n.tag.customVars.set(r), e.additionalProperties) {
                var i = e.additionalProperties;
                !0 !== i.suppressView && "true" !== i.suppressView || (n.suppressView = !0), n._setDebug(i), e.additionalProperties.testDomain && n._setDomains(e), n._setTestParams(e, a)
              }
              0 < Object.keys(a).length && (t.customObject = a), n.tag.page.set(t)
            }
          })
        }
      }, {
        key: "_setTestParams",
        value: function(e, r) {
          e.additionalProperties.trace && (r.trace = e.additionalProperties.trace), e.additionalProperties.echoEvent && (r.echo_event = e.additionalProperties.echoEvent)
        }
      }, {
        key: "_setDomains",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[26978:27188]", functionData => eval(functionData))}
      }, {
        key: "_setReferrer",
        value: function(e) {
          if (this.tag) {
            var r = e.additionalProperties;
            r && void 0 !== r.referrer_url && null !== r.referrer_url ? this.referrer = r.referrer_url : e.referrer ? this.referrer = e.referrer : this.tag.getParam("ref") && (this.referrer = this.tag.getParam("ref")), this.referrer = o.LabelCleanser.cleanCustomVariable(this.referrer)
          }
        }
      }, {
        key: "_setUserValues",
        value: function() {
          var r = this;
          return u.OrbitVariables.getUserVariables().then(function(e) {
            e && (e.hashedId && e.isSignedIn ? r.bbcHid = encodeURIComponent(e.hashedId) : e.isSignedIn ? r.bbcHid = "unidentified-user" : r.bbcHid = null, r.signedIn = e.isSignedIn, r.bbcHid ? r._setTagHid(r.bbcHid) : r._removeTagHid())
          })
        }
      }, {
        key: "_getCookieDomain",
        value: function(e) {
          return e && e.location && e.location.hostname && e.location.hostname.match(/.bbc.com$/) ? "bbc.com" : "bbc.co.uk"
        }
      }, {
        key: "_createOnTrackerLoadEvent",
        value: function(e) {
          e && (window.ATInternet = {
            onTrackerLoad: function() {
              return e()
            }
          })
        }
      }, {
        key: "_loadATI",
        value: function() {
          var t = this;
          return this.atiInitPromise || (this.atiInitPromise = new Promise(function(e) {
            t._createOnTrackerLoadEvent(function() {
              e()
            });
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0, r.src = "https://mybbc-analytics.files.bbci.co.uk/reverb-client-js/smarttag-5.17.1.min.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.getElementsByTagName("script")[0].parentNode).insertBefore(r, null)
          })), this.atiInitPromise
        }
      }, {
        key: "_createTag",
        value: function(e) {
          var t = this,
            r = e || {};
          this.tag = new ATInternet.Tracker.Tag(r), this.tag.builder.atiSendUrl = this.tag.builder.sendUrl, this.tag.builder.sendUrl = function(e) {
            var r = e.replace(/&ref=?[^&]+/g, "&ref=".concat(t.referrer));
            r = o.LabelCleanser.removeSensitiveInfo(r), t.tag.builder.atiSendUrl(r)
          }, this.tag.onTrigger("Tracker:Hit:Sent:Ok", this._storeEvent.bind(this))
        }
      }, {
        key: "_removeTagHid",
        value: function() {
          this.tag && this.tag.delParam("at")
        }
      }, {
        key: "_setTagHid",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[29875:29935]", functionData => eval(functionData))}
      }, {
        key: "_setTagDeviceId",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[30006:30072]", functionData => eval(functionData))}
      }, {
        key: "initialise",
        value: function() {
          var r = this;
          return this.isReady() ? new Promise(function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[30221:30267]", functionData => eval(functionData))}) : (this.echoDeviceId = this._readCookie(this.echoDeviceIdCookie), this._loadATI().then(function() {
            return r._initAtiTag()
          }))
        }
      }, {
        key: "_initAtiTag",
        value: function() {
          var e = {
            secure: !0,
            cookieDomain: this._getCookieDomain(window)
          };
          this._createTag(e), this.echoDeviceId && this._setTagDeviceId(this.echoDeviceId), this._contentLoaded(), this.ready = !0, this.suppressView = !1
        }
      }, {
        key: "isReady",
        value: function() {
          return this.ready
        }
      }, {
        key: "viewEvent",
        value: function() {
          return Promise.all([this._setUserValues(), this._setPageValues()]).then(this._sendViewEvent.bind(this))
        }
      }, {
        key: "_sendViewEvent",
        value: function() {
          var r = this;
          return new Promise(function(e) {
            r.suppressView && "false" !== r.suppressView ? r.pageSentPromise = r._resetPageSentPromise() : (r.tag.dispatch(), l.Debug.info("Sending page view event: " + JSON.stringify(r.tag.page)), r.__resolvePageSent()), e(r.tag)
          })
        }
      }, {
        key: "userActionEvent",
        value: function(e, r, t, a, i, n) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[31539:31703]", functionData => eval(functionData))}
      }, {
        key: "_sendUserActionEvent",
        value: function(n, o, s, u, l, d) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[31794:32299]", functionData => eval(functionData))}
      }, {
        key: "setCounterName",
        value: function(e) {
          this.counterName = o.LabelCleanser.cleanPageName(e)
        }
      }, {
        key: "getCounterName",
        value: function() {
          return this.counterName
        }
      }, {
        key: "_generateCounterName",
        value: function() {
          var e = new RegExp(/\/$/),
            r = new RegExp(/^\//),
            t = new RegExp(/\//g),
            a = window.location.pathname.replace(r, "").replace(e, "").replace(t, ".");
          if ("" === a) {
            var i = new RegExp(/ \- /),
              n = new RegExp(/BBC /gi);
            a = document.title.replace(i, "").replace(n, "")
          }
          return o.LabelCleanser.cleanPageName(a)
        }
      }, {
        key: "_contentLoaded",
        value: function() {
          "" === this.counterName && this.setCounterName(this._generateCounterName())
        }
      }, {
        key: "getSiteId",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[33296:33380]", functionData => eval(functionData))}
      }, {
        key: "addLabel",
        value: function(e, r) {
          e === _.ATILabelKeys.BBC_COUNTER_NAME || e === _.ATILabelKeys.LEVEL_2_SITE ? this.pageValues[e] = r : this.customParams[e] = o.LabelCleanser.cleanCustomVariable(r)
        }
      }, {
        key: "setDestination",
        value: function(e) {
          var r = i.Destinations.get(e);
          return r && (this.addLabel(_.ATILabelKeys.LEVEL_2_SITE, r.defaultProducer), this.tag.setConfig(_.ATILabelKeys.LEVEL_1_SITE, r.id), e.toUpperCase().match(/TEST$/) || "DEFAULT" === e.toUpperCase() || (this.tag.setConfig(_.ATILabelKeys.COLLECT_DOMAIN, "a1.api.BBC.co.uk"), this.tag.setConfig(_.ATILabelKeys.COLLECT_DOMAIN_SSL, "a1.api.BBC.co.uk"))), this
        }
      }, {
        key: "setProducer",
        value: function(e) {
          var r;
          return ((r = e && "" !== e ? n.Producers.getId(e) : 0) || 0 === r) && this.addLabel(_.ATILabelKeys.LEVEL_2_SITE, r), this
        }
      }, {
        key: "getProperties",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[34411:34522]", functionData => eval(functionData))}
      }, {
        key: "_storeEvent",
        value: function(e, r) {
          var t, a = (new Date).getTime();
          if (r && r.details && r.details.hit) {
            var i = r.details.hit.split("?");
            if (i && i.length) {
              var n = i[1].split("&");
              if (n && n.length) {
                t = {
                  timestamp: a,
                  params: {}
                };
                for (var o = 0; o < n.length; o++) {
                  var s = n[o].split("=");
                  t.params[s[0]] = s[1]
                }
              }
              t && this.eventHistory.push(t)
            }
          }
        }
      }, {
        key: "getEventHistory",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[35261:35356]", functionData => eval(functionData))}
      }, {
        key: "resetEventHistory",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[35428:35472]", functionData => eval(functionData))}
      }, {
        key: "_setDebug",
        value: function(e) {
          if (!0 === e.enableDebug || "true" === e.enableDebug ? l.Debug.enable() : l.Debug.disable(), !0 !== e.throwOnError && "true" !== e.throwOnError || l.Debug.setThrowOnError(!0), e.debugLevel)
            if ("number" == typeof e.debugLevel) l.Debug.setLevel(e.debugLevel);
            else if ("string" == typeof e.debugLevel) switch (e.debugLevel.toLowerCase()) {
            case "info":
              l.Debug.setLevel(l.Debug.DebugLevels.INFO);
              break;
            case "warn":
              l.Debug.setLevel(l.Debug.DebugLevels.WARN);
              break;
            case "error":
              l.Debug.setLevel(l.Debug.DebugLevels.ERROR)
          }
        }
      }]) && d(r.prototype, t), a && d(r, a), e
    }();
    (t.ReverbClient = a).Debug = l.Debug
  }, {
    "./config/destinations": 2,
    "./config/label-keys": 3,
    "./config/producers": 4,
    "./custom-variables": 5,
    "./user-action-event": 8,
    "./util/debug": 9,
    "./util/label-cleanser": 10,
    "./util/orbit-variables": 11
  }],
  7: [function(e, r, t) {
    "use strict";
    var a = e("./reverb-client");
    window.__reverb.__reverbTimeout && clearTimeout(window.__reverb.__reverbTimeout), window.__reverb.__resolveReverbLoaded(new a.ReverbClient)
  }, {
    "./reverb-client": 6
  }],
  8: [function(e, r, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.UserActionEvent = void 0;
    var n = e("./config/label-keys"),
      o = e("./util/label-cleanser"),
      s = e("./util/debug");

    function i(e, r) {
      for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    var u = {
        ACTION_NAME: "unknown",
        COMPAIGN_ID: "Page",
        VARIANT: {},
        FORMAT: {},
        GENERAL_PLACEMENT: "unknown",
        DETAILED_PLACEMENT: "",
        ADVERTISER_ID: "",
        URL: "unknown"
      },
      l = "click",
      d = "impression",
      a = function() {
        function r(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[37652:37820]", functionData => eval(functionData))}
        var e, t, a;
        return e = r, (t = [{
          key: "_buildCreation",
          value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[37934:38072]", functionData => eval(functionData))}
        }, {
          key: "_formatEventValue",
          value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[38151:38300]", functionData => eval(functionData))}
        }, {
          key: "_serialiseObjectForAti",
          value: function(a) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[38384:38623]", functionData => eval(functionData))}
        }, {
          key: "_sendEvent",
          value: function(e, r) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[38698:40054]", functionData => eval(functionData))}
        }, {
          key: "sendClickEvent",
          value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[40130:40177]", functionData => eval(functionData))}
        }, {
          key: "sendImpressionEvent",
          value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[40258:40305]", functionData => eval(functionData))}
        }]) && i(e.prototype, t), a && i(e, a), r
      }();
    t.UserActionEvent = a
  }, {
    "./config/label-keys": 3,
    "./util/debug": 9,
    "./util/label-cleanser": 10
  }],
  9: [function(e, r, t) {
    "use strict";

    function i(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[40554:40845]", functionData => eval(functionData))}

    function n(e, r) {
      for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Debug = void 0;
    var a = function() {
      function r() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[41214:41359]", functionData => eval(functionData))}
      var e, t, a;
      return e = r, a = [{
        key: "callConsole",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[41461:41696]", functionData => eval(functionData))}
      }, {
        key: "enable",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[41757:41793]", functionData => eval(functionData))}
      }, {
        key: "disable",
        value: function() {
          r.enabled = !1
        }
      }, {
        key: "getState",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[41954:41992]", functionData => eval(functionData))}
      }, {
        key: "getLevel",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[42055:42091]", functionData => eval(functionData))}
      }, {
        key: "getThrowOnError",
        value: function() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[42161:42204]", functionData => eval(functionData))}
      }, {
        key: "setThrowOnError",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[42275:42315]", functionData => eval(functionData))}
      }, {
        key: "setLevel",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[42379:42540]", functionData => eval(functionData))}
      }, {
        key: "info",
        value: function(e) {
          this.enabled && this.level === this.DebugLevels.INFO && this.callConsole("REVERB_DEBUG [INFO]: " + e)
        }
      }, {
        key: "warn",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[42783:42905]", functionData => eval(functionData))}
      }, {
        key: "error",
        value: function(e) {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[42966:43151]", functionData => eval(functionData))}
      }], (t = null) && n(e.prototype, t), a && n(e, a), r
    }();
    (t.Debug = a).throwOnError = !1, a.enabled = !1, a.DebugLevels = {
      INFO: 0,
      WARN: 1,
      ERROR: 2
    }, a.level = a.DebugLevels.ERROR
  }, {}],
  10: [function(e, r, t) {
    "use strict";

    function i(e, r) {
      for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.LabelCleanser = void 0;
    var a = function() {
      function e() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[43804:43949]", functionData => eval(functionData))}
      var r, t, a;
      return r = e, a = [{
        key: "cleanPageName",
        value: function(e) {
          var r = new RegExp(/[^a-z0-9\.]+/g),
            t = new RegExp(/\.+/g),
            a = new RegExp(/(^_+)|(_+$)/g),
            i = e && e.toLowerCase().replace(r, "_").replace(t, ".").replace(a, "") || "no.name.page";
          if (e !== i && ("string" != typeof e || 0 === e.replace(/ */, "").length)) throw new Error("REVERB-ERROR: Countername must be a non-empty string");
          return -1 === i.search(/\.page$/) && (i += ".page"), i
        }
      }, {
        key: "cleanCustomVariable",
        value: function(e) {
          return e && e.trim().replace(/\[|\]/g, "").replace(/&/g, "$").replace(/\s{1,}/g, " ")
        }
      }, {
        key: "removeSensitiveInfo",
        value: function(e) {
          if (e && "string" == typeof e)
            for (var r = 0; r < this.sensitiveParams.length; r++) {
              var t = this.sensitiveParams[r],
                a = new RegExp("".concat(t, "=[^(&|$)]*"), "g");
              e = e.replace(a, "".concat(t, "=XXXX"))
            }
          return e
        }
      }], (t = null) && i(r.prototype, t), a && i(r, a), e
    }();
    (t.LabelCleanser = a).sensitiveParams = ["token", "guardianToken", "nonce", "dateOfBirthDay", "dateOfBirthMonth", "dateOfBirthYear", "dateOfBirth", "permissionToken"]
  }, {}],
  11: [function(e, r, t) {
    "use strict";

    function i(e, r) {
      for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.OrbitVariables = void 0;
    var a = function() {
      function r() {lacuna_lazy_load("lacuna_cache/imported_woxua6.js[45765:45910]", functionData => eval(functionData))}
      var e, t, a;
      return e = r, a = [{
        key: "wrapMethod",
        value: function(e, r) {
          return e[r] && "function" == typeof e[r] ? e[r]() : Promise.resolve(null)
        }
      }, {
        key: "getPageVariables",
        value: function() {
          return window && window.bbcpage ? Promise.all(["getName", "getDestination", "getProducer", "getSection", "getContentId", "getContentType", "getLanguage", "getAdditionalProperties", "getReferrer"].map(function(e) {
            return r.wrapMethod(window.bbcpage, e)
          })).then(function(e) {
            return {
              name: e[0],
              destination: e[1],
              producer: e[2],
              section: e[3],
              contentId: e[4],
              contentType: e[5],
              language: e[6],
              additionalProperties: e[7],
              referrer: e[8]
            }
          }) : Promise.resolve(void 0)
        }
      }, {
        key: "getUserVariables",
        value: function() {
          return window && window.bbcuser ? Promise.all(["getHashedId", "isSignedIn"].map(function(e) {
            return r.wrapMethod(window.bbcuser, e)
          })).then(function(e) {
            return {
              hashedId: e[0],
              isSignedIn: e[1]
            }
          }) : Promise.resolve(void 0)
        }
      }], (t = null) && i(e.prototype, t), a && i(e, a), r
    }();
    t.OrbitVariables = a
  }, {}]
}, {}, [7]);