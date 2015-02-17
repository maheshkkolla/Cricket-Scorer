var fs = require('fs');

var lib = require('./ownModules/library.js').lib;
var teamDetails;

var checkTeamDetails = function(){
	return false;
}

var showFileContentError = function(){

}

var writeDataFile = function(path, data) {
	data = JSON.stringify(data);
	fs.writeFileSync(path, data);
}

var showTeamDetailsTable = function(){
	var teamNames = Object.keys(teamDetails);
	var teamsTableHTML = "";
	teamsTableHTML += lib.getHTMLTableRows(teamNames,"th"); 
	teamsTableHTML += lib.putDataToTable(teamDetails[teamNames[0]], teamDetails[teamNames[1]]);
	$("#teamDetailsTable").html(teamsTableHTML);
	$("#teamDetailsDiv").show();
} 

var onFilechange = function(event){
	try {
		teamDetails = JSON.parse(fs.readFileSync(event.target.files[0].path));
	} 
	catch(err){
		showFileContentError();
	}
	if(checkTeamDetails()) {
		showFileContentError(); 
		return; 
	}
	writeDataFile("./Data/teamDetails.json", teamDetails);
	showTeamDetailsTable();
}

var onPageLoad =function(){
	$("#fileUploder")[0].addEventListener('change', onFilechange);
	$("#teamDetailsDiv").hide();
}
$(onPageLoad);