var config = require('./config');
var https = require('https');
var querystring = require('querystring');

exports.post_data = post_data = {
	login_token:config.login_token,
	format:config.format,// ���ص����ݸ�ʽ����ѡ��Ĭ��Ϊxml��������json
	lang:config.lang,//���صĴ������ԣ���ѡ��Ĭ��Ϊen��������cn
	error_on_empty:config.error_on_empty //{yes,no} û������ʱ�Ƿ񷵻ش��󣬿�ѡ��Ĭ��Ϊyes��������no
};

exports.infoVersion = function(callback){
	apiCn('/Info.Version',callback);
};

apiCn = exports.apiCn = apiCn = function(actionName,callback){
	var post_data_string = querystring.stringify(post_data);

	var options = {
	  hostname: 'dnsapi.cn',
	  port: 443,
	  path: actionName,
	  method: 'POST',
	  headers: {"Content-type": "application/x-www-form-urlencoded", "Accept": "text/json", "User-Agent": config.UserAgent}
	};
	
	var req = https.request(options, function(res) {
	  //console.log("statusCode: ", res.statusCode);
	  //console.log("headers: ", res.headers);

	  res.on('data', function(d) {
		//process.stdout.write(d);
		callback(JSON.parse(d));
	  });
	}).on('error', function(e) {
	  console.error(e);
	});

	req.write(post_data_string);
	req.end();
	
};