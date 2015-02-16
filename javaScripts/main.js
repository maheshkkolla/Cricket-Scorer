var fs = require('fs');
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

var onPageLoad =function(){
	$("#fileUploder")[0].addEventListener('change', function(event){
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
	});
}
$(onPageLoad);