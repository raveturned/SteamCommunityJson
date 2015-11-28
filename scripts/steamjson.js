var steamExplorer = (function(){
	
	var _steamKey="47D02F42306851556CED48DE0BAFC731";

	var routes = {
		getSupportedAPIList: "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/",
		resolveVanityURL: "http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/"
	}

	var _self = {}
	
	$(document).ready(function(){
		
		//loadSupportedAPIList();


		$("#usernameButton").click(function(){
			var username = $("#username").val();
			var userData = resolveVanityURL(username, function(response){
			alert("steamId is "+response.steamid);
			});
		});
		
	})
	
	function resolveVanityURL(username, callback)
	{
		args = {
			key: _steamKey,
			vanityUrl: username,
			type: 1
		};
		
		$.get(routes.resolveVanityURL, args, function(result){
			callback(result.response);
		})
	}
	
	function loadSupportedAPIList()
	{
		args = {
			key: _steamKey
		};
		
		$.get(routes.getSupportedAPIList, args, function(response){
			showAPIList(response.apilist);
		})
	}
	
	function showAPIList(apiList)
	{
		var template = $('#api-template').html();
		Mustache.parse(template);   // optional, speeds up future uses
		var rendered = Mustache.render(template, apiList);
		$('#api-div').html(rendered);
	}
	
	
	return _self;
})();