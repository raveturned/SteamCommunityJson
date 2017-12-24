(function(){

	var _storageAvailable = false;
	var _workersAvailable = false;

	var _apps;

	$(document).ready(function(){

		if (typeof(Storage) !== "undefined") {
			_storageAvailable = true;
		} 
		if (typeof(Worker) !== "undefined") {
			_workersAvailable = true;
		}
		if (_workersAvailable && _storageAvailable) {
			$("#no-features").hide();
		}
		else{
			$("#content").hide();
		}	

		$("#usernameButton").click(function(){
			var username = $("#username").val();
			var userData = steamApi.resolveVanityURL(username, function(response){
			//alert("steamId is "+response.steamid);
			
			var ids = [];
			ids.push(response.steamid);
			
			steamApi.getPlayerSummaries(ids, showLargeProfileInfo);
			steamApi.getOwnedGames(response.steamid, showGames);
			});


		});
		
		steamApi.getAppList(setAppList);

	});

	function setAppList(data)
	{
		_apps = data.applist.apps;
	}
	
	function showLargeProfileInfo(data){
		var response = data.response;
		
		var source = $('#large-profile-template').html();
		var template = Handlebars.compile(source);
		var rendered = template(response.players[0]);
		$('#profile-div').html(rendered);

	}

	function lookupAppById(appid)
	{
		var obj;
		$.each(_apps, function(i,v){
			if (v.appid == appid)
			{
				obj = v;
				return true;
			}
		});
		return obj;
	}

	function showGames(data){
		var response = data.response;

		var games = response.games;

		var games = $.map(games, function(e, i){
			var game = e;
			//var app = lookupAppById(game.appid);
			//e.name = app.name;
			e.playtime_forever_hours = (e.playtime_forever / 60).toFixed(1);
			return e; 
		 })
		 $('#games-div').html("");
		 var source = $('#app-template').html();
		 var template = Handlebars.compile(source);
		 $.each(games, function(i,v){
			var rendered = template(v);
			$('#games-div').append(rendered);
		 });
	}
	
})();