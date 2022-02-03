
$(function(){
	var includes = $('[data-include]');
	jQuery.each(includes, function(){
		var file = 'https://LaurelHillsSL.github.io/' + $(this).data('include') + '.html';
		$(this).load(file);
	});
});
