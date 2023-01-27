/*
	WEB 303 Assignment 1 - jQuery
	{Your Name Here}
*/

$(document).ready(function() {

	$('#yearly-salary').on('keyup', function() {
		calculate();
	});
	
	$('#percent').on('keyup', function() {
	   calculate();
	});
	  
	function calculate(){
		var yearlySalary = parseInt($('#yearly-salary').val());

		var percent =  parseInt($('#percent').val());

		var amount= ((yearlySalary*percent) / 100).toFixed(2);
			 
		$('#amount').text('$' + amount);
		
		}

	});