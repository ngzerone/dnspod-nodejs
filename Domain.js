var action = require('./action');
var apiCn = action.apiCn;

exports.List = function(callback){
	apiCn('/Domain.List',callback);
}

exports.Info = function(configs,callback){
	var post_data = action.post_data;
	extend(post_data,configs);
	apiCn('/Domain.Info',callback);
}

exports.Log = function(configs,callback){
	var post_data = action.post_data;
	extend(post_data,configs);
	apiCn('/Domain.Log',callback);
}

var extend=function(o,n,override){
   for(var p in n)if(n.hasOwnProperty(p) && (!o.hasOwnProperty(p) || override))o[p]=n[p];
};
