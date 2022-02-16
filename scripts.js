
$(function(){
	var includes = $('[data-include]');
	jQuery.each(includes, function(){
		var file = 'https://laurelhillsacademy-sl.com/' + $(this).data('include') + '.html';
		$(this).load(file);
	});
});
