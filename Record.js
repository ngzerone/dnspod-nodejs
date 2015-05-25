var action = require('./action');
var apiCn = action.apiCn;

exports.List = function(configs,callback){
	var post_data = action.post_data;
	extend(post_data,configs);
	apiCn('/Record.List',callback);
}

/* 无效驱动器规格
exports.Log = function(callback){
	apiCn('/User.Log',callback);
}
*/

exports.Modify = function(configs,callback){
	var post_data = action.post_data;
	extend(post_data,configs);
	apiCn('/User.Modify',callback);
}

var extend=function(o,n,override){
   for(var p in n)if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override))o[p]=n[p];
};