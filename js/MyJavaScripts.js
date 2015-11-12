//Farnoosh Johnson JavaScript for Ping-Pong test, Nov 2015
$(function () {     //make the DOM ready and runs when the webpage loads completely
	pingpong_Game();   //call the pingpong_Game function to run
	$("#results").click(function() {  //Mouse Event Methods
		location.reload(); //reload the page 
		alert("Page is updating....please play again!");
	});
});
	
function pingpong_Game(){
	var element = document.getElementById("pingpong"); //find the element in id:pingpong in html
	var num = element.elements[0].value; //store the value of the element 
	var list_result= ''; // hold the string of result that being typed

	//This function is print everything that pass into the arg 'message' 
	function print(message){              
		var outputDiv = document.getElementById('results'); //locate a tag with Id=result
		outputDiv.innerHTML = list_result; //Access property to change the list_result
	}

	//start the list of result with ordered list
	  
	for(var i = 1; i <= num; i += 1){

		//start the conditinal statement for each rules of the game
		//Numbers divisible by 15 are replaced with "pingpong"
		// the remainder of the number with 3 and 5 (both condition) must be zero
		if ((i % 3 === 0) && (i % 5 === 0)){
			list_result += '<li>' + '<b>Ping Pong</b>' + '</li>';
		//Numbers divisible by 3 are replaced with "ping"
		} else if (i % 3 === 0){
			list_result += '<li>' + '<b>Ping</b>' + '</li>';
		//Numbers divisible by 5 are replaced with "pong"
		} else if (i % 5 === 0){
			list_result += '<li>' + '<b>Pong</b>' + '</li>';
		} else {
			//otherwise add the number in the next line
			list_result += '<li>' + i + '</li>';
		}

	} // End of for loop

	print(list_result); // call function print 


} // End of pingpong_Game function

