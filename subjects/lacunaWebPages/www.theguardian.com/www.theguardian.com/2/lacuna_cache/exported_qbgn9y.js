
        /*@cc_on
            @if (@_jscript_version <= 9)
        (function(f){
            window.setTimeout = f(window.setTimeout);
            window.setInterval = f(window.setInterval);
        })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c.apply(this,a)},t)}});
            @end
        @*/
        (function(window) {
            var lastTime, vendors;
            if (!window.requestAnimationFrame) {
                lastTime = 0;
                vendors = ["ms", "moz", "webkit", "o"];
                for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"]
                }
                window.requestAnimationFrame = function(callback, element) {}
            }
            if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {}
        })(window);
        (function(window, document) {
            var weShouldPolyfill = !("open" in document.createElement("details"));

            function toggleDetailsState(details) {
                if (details.hasAttribute("open")) details.removeAttribute("open");
                else details.setAttribute("open", "open")
            }

            function handleEvent(event) {
                var targetNode = event.target;
                while (targetNode.nodeName.toLowerCase() !== "summary" && targetNode !== document) targetNode = targetNode.parentNode;
                if (targetNode.nodeName.toLowerCase() === "summary") toggleDetailsState(targetNode.parentNode)
            }

            function bindEvents() {
                document.addEventListener("click", handleEvent, true);
                document.addEventListener("keypress", function(event) {}, true)
            }

            function appendCss() {
                if (document.querySelector("#details-polyfill-css") === null) {
                    var style = document.createElement("style");
                    style.id = "details-polyfill-css";
                    style.textContent = "details:not([open]) \x3e *:not(summary) {display: none;}";
                    document.head.insertBefore(style, document.head.firstChild)
                }
            }
            if (weShouldPolyfill) {
                bindEvents();
                appendCss()
            }
        })(window, document);
        (function(window) {
            var location = window.location;
            var hash = location.hash;
            var navigator = window.navigator;
            var platform = navigator.platform;
            var isFront = true;
            var enhancedKey = "gu.prefs.enhanced";
            var preferEnhanced;
            try {
                preferEnhanced = JSON.parse(localStorage.getItem(enhancedKey)).value
            } catch (e) {
                preferEnhanced = null
            }

            function mustEnhance() {
                if (hash === "#enhanced" || hash === "#" + enhancedKey + "\x3dtrue") return true;
                if (preferEnhanced) return true;
                return false
            }

            function mustNotEnhance() {
                return hash === "#standard" || hash === "#" + enhancedKey + "\x3dfalse"
            }

            function couldEnhance() {
                return preferEnhanced !== false
            }

            function weWantToEnhance() {
                if (isOlderIOSDevice()) return false;
                if (isFront) return !isIpad();
                return true
            }

            function isOlderIOSDevice() {
                return /.*(iPhone|iPad|iPod; CPU) OS ([34567])_\d+.*/.test(navigator.userAgent)
            }

            function isIpad() {
                return platform === "iPad"
            }
            window.shouldEnhance = mustNotEnhance() ? false : mustEnhance() ? true : couldEnhance() && weWantToEnhance()
        })(window);
        var isModernBrowser = "querySelector" in document && "addEventListener" in window && "localStorage" in window && "sessionStorage" in window && "bind" in Function && (("XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest()) || "XDomainRequest" in window);
        window.guardian = {
            isModernBrowser: isModernBrowser,
            isEnhanced: window.shouldEnhance && isModernBrowser,
            css: {
                loaded: false
            },
            polyfilled: false,
            adBlockers: {
                active: undefined,
                onDetect: []
            },
            config: {
                "isDotcomRendering": false,
                "page": {
                    "avatarApiUrl": "https://avatar.theguardian.com",
                    "membershipUrl": "https://membership.theguardian.com",
                    "isProd": true,
                    "discussionFrontendUrl": "",
                    "membershipAccess": "",
                    "allowUserGeneratedContent": false,
                    "forecastsapiurl": "/weatherapi/forecast",
                    "idOAuthUrl": "https://oauth.theguardian.com",
                    "supportUrl": "https://support.theguardian.com",
                    "webTitle": "Network Front",
                    "isFront": true,
                    "idWebAppUrl": "https://oauth.theguardian.com",
                    "googleSearchUrl": "//www.google.co.uk/cse/cse.js",
                    "googleSearchId": "007466294097402385199:m2ealvuxh1i",
                    "idUrl": "https://profile.theguardian.com",
                    "omnitureAmpAccount": "guardiangu-thirdpartyapps",
                    "dfpAdUnitRoot": "theguardian.com",
                    "host": "https://www.theguardian.com",
                    "fbAppId": "180444840287",
                    "dfpAccountId": "59666047",
                    "plistaPublicApiKey": "462925f4f131001fd974bebe",
                    "cardStyle": "",
                    "adUnit": "/59666047/theguardian.com/international/front/ng",
                    "discussionApiUrl": "https://discussion.theguardian.com/discussion-api",
                    "isSensitive": false,
                    "ophanEmbedJsUrl": "//j.ophan.co.uk/ophan.embed",
                    "edition": "INT",
                    "userAttributesApiUrl": "https://members-data-api.theguardian.com/user-attributes",
                    "discussionApiClientHeader": "nextgen",
                    "section": "international",
                    "dfpHost": "pubads.g.doubleclick.net",
                    "weatherapiurl": "/weatherapi/city",
                    "sentryPublicApiKey": "344003a8d11c41d8800fbad8383fdc50",
                    "pillar": "",
                    "pageId": "international",
                    "beaconUrl": "//phar.gu-web.net",
                    "discussionD2Uid": "zHoBy6HNKsk",
                    "ophanJsUrl": "//j.ophan.co.uk/ophan.ng",
                    "keywordIds": "international/international",
                    "contentType": "Network Front",
                    "isDev": false,
                    "facebookIaAdUnitRoot": "facebook-instant-articles",
                    "stripePublicToken": "pk_live_2O6zPMHXNs2AGea4bAmq5R7Z",
                    "omnitureAccount": "guardiangu-network",
                    "locationapiurl": "/weatherapi/locations?query=",
                    "isPaidContent": false,
                    "externalEmbedHost": "https://embed.theguardian.com",
                    "thirdPartyAppsAccount": "guardiangu-thirdpartyapps",
                    "ajaxUrl": "https://api.nextgen.guardianapps.co.uk",
                    "keywords": "Network Front",
                    "mobileAppsAdUnitRoot": "beta-guardian-app",
                    "hasPageSkin": false,
                    "requiresMembershipAccess": false,
                    "revisionNumber": "DEV",
                    "optimizeEpicUrl": "https://support.theguardian.com/epic/control/index.html",
                    "hbImpl": "prebid",
                    "assetsPath": "https://assets.guim.co.uk/",
                    "mmaUrl": "https://manage.theguardian.com",
                    "dfpNonRefreshableLineItemIds": [66664167, 66868167, 66972327, 68842407, 69144807, 69710127, 70516407, 70931847, 71342607, 72502287, 72503607, 73773207, 73829127, 74480367, 74645967, 74823567, 74824167, 75586767, 75588207, 76352007, 76437927, 76443087, 76443567, 76603287, 77324247, 77504847, 77546367, 77561007, 77590287, 77622207, 77747367, 78316047, 78455967, 78470967, 78507807, 78713607, 79009167, 79094487, 80502447, 80568087, 80568207, 80568327, 80568447, 80569047, 81002967, 82211367, 82339767, 82879287, 82881807, 83178927, 85253487, 85558287, 85961247, 86814567, 87004887, 87191607, 87726207, 87852807, 87878367, 88153527, 88333647, 88420407, 88526727, 88621527, 88861167, 88903647, 89035647, 89035887, 89036607, 89084607, 89084967, 89141967, 89356167, 89743047, 89793087, 90159687, 90323007, 90359967, 90935367, 91095807, 91118247, 91732647, 91985967, 92216007, 92355087, 92436807, 92506887, 92681487, 92948847, 93121767, 93550767, 93717567, 93784887, 93785607, 93930207, 94193007, 94625967, 94674927, 94822527, 95840847, 95931207, 96296367, 97911207, 97980687, 98151207, 98165247, 98610447, 98671647, 98893047, 101192247, 101476527, 101684007, 101999127, 102061647, 102066567, 102344847, 102790767, 102792207, 102892767, 102894687, 102895167, 102895647, 103062327, 104218407, 106736607, 107115927, 107235087, 107509047, 107955087, 108799287, 108893967, 109638687, 109648167, 109761807, 109831287, 111055527, 111057567, 112799127, 112882647, 112888527, 112950567, 113374647, 113880927, 114906327, 115133247, 116149647, 117980727, 118054767, 118236687, 118631847, 118934247, 119632887, 121592967, 122583687, 123487167, 123873927, 123978567, 123996567, 123996927, 123997527, 124001247, 124418247, 125878047, 126003687, 126004167, 130630407, 130630647, 130686687, 130686807, 130693287, 130777407, 130840767, 130954407, 131115447, 131135007, 131652687, 132065367, 132325287, 132348327, 132758367, 133502127, 133852047, 133854327, 133989327, 134130087, 134567967, 134876607, 134979567, 135278007, 135292767, 135353727, 135773007, 135776847, 135826887, 135841887, 135850407, 136120767, 136236207, 136278807, 136455207, 136550247, 137025927, 137200287, 137382567, 140139567, 140711127, 141827967, 142466367, 142822767, 142883847, 143109567, 144237927, 144965967, 146321007, 146324607, 146326287, 146339727, 146355567, 147006447, 147500367, 147801807, 148154487, 148154607, 148446687, 148454487, 152119407, 152146047, 153546927, 154108047, 154108167, 154112007, 154112367, 154113087, 154113207, 154114887, 154125567, 154126407, 154290807, 154290927, 154291287, 154291407, 154291527, 154291887, 154295007, 154295967, 154297527, 154303287, 154303527, 154332087, 154386087, 154387407, 154391247, 154391967, 154392927, 154394847, 154540527, 154544247, 154693287, 154793967, 154794087, 155010327, 155010447, 157892847, 158149767, 160437567, 163112127, 163372647, 165575127, 4345086236, 4345095356, 4345169885, 4345177565, 4345182855, 4345186250, 4349172433, 4360612711, 4360793649, 4371265570, 4371369115, 4393832120, 4400994377, 4428613611, 4443205897, 4451525654, 4480779579, 4498662865, 4512645730, 4516493673, 4516698376, 4517304218, 4517378559, 4517379732, 4517380203, 4539078702, 4539981050, 4546091198, 4548855586, 4549107258, 4552894255, 4555165414, 4555183615, 4555236856, 4555635725, 4555650690, 4555674903, 4555684517, 4555688577, 4556153989, 4556285026, 4556324359, 4556326294, 4556648082, 4556678787, 4557241378, 4557634755, 4557708173, 4557762374, 4557783054, 4557975570, 4558001894, 4558745950, 4558957661, 4559094602, 4559618101, 4560130208, 4560176292, 4560182777, 4579011086, 4579746196, 4584262791, 4586005424, 4586012639, 4598413679, 4600377077, 4608554346, 4612781170, 4613725167, 4652061785, 4659761500, 4666709965, 4667573429, 4671027724, 4671116147, 4680579583, 4680686606, 4684616813, 4688643082, 4689601181, 4689828177, 4698081076, 4698085906, 4698483837, 4698485673, 4698836785, 4700389583, 4702727917, 4705009339, 4715712191, 4719669541, 4739368280, 4740423257, 4741268540, 4741269263, 4752748306, 4770577846, 4794336160, 4795460127, 4801997974, 4803343582, 4811106193, 4811295981, 4811304462, 4811856227, 4813434715, 4814150351, 4814193728, 4816151238, 4818099525, 4833940287, 4843101319, 4843259745, 4848764049, 4875004757, 4889122311, 4894471199, 4898516140, 4899249557, 4900192015, 4914559913, 4929547357, 4948313020, 4949099173, 4950965688, 4953561994, 4954044942, 4956216414, 4956359904, 4957449531, 4957639563, 4962100538, 4963347489, 4963865755, 4964615668, 4970750314, 4972816526, 4973091358, 4974103111, 4974150367, 4974378154, 4974421332, 4974425718, 4974440616, 4974909599, 4974917942, 4979472123, 4979611347, 4980225738, 4981770423, 4986877832, 4986883844, 4988662283, 4988900800, 4991670386, 4992010014, 4994594770, 4995359684, 4995363299, 4995664790, 4999774536, 5000134545, 5000531182, 5000790614, 5002624314, 5004234716, 5008215061, 5008428214, 5008712810, 5008745198, 5013180459, 5014861653, 5015013326, 5017538127, 5017618519, 5017627117, 5017870049, 5017880045, 5017883228, 5017885847, 5018142683, 5022785722, 5025139359, 5029926636, 5030227901, 5031882476, 5032005985, 5033068546, 5033399504, 5043072122, 5044224363, 5048369906, 5048446713, 5048474394, 5048578765, 5048623579, 5048855939, 5048896271, 5050809297, 5051271119, 5051688660, 5051862705, 5052097433, 5054787810, 5058276148, 5058861737, 5060861401, 5061028770, 5064301367, 5069717241, 5069717757, 5069891248, 5070083463, 5070084600, 5070084900, 5070085425, 5070176819, 5070264421, 5070265165, 5070265579, 5070542615, 5070542867, 5070543512, 5070544541, 5070545231, 5070734376, 5070789315, 5070789798, 5070791445, 5070792210, 5070975727, 5070978478, 5070980068, 5071288712, 5071289186, 5071289492, 5071291676, 5071291904, 5071293308, 5074013907, 5075292382, 5080503991, 5080700777, 5084422705, 5084769575, 5086430628, 5086570777, 5087749143, 5087963482, 5087963515, 5087963758, 5088307652, 5088307808, 5089439429, 5089656445, 5089920958, 5090987206, 5092818847, 5093146003, 5093793060, 5093816358, 5094232723, 5094408955, 5094978878, 5095477169, 5095911984, 5099044011, 5099527571, 5100382690, 5101503982, 5105917836, 5105924625, 5105925495, 5105927196, 5106137416, 5106145432, 5106478940, 5106485993, 5106489806, 5106550992, 5106552639, 5106557640, 5106566805, 5106569886, 5106571641, 5106578097, 5106755944, 5106762619, 5106778033, 5106779677, 5106798235, 5106824086, 5107146233, 5107156019, 5107165619, 5107180046, 5107196363, 5108771973, 5108801259, 5108834289, 5109414149, 5109477985, 5110020623, 5112760220, 5114958382, 5115460784, 5119369095, 5119589887, 5119608376, 5119622833, 5120038706, 5120633507, 5121122353, 5122592284, 5122977293, 5124775878, 5125813833, 5126091553, 5126210840, 5126643066, 5126825437, 5127338603, 5127338816, 5127381578, 5127400238, 5132277556, 5132699513, 5133022542, 5133611676, 5133616221, 5133730271, 5134921406, 5135800503, 5135919817, 5136222120, 5138121327, 5138315476, 5138858096, 5138958121, 5139483098, 5139840436, 5139840665, 5140474550, 5144321936, 5144333909, 5146213631, 5146376851, 5146604124, 5146786705, 5149375150, 5151561498, 5153027495, 5153589998, 5154348200, 5154699509, 5156681753, 5157069292, 5158671048, 5158983053, 5159204352, 5159413879, 5159854943, 5159859116, 5159942800, 5161389334, 5162926068, 5162930067, 5162933463, 5163215428, 5163216130, 5163640988, 5163700261, 5163825115, 5164686136, 5164704205, 5165543671, 5168219701, 5168254035, 5168257092, 5168461886, 5168480847, 5168728930, 5168743192, 5168757037, 5168769787, 5168772901, 5168778655, 5168970951, 5168989869, 5168993465, 5169221645, 5169233267, 5169280048, 5169303034, 5169331108, 5169711263, 5169713450, 5169776357, 5170070115, 5170824404, 5170882443, 5171104458, 5171268953, 5171648064, 5171650710, 5171896510, 5172351482, 5172401216, 5172623489, 5174265103, 5174426316, 5174609998, 5175589188, 5175755967, 5175867721, 5175952556, 5176163414, 5176364765, 5176758235, 5177750552, 5177870797, 5178644616, 5179364348, 5180139243, 5180239578, 5180419644, 5180532946, 5180904705, 5181143661, 5181386592, 5181490686, 5181593174, 5181733414, 5181809656, 5181809690, 5181839959, 5182005731, 5182013738, 5182076630, 5182137275, 5182397220, 5182463672, 5182697710, 5182819635, 5183032757, 5183377125, 5183464981, 5183617887, 5183914280, 5184079599, 5184678682, 5184749480, 5186081686, 5186447656, 5186890053, 5187134772, 5187172024, 5187555720, 5187953009, 5188058869, 5188523710, 5188524448, 5188605003, 5188729193, 5188767790, 5188767796, 5189166142, 5189328444, 5189431118, 5189475051, 5189548223, 5189550387, 5189723181, 5189787736, 5189828618, 5190125680, 5190205634, 5191169460, 5191271964, 5191393089, 5191589683, 5191729173, 5191810924, 5191959290, 5191984980, 5192027247, 5192028642, 5192098697, 5192169747, 5192227828, 5192354596, 5192383894, 5192399251, 5192468599, 5192758278, 5192791910, 5192816760, 5192956536, 5193068566, 5193146767, 5193147754, 5193151576, 5193152371, 5193334757, 5193340753, 5193348376, 5193523574, 5193523673, 5193527249, 5193529637, 5193530843, 5193537785, 5193544766, 5193579062, 5193766979, 5193781367],
                    "avatarImagesUrl": "https://avatar.guim.co.uk",
                    "sentryHost": "app.getsentry.com/35463",
                    "buildNumber": "31697",
                    "sharedAdTargeting": {
                        "ct": "network-front",
                        "url": "/international",
                        "edition": "int",
                        "p": "ng",
                        "k": ["international"]
                    },
                    "onwardWebSocket": "ws://api.nextgen.guardianapps.co.uk/recently-published",
                    "shouldHideAdverts": false,
                    "pbIndexSites": [{
                        "bp": "D",
                        "id": 208246
                    }, {
                        "bp": "M",
                        "id": 213518
                    }, {
                        "bp": "T",
                        "id": 215453
                    }],
                    "googletagJsUrl": "//www.googletagservices.com/tag/js/gpt.js",
                    "idApiUrl": "https://idapi.theguardian.com",
                    "calloutsUrl": "https://callouts.code.dev-guardianapis.com/formstack-campaign/submit",
                    "isPreview": false
                },
                "nav": {
                    "currentUrl": "/",
                    "pillars": [{
                        "title": "News",
                        "url": "/",
                        "longTitle": "Headlines",
                        "iconName": "home",
                        "children": [{
                            "title": "World",
                            "url": "/world",
                            "longTitle": "World news",
                            "iconName": "",
                            "children": [{
                                "title": "Europe",
                                "url": "/world/europe-news",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "US",
                                "url": "/us-news",
                                "longTitle": "US news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Americas",
                                "url": "/world/americas",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Asia",
                                "url": "/world/asia",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Australia",
                                "url": "/australia-news",
                                "longTitle": "Australia news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Middle East",
                                "url": "/world/middleeast",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Africa",
                                "url": "/world/africa",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Inequality",
                                "url": "/inequality",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Cities",
                                "url": "/cities",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Global development",
                                "url": "/global-development",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "UK",
                            "url": "/uk-news",
                            "longTitle": "UK news",
                            "iconName": "",
                            "children": [{
                                "title": "UK politics",
                                "url": "/politics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Education",
                                "url": "/education",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Schools",
                                    "url": "/education/schools",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Teachers",
                                    "url": "/teacher-network",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Universities",
                                    "url": "/education/universities",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Students",
                                    "url": "/education/students",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Media",
                                "url": "/media",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Society",
                                "url": "/society",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Law",
                                "url": "/law",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Scotland",
                                "url": "/uk/scotland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wales",
                                "url": "/uk/wales",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Northern Ireland",
                                "url": "/uk/northernireland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Environment",
                            "url": "/environment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Climate change",
                                "url": "/environment/climate-change",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wildlife",
                                "url": "/environment/wildlife",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Energy",
                                "url": "/environment/energy",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Pollution",
                                "url": "/environment/pollution",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Science",
                            "url": "/science",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cities",
                            "url": "/cities",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Global development",
                            "url": "/global-development",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Football",
                            "url": "/football",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Live scores",
                                "url": "/football/live",
                                "longTitle": "football/live",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Tables",
                                "url": "/football/tables",
                                "longTitle": "football/tables",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Fixtures",
                                "url": "/football/fixtures",
                                "longTitle": "football/fixtures",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Results",
                                "url": "/football/results",
                                "longTitle": "football/results",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Competitions",
                                "url": "/football/competitions",
                                "longTitle": "football/competitions",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Clubs",
                                "url": "/football/teams",
                                "longTitle": "football/teams",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Tech",
                            "url": "/technology",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Business",
                            "url": "/business",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Economics",
                                "url": "/business/economics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Banking",
                                "url": "/business/banking",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Money",
                                "url": "/money",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Property",
                                    "url": "/money/property",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Pensions",
                                    "url": "/money/pensions",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Savings",
                                    "url": "/money/savings",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Borrowing",
                                    "url": "/money/debt",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Careers",
                                    "url": "/money/work-and-careers",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Markets",
                                "url": "/business/stock-markets",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Project Syndicate",
                                "url": "/business/series/project-syndicate-economists",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "B2B",
                                "url": "/business-to-business",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Obituaries",
                            "url": "/tone/obituaries",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }, {
                        "title": "Opinion",
                        "url": "/commentisfree",
                        "longTitle": "Opinion home",
                        "iconName": "home",
                        "children": [{
                            "title": "The Guardian view",
                            "url": "/profile/editorial",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Columnists",
                            "url": "/index/contributors",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cartoons",
                            "url": "/cartoons/archive",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Opinion videos",
                            "url": "/type/video+tone/comment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Letters",
                            "url": "/tone/letters",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }, {
                        "title": "Sport",
                        "url": "/sport",
                        "longTitle": "Sport home",
                        "iconName": "home",
                        "children": [{
                            "title": "Football",
                            "url": "/football",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Live scores",
                                "url": "/football/live",
                                "longTitle": "football/live",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Tables",
                                "url": "/football/tables",
                                "longTitle": "football/tables",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Fixtures",
                                "url": "/football/fixtures",
                                "longTitle": "football/fixtures",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Results",
                                "url": "/football/results",
                                "longTitle": "football/results",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Competitions",
                                "url": "/football/competitions",
                                "longTitle": "football/competitions",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Clubs",
                                "url": "/football/teams",
                                "longTitle": "football/teams",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Cricket",
                            "url": "/sport/cricket",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Rugby union",
                            "url": "/sport/rugby-union",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Tennis",
                            "url": "/sport/tennis",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cycling",
                            "url": "/sport/cycling",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "F1",
                            "url": "/sport/formulaone",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Golf",
                            "url": "/sport/golf",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "US sports",
                            "url": "/sport/us-sport",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }, {
                        "title": "Culture",
                        "url": "/culture",
                        "longTitle": "Culture home",
                        "iconName": "home",
                        "children": [{
                            "title": "Books",
                            "url": "/books",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Music",
                            "url": "/music",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "TV & radio",
                            "url": "/tv-and-radio",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Art & design",
                            "url": "/artanddesign",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Film",
                            "url": "/film",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Games",
                            "url": "/games",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Classical",
                            "url": "/music/classicalmusicandopera",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Stage",
                            "url": "/stage",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }, {
                        "title": "Lifestyle",
                        "url": "/lifeandstyle",
                        "longTitle": "Lifestyle home",
                        "iconName": "home",
                        "children": [{
                            "title": "Fashion",
                            "url": "/fashion",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Food",
                            "url": "/food",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Recipes",
                            "url": "/tone/recipes",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Love & sex",
                            "url": "/lifeandstyle/love-and-sex",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Health & fitness",
                            "url": "/lifeandstyle/health-and-wellbeing",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Home & garden",
                            "url": "/lifeandstyle/home-and-garden",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Women",
                            "url": "/lifeandstyle/women",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Men",
                            "url": "/lifeandstyle/men",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Family",
                            "url": "/lifeandstyle/family",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Travel",
                            "url": "/travel",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "UK",
                                "url": "/travel/uk",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Europe",
                                "url": "/travel/europe",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "US",
                                "url": "/travel/usa",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Money",
                            "url": "/money",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Property",
                                "url": "/money/property",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Pensions",
                                "url": "/money/pensions",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Savings",
                                "url": "/money/savings",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Borrowing",
                                "url": "/money/debt",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Careers",
                                "url": "/money/work-and-careers",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }],
                        "classList": []
                    }],
                    "otherLinks": [{
                        "title": "The Guardian app",
                        "url": "https://www.theguardian.com/mobile/2014/may/29/the-guardian-for-mobile-and-tablet",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Video",
                        "url": "/video",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Podcasts",
                        "url": "/podcasts",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Pictures",
                        "url": "/inpictures",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Newsletters",
                        "url": "/email-newsletters",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Today's paper",
                        "url": "/theguardian",
                        "longTitle": "",
                        "iconName": "",
                        "children": [{
                            "title": "Obituaries",
                            "url": "/tone/obituaries",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "G2",
                            "url": "/theguardian/g2",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Weekend",
                            "url": "/theguardian/weekend",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "The Guide",
                            "url": "/theguardian/theguide",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Saturday review",
                            "url": "/theguardian/guardianreview",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }, {
                        "title": "Inside the Guardian",
                        "url": "https://www.theguardian.com/membership",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "The Observer",
                        "url": "/observer",
                        "longTitle": "",
                        "iconName": "",
                        "children": [{
                            "title": "Comment",
                            "url": "/theobserver/news/comment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "The New Review",
                            "url": "/theobserver/new-review",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Observer Magazine",
                            "url": "/theobserver/magazine",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }, {
                        "title": "Guardian Weekly",
                        "url": "https://www.theguardian.com/weekly?INTCMP=gdnwb_mawns_editorial_gweekly_GW_TopNav_Int",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Crosswords",
                        "url": "/crosswords",
                        "longTitle": "",
                        "iconName": "",
                        "children": [{
                            "title": "Blog",
                            "url": "/crosswords/crossword-blog",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Editor",
                            "url": "/crosswords/series/crossword-editor-update",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Quick",
                            "url": "/crosswords/series/quick",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cryptic",
                            "url": "/crosswords/series/cryptic",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Prize",
                            "url": "/crosswords/series/prize",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Weekend",
                            "url": "/crosswords/series/weekend-crossword",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Quiptic",
                            "url": "/crosswords/series/quiptic",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Genius",
                            "url": "/crosswords/series/genius",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Speedy",
                            "url": "/crosswords/series/speedy",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Everyman",
                            "url": "/crosswords/series/everyman",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Azed",
                            "url": "/crosswords/series/azed",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    }],
                    "brandExtensions": [{
                        "title": "Search jobs",
                        "url": "https://jobs.theguardian.com/jobs?INTCMP=jobs_int_web_newheader_dropdown",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Dating",
                        "url": "https://soulmates.theguardian.com?INTCMP=soulmates_int_web_newheader_dropdown",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Holidays",
                        "url": "https://holidays.theguardian.com?INTCMP=holidays_int_web_newheader",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Digital Archive",
                        "url": "https://theguardian.newspapers.com",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": []
                    }, {
                        "title": "Discount Codes",
                        "url": "https://discountcode.theguardian.com",
                        "longTitle": "",
                        "iconName": "",
                        "children": [],
                        "classList": ["js-discount-code-link"]
                    }],
                    "currentNavLink": {
                        "title": "News",
                        "url": "/",
                        "longTitle": "Headlines",
                        "iconName": "home",
                        "children": [{
                            "title": "World",
                            "url": "/world",
                            "longTitle": "World news",
                            "iconName": "",
                            "children": [{
                                "title": "Europe",
                                "url": "/world/europe-news",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "US",
                                "url": "/us-news",
                                "longTitle": "US news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Americas",
                                "url": "/world/americas",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Asia",
                                "url": "/world/asia",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Australia",
                                "url": "/australia-news",
                                "longTitle": "Australia news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Middle East",
                                "url": "/world/middleeast",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Africa",
                                "url": "/world/africa",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Inequality",
                                "url": "/inequality",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Cities",
                                "url": "/cities",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Global development",
                                "url": "/global-development",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "UK",
                            "url": "/uk-news",
                            "longTitle": "UK news",
                            "iconName": "",
                            "children": [{
                                "title": "UK politics",
                                "url": "/politics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Education",
                                "url": "/education",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Schools",
                                    "url": "/education/schools",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Teachers",
                                    "url": "/teacher-network",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Universities",
                                    "url": "/education/universities",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Students",
                                    "url": "/education/students",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Media",
                                "url": "/media",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Society",
                                "url": "/society",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Law",
                                "url": "/law",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Scotland",
                                "url": "/uk/scotland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wales",
                                "url": "/uk/wales",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Northern Ireland",
                                "url": "/uk/northernireland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Environment",
                            "url": "/environment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Climate change",
                                "url": "/environment/climate-change",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wildlife",
                                "url": "/environment/wildlife",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Energy",
                                "url": "/environment/energy",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Pollution",
                                "url": "/environment/pollution",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Science",
                            "url": "/science",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cities",
                            "url": "/cities",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Global development",
                            "url": "/global-development",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Football",
                            "url": "/football",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Live scores",
                                "url": "/football/live",
                                "longTitle": "football/live",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Tables",
                                "url": "/football/tables",
                                "longTitle": "football/tables",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Fixtures",
                                "url": "/football/fixtures",
                                "longTitle": "football/fixtures",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Results",
                                "url": "/football/results",
                                "longTitle": "football/results",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Competitions",
                                "url": "/football/competitions",
                                "longTitle": "football/competitions",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Clubs",
                                "url": "/football/teams",
                                "longTitle": "football/teams",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Tech",
                            "url": "/technology",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Business",
                            "url": "/business",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Economics",
                                "url": "/business/economics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Banking",
                                "url": "/business/banking",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Money",
                                "url": "/money",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Property",
                                    "url": "/money/property",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Pensions",
                                    "url": "/money/pensions",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Savings",
                                    "url": "/money/savings",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Borrowing",
                                    "url": "/money/debt",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Careers",
                                    "url": "/money/work-and-careers",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Markets",
                                "url": "/business/stock-markets",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Project Syndicate",
                                "url": "/business/series/project-syndicate-economists",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "B2B",
                                "url": "/business-to-business",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Obituaries",
                            "url": "/tone/obituaries",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    },
                    "currentParent": {
                        "title": "News",
                        "url": "/",
                        "longTitle": "Headlines",
                        "iconName": "home",
                        "children": [{
                            "title": "World",
                            "url": "/world",
                            "longTitle": "World news",
                            "iconName": "",
                            "children": [{
                                "title": "Europe",
                                "url": "/world/europe-news",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "US",
                                "url": "/us-news",
                                "longTitle": "US news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Americas",
                                "url": "/world/americas",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Asia",
                                "url": "/world/asia",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Australia",
                                "url": "/australia-news",
                                "longTitle": "Australia news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Middle East",
                                "url": "/world/middleeast",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Africa",
                                "url": "/world/africa",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Inequality",
                                "url": "/inequality",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Cities",
                                "url": "/cities",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Global development",
                                "url": "/global-development",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "UK",
                            "url": "/uk-news",
                            "longTitle": "UK news",
                            "iconName": "",
                            "children": [{
                                "title": "UK politics",
                                "url": "/politics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Education",
                                "url": "/education",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Schools",
                                    "url": "/education/schools",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Teachers",
                                    "url": "/teacher-network",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Universities",
                                    "url": "/education/universities",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Students",
                                    "url": "/education/students",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Media",
                                "url": "/media",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Society",
                                "url": "/society",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Law",
                                "url": "/law",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Scotland",
                                "url": "/uk/scotland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wales",
                                "url": "/uk/wales",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Northern Ireland",
                                "url": "/uk/northernireland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Environment",
                            "url": "/environment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Climate change",
                                "url": "/environment/climate-change",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wildlife",
                                "url": "/environment/wildlife",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Energy",
                                "url": "/environment/energy",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Pollution",
                                "url": "/environment/pollution",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Science",
                            "url": "/science",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cities",
                            "url": "/cities",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Global development",
                            "url": "/global-development",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Football",
                            "url": "/football",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Live scores",
                                "url": "/football/live",
                                "longTitle": "football/live",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Tables",
                                "url": "/football/tables",
                                "longTitle": "football/tables",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Fixtures",
                                "url": "/football/fixtures",
                                "longTitle": "football/fixtures",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Results",
                                "url": "/football/results",
                                "longTitle": "football/results",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Competitions",
                                "url": "/football/competitions",
                                "longTitle": "football/competitions",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Clubs",
                                "url": "/football/teams",
                                "longTitle": "football/teams",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Tech",
                            "url": "/technology",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Business",
                            "url": "/business",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Economics",
                                "url": "/business/economics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Banking",
                                "url": "/business/banking",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Money",
                                "url": "/money",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Property",
                                    "url": "/money/property",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Pensions",
                                    "url": "/money/pensions",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Savings",
                                    "url": "/money/savings",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Borrowing",
                                    "url": "/money/debt",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Careers",
                                    "url": "/money/work-and-careers",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Markets",
                                "url": "/business/stock-markets",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Project Syndicate",
                                "url": "/business/series/project-syndicate-economists",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "B2B",
                                "url": "/business-to-business",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Obituaries",
                            "url": "/tone/obituaries",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    },
                    "currentPillar": {
                        "title": "News",
                        "url": "/",
                        "longTitle": "Headlines",
                        "iconName": "home",
                        "children": [{
                            "title": "World",
                            "url": "/world",
                            "longTitle": "World news",
                            "iconName": "",
                            "children": [{
                                "title": "Europe",
                                "url": "/world/europe-news",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "US",
                                "url": "/us-news",
                                "longTitle": "US news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Americas",
                                "url": "/world/americas",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Asia",
                                "url": "/world/asia",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Australia",
                                "url": "/australia-news",
                                "longTitle": "Australia news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Middle East",
                                "url": "/world/middleeast",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Africa",
                                "url": "/world/africa",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Inequality",
                                "url": "/inequality",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Cities",
                                "url": "/cities",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Global development",
                                "url": "/global-development",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "UK",
                            "url": "/uk-news",
                            "longTitle": "UK news",
                            "iconName": "",
                            "children": [{
                                "title": "UK politics",
                                "url": "/politics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Education",
                                "url": "/education",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Schools",
                                    "url": "/education/schools",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Teachers",
                                    "url": "/teacher-network",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Universities",
                                    "url": "/education/universities",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Students",
                                    "url": "/education/students",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Media",
                                "url": "/media",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Society",
                                "url": "/society",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Law",
                                "url": "/law",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Scotland",
                                "url": "/uk/scotland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wales",
                                "url": "/uk/wales",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Northern Ireland",
                                "url": "/uk/northernireland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Environment",
                            "url": "/environment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Climate change",
                                "url": "/environment/climate-change",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wildlife",
                                "url": "/environment/wildlife",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Energy",
                                "url": "/environment/energy",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Pollution",
                                "url": "/environment/pollution",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Science",
                            "url": "/science",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cities",
                            "url": "/cities",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Global development",
                            "url": "/global-development",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Football",
                            "url": "/football",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Live scores",
                                "url": "/football/live",
                                "longTitle": "football/live",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Tables",
                                "url": "/football/tables",
                                "longTitle": "football/tables",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Fixtures",
                                "url": "/football/fixtures",
                                "longTitle": "football/fixtures",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Results",
                                "url": "/football/results",
                                "longTitle": "football/results",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Competitions",
                                "url": "/football/competitions",
                                "longTitle": "football/competitions",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Clubs",
                                "url": "/football/teams",
                                "longTitle": "football/teams",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Tech",
                            "url": "/technology",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Business",
                            "url": "/business",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Economics",
                                "url": "/business/economics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Banking",
                                "url": "/business/banking",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Money",
                                "url": "/money",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Property",
                                    "url": "/money/property",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Pensions",
                                    "url": "/money/pensions",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Savings",
                                    "url": "/money/savings",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Borrowing",
                                    "url": "/money/debt",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Careers",
                                    "url": "/money/work-and-careers",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Markets",
                                "url": "/business/stock-markets",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Project Syndicate",
                                "url": "/business/series/project-syndicate-economists",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "B2B",
                                "url": "/business-to-business",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Obituaries",
                            "url": "/tone/obituaries",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }],
                        "classList": []
                    },
                    "subNavSections": {
                        "links": [{
                            "title": "World",
                            "url": "/world",
                            "longTitle": "World news",
                            "iconName": "",
                            "children": [{
                                "title": "Europe",
                                "url": "/world/europe-news",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "US",
                                "url": "/us-news",
                                "longTitle": "US news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Americas",
                                "url": "/world/americas",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Asia",
                                "url": "/world/asia",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Australia",
                                "url": "/australia-news",
                                "longTitle": "Australia news",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Middle East",
                                "url": "/world/middleeast",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Africa",
                                "url": "/world/africa",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Inequality",
                                "url": "/inequality",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Cities",
                                "url": "/cities",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Global development",
                                "url": "/global-development",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "UK",
                            "url": "/uk-news",
                            "longTitle": "UK news",
                            "iconName": "",
                            "children": [{
                                "title": "UK politics",
                                "url": "/politics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Education",
                                "url": "/education",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Schools",
                                    "url": "/education/schools",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Teachers",
                                    "url": "/teacher-network",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Universities",
                                    "url": "/education/universities",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Students",
                                    "url": "/education/students",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Media",
                                "url": "/media",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Society",
                                "url": "/society",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Law",
                                "url": "/law",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Scotland",
                                "url": "/uk/scotland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wales",
                                "url": "/uk/wales",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Northern Ireland",
                                "url": "/uk/northernireland",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Environment",
                            "url": "/environment",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Climate change",
                                "url": "/environment/climate-change",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Wildlife",
                                "url": "/environment/wildlife",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Energy",
                                "url": "/environment/energy",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Pollution",
                                "url": "/environment/pollution",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Science",
                            "url": "/science",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Cities",
                            "url": "/cities",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Global development",
                            "url": "/global-development",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Football",
                            "url": "/football",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Live scores",
                                "url": "/football/live",
                                "longTitle": "football/live",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Tables",
                                "url": "/football/tables",
                                "longTitle": "football/tables",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Fixtures",
                                "url": "/football/fixtures",
                                "longTitle": "football/fixtures",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Results",
                                "url": "/football/results",
                                "longTitle": "football/results",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Competitions",
                                "url": "/football/competitions",
                                "longTitle": "football/competitions",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Clubs",
                                "url": "/football/teams",
                                "longTitle": "football/teams",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Tech",
                            "url": "/technology",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }, {
                            "title": "Business",
                            "url": "/business",
                            "longTitle": "",
                            "iconName": "",
                            "children": [{
                                "title": "Economics",
                                "url": "/business/economics",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Banking",
                                "url": "/business/banking",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Money",
                                "url": "/money",
                                "longTitle": "",
                                "iconName": "",
                                "children": [{
                                    "title": "Property",
                                    "url": "/money/property",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Pensions",
                                    "url": "/money/pensions",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Savings",
                                    "url": "/money/savings",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Borrowing",
                                    "url": "/money/debt",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }, {
                                    "title": "Careers",
                                    "url": "/money/work-and-careers",
                                    "longTitle": "",
                                    "iconName": "",
                                    "children": [],
                                    "classList": []
                                }],
                                "classList": []
                            }, {
                                "title": "Markets",
                                "url": "/business/stock-markets",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "Project Syndicate",
                                "url": "/business/series/project-syndicate-economists",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }, {
                                "title": "B2B",
                                "url": "/business-to-business",
                                "longTitle": "",
                                "iconName": "",
                                "children": [],
                                "classList": []
                            }],
                            "classList": []
                        }, {
                            "title": "Obituaries",
                            "url": "/tone/obituaries",
                            "longTitle": "",
                            "iconName": "",
                            "children": [],
                            "classList": []
                        }]
                    }
                },
                "switches": {
                    "audioOnwardJourneySwitch": true,
                    "idCookieRefresh": true,
                    "boostGaUserTimingFidelity": false,
                    "thirdPartyEmbedTracking": true,
                    "scrollDepth": true,
                    "enableSentryReporting": true,
                    "ophan": true,
                    "serviceWorkerEnabled": false,
                    "discussionPageSize": true,
                    "externalVideoEmbeds": true,
                    "relatedContent": true,
                    "autoRefresh": true,
                    "lazyLoadContainers": true,
                    "enableDiscussionSwitch": true,
                    "registerWithPhone": false,
                    "discussionAllowAnonymousRecommendsSwitch": false,
                    "discussionAllPageSize": true,
                    "prebidPangaeaUs": false,
                    "commercialYoutubePfpAdTargeting": true,
                    "mobileStickyPrebid": true,
                    "mobileStickyLeaderboard": true,
                    "prebidS2sozone": false,
                    "prebidAdYouLike": true,
                    "prebidXaxis": true,
                    "prebidImproveDigital": true,
                    "prebidTriplelift": true,
                    "prebidTrustx": true,
                    "prebidPubmatic": true,
                    "prebidPangaea": true,
                    "prebidOzone": true,
                    "prebidOpenx": true,
                    "prebidIndexExchange": true,
                    "prebidAppnexusInvcode": true,
                    "prebidAppnexusUkRow": true,
                    "prebidAppnexus": true,
                    "prebidSonobi": true,
                    "prebidUserSync": true,
                    "ampPrebid": true,
                    "prebidAnalytics": true,
                    "confiantAdVerification": true,
                    "facebookTrackingPixel": true,
                    "commercialPageViewAnalytics": true,
                    "enableConsentManagementService": true,
                    "lotame": true,
                    "abAdblockAsk": true,
                    "membershipEngagementBannerBlockAu": false,
                    "membershipEngagementBannerBlockUs": false,
                    "membershipEngagementBannerBlockUk": false,
                    "engagementBannerTestsFromGoogleDocs": true,
                    "useConfiguredEpicTests": true,
                    "membershipEngagementBanner": true,
                    "simpleReach": true,
                    "remarketing": true,
                    "krux": true,
                    "adomik": true,
                    "twitterUwt": true,
                    "inizio": true,
                    "imrWorldwide": true,
                    "adFreeStrictExpiryEnforcement": false,
                    "hostedVideoAutoplay": true,
                    "surveys": true,
                    "commercialOutbrainNewids": true,
                    "iasAdTargeting": true,
                    "carrotTrafficDriver": true,
                    "commercial": true,
                    "abCommercialPangaeaAdapter": true,
                    "abCommercialXaxisAdapter": true,
                    "abCommercialPrebidTripleLiftAdapter": true,
                    "abCommercialOutbrainTesting": true,
                    "abCommercialPrebidSafeframe": true,
                    "abAcquisitionsEpicAlwaysAskIfTagged": true,
                    "abContributionsBannerEnvironmentMomentNonSupporters": false,
                    "abContributionsBannerEnvironmentMomentSupporters": false,
                    "abContributionsBannerArticlesViewed": true,
                    "abContributionsEpicCountryName": true,
                    "abContributionsEpicLearnMoreCta": true,
                    "abContributionsEpicArticlesViewedMonth": true,
                    "abContributionsEpicAskFourEarning": true,
                    "abCommercialIabCompliant": true,
                    "dotcomRenderingAdvertisements": true,
                    "oldTlsSupportDeprecation": true,
                    "scAdFreeBanner": true,
                    "weAreHiring": false,
                    "targeting": true,
                    "sharingComments": true,
                    "smartAppBanner": true,
                    "emailInlineInFooter": true,
                    "crosswordSvgThumbnails": true,
                    "historyTags": true,
                    "weather": true,
                    "breakingNews": true,
                    "videojs": true,
                    "enhanceTweets": true,
                    "idProfileNavigation": true,
                    "googleSearch": true,
                    "webFonts": true,
                    "mostViewedFronts": true,
                    "extendedMostPopularFronts": true,
                    "extendedMostPopular": true,
                    "geoMostPopular": true,
                    "plistaForOutbrainAu": true,
                    "outbrain": true,
                    "serverShareCounts": true
                },
                "tests": {
                    "oldTlsSupportDeprecationControl": "control"
                },
                "modules": {
                    "tracking": {
                        "ready": null
                    }
                },
                "images": {
                    "commercial": {
                        "ab-icon": "https:\/\/assets.guim.co.uk\/images\/commercial\/504a6bc5825d269eaf8ffdc77ad1f5b8\/ab-icon.png",
                        "abp-icon": "https:\/\/assets.guim.co.uk\/images\/commercial\/15fa8f9f99ce2a6b804097d348622727\/abp-icon.png",
                        "abp-whitelist-instruction-chrome": "https:\/\/assets.guim.co.uk\/images\/commercial\/862b03a008061af5c3b77c1f2dd52dd4\/ad-block-instructions-chrome.png"
                    },
                    "acquisitions": {
                        "payment-methods": "https:\/\/assets.guim.co.uk\/images\/acquisitions\/2db3a266287f452355b68d4240df8087\/payment-methods.png",
                        "info-logo": "https:\/\/assets.guim.co.uk\/images\/acquisitions\/d0984d9e2f0ed847157bc15c86cc4305\/info-logo.svg",
                        "ad-free": "https:\/\/assets.guim.co.uk\/images\/acquisitions\/76f1874898805a939efeacfba097b400\/ad-free.svg"
                    },
                    "journalism": {
                        "apple-podcast-logo": "https:\/\/assets.guim.co.uk\/images\/journalism\/1956a067ce99e2a45e88c7dc2ec0260e\/apple-podcast-icon-48.png"
                    }
                },
                "stylesheets": {
                    "fonts": {
                        "hintingCleartype": {
                            "kerningOn": "https:\/\/assets.guim.co.uk\/stylesheets\/9f78997fd3b37533007e55334c9e7c8b\/webfonts-hinting-cleartype-kerning-on.css"
                        },
                        "hintingOff": {
                            "kerningOn": "https:\/\/assets.guim.co.uk\/stylesheets\/50441b3bda46af4af85a3f0a1b61f8bb\/webfonts-hinting-off-kerning-on.css"
                        },
                        "hintingAuto": {
                            "kerningOn": "https:\/\/assets.guim.co.uk\/stylesheets\/4f3512b7ca058a60dea4f4b994ab4ebc\/webfonts-hinting-auto-kerning-on.css"
                        }
                    }
                },
                "googleAnalytics": {
                    "trackers": {
                        "editorialTest": "guardianTestPropertyTracker",
                        "editorialProd": "allEditorialPropertyTracker",
                        "editorial": "allEditorialPropertyTracker"
                    },
                    "timingEvents": []
                },
                "libs": {
                    "googletag": "\/\/www.googletagservices.com\/tag\/js\/gpt.js",
                    "cmp": {
                        "fullVendorDataUrl": "/commercial/cmp/vendorlist.json",
                        "shortVendorDataUrl": "/commercial/cmp/shortvendorlist.json"
                    },
                    "facebookAccountId": "279880532344561"
                }
            }
        };
        if (window.esi && window.esi.viewId) {
            window.guardian.config.ophan = {
                pageViewId: window.esi.viewId
            };
        } else {
            window.guardian.config.ophan = {
                pageViewId: new Date().getTime().toString(36) + 'xxxxxxxxxxxx'.replace(/x/g, function() {
                    return Math.floor(Math.random() * 36).toString(36);
                })
            };
        }
        /*@cc_on
        @if (@_jscript_version <= 9)
            guardian.config.page.ajaxUrl = guardian.config.page.ajaxUrl.replace(/^https:/, '');
        @end
        @*/
        (function(documentElement, window, navigator) {
            var docClass = documentElement.className;
            var testCssSupportForPropertyAndValue = function(supportsSupports) {
                return supportsSupports ? nativeCSSSupports : shimCSSSupports()
            }("CSS" in window && "supports" in window.CSS);

            function nativeCSSSupports(prop, value) {
                return window.CSS.supports(prop, value)
            }

            function shimCSSSupports() {
                var cssToDOMRegExp = /([a-z])-([a-z])/g;
                var testElem = document.createElement("test");

                function cssToDOM(name) {}

                function cssToDOMReplacer(str, m1, m2) {}
                return function(prop, value) {}
            }

            function testAndAddClass(tests) {
                docClass += " " + tests.map(function(test) {
                    return (test.props.some(function(prop) {
                        return test.values.some(function(value) {
                            return testCssSupportForPropertyAndValue(prop, value)
                        })
                    }) ? "has-" : "has-no-") + test.feature
                }).join(" ")
            }

            function getCookieValue(name) {
                var val = document.cookie.match("(^|;)\\s*" + name + "\\s*\x3d\\s*([^;]+)");
                return val ? val.pop() : undefined
            }

            function isRecentContributor() {
                var value = getCookieValue("gu.contributions.contrib-timestamp");
                if (!value) return false;
                var now = (new Date).getTime();
                var lastContribution = (new Date(value)).getTime();
                var diffDays = Math.ceil((now - lastContribution) / (1E3 * 3600 * 24));
                return diffDays <= 180
            }

            function shouldHideSupportMessaging() {
                return getCookieValue("gu_hide_support_messaging") === "true"
            }

            function forcePercentagePadding() {
                var firefoxMatch = navigator.userAgent.match(/Firefox\/([0-9]+)\./) || [];
                if (firefoxMatch.length === 2 && parseInt(firefoxMatch[1], 10) < 54) return true;
                return false
            }
            if (!!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect) docClass += " svg";
            else docClass += " no-svg";
            testAndAddClass([{
                feature: "flex",
                props: ["flex", "-ms-flex", "-webkit-flex", "-moz-box-flex", "-webkit-box-flex"],
                values: ["inherit"]
            }, {
                feature: "flex-wrap",
                props: ["flex-wrap", "-ms-flex-wrap", "-webkit-flex-wrap"],
                values: ["inherit"]
            }, {
                feature: "fixed",
                props: ["position"],
                values: ["fixed"]
            }, {
                feature: "sticky",
                props: ["position"],
                values: ["sticky", "-webkit-sticky"]
            }]);
            if (window.guardian.isEnhanced) docClass = docClass.replace(/\bis-not-modern\b/g, "is-modern");
            if (window.location.hash !== "#no-kern") docClass += " should-kern";
            var baseFontSize = null;
            if ("getComputedStyle" in window) baseFontSize = window.getComputedStyle(documentElement).getPropertyValue("font-size");
            if (baseFontSize && parseInt(baseFontSize, 10) !== 16) documentElement.style.fontSize = baseFontSize;
            if (shouldHideSupportMessaging()) docClass += " hide-support-messaging";
            if (isRecentContributor()) docClass += " is-recent-contributor";
            if (forcePercentagePadding()) docClass += " force-percentage-padding";
            documentElement.className = docClass.replace(/\bjs-off\b/g, "js-on")
        })(document.documentElement, window, navigator);
        (function(window, document) {
            var ua = navigator.userAgent;
            var shouldHint = function() {
                var windowsNT = /Windows NT (\d\.\d+)/.exec(ua);
                try {
                    if (windowsNT) {
                        var version = parseFloat(windowsNT[1], 10);
                        if (version >= 5.1 && version <= 6.1) return true
                    }
                } catch (e) {}
                return false
            }();

            function loadFontsFromStorage() {
                try {
                    if ("localStorage" in window) {
                        var saveFont = function(fontName, fontHash, css) {
                            for (var i = 0, totalItems = localStorage.length; i < totalItems - 1; i++) {
                                var key = localStorage.key(i);
                                if (key.indexOf(fontStorageKey(fontName)) !== -1) {
                                    localStorage.removeItem(key);
                                    break
                                }
                            }
                            localStorage.setItem(fontStorageKey(fontName, fontHash), JSON.stringify({
                                value: css
                            }))
                        };
                        var fetchFont = function(url, el, fontName, fontHash) {
                            var xhr = new XMLHttpRequest;
                            this["guFont"] = function(fontData) {
                                return fontData.css
                            };
                            xhr.open("GET", url, true);
                            xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4 && xhr.status === 200) {
                                    var css = eval(xhr.responseText);
                                    useFont(el, css, fontName);
                                    saveFont(fontName, fontHash, css)
                                }
                            };
                            xhr.send()
                        };
                        var useFont = function(el, css, fontName) {
                            el.innerHTML = css
                        };
                        var fontStorageKey = function(fontName, fontHash) {
                            fontHash = fontHash === undefined ? "" : fontHash;
                            return "gu.fonts." + fontName + "." + fontHash
                        };
                        var fontFormat = function() {
                            var formatStorageKey = "gu.fonts.format";
                            var format = localStorage.getItem(formatStorageKey);

                            function supportsWoff2() {
                                if ("FontFace" in window) try {
                                    var f = new window.FontFace("t", 'url("data:application/font-woff2,") format("woff2")', {});
                                    f.load()["catch"](function() {});
                                    if (f.status === "loading") return true
                                } catch (e) {}
                                if (!/edge\/([0-9]+)/.test(ua.toLowerCase())) {
                                    var browser = /(chrome|firefox)\/([0-9]+)/.exec(ua.toLowerCase());
                                    var supportsWoff2$0 = {
                                        "chrome": 36,
                                        "firefox": 39
                                    };
                                    return !!browser && supportsWoff2$0[browser[1]] < parseInt(browser[2], 10)
                                }
                                return false
                            }
                            if (/value/.test(format)) {
                                format = JSON.parse(format).value;
                                localStorage.setItem(formatStorageKey, format)
                            }
                            if (!format) {
                                format = supportsWoff2() ? "woff2" : ua.indexOf("android") > -1 ? "ttf" : "woff";
                                localStorage.setItem(formatStorageKey, format)
                            }
                            return format
                        }();
                        var fonts = document.querySelectorAll(".webfont");
                        var urlAttribute = shouldHint ? "data-cache-file-hinted-" + fontFormat : "data-cache-file-" + fontFormat;
                        for (var i = 0, j = fonts.length; i < j; ++i) {
                            var font = fonts[i];
                            var fontURL = font.getAttribute(urlAttribute);
                            var fontInfo = fontURL.match(/fonts\/([^/]*?)\/?([^/]*)\.(woff2|woff|ttf).json$/);
                            var fontName = fontInfo[2];
                            var fontHash = fontInfo[1];
                            var fontData = localStorage.getItem(fontStorageKey(fontName, fontHash));
                            if (fontData) useFont(font, JSON.parse(fontData).value, fontName);
                            else fetchFont(fontURL, font, fontName, fontHash)
                        }
                        return true
                    }
                } catch (e) {}
                return false
            }

            function loadFontsAsynchronously() {}

            function fontSmoothingEnabled() {
                try {
                    var saveFontSmoothing = function(state) {};
                    if (document.cookie.indexOf("GU_fonts_smoothing") !== -1 && window.location.hash !== "#check-smoothing") return document.cookie.indexOf("GU_fonts_smoothing\x3don") !== -1;
                    if (/Windows NT (\d\.\d+)/.exec(ua) && !/MSIE|Trident/.exec(ua)) {
                        try {
                            var canvasNode = document.createElement("canvas");
                            canvasNode.width = "35";
                            canvasNode.height = "35";
                            canvasNode.style.display = "none";
                            document.documentElement.appendChild(canvasNode);
                            var ctx = canvasNode.getContext("2d");
                            ctx.textBaseline = "top";
                            ctx.font = "32px Arial";
                            ctx.fillStyle = "black";
                            ctx.strokeStyle = "black";
                            ctx.fillText("@", 0, 0);
                            for (var x = 0; x <= 16; x++)
                                for (var y = 0; y <= 16; y++) {
                                    var alpha = ctx.getImageData(x, y, 1, 1).data[3];
                                    if (alpha > 0 && alpha < 255) {
                                        saveFontSmoothing(true);
                                        return true
                                    }
                                }
                        } catch (e) {}
                        saveFontSmoothing(false);
                        return false
                    } else return true
                } catch (e$1) {}
            }
            var fontCookie = "GU_fonts\x3doff; domain\x3d" + location.hostname + "; path\x3d/";

            function disableFonts() {}

            function enableFonts() {}

            function checkUserFontDisabling() {
                if (window.location.hash === "#fonts-off") disableFonts();
                else if (window.location.hash === "#fonts-on" || window.location.hash === "#check-smoothing") enableFonts()
            }
            var fontsEnabled = document.cookie.indexOf("GU_fonts\x3doff") === -1;

            function loadFonts() {
                checkUserFontDisabling();
                if (fontsEnabled)
                    if (fontSmoothingEnabled()) loadFontsFromStorage() || loadFontsAsynchronously();
                    else disableFonts()
            }
            loadFonts()
        })(window, document);
        (function(styleSheetLinks, documentStyleSheets) {
            function setMedia(styleSheet) {
                for (var i = 0, totalSheets = documentStyleSheets.length; i < totalSheets; i++) {
                    var sheet = documentStyleSheets[i];
                    if (sheet.href && sheet.href.indexOf(styleSheet.href) > -1) {
                        styleSheet.media = "screen";
                        window.guardian.css.loaded = true;
                        try {
                            window.guardian.css.onLoad()
                        } catch (e) {}
                        return true
                    }
                }
                setTimeout(function() {
                    setMedia(styleSheet)
                })
            }

            function useCss() {
                for (var i = 0, totalStyleSheetLinks = styleSheetLinks.length; i < totalStyleSheetLinks; i++)
                    if (styleSheetLinks[i].getAttribute("media") === "only x") setMedia(styleSheetLinks[i])
            }
            useCss()
        })(document.getElementsByTagName("link"), window.document.styleSheets);

        function guardianPolyfilled() {
            try {
                window.guardian.polyfilled = true;
                window.guardian.onPolyfilled()
            } catch (e) {}
        }(function(document, window) {
            var src;
            var script;
            var pendingScripts = [];
            var firstScript = document.scripts[0];
            var scripts = ["https://assets.guim.co.uk/polyfill.io/v3/polyfill.min.js?rum\x3d0\x26features\x3des6,es7,es2017,default-3.6,HTMLPictureElement,IntersectionObserver,IntersectionObserverEntry\x26flags\x3dgated\x26callback\x3dguardianPolyfilled\x26unknown\x3dpolyfill\x26clearCache\x3d3", "https://assets.guim.co.uk/javascripts/6dc707394c372a942488/graun.standard.js"];

            function stateChange() {}
            if (window.location.hash !== "#nojs")
                while (src = scripts.shift())
                    if ("async" in firstScript) {
                        script = document.createElement("script");
                        script.async = false;
                        script.src = src;
                        document.head.appendChild(script)
                    } else if (firstScript.readyState) {
                script = document.createElement("script");
                pendingScripts.push(script);
                script.onreadystatechange = stateChange;
                script.src = src
            } else document.write('\x3cscript src\x3d"' + src + '" defer\x3e\x3c/' + "script\x3e")
        })(document, window);
    