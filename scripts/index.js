(function(){

	var _storageAvailable = false;
	var _workersAvailable = false;

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
			});

		});
		
	})
	
	function showLargeProfileInfo(data){
		var response = data.response;
		
		var source = $('#large-profile-template').html();
		var template = Handlebars.compile(source);
		var rendered = template(response.players[0]);
		$('#profile-div').html(rendered);

	}
	
})();