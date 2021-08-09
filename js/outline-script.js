(function(document, window) {
	if (!document || !window) {
		return;
	}

	let styleText = '::-moz-focus-inner{border: 0 !important;}:focus{outline: none !important;';
	let unfocus_style = document.createElement('STYLE');

	window.unfocus = function(){
		document.getElementsByTagName('HEAD')[0].appendChild(unfocus_style);

		document.addEventListener('mousedown', function(){
			unfocus_style.innerHTML = styleText+'}';
		});
		document.addEventListener('keydown', function(){
			unfocus_style.innerHTML = '';
		});
	};

	unfocus.style = function(style){
		styleText += style;
	};

	unfocus();
})(document, window);




//Lecture
//const transactions = [200, 450, -600, 8765, -3481, 70, -5432];
// transactions.forEach(function(transaction, idx, arr) {
//   if(transaction > 0) {
//     console.log( `Transaction ${idx + 1}: You deposited ${transaction}`);
//   }
//   else {
//     console.log( `Transaction ${idx + 1}: You withdrew ${Math.abs(transaction)}`);
//   }
// })


// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// })