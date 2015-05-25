var action = require('./action');
var User = require('./User');
var Domain = require('./Domain');
var Record = require('./Record');

/*
action.infoVersion(function(d){
	console.log(d.status.message);
});
*/

/*
User.Detail(function(d){
	console.log(d.info.user.email);
});
*/

/*
User.Modify({
	im:'12345678',
},function(d){
	console.log(d);
	User.Detail(function(d){
		console.log(d.info.user.im);
	});
});
*/

/*
Domain.List(function(d){
	console.log(d);
});
*/

/*
Domain.Info({
	domain:'geyuxu.com'
},function(d){
	console.log(d);
	
});
*/

/*
Domain.Log({
	domain:'geyuxu.com',
	offset:0,
	length:5
},function(d){
	console.log(d);
	
});
*/

Record.List({
	domain_id:'8591181'
},function(d){
	console.log(d);
});
