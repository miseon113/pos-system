var orderNumber = 1;
function orderNumber_plus(){
  document.getElementById("orderNum").innerHTML= orderNumber;
}



// 장바구니에서 x표시 클릭 시 메뉴 삭제
function canclethisMenu(obj) {
   var tr = obj.parentNode.parentNode;
   var tbody = obj.parentNode.parentNode.parentNode;
   tbody.removeChild(tr);
}

// 총액 계산
// function payOrder() {
//   var price=0;
//   var number = 0;
//   var sum=0;
//   for(var i =1; i<5; i++){
//      price = document.getElementById('menu'+i+'_price').textContent;
//      number = document.getElementById('menu'+i+'_number').value;
//      sum += price *number;
//   }
//
//   window.alert("The total is "+sum+ "won 입니다.\n"+"Thank you.")
// }

// 메뉴리스트 화면에서 선택하는 카테 고리마다 해당 페이지 호출시키게 함
function showMenuList(){
  var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "test.jsp");
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("Context").innerHTML = xhttp.responseText;
      }
    };
    xhttp.send();
}


let menu_dict = {
}

function makeElement(type, attributes, event) {
  var element = document.createElement(type);
  for (key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  for (key in event) {
    element.addEventListener(key, event[key]);
  }
  return element;
}

// 선택한 메뉴 장바구니에 추가
function chooseMenu(i) {
  if (menu_dict[i] === undefined) {
    menu_dict[i] = 1;

    var element = document.getElementById("viewChosenMenu");
    // var preTd =  element.lastChildElement;
    // console.log(preTd)
    // 선택한 메뉴에 대한 행 생성
    var menuRow = document.createElement("tr");

    // 행 안에 메뉴 취소 아이콘 열 생성
    var iconTd = makeElement('td',{
      'class':'frm'
    })
    // {
    //   'attribute': {},
    //   'event': {}
    // }
    var iconSpanPart = makeElement('span',{},{
      'click':canclethisMenu(this)
    });
    var icon = makeElement('i',{
      'class':'fas fa-times'
    });
    iconSpanPart.appendChild(icon);
    iconTd.appendChild(iconSpanPart);

    // var iconTd = document.createElement("td");
    // iconTd.setAttribute("class","frm");
    // // 행 안에 아이콘 감싸는 span태그 생성
    // var iconSpanPart = document.createElement("span");
    // iconSpanPart.addEventListener("click", function(){
    //   canclethisMenu(this)
    // });
    // 아이콘 태그 생성
    // var icon = document.createElement("i");
    // icon.setAttribute("class", "fas fa-times");
    // // 자식 다 붙여주기
    // iconSpanPart.appendChild(icon);
    // iconTd.appendChild(iconSpanPart);

    // 행 안에 메뉴이름 넣는 열 생성
    var nameTd = makeElement('td',{
      'class':'name'
    });
    var name = makeElementById("menu"+i+"_name").innerText;
    nameTd.innerHTML = name;
    // var nameTd = document.createElement("td");
    // console.log('menu'+i+'_name')
    // var name = document.getElementById("menu"+i+"_name").innerText; //  메뉴 이름 가져오기
    // nameTd.setAttribute("class", "name");
    // nameTd.innerHTML = name;

    // 행 안에 메뉴 수량, 가격 넣는 열 생성
    i = amount;
    var amountTd = makeElement('td',{
      'class' : 'amount'
    });
    var plus_span = makeElement('span',{},{
      'click' :amountPlus(i)
    });
    var plus_icon = makeElement('i',{
      'class':'far fa-caret-square-up'
    });
    var amountInputBox = makeElement('input',{
      'class': 'amountBox',
      'value': "1",
      "size": "5",
      "type": "text"
    });
    amount += 1;
    var minus_span = makeElement('span',{},{
      'click' : amountMinus(i)
    });
    var minus_icon = makeElement('i',{
      'class':'far fa-caret-square-down'
    });
    var priceTd = makeElement('td',{
      'class':'price'
    });
    var price = document.getElementById("menu"+i+"_price").innerText;
    priceTd.innerHTML = price;

    // var amountTd = document.createElement("td");
    // var priceTd = document.createElement("td");
    // var price = document.getElementById("menu"+i+"_price").innerText;
    // amountTd.setAttribute("class","amount");
    // priceTd.setAttribute("class", "price");
    // priceTd.innerHTML = price;
    //
    // var amountPlusSpan = document.createElement("span");
    // var amountMinusSpan = document.createElement("span");
    // var amountPlusIcon = document.createElement("i");
    // var amountMinusIcon = document.createElement("i");
    // var amountInputBox = document.createElement("input");


    // i = amount;
    // amountPlusSpan.addEventListener("click", function(){
    //   amountPlus(i)
    // });
    // amountPlusIcon.setAttribute("class", "far fa-caret-square-up");
    // amountInputBox.setAttribute("type", "text");
    // amountInputBox.setAttribute("size", "5");
    // amountInputBox.setAttribute("value", "1");
    // amountInputBox.setAttribute("id", "amountBox"+i);
    // amountInputBox.setAttribute("class", "amountBox");
    // amountMinusSpan.addEventListener("click", function(){
    //   amountMinus(i)
    // });
    // amount += 1;
    // amountMinusIcon.setAttribute("class", "far fa-caret-square-down");
    //
    // amountMinusSpan.appendChild(amountMinusIcon);
    // amountPlusSpan.appendChild(amountPlusIcon);
    // amountTd.appendChild(amountPlusSpan);
    // amountTd.appendChild(amountInputBox);
    // amountTd.appendChild(inpu);
    // amountTd.appendChild(amountMinusSpan);

    // 선택한 메뉴에 대한 행 안에 위에서 만든 태그들 다 넣어줌
    menuRow.appendChild(iconTd);
    iconTd.insertAdjacentElement("afterend",nameTd);
    nameTd.insertAdjacentElement("afterend", amountTd);
    amountTd.insertAdjacentElement("afterend",priceTd);
    document.getElementById('viewChosenMenu').appendChild(menuRow);
    // preTd.insertAdjacentElement("afterend",menuRow);
  }
  else{
    menu_dict[i] += 1
    var amountBox = document.getElementById('amountBox'+i)
    amountBox.innerHTML = menu_dict[i];
  }

}




// 총액 계산하는 함수
var amount = 1;  // 수량
var totalPrice_view = document.getElementById("totalPrice"); //  총액
var sum =0;
var amountBox = document.getElementsByClassName('amountBox');  // 수량박스
var price = document.getElementsByClassName('price');

// 수량 증가 함수
function amountPlus(i){
  var amountBox = document.getElementById('amountBox'+i);
  // var amountBox = document.getElementsByClassName('amountBox');  // 수량박스
  amount = amountBox.value++;
  menu_dict[i] += 1
  amountBox.innerHTML = amount;
}
// 수량 감소 함수
function amountMinus(i){
  var amountBox = document.getElementById('amountBox'+i);
  // var amountBox = document.getElementsByClassName('amountBox');  // 수량박스
  if(amountBox.value>1){
    amount = amountBox.value--;
    menu_dict[i] -= 1
    amountBox.innerHTML = amount;
  }
}
// 총액 계산하는 함수
function calcTotalPrice(){
  for(var i =0; i<amountBox.length; i++){
    var amountBox = document.getElementById('amountBox'+i);
     sum+= price[i].textContent*amountBox[i].value;
     console.log(price[i]);
     console.log(price[i]);
     sum += price *number;
  }
  totalPrice_view.innerHTML = sum;
}
// function payOrder() {
//   var price=0;
//   var number = 0;
//   var sum=0;
//   price = document.getElementsByClassName('price');
//   number = document.getElementsByClassName('number');
//   for(var i =0; i<price.length; i++){
//      sum += price[i].textContent*number[i].value;
//      console.log(price[i]);
//      console.log(price[i]);
//      sum += price *number;
//   }
//
//   document.getElementById("totalPrice").innerHTML = sum;
// }



//
// function insertMenu() {
//   var x = event.target.id;
//   tablenumber = x.replace(/[^0-9]/g, "");
//
// 	// 메뉴 리스트 화면에 출력
//   for (var i = 1; i < menuNameList.length; i++) {
// 		// 테이블에 주문된 메뉴가 존재하는 경우
//     if (document.getElementById(menuNameList[i] + tablenumber) != undefined) {
// 	    document.getElementById("menu" + i + "_checkbox").checked = true;
// 	    document.getElementById("menu" + i + "_number").removeAttribute("disabled");
// 	    document.getElementById("menu" + i + "_number").value = document.getElementById(menuNameList[i] + tablenumber + "_number").innerHTML;
//     }
// 		else {
//       document.getElementById("menu" + i + "_checkbox").checked = false;
//       document.getElementById("menu" + i + "_number").value = "";
//       document.getElementById("menu" + i + "_number").setAttribute("disabled", "true");
//     }
//   }
// }
//
// // 해당 코드르 통하여 Pos.html에 있는 id=Menudispaly가 id=Menu로 변경되어 화면에서 사라짐
// function exit() {
//   var _Menudisplay = document.getElementById("Menudisplay");
//   _Menudisplay.setAttribute("id", "Menu");
// }
//
//
// function orderMenu() {
//
//   var menuName = 0,
// 	    price = 0,
// 	    num = 0;
//
//   document.getElementById("MenuList" + tablenumber).innerHTML = "";
//
//   for (var i = 1; i < menuNameList.length; i++) {
// 		// 체크 박스가 체크된 경우(주문이 된 경우)
//     checkFlag = document.getElementById('menu' + i + '_checkbox').checked;
//
// 		// 주문이 된 경우
// 		if (checkFlag) {
//       menu = document.getElementById('menu' + i + '_checkbox').value;
//       price = document.getElementById('menu' + i + '_price').textContent;
//       num = document.getElementById('menu' + i + '_number').value;
//
// 			// 메뉴에 해당하는 행 생성
// 			var menuRow = document.createElement("div");
// 		  menuRow.setAttribute("class", "menuRow");
// 		  document.getElementById('MenuList' + tablenumber).appendChild(menuRow);
//
// 			// 행안의 메뉴 이름 생성
// 		  var menuInfo = document.createElement("div");
// 		  menuInfo.setAttribute("class", "menu_name");
// 		  menuInfo.setAttribute("id", menu + tablenumber);
// 		  menuInfo.innerHTML = menu;
// 		  menuRow.appendChild(menuInfo);
//
// 			// 행안의 메뉴 갯수 생성
// 		  var menuNumber = document.createElement("div");
// 		  menuNumber.setAttribute("class", "menu_number");
// 		  menuNumber.setAttribute("id", menu + tablenumber + "_number");
// 		  menuNumber.innerHTML = num;
// 		  menuRow.appendChild(menuNumber);
//     }
//   }
//
//   exit();
// }
