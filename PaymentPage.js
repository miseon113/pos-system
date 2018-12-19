

window.onload = function () {
	document.getElementById('totalPrice').innerText = localStorage.getItem("price")+"원";
	console.log(localStorage.getItem('ordering_num'))
	if (localStorage.getItem('ordering_num') === null)
		localStorage.setItem('ordering_num', "1")
    document.getElementById('ordering_num').innerText = '주문번호          '+localStorage.getItem('ordering_num')
    localStorage.setItem('ordering_num', (parseInt(localStorage.getItem('ordering_num'))+1)+"")
}
/* 카드번호 입력받고 유효한지 체크 */
var showPayPopup = function() {
	var cardNum = document.getElementById('cardNum').value;
	if(isNaN(cardNum) == true || !cardNum) {
		alert(" 결제 실패 ! 카드번호를 다시 입력해주세요");
	} else {
		confirm(" 결제 완료! 영수증을 출력하시겠습니까? ");
		location.replace("Main.html");

	}

};

var showTotalPrice = function(){
	var price = document.getElementById('totalPrice');
    document.getElementById('totalPrice')

}
