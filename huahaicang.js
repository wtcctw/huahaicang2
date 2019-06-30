// var qiang = function(){	
// 	var btnActive = document.querySelector('div.btn.active');	
// 	if (btnActive) {
// 		console.log("active: " + btnActive);
//       	btnActive.click();
//       	// location.reload();
// 	} else {
// 		console.log("not active!");
// 		location.reload();
// 	}
// }


// setTimeout(qiang, 400);


var intervalId;
var click = function() {
	var btnActive = document.querySelector('div.btn.active');
	if (btnActive) {
		btnActive.click();
	} else {
		location.reload();
	}
	
}


var hour = 12;
var minute = 0;
var second = 0;
var qiang = function() {

	now = new Date().getTime();
	qiang_date = new Date();
	qiang_date.setHours(hour, minute, second, 0);
	qiang_time = qiang_date.getTime();

	if( now > qiang_time-3000 && now < qiang_time+30000) {
		clearInterval(intervalId);
		click();
	}

}


var intervalId = setInterval(qiang, 1000);




