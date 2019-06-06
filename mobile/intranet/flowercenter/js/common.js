//사용자 메뉴 클릭 효과
function unb_click(){
	var unb_layer = document.querySelector(".layer.unb");
	if(unb_layer.style.display == "none"){
		unb_layer.style.display = "block";
	}else {
		unb_layer.style.display = "none";
	}
}

//탭메뉴
function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tab_con");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab_link");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" on", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.parentElement.className += " on";
}
	
//리스트 목록
var lists = document.getElementsByClassName("lists");
for(var i = 0; i < lists.length; i++){
	lists[i].addEventListener("click", function(){
		this.classList.toggle("on");
	});
}
$(function(){
	var lists_count = 10;
	$(".list li").slice(0, lists_count).css("display", "block");
	$(".btn.more").click(function(){
		lists_count += 5;
		$(".list li").slice(0, lists_count).css("display", "block");
		if(lists_count > 14) {
			$(".btn.more .ico.more").css({
				"transform" : "rotate(315deg)",
				"margin-bottom" : "-3px"
			});
			$(".btn.more").click(function(){
				lists_count = 7;
				$(".list li").css("display", "none");
				$(".list li").slice(0, lists_count).css("display", "block");
				$(".btn.more .ico.more").css({
					"transform" : "rotate(135deg)",
					"margin-bottom" : "3px"
				});
			})
		}
	});
});

//수발주정보
var balju_sort = $(".subalju_info label");
var suju_sort = $(".subalju_info .suju_mem p");
balju_sort.click(function(){
	if($(this).hasClass("bonbu")) {
		suju_sort.css("display", "none");
		$(".subalju_info .suju_mem p.bonbu").css("display", "block");
	} else if($(this).hasClass("mem")) {
		suju_sort.css("display", "none");
		$(".subalju_info .suju_mem p.mem").css("display", "block");
	}
});

//발주상품 수량
var balju_pdt_btn = $(".items_wrap.balju_pdt .quantity button");
var balju_pdt_count = $(".items_wrap.balju_pdt .quantity input[type='text']");
var initial_val = 1;
balju_pdt_btn.click(function() {
	if($(this).hasClass("minus")){
		if(initial_val < 2){
			initial_val = 1;
		}else {
			initial_val -=1;
			balju_pdt_count.val(initial_val);
		}
	} else if($(this).hasClass("plus")){
		initial_val +=1;
		balju_pdt_count.val(initial_val);
	}
});

//옵션 여부 선택
var opt_radio = $(".option > label");
var option_radio = $(".option input[type='radio']");
$(".option > label").click(function(){
	var opt_checked = option_radio.is(":checked");
	if(opt_checked = "true") {
		opt_radio.removeClass("on");
		$(this).addClass("on");
		$(".option .has").click(function(){
			$(".option_list").css("display", "block");
		});
		$(".option .none").click(function(){
			$(".option_list").css("display", "none");
		});
	}
});
var optionList_chk = $("label.chk input[type='checkbox']");
optionList_chk.change(function(){
	$(this).parent().toggleClass("on");
	$(this).parent().siblings("span").toggleClass("on");
});

//회원검색
var member_search = $(".items_wrap.mem_search .option > label");
var member_list = $(".items_wrap.mem_search .option_list");
member_search.click(function(){
	if($(this).hasClass("city")) {
		member_list.css("display", "none");
		$(".items_wrap.mem_search .option_list.city").css("display", "block");
	} else if($(this).hasClass("jiyok")) {
		member_list.css("display", "none");
		$(".items_wrap.mem_search .option_list.jiyok").css("display", "block");
	}
});
member_list.children().children().click(function(){
	member_list.children().removeClass("on");
	$(this).parent().addClass("on");
});

//발주 금액 선택
var price_btn = $(".pdt_amount .btn");
price_btn.click(function(){
	$(this).siblings().removeClass("on");
	$(this).addClass("on");
});

//이미지업로드
var fileTarget = $(".img_search input[type='file']");
fileTarget.on('change', function(){
	if(window.FileReader) {
		var filename = $(this)[0].files[0].name;
	} else {
		var filename = $(this).val().split('/').pop().split('\\').pop();
	}
	$(this).closest('label').siblings("input[type='text']").val(filename);
	$(".img_preview").css("display", "block");
	readURL(this);
});
$(".img_preview .btn.close").click(function(){
	$(".img_preview").css("display", "none");
	$(".img_search input[type='text']").val(null);
});
function readURL(input) {
	if(input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			$("#imgPreview").attr("src", e.target.result);
		}
		reader.readAsDataURL(input.files[0]);
	}
}

//셀렉트박스 - 배송상태
function changeBg_select(evt) {
	evt.style.background = evt.children[evt.selectedIndex].style.background;
}

//날짜선택
$(function(){
	$(".datepicker").datepicker();
});