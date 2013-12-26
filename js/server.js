$(document).ready(function() {
	$("button").click(function() {
		$.ajax({url:"demo_text.txt", success:function(result){
			$("#div1").html(result);
		}});
	});
});
