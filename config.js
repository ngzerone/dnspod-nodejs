module.exports = {
	login_token:'10095,2b60f487d6ee5de4e13aad509f2acac3', //使用token后login_email和login_password可以省略
	//login_email:'', //用户帐号，必选
	//login_password:'' ,//用户密码，必选
	format:'json' ,//{json,xml} 返回的数据格式，可选，默认为xml，建议用json
	lang:'en', //{en,cn} 返回的错误语言，可选，默认为en，建议用cn
	error_on_empty:'no', //{yes,no} 没有数据时是否返回错误，可选，默认为yes，建议用no
	//user_id:'' //用户的ID，可选，仅代理接口需要， 用户接口不需要提交此参数
	UserAgent: "ngzerone-nodejs/0.0.1 (geyuxu@geyuxu.com; DNSPod.CN API v2.8)"
}