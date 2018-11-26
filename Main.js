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
var regist_Modal = document.getElementById('Regist_Modal');
var edit_Modal = document.getElementById('Edit_Modal');
var delete_Modal = document.getElementById('Delete_Modal');

// 모달 여는 버튼
var regist_Btn = document.getElementById("Regist_Btn");
var edit_Btn = document.getElementById("Edit_Btn");
var delete_Btn = document.getElementById("Delete_Btn");

// 모달 닫힘 버튼 감싸는 태그 span
var span_0 = document.getElementsByClassName("close")[0];
var span_1 = document.getElementsByClassName("close")[1];
var span_2 = document.getElementsByClassName("close")[2];

// 사용자가 클릭했을 때 모달 뜨게 함
regist_Btn.onclick = function() {
    regist_Modal.style.display = "block";
}
edit_Btn.onclick = function() {
    edit_Modal.style.display = "block";
}
delete_Btn.onclick = function() {
    delete_Modal.style.display = "block";
}

// 사용자가 span인 (x) 클릭 시, 모달 닫힘
span_0.onclick = function() {
    regist_Modal.style.display = "none";
}
span_1.onclick = function() {
    edit_Modal.style.display = "none";
}
span_2.onclick = function() {
    delete_Modal.style.display = "none";
}

// 모달 바깥 클릭하면 모달 종료
window.onclick = function(event) {
    if (event.target == regist_Modal) {
        regist_Modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == edit_Modal) {
        edit_Modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == delete_Modal) {
        delete_Modal.style.display = "none";
    }
}
