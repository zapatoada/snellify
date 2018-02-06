// snellify.js - part of make america kittens again
// v1.2.2
// by Tom Royal 
// tomroyal.com
var snellifyTesting = false; // for debugging only
var searches = {};

if (snellifyTesting) {
    console.log('snellify initiated');
    var snellifyReplacements = 0;
}


var replacements = {
    blocktrump: {
        search: ["trump", "трамп", "トランプ"],// thanks to jSanchoDev and akiatoji for translations
        replace: [
        	{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"},
        	{"file": "2.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/9/30/170930_3594561_The_Chaos_President_Cold_Open.jpg"},
        	{"file": "3.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/12/02/171202_3629585_White_House_Christmas_Cold_Open.jpg"},
        	{"file": "4.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2016/12/04/161204_3435356_Classroom_Cold_Open.jpg"},
        	{"file": "5.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/3/11/170212_3468896_Leslie_Wants_To_Play_Trump_anvver_4.jpg"},
        	{"file": "6.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/2/12/170212_3468894_Trump_People_s_Court.jpg"},
        	{"file": "7.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/12/17/171216_3637486_White_House_Tree_Trimming_Cold_Open_anvver_2.jpg"},
        	{"file": "8.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/8/24/170824_3574164_Donald_Trump_Phoenix_Rally_Cold_Open_anvver_1.jpg"},
        	{"file": "9.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/5/13/170510_3517004_Lester_Holt_Cold_Open.jpg"},
        	{"file": "10.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/3/12/170312_3483865_Alien_Attack_Cold_Open.jpg"},
        	{"file": "12.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/5/20/170520_3522668_Hallelujah_Cold_Open.jpg"},
        	{"file": "14.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/2/05/170205_3465157_Oval_Office_Cold_Open.jpg"},
        	{"file": "15.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/15/170415_3503043_Donald_Trump_Cold_Open.jpg"},
        	{"file": "18.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/11/06/1729_ManafortsHouseColdOpen_SHOWER.jpg"},
        ]
    }, 
    blockpence: {
        search: ["mike pence", "ペンス"],
        replace: [
        	{"file": "11.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/11/11/171111_3618248_Roy_Moore___Jeff_Sessions_Cold_Open.jpg"},
        	{"file": "12.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/5/20/170520_3522668_Hallelujah_Cold_Open.jpg"},
        	{"file": "13.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2016/12/11/161211_3438964_Through_Donald_s_Eyes.jpg"},
        	{"file": "18.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/11/06/1729_ManafortsHouseColdOpen_SHOWER.jpg"},
    	]
    },
    blockbannon: {
        search: ["bannon"],
        replace: [
        	{"file": "12.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/5/20/170520_3522668_Hallelujah_Cold_Open.jpg"},
        	{"file": "14.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/2/05/170205_3465157_Oval_Office_Cold_Open.jpg"},
        	{"file": "15.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/15/170415_3503043_Donald_Trump_Cold_Open.jpg"},
        	
        ]
    },
    blockspicer: {
        search: ["spicer", "spicey"],
        replace: [
        	{"file": "16.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/2/12/170212_3468882_Sean_Spicer_Press_Conference_Cold_Open.jpg"},
        	{"file": "17.jpg","Credit": "NBC","URL": "https://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/snl_640x360/public/images/2017/04/15/170415_3503046_easter_message_from_sean_spicer_0.jpg?itok=hxdqngkG"},
    	]
    },
    blocksanders: {
        search: ["huckabee sanders", "sarah sanders"],
        replace: [
        	{"file": "7.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/12/17/171216_3637486_White_House_Tree_Trimming_Cold_Open_anvver_2.jpg"},
        	{"file": "12.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/5/20/170520_3522668_Hallelujah_Cold_Open.jpg"},
        	{"file": "19.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/11/04/171104_3614346_Press_Conference.jpg"},
    	]
    },
    blocksessions: {
        search: ["jeff sessions", "beauregard sessions"],
        replace: [
        	{"file": "18.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/11/06/1729_ManafortsHouseColdOpen_SHOWER.jpg"},
        	{"file": "20.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/11/18/171118_3622170_Weekend_Update__Jeff_Sessions.jpg"},
        	{"file": "21.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/3/05/170305_3480395_Jeff_Sessions_Gump_Cold_Open.jpg"},
    	]
    },
    blockconway: {
        search: ["conway","kellanne"],
        replace: [
        	{"file": "12.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/5/20/170520_3522668_Hallelujah_Cold_Open.jpg"},
        	{"file": "22.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2016/12/04/161204_3435356_Classroom_Cold_Open.jpg"},
        	{"file": "23.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/1/22/170122_3457926_Kellyanne_Conway_anvver_2.jpg"},
        	{"file": "24.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/1/22/170122_3457926_Kellyanne_Conway_anvver_2.jpg"},
    	]
    }
}



// get additional settings from chrome storage

chrome.storage.local.get({
    blocktrump: true,
    blockpence: true,
    blockbannon: true,
    blockspicer: true,
    blocksanders: true,
    blocksessions: true
,    blockconway: true
}, function(items) {
    var realReplacements = [],
        enabledKeys = Object.keys(items).filter(p => items[p]);
    
    for(var i=0;i<enabledKeys.length;i++) {
		realReplacements.push(replacements[enabledKeys[i]]);
    }

    document.addEventListener('DOMContentLoaded', snellifynow(realReplacements), false);

});

// kitten data!
// Note - now moved from S3 to local storage


function snellifynow(replacements) {
    if (snellifyTesting) {
        console.log('snellify processing blacklist is ' + Object.keys(replacements).join(', '));
    }

    // called on page load. Searches all img alt text and srcs for the strings in blacklist, replaces with kittens
    var pagepics = document.getElementsByTagName("img"),
        i = 0,
        img;
    while (img = pagepics[i++]) {

        if (img.hasAttribute('snellifyreplaced')) {
            // already replaced	
        } else {
            // not yet replaced
            var alttext = String(img.alt).toLowerCase();
            var imgsrc = String(img.src).toLowerCase();

            if (img.parentElement.nodeName != 'BODY') {
                // check parent innerHTML for blackilist
                var parenttag = img.parentElement.innerHTML.toLowerCase();
            } else {
                // prevent parse of entire doc
                var parenttag = '';
            };

            var imgwidth = img.clientWidth;
            var imgheight = img.clientHeight;
            replacements.forEach(function(repl) {
            	//already got it
        		if(img.hasAttribute('snellifyreplaced')) 
        			return;

            	var blacklist = repl.search;
	            blacklist.forEach(function(blist) {
	            	//already got it
            		if(img.hasAttribute('snellifyreplaced')) 
            			return;


	                if ((alttext.indexOf(blist) != -1) || (imgsrc.indexOf(blist) != -1) || (parenttag.indexOf(blist) != -1)) {

	                    // append old src
	                    img.setAttribute("snellifyreplaced", img.src);

	                    // remove srcsets, forcing browser to the kitten - eg, BBC News
	                    if (img.hasAttribute('srcset')) {
	                        img.removeAttribute('srcset');
	                    };
	                    // remove source srcsets if children of same parent <picture> element - eg, the Guardian
	                    if (img.parentElement.nodeName == 'PICTURE') {
	                        var theparent = img.parentNode;
	                        for (var child = theparent.firstChild; child !== null; child = child.nextSibling) {
	                            if (child.nodeName == "SOURCE") {
	                                child.removeAttribute('src');
	                                child.removeAttribute('srcset');
	                            };
	                        };

	                    };
	                    // knock out lazyloader data URLs so it doesn't overwrite kittens
	                    if (img.hasAttribute('data-src')) {
	                        img.removeAttribute('data-src');
	                    };
	                    if (img.hasAttribute('data-hi-res-src')) {
	                        img.removeAttribute('data-hi-res-src');
	                    };
	                    if (img.hasAttribute('data-low-res-src')) {
	                        img.removeAttribute('data-low-res-src');
	                    };

	                    // fix for wapo lazyloading huge sidebar pix..
	                    if (window.location.href.indexOf('washingtonpost.com') != -1) {
	                        // console.log('wapo');	
	                        if (img.classList.contains('unprocessed')) {
	                            // console.log('loreslazy');	
	                            img.classList.remove('unprocessed');

	                        };
	                    };


	                    var randk = Math.floor(Math.random() * repl.replace.length)
	                    img.src = chrome.runtime.getURL('/imgs/' + repl.replace[randk].file + '');
	                    //img.width = imgwidth;
	                    //img.height = imgheight;
                        img.alt = 'Photo by ' + repl.replace[randk].Credit + ' source ' + repl.replace[randk].URL + '';
	                    
	                    snellifyReplacements++;
	                };
	            });
            });
        };
    }
    if (snellifyTesting) {
        console.log('snellify processing complete, replaced ' + snellifyReplacements + ' images');
    }
};

// function to replace kittened-images with the original SRCs

function undosnellifynow() {
    if (snellifyTesting) {
        console.log('Unsnellify');
    }

    var pagepics = document.getElementsByTagName("img"),
        i = 0,
        img;
    while (img = pagepics[i++]) {
        if (img.hasAttribute('snellifyreplaced')) {
            if (snellifyTesting) {
                console.log('replacing image');
            };
            img.src = img.getAttribute('snellifyreplaced');
            img.removeAttribute('snellifyreplaced');
        };
    };

}

// listener for context menu click invoking the above

chrome.extension.onMessage.addListener(function(message, sender, callback) {
    if (message.functiontoInvoke == "undoSnellify") {
        // undo function called
        undosnellifynow();
    };

});