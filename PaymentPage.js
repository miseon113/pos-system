/* 카드번호 입력받고 유효한지 체크 */
var showPayPopup = function() {
			var cardNum = document.getElementById('cardNum').value;
			if(isNaN(cardNum) == true || !cardNum) {
				alert(" 결제 실패 ! 카드번호를 다시 입력해주세요");
			} else {
				    alert(" 결제 완료 !");
            window.location.href ="Main.html";
			}
		};
