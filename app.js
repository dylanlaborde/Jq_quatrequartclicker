$(document).ready(function(){
	var i= 0;
	$("img").click(function(){
		$("span").text(++i);
		console.log(i);
		if (i%20 === 0) {
			alert("buy you a life")
		
		}
	});
});