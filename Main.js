// window.onload= function(){
// var element = $(".blink");
//     var shown = true;
//     setInterval(toggle, 500);
//     function toggle() {
//        if(shown) {
//           element.hide();
//           shown = false;
//         } else {
//            element.show();
//            shown = true;
//          }
//     }
// }
// 모달

window.onload = function () {
  var registModal = document.getElementById('Regist_Modal');
  var editModal = document.getElementById('Edit_Modal');
  var deleteModal = document.getElementById('Delete_Modal');



  var registBtn = document.getElementById('Regist_Btn');
  var editBtn = document.getElementById("Edit_Btn");
  var deleteBtn = document.getElementById("Delete_Btn");



  var span0 = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("close")[1];
  var span2 = document.getElementsByClassName("close")[2];



  // 사용자가 버튼 클릭하면 모달 열어주기
  registBtn.addEventListener('click', function () {
     registModal.style.display = "block";
  })

  editBtn.onclick = function() {
      editModal.style.display = "block";
  }
  deleteBtn.onclick = function() {
      deleteModal.style.display = "block";
  }




  // x버튼 누르면 모달 종료
  span0.onclick = function() {
      registModal.style.display = "none";
  }
  span1.onclick = function() {
      editModal.style.display = "none";
  }
  span2.onclick = function() {
      deleteModal.style.display = "none";
  }




  // 모달 바깥 부분 누르면 모달 닫힘
  window.onclick = function(event) {
      if (event.target == registModal) {
          registModal.style.display = "none";
      }
  }
  window.onclick = function(event) {
      if (event.target == editModal) {
          editModal.style.display = "none";
      }
  }
  window.onclick = function(event) {
      if (event.target == deleteModal) {
          deleteModal.style.display = "none";
      }
  }
}



var categoryClick = function(url){
	if(url == '/'){
		location.reload(true);
		return;
	}

	$.ajax({
		type: 'POST',
		url: "category1.jsp",
		async:false,
		dataType: "text",
		// contentType:"application/x-www-form-urlencoded; charset=UTF-8",
		success: function(data) {
			$('#Container').html(data);

			if(isMenuHide) menuOff();
		},
		error: function(request, status, error) {
			alert('로드 실패 !');
		}
	});
};


출처: http://iruplace.tistory.com/80 [iruplace]
