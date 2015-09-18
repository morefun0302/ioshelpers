/**
 * Author: Claus Stilborg
 * Company: Appsolution
 * A collection of little helper tools 
 * Implement in alloy.js by using the factory methods
 * Ex: 
 * var helpers = require("dk.appsolution.ioshelpers");
 * console = helpers.createConsole();
 */

/**
 * A Class for using the good old console.log command, adds a time stap to your comments, very usefull when working with async stuff... 
 */
function Console(){
	/**
	 * Public print function called by the prototypes
	 */
	this.print = function(str, type){
		var d = new Date();
		var outstr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds() +'| '+str;
		if(!type){}
		switch(type){
			case "debug":
				Titanium.API.debug(outstr);
			case "error":
				Titanium.API.error(outstr);
			default:
				Titanium.API.info(outstr);	
		}
	};
}
/**
 * Classic log method from the browser
 */
Console.prototype.log = function(str) {
	this.print(str);
};
/**
 * Because i sometimes write console.out, I don't know why :)
 */
Console.prototype.out = function(str) {
	this.print(str);
};
Console.prototype.debug = function(str) {
	this.print(str, "debug");
};
Console.prototype.error = function(str) {
	this.print(str, "error");
};

// Factories
exports.createConsole = function(){
	return new Console();
};
