(function(){
		
	$(document).ready(function(){
		

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