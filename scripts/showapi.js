(function(){
	
	$(document).ready(function(){
		
		steamApi.loadSupportedAPIList(showAPIList);
		
	})
	
	
	function showAPIList(response)
	{
		var source = $('#api-template').html();
		var template = Handlebars.compile(source);   // optional, speeds up future uses
		var rendered = template(response.apilist);
		$('#api-div').html(rendered);
	}
	
	
})();