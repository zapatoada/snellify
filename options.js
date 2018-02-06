// load and save options for MAKA

// Saves options to chrome.storage
function save_options() {
	var blocktrump = document.getElementById('blocktrump').checked;
	var blockpence = document.getElementById('blockpence').checked;		
	var blockbannon = document.getElementById('blockbannon').checked;
	var blockspicer = document.getElementById('blockspicer').checked;
	var blocksanders = document.getElementById('blocksanders').checked;
	var blocksessions = document.getElementById('blocksessions').checked;
	var blockconway = document.getElementById('blockconway').checked;

  chrome.storage.local.set({
	blocktrump,
	blockpence,
	blockbannon,
	blockspicer,
	blocksanders,
	blocksessions,
	blockconway
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value 
  chrome.storage.local.get({
	blocktrump: true,
	blockpence: true,
	blockbannon: true,
	blockspicer: true,
	blocksanders: true,
	blocksessions: true,
	blockconway: true
  }, function(items) {
    	document.getElementById('blocktrump').checked = items.blocktrump; 
	document.getElementById('blockpence').checked = items.blockpence; 
	document.getElementById('blockbannon').checked = items.blockbannon; 
	document.getElementById('blockspicer').checked = items.blockspicer; 
	document.getElementById('blocksanders').checked = items.blocksanders; 
	document.getElementById('blocksessions').checked = items.blocksessions; 
	document.getElementById('blockconway').checked = items.blockconway; 
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
