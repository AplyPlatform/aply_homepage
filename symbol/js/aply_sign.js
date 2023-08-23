
var curName = "이건우";
var curEngName = "Gunwoo Lee";
var curEmail = "abc@aply.biz";
var curNumber = "+82-10-1234-1234";
var curTitle = "CEO/CTO";

function setSign() {
		$("#sign_copy_btn").click(function() {
			CopyToClipboard("sign_field");
		});
	
		$("#form_name").on("keyup", function() {
			curName = $(this).val();
	  		processChange();
		});
		
		$("#form_engname").on("keyup", function() {
	    	curEngName = $(this).val();
	  		processChange();
		});
		
		$("#form_email").on("keyup", function() {
	    	curEmail = $(this).val();
	  		processChange();
		});
		
		$("#form_number").on("keyup", function() {
	    	curNumber = $(this).val();
	  		processChange();
		});
	
		$("#form_title").on("keyup", function() {
	    	curTitle = $(this).val();
	  		processChange();
		});
		
		processChange();
}


function processChange() {	
	var sigStr = '<div style="font-size: x-small; font-family:나눔고딕,NanumGothic,Sans-serif;" color="#777"><br><font color="#ddd" size="1">____________________________________________</font><br><br><br>'
					+ '&nbsp;&nbsp;<font size="2"><strong style="font-family:나눔고딕,NanumGothic,Sans-serif">' + curName + ' (' + curEngName + ')</strong> ' + curTitle + '</font>'
					+ '<br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>M</strong></font>&nbsp;'
          			+ curNumber + '&nbsp;&nbsp;<font color="#8e7cc3">|</font>&nbsp;&nbsp<font color="#8e7cc3"><strong>E</strong></font>&nbsp;&nbsp;<a href="mailto:'
          			+ curEmail + '" target="_blank" style="color:#777">' + curEmail + '</a><br><br><br>'
					+ '&nbsp;&nbsp;ADVANCED PLATFORM TO FLY<br>'
            		+ '&nbsp;&nbsp;<strong><font size="2" color="#777">주식회사 어플라이 APLY Inc.</font></strong><br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>T</strong></font>&nbsp;+82-2-6956-0801&nbsp;&nbsp;'
            		+ '<font color="#8e7cc3">|</font>&nbsp;&nbsp;<font color="#8e7cc3"><strong>H</strong></font>&nbsp;&nbsp;<a href="http://aply.biz/" target="_blank" style="color:#777">www.aply.biz</font></a><br>'
            		+ '<br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>O</strong></font> 10915 <font color="#8e7cc3">|</font> 6F, 24-21,&nbsp;Geumbit-ro, Paju-si,<br>&nbsp;&nbsp;Gyeonggi-do, Republic of Korea<br>&nbsp;&nbsp;'
					+ '<table border="0" cellpadding="0" cellspacing="0" width="220px"><tr><td width="4px"></td><td width="110px" align="left" valign="center"><a href="https://aply.biz/" target="_blank"><img src="https://home.aply.biz/assets/images/logo.png" width="96" height="30"/></a></td>'
					+ '<td width="1" bgcolor="#8e7cc3"></td>'
					+ '<td align="right" valign="center" width="52px"><a href="https://aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aplx_og_image.png" width="30" height="30" alt="증강현실 기반의 홍보/전시/커뮤니케이션 플랫폼"/></a></td>'
					+ '<td align="center" valign="center" width="53px"><a href="https://aqr.aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aqr_squre2.png" width="30" height="30" alt="간편 송금 지원 서비스"/></a>'
					+ '</td></tr></table>'
            		+ '<br><br><font color="#ddd" size="1">____________________________________________</font></div>';
	

	$("#sign_field").html(sigStr);	
}

function CopyToClipboard(element) {

	var doc = document
	, text = doc.getElementById(element)
	, range, selection;

	if (doc.body.createTextRange)
	{
		range = doc.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} 

	else if (window.getSelection)
	{
		selection = window.getSelection();        
		range = doc.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
	alert("서명이 복사되었습니다.\nAPLY의 팀원을 사칭하기 위해 이 서명을 사용할 경우 37.83조 원의 벌금을 내셔야 합니다.");
}