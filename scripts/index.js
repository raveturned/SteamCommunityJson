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
		
		var template = $('#large-profile-template').html();
		Mustache.parse(template);   // optional, speeds up future uses
		var rendered = Mustache.render(template, response.players[0]);
		$('#profile-div').html(rendered);

	}
	
})();