let imgFloat = document.getElementById('imgFloat');
let fkaTwigs = document.getElementById('fkaTwigs');

// screenshot array
var twigsImg = [
	'fka1.png',
	'fka2.png',
	'fka3.png',
	'fka9.png',
	'fka7.png',
	'fka8.png',
];

// fkaTwigs.addEventListener("mouseover", twigsOver);
// fkaTwigs.onmouseover = function (event) {
// 	if (event.onmouseover) {
// 		twigsOver();
// 	} else {
// 		twigsOut();
// 	}
// };

// define mouseover function
function twigsOver() {
	var randomNumber = Math.floor(Math.random() * twigsImg.length);
	document.getElementById('imgFloat').src = twigsImg[randomNumber];
}

function twigsOut() {
	imgFloat.classList.add('out');
}

fkaTwigs.onmousedown = function () {
	return false;
};
//

//   imgFloat.className = "out";

// add mouseout event

// fka.addEventListener("mouseout", twigsOut);
//
// var img = document.getElementById("imgFloat");
// function twigsOut () {
//     img.remove();
// }
