
// 장바구니에서 x표시 클릭 시 메뉴 삭제
function canclethisMenu(obj) {
   var tr = obj.parentNode.parentNode;
   var tbody = obj.parentNode.parentNode.parentNode;
   tbody.removeChild(tr);
}

function click_category(cateIndex) {
  var categorys = document.getElementsByClassName("categoryBar")
    localStorage.setItem('category_num', cateIndex+'');
    for (var j = 0; j < categorys.length; ++j) {
      categorys[j].className = "categoryBar";
    }
    categorys[cateIndex].className = "categoryBar selected"
}
// 메뉴리스트 화면에서 선택하는 카테 고리마다 해당 페이지 호출시키게 함
// function showMenuList(){
//   var xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "test.jsp");
//     xhttp.onreadystatechange = function() {
//       if (xhttp.readyState == 4 && xhttp.status == 200) {
//         document.getElementById("Context").innerHTML = xhttp.responseText;
//       }
//     };
//     xhttp.send();
// }

// var categoryBarClick = function(url){
//     if(url == '/'){
//         location.reload(true);
//         return;
//     }
//
//     $.ajax({
//         type: 'POST',
//         url: "category.jsp",
//         async: true,
//         dataType: "text",
//         // contentType:"application/x-www-form-urlencoded; charset=UTF-8",
//         success: function(data) {
//             $('.grid-main').jsp(data);
//
//         },
//         error: function(request, status, error) {
//             alert('로드 실패 !');
//         }
//     });
// };
//
// 메뉴리스트화면에서 카테고리바 클릭 시 해당하는 메뉴목록 서버에 요청
$(document).ready(function(){
    var categorys = document.getElementsByClassName("categoryBar")
    for (var j = 0; j < categorys.length; ++j) {
        categorys[j].className = "categoryBar";
    }
    let cateIndex = localStorage.getItem('category_num')
    categorys[cateIndex].className = "categoryBar selected"


    $('.categoryBar').on('click',function(){
        var index = $('.categoryBar').index(this);
        $.ajax({
            type: 'POST',
            url: "menuList.jsp",
            dataType: "json",
            data: {num: index},

            success: function(data) {
                console.log(data);
            },
            error: function() {
                alert('로드 실패 !');
            }
        });
    });
});





// 장바구니에 메뉴 추가될 때마다 사용될 td틀
let menu_dict = {
  }

function makeElement(type, attributes) {
  var element = document.createElement(type);
  for (key in attributes) {
    element.setAttribute(key, attributes[key]);
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
    var iconSpanPart = makeElement('span',{});
    iconSpanPart.addEventListener("click", function(){
           canclethisMenu(this)
         });
      iconSpanPart.addEventListener("click", function(){
          payOrder()
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
    var name = document.getElementById("menu"+i+"_name").innerText;
    nameTd.innerHTML = name;
    // var nameTd = document.createElement("td");
    // console.log('menu'+i+'_name')
    // var name = document.getElementById("menu"+i+"_name").innerText; //  메뉴 이름 가져오기
    // nameTd.setAttribute("class", "name");
    // nameTd.innerHTML = name;

    // 행 안에 메뉴 수량 열 생성

    console.log(amount);
    var amountTd = makeElement('td',{
      'class' : 'amount'
    });
      i = amount;
    var plus_span = makeElement('span',{});
    plus_span.addEventListener("click", function(){
              amountPlus(i)
         });
      plus_span.addEventListener("click", function(){
          payOrder()
      });
    var plus_icon = makeElement('i',{
      'class':'far fa-caret-square-up'
    });
    var amountInputBox = makeElement('input',{
      'id': 'amountBox'+i,
      'value': "1",
      "size": "5",
      "type": "text"
    });
    var minus_span = makeElement('span',{});
    minus_span.addEventListener("click", function(){
          amountMinus(i)
    });
      minus_span.addEventListener("click", function(){
         payOrder()
      });
      amount += 1;
    var minus_icon = makeElement('i',{
      'class':'far fa-caret-square-down'
    });
    plus_span.appendChild(plus_icon);
    minus_span.appendChild(minus_icon);
    amountTd.appendChild(plus_span);
    amountTd.appendChild(amountInputBox);
    amountTd.appendChild(minus_span);


    // 행 안에 가격 열 생성
    var priceTd = makeElement('td',{
      'id':'price'
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
    // amountTd.appendChild(input);
    // amountTd.appendChild(amountMinusSpan);

    // 선택한 메뉴에 대한 행 안에 위에서 만든 태그들 다 넣어줌
    menuRow.appendChild(iconTd);
    menuRow.appendChild(nameTd);
    menuRow.appendChild(amountTd);
    menuRow.appendChild(priceTd);
    document.getElementById('viewChosenMenu').appendChild(menuRow);
    // iconTd.insertAdjacentElement("afterend",nameTd);
    // nameTd.insertAdjacentElement("afterend", amountTd);
    // amountTd.insertAdjacentElement("afterend",priceTd);
    // document.getElementById('viewChosenMenu').appendChild(menuRow);
    // preTd.insertAdjacentElement("afterend",menuRow);
  }
  else{
    menu_dict[i] += 1
    var amountBox = document.getElementById('amountBox'+i)
    amountBox.innerHTML = menu_dict[i];
  }

}

var amount = 1;  // 수량
var totalPrice_view = document.getElementById("totalPrice"); //  총액
var sum =0;
var amountBox = document.getElementsByClassName('amountBox');  // 수량박스
var price = document.getElementsByClassName('price');

// 수량 증가 함수
function amountPlus(i){
  var amountBox = document.getElementById('amountBox'+i);
  // var amountBox = document.getElementsByClassName('amountBox');  // 수량박스
  console.log('amountBox'+i);
  amount = amountBox.value++;
  menu_dict[i] += 1;
  amountBox.innerHTML = amount;
}
// 수량 감소 함수
function amountMinus(i){
  var amountBox = document.getElementById('amountBox'+i);
  // var amountBox = document.getElementsByClassName('amountBox');  // 수량박스
  if(amountBox.value>1){
    amount = amountBox.value--;
    menu_dict[i] -= 1;
    amountBox.innerHTML = amount;
  }
}

function payOrder(){
    // var price =0;
    // var number =0;
    var sum = 0;
    var viewChosenMenu = document.getElementById('viewChosenMenu');
    var td_length = viewChosenMenu.childNodes.length;
    // console.log(viewChosenMenu.childNodes[1].childNodes[2].childNodes[1].value);
    for (var i = 1; i < td_length; i++) {
        var number = viewChosenMenu.childNodes[i].childNodes[2].childNodes[1].value;
        console.log(number);
        var price = viewChosenMenu.childNodes[i].childNodes[3].textContent;
        console.log(price);
        sum += parseInt(number) * parseInt(price);
    }
    console.log(sum);
    document.getElementById('totalPrice').value = sum.toString();
    localStorage.setItem("price", sum.toString());
}


