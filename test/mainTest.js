var assert = require('assert');
var lib = require('../ownModules/library.js').lib;
var test = {};
exports.test = test;

test['getHTMLTableRows returns a string with table heading tags and data'] =  function(){
	var heading = lib.getHTMLTableRows(["India", "Australia"],"th");
	assert.equal(heading, "<tr><th>India</th><th>Australia</th></tr>");
}

test['putDataToTable returns an HTML table containing given data'] =  function(){
	var table = lib.putDataToTable(["Sachin","Kohli"],["Malinga","Ponting"]);
	assert.equal(table, "<tr><td>Sachin</td><td>Malinga</td></tr>\n<tr><td>Kohli</td><td>Ponting</td></tr>");
}
