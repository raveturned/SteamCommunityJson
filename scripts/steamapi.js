var steamApi = (function(){
	
	var _steamKey="47D02F42306851556CED48DE0BAFC731";

	var routes = {
		getSupportedAPIList: "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/",
		resolveVanityURL: "http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/",
		getPlayerSummariesV2: "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
		getOwnedGames: "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/"
	}

	var _self = {}
	
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
	
	function loadSupportedAPIList(callback)
	{
		args = {
			key: _steamKey
		};
		
		$.get(routes.getSupportedAPIList, args, function(response){
			callback(response);
		})
	}
	
	
	function getPlayerSummaries(ids, callback)
	{
		args = {
			key: _steamKey,
			steamids: ids.join(",")
		};
		
		$.get(routes.getPlayerSummariesV2, args, function(response){
			callback(response);
		})
	}	
	
	function getOwnedGames(id, callback)
	{
		args = {
			key: _steamKey,
			steamids: id,
			include_appinfo = true
		};
		
		$.get(routes.getOwnedGames, args, function(response){
			callback(response);
		})
	}	
	
	_self.resolveVanityURL = resolveVanityURL;
	_self.loadSupportedAPIList = loadSupportedAPIList;
	_self.getPlayerSummaries = getPlayerSummaries;


	
	return _self;
})();