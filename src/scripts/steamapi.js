var steamApi = (function(){
	
	var _steamKey="47D02F42306851556CED48DE0BAFC731";

	var routes = {
		getAppDetails: "http://store.steampowered.com/api/appdetails",
		getAppList: "http://api.steampowered.com/ISteamApps/GetAppList/v0002/",
		getFriendList: "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/",
		getOwnedGames: "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/",
		getPlayerSummariesV2: "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
		getSupportedAPIList: "http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/",
		resolveVanityURL: "http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/"
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
	
	function getSupportedAPIList(callback)
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
			include_appinfo: true
		};
		
		$.get(routes.getOwnedGames, args, function(response){
			callback(response);
		})
	}

	function getAppDetails(appids, callback)
	{
		args = {
			appids: appids.join(",")
		};
		
		$.get(routes.getAppDetails, args, function(response){
			callback(response);
		})
	}	

	function getAppList(callback)
	{		
		$.get(routes.getAppList, args, function(response){
			callback(response);
		})
	}

	function getFriendList(id, callback)
	{
		args = {
			key: _steamKey,
			steamid: id
		};		
		$.get(routes.getFriendList, args, function(response){
			callback(response);
		})
	}		

	
	_self.getAppDetails = getAppDetails;
	_self.getAppList = getAppList;
	_self.getFriendList = getFriendList;
	_self.getOwnedGames = getOwnedGames;
	_self.getPlayerSummaries = getPlayerSummaries;
	_self.getSupportedAPIList = getSupportedAPIList;
	_self.resolveVanityURL = resolveVanityURL;


	
	return _self;
})();