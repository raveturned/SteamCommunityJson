(function(){
	
	$(document).ready(function(){
		
		steamApi.getSupportedAPIList(showAPIList);
		
	})
	
	
	function showAPIList(response)
	{
		var source = $('#api-template').html();
		var template = Handlebars.compile(source);   // optional, speeds up future uses
		var rendered = template(response.apilist);
		$('#api-div').html(rendered);
	}
	
	
})();