// Check off specific item on list by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('taskCompleted');
});
// Deleting items
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //stops click on other elements 
});
// Adding new items
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new todo text from input
		var item = $(this).val();
		$(this).val('');
		//create new li to add to ul so we can add todo text from input
		$('ul').append("<li><span><i class='far fa-trash-alt'></i></span> " + item +"</li>")
	}
});
// toggle plus icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});