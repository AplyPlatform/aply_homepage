
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
	var sigStr = `<div style="font-size: x-small; font-family:나눔고딕,NanumGothic,Sans-serif;" color="#777"><br><font color="#ddd" size="1">____________________________________________</font><br><br><br>
					&nbsp;&nbsp;<font size="2"><strong style="font-family:나눔고딕,NanumGothic,Sans-serif">` + curName + ` (` + curEngName + `)</strong> ` + curTitle + `</font>
					<br>&nbsp;&nbsp;<strong style="color:#000"><b>M</b></strong>&nbsp;`
          			+ curNumber + `&nbsp;&nbsp;<font color="#000">|</font>&nbsp;&nbsp<strong style="color:#000"><b>E</b></strong>&nbsp;&nbsp;<a href="mailto:`
          			+ curEmail + `" target="_blank" style="color:#777">` + curEmail + `</a><br><br>					
					<br>&nbsp;&nbsp;<a href="https://aply.biz/" target="_blank"><img src="https://home.aply.biz/assets/images/logo.png" style="height:25px" title="Advanced platform to fly"/></a>
					<br>&nbsp;&nbsp;<font color="#6668a6">ADVANCED PLATFORM TO FLY</font>
					
            		<br>&nbsp;&nbsp;<strong><font size="3" color="#6668a6">주식회사 어플라이 APLY Inc.</font></strong>
					<br>&nbsp;&nbsp;<img src="https://home.aply.biz/symbol/images/aqr_square.png" style="width:16px;height:16px" title="AQR : 다양한 페이. SNS 링크. 간편 송금. 하나의 QR과 URL에.">&nbsp;&nbsp;<a href="http://aplx.link/to/aply" target="_blank" style="color:#777">aplx.link/to/aply</font></a>
					<br>
					<br>&nbsp;&nbsp;<strong style="color:#000"><b>T</b></strong>&nbsp;+82-2-6956-0801&nbsp;&nbsp;<font color="#000">|</font>&nbsp;&nbsp;
					<strong style="color:#000"><b>H</b></strong>&nbsp;&nbsp;<a href="http://aply.biz/" target="_blank" style="color:#000">www.aply.biz</font></a>
					<br>&nbsp;&nbsp;<strong style="color:#000"><b>O</b></strong> 10915 &nbsp;<font color="#000">|</font>&nbsp; 6F, 24-21,&nbsp;Geumbit-ro, Paju-si,<br>&nbsp;&nbsp;Gyeonggi-do, Republic of Korea
					<br>
					<br>
					<br>
					<table border="0" cellpadding="0" cellspacing="0" width="240px">
					<tr>
					<td>						
						<a href="https://aqr.aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aqr_per.png" style="margin-right:44px;width:35px;" title="간편 송금을 지원하는 Link-in-bio 서비스"></a>
						<a href="https://aqr-m.aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aqrm_per.png" style="margin-right:42px;width:36px;" title="QR코드 기반의 Mass production 관리 솔루션"></a>
						<a href="https://aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aplx_per.png" style="width:40px;" title="증강현실 기반의 홍보/전시/커뮤니케이션 플랫폼"></a>						
					</td>
					<tr>					
					</tr>
					</table>
					<br><br>
					<font color="#ddd" size="1">____________________________________________</font>
					</div>`;					
	
					/*

					<a href="https://home.aply.biz" target="_blank"><img src="https://home.aply.biz/symbol/images/aply_per.png" style="margin-right:16px;width:56px;"></a>
						<a href="https://aqr.aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aqr_per.png" style="margin-right:18px;width:56px;"></a>
						<a href="https://aqr-m.aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aqrm_per.png" style="width:48px;"></a>


	<td width="104px" align="left" valign="center" rowspan="2"><a href="https://aply.biz/" target="_blank"><img src="https://home.aply.biz/assets/images/logo.png" height="25px"/></a></td>
	<td width="1px" rowspan="2" bgcolor="#eee"></td>
	<td width="65px" height="33px" align="center" valign="center" ><a href="https://aqr.aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aqr_squre2.png" width="25px" height="25px" alt="간편 송금 지원 서비스"/></a></td>
	<td width="65px" align="center" valign="center" rowspan="2"><a href="https://aplx.link/to/aply" target="_blank"><img src="https://home.aply.biz/symbol/images/aqr_qr.png" width="58px" height="58px" alt="APLY Link-in-bio"/></a></td></tr>
	<tr><td width="65px" height="33px" align="center" valign="center" ><a href="https://aplx.link" target="_blank"><img src="https://home.aply.biz/symbol/images/aplx_og_image.png" width="25px" height="25px" alt="증강현실 기반의 홍보/전시/커뮤니케이션 플랫폼"/></a></td></tr></table>
	<br><br><font color="#ddd" size="1">____________________________________________</font></div>`;
	*/
	

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