var Calculator = (function(){

	function add( n1, n2 ){
	return parseInt(n1) + parseInt(n2);
	}



	function sub( n1, n2 ){
	return n1 - n2;
	}



	function multiply( n1, n2){
	return n1 * n2;
	}

	return {
		add,
		sub,
		multiply
	}


})();

	console.log(Calculator);

	addBtn.addEventListener('click',function(){
		var n1 = document.getElementById('num1').value;
		var n2 = document.getElementById('num2').value;

		var result = document.getElementById('result');
		result.innerHTML =  Calculator.add(n1,n2);
	})