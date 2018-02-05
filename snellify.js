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
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    }, 
    blockpence: {
        search: ["mike pence", "ペンス"],
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    },
    blockbannon: {
        search: ["bannon"],
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    },
    blockspicer: {
        search: ["spicer", "spicey"],
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    },
    blocksanders: {
        search: ["huckabee sanders", "sarah sanders"],
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    },
    blocksessions: {
        search: ["jeff sessions", "beauregard sessions"],
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    },
    blockcarson: {
        search: ["carson"],
        replace: [{"file": "1.jpg","Credit": "NBC","URL": "https://www.nbc.com/sites/nbcunbc/files/files/images/2017/4/09/170408_3499000_The_O_Reilly_Factor_with_Donald_Trump_anvver_2.jpg"}]
    }
}



// get additional settings from chrome storage

chrome.storage.local.get({
    blocktrump: true,
    blockpence: true,
    blockbannon: true,
    blockspicer: true,
    blocksanders: true,
    blocksessions: true,
    blockcarson: true
}, function(items) {
    var realReplacements = {},
        enabledKeys = Object.keys(items).filter(p => items[p]);
    
    for(var i=0;i<enabledKeys.length;i++) {
		realReplacements[enabledKeys[i]] = replacements[enabledKeys[i]];
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
	                    img.width = imgwidth;
	                    img.height = imgheight;
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