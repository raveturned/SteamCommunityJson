(function(){
	
	$(document).ready(function(){
		
		steamApi.loadSupportedAPIList(showAPIList);
		
	})
	
	
	function showAPIList(response)
	{
		var template = $('#api-template').html();
		Mustache.parse(template);   // optional, speeds up future uses
		var rendered = Mustache.render(template, response.apilist);
		$('#api-div').html(rendered);
	}
	
	
})();