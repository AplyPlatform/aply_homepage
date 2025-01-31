// AAPI--
// APLY APIs --
//

const AAPI_targetsInfo = [
	["aply", "https://home.aply.biz/"],
	["catchme", "https://catchme.aply.biz"],
	["kiosk", "https://kiosk.aply.biz"],
	["gps", "https://gps.aply.biz"],
	["qr", "https://qr.aply.biz"],
	["recruit", "https://home.aply.biz/?p=recruit"],
	["aqr", "https://aqr.aplx.link"],
	["aqr-m", "https://aqr-m.aplx.link"],
	["aplx", "https://home.aplx.link"],
	["store", "https://smartstore.naver.com/aqr"],
	["blog", "https://blog.naver.com/aply-platform"],
	["polaris", "https://polarisconsulting.modoo.at"],
	["dunistock", "https://dunistock.com"],
	["dromi", "https://dromi.aply.biz"],
	["duni", "https://duni.io"],
	["dunipilot", "https://pilot.duni.io"],
	["dkdk", "https://dkdk.io"],
	["drdr", "https://drdr.io"],
];

const AAPI_captchaSiteKey = '0x4AAAAAAA62_43H2MO9goDN';
let AAPI_isRecaptchaInit = false;

const AAPI_GA_EVENT = (event_name, event_target_name, event_label) => {
	if (typeof gtag !== 'undefined') {
		gtag(
			'event', event_name, {
			'event_category': event_target_name,
			'event_label': event_label
		}
		);
	}
};

$(function () {
	setAAPIExtraSiteSelect();
	setAAPICaptchaInfo();
});

function setAAPICaptchaInfo() {
	turnstile.ready(function () {
		AAPI_isRecaptchaInit = true;
	});
}

function AAPI_setContactForm(form_kind) {
	$("#form_contact_send").click(function (e) {
		sendAAPIContactFormData(form_kind);
	});

	$('[name^=form_contact_phone]').keypress(AAPI_phonenumberValidate);

	$("#form_contact_privacy_link").click(function(){
		AAPI_showPrivacyDialog();
	});
}

const AAPI_showPrivacyDialog = () => {
    $('#contact_privacy_body_content').load("contact_privacy.html");
    $('#contactPrivacyDialog').modal({"show" : true});
};

const AAPI_emailValidate = (emailVal) => {
	let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

	if (emailVal.match(regExp) != null) {
		return true;
	}
	else {
		return false;
	}
};

function sendAAPIContactFormData(form_kind) {
	let min_type = "";

	for (let i = 1; i <= 20; i++) {
		if ($('input[name="form_contact_min_type_' + i + '"]').length && $('input[name="form_contact_min_type_' + i + '"]').is(":checked")) {
			min_type = min_type + "/" + $('input[name="form_contact_min_type_' + i + '"]').val();
		}
	}

	if (min_type == "") {
		AAPI_showDialog("문의 분야를 선택해 주세요.");
		return false;
	}

	let form_name = "";
	if ($('input[name="form_contact_name"]').length > 0) {
		form_name = $('input[name="form_contact_name"]').val();
		if (form_name == "") {
			AAPI_showDialog("이름을 입력해 주세요.");
			return false;
		}
	}

	let form_phone = "";
	if ($('input[name="form_contact_phone"]').length > 0) {
		form_phone = $('input[name="form_contact_phone"]').val();
		if (form_phone == "") {
			AAPI_showDialog("전화번호를 입력해 주세요.");
			return false;
		}
	}		

	let form_email = "";
	if ($('input[name="form_contact_email"]').length > 0) {
		form_email = $('input[name="form_contact_email"]').val();
		if (form_email == "" || AAPI_emailValidate(form_email) == false) {
			AAPI_showDialog("올바른 이메일 주소를 입력해 주세요.");
			return false;
		}
	}	

	let form_content = "";
	if ($('textarea[name="form_contact_content"]').length > 0) {
		form_content = $('textarea[name="form_contact_content"]').val();
		if (form_content == "") {
			AAPI_showDialog("문의 내용을 입력해 주세요.");
			return false;
		}
	}	

	if ($('input[name="form_contact_agree_1"]').length > 0 && $('input[name="form_contact_agree_1"]').is(":checked") == false) {
		AAPI_showDialog("개인정보 처리방침에 동의해 주세요.");
		return false;
	}

	let fd = new FormData();	
	fd.append("form_kind", form_kind);
	fd.append("form_email", form_email);
	fd.append("form_phone", form_phone);
	fd.append("form_name", form_name);
	fd.append("form_content", form_content);
	fd.append("min_type", min_type);
	fd.append("ref", document.referrer);

	$("#form_contact_send_loading").show();
	$("#form_contact_send").hide();

	AAPI_getCaptchaToken(function (token) {
		fd.append("form_token", token);
		AAPI_ajaxRequest(fd, function(data) {			
				$("#form_contact_send_loading").hide();
				$("#form_contact_send").show();

				if (data.result == "success") {
					AAPI_showDialog("전송이 완료되었습니다. APLY가 연락드리겠습니다.", function () {
						location.href = location.href;
					});
					return;
				}
	
				AAPI_showDialog("오류가 발생하였습니다. 잠시 후 다시 시도해 주세요. : " + data.message);
			},
			function() {
				$("#form_contact_send_loading").hide();
				$("#form_contact_send").show();

				AAPI_showDialog("죄송합니다. 일시적인 오류가 발생하였습니다. 다시 시도해 주세요.");
			});
	});
}

function AAPI_showDialog(msg, callback) {
	$('#AAPI_askModalContent').text(msg);
	$('#AAPI_askModal').modal('show');
  
	if (callback == null) return;
  
	$('#AAPI_askModalOKButton').off('click');
	$('#AAPI_askModalOKButton').click(function () {
		$('#AAPI_askModal').modal('hide');
		callback();
	});
}

function AAPI_phonenumberValidate(event) {
	var key = window.event ? event.keyCode : event.which;
	if (event.keyCode === 8 || event.keyCode === 46) {
		return true;
	} else if (key < 48 || key > 57) {
		return false;
	} else {
		return true;
	}
}

function AAPI_isSet(value) {
	if (value == "" || value == null || value == "undefined") return false;

	return true;
}

function AAPI_ajaxRequest(fed, success_callback, error_callback) {	
	$.ajax({
		type: "POST",
		url: 'https://aply.biz/contact/handler.php',
		crossDomain: true,
		dataType: "json",
		data: fed,
		enctype: 'multipart/form-data', // 필수
		processData: false,
		contentType: false,
		cache: false,
		success: function (data) {
			success_callback(data);
		},
		error: function (jqXHR, text, error) {
			error_callback();
		}
	});
}

function AAPI_getCaptchaToken(tokencallback) {
	if (AAPI_isRecaptchaInit == false) {
		turnstile.ready(function () {
			AAPI_isRecaptchaInit = true;
			turnstile.render('#turnstileWidget', {
				sitekey: AAPI_captchaSiteKey,
				callback: function (token) {
					tokencallback(token);
				},
			});
		});
	}
	else {
		turnstile.render('#turnstileWidget', {
			sitekey: AAPI_captchaSiteKey,
			callback: function (token) {
				tokencallback(token);
			},
		});
	}
}

function setAAPIExtraSiteSelect() {
	let selContents = '<option selected>Family Sites</option> \
			<option>--------------------</option> \
			<option value="aply">APLY Inc.</option> \
			<option value="recruit">Recruit</option> \
			<option value="blog">Blog</option> \
			<option>--------------------</option> \
			<option value="aqr">AQR : 간편 송금 서비스</option> \
			<option value="aqr-m">AQR-M : QR 관리 솔루션</option> \
			<option value="aplx">APLX : 증강현실 플랫폼</option> \
			<option value="kiosk">R&D KIOSK : 국가연구개발사업 길잡이</option> \
			<option>--------------------</option> \
			<option value="qr">QR코드 만들기</option> \
			<option value="store">QR코드 플레이트 스토어</option> \
			<option value="gps">GPS <-> 주소 변환</option> \
			<option value="catchme">캐치미</option>';

	$('#selSites').append(selContents);

	$('#selSites').change(function () {
		let targetVal = $(this).val();
		let targetUrl = "";

		AAPI_targetsInfo.forEach(function (t) {
			if (t[0] == targetVal) {
				targetUrl = t[1];
			}
		});

		if (targetUrl != "") {
			AAPI_GA_EVENT("extra_site_select", "homepage", targetVal);
			window.open(targetUrl, "_blank");
		}
	});
}