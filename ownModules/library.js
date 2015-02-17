var lib = {};
exports.lib = lib;

lib.getHTMLTableRows = function(teamNames, tag) {
	return teamNames.reduce(function(HTML, name){
		return HTML += "<"+tag+">" + name + "</"+tag+">";
	},"<tr>") + "</tr>";
};

var getEachArray = function(arguments,i) {
	return Array.prototype.map.call(arguments,function(TDArray){
		return TDArray[i];
	});
};

var putTagsToEach = function(mergedArray) {
	return mergedArray.map(function(dataArray){
		return lib.getHTMLTableRows(dataArray, "td");
	}).join("\n");
};

lib.putDataToTable = function(){
	var lengthOfEachArray =  arguments[0].length;
	var mergedArray = [];
	for(var i=0 ; i<lengthOfEachArray ; i++){
		mergedArray.push(getEachArray(arguments,i));
	}
	return putTagsToEach(mergedArray);
};