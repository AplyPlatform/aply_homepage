
var curName = "이건우";
var curEngName = "Gunwoo Lee";
var curEmail = "abc@aply.biz";
var curNumber = "+82-10-1234-1234";
var curTitle = "CEO/CTO";

function setSign() {
	
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
	
	var sigStr = '<font style="font-size: x-small; font-family: arial, sans-serif;" color="#999999"><br><font color="#ddd" size="1">____________________________________________</font><br><br><br>'
								+	'&nbsp;&nbsp;<font size="2"><strong>' + curName + ' (' + curEngName + ')</strong>&nbsp;&nbsp;|&nbsp;&nbsp;' + curTitle + '</font><br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>M</strong></font>&nbsp;'
          			+ curNumber + '&nbsp;&nbsp;|&nbsp;&nbsp<font color="#8e7cc3"><strong>E</strong></font>&nbsp;&nbsp;<a href="mailto:'
          			+ curEmail + '" target="_blank" style="color: rgb(153, 153, 153);">' + curEmail + '</a><br><br><br>'
            		+ '&nbsp;&nbsp;<em><strong><font size="2">APLY Inc.</font></strong></em><br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>T</strong></font>&nbsp;+82-2-6956-0801&nbsp;&nbsp;|&nbsp;&nbsp;<font color="#8e7cc3"><strong>F</strong>&nbsp;</font>'
            		+ '+82-2-6468-2031&nbsp;&nbsp;|&nbsp;&nbsp;<font color="#8e7cc3"><strong>H</strong></font>&nbsp;&nbsp;<a href="http://www.aply.biz/" target="_blank"><font color="#999999">www.aply.biz</font></a><br>'
            		+ '<strong><font color="#8e7cc3">&nbsp;&nbsp;Office</font></strong><br>&nbsp;&nbsp;04768 | 4F HEYGROUND 115,&nbsp;Wangsimni-ro, Seongdong-gu,<br>&nbsp;&nbsp;Seoul, Republic of Korea<br><br>&nbsp;&nbsp;<a href="https://aply.biz/" target="_blank"><img src="https://aply.biz/assets/images/logo.png" width="96" height="30"/></a>'
            		+ '<br><br><font color="#ddd" size="1">____________________________________________</font></font>';
	
	//alert(sigStr);
	$("#sign_field").html(sigStr);
}