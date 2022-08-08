function showDialog(msg, callback) {
	$('#askModalContent').text(msg);
	$('#askModal').modal('show');

	if (callback == null) return;

	$('#askModalOKButton').off('click');
	$('#askModalOKButton').click(function () {
			$('#askModal').modal('hide');
			callback();
	});
}

function showPrivacyDialog() {
	$('#modal-3').modal('show');
}

var appSent = false;
function sendApplicationData(form_id, token)
{
	let min_type = "";
	if ($(form_id).find('input[name="min_type_1"]').is(":checked")) {
		min_type = "/SW개발";
	}

	if ($(form_id).find('input[name="min_type_2"]').is(":checked")) {
		min_type = min_type + "/데이터분석";
	}

	if ($(form_id).find('input[name="min_type_3"]').is(":checked")) {
		min_type = min_type + "/HW개발";
	}

	if ($(form_id).find('input[name="min_type_4"]').is(":checked")) {
		min_type = min_type + "/마케팅";
	}

	if ($(form_id).find('input[name="min_type_5"]').is(":checked")) {
		min_type = min_type + "/디자인";
	}

	if ($(form_id).find('input[name="min_type_6"]').is(":checked")) {
		min_type = min_type + "/기획";
	}

	let form_name = $(form_id).find('input[name="form_name"]').val();
	if (form_name == "") {
		showDialog("성함을 입력해 주세요.", null);
		return false;
	}

	let form_phone = $(form_id).find('input[name="form_phone"]').val();
	if (form_phone == "") {
		showDialog("전화번호를 입력해 주세요.", null);
		return false;
	}

	let form_email = $(form_id).find('input[name="form_email"]').val();
	if (form_email == "") {
		showDialog("이메일을 입력해 주세요.", null);
		return false;
	}

	if ($(form_id).find("#agree_1").length > 0 && $(form_id).find("#agree_1").is(":checked") == false) {
		showDialog("개인정보 처리방침에 동의해주세요.", null);
		return false;
	}

	$(form_id).find('input[name="form_token"]').val(token);
	
	let ref = $('<input type="hidden" value="' + document.referrer + '" name="ref">');	
	$(form_id).append(ref);	
	ref = $('<input type="hidden" value="' + min_type + '" name="min_type">');	
	$(form_id).append(ref);	
		
	let sed = new FormData($(form_id)[0]);

	$.ajax({
		type: "POST",
		url: 'https://duni.io/handler/handler.php',
		crossDomain: true,
		dataType: "json",
		data:sed,
		enctype: 'multipart/form-data', // 필수
		processData: false,
    contentType: false,
    cache: false,
		success: function (data) {
			if (data.result == "success") {
				showDialog("신청이 완료되었습니다. 채용계획이 발생할 경우 연락드리겠습니다!", function(){
					location.href="/index.html";
				});				
			}
			else {
				showDialog("오류가 발생하였습니다. 잠시 후 다시 시도해 주세요. : " + data.message , null);
			}

			$(form_id + " input").last().remove();
		},
		error: function(jqXHR, text, error){
			showDialog("죄송합니다, 일시적인 오류가 발생하였습니다. 다시 시도 부탁드립니다.", null);
		}
	});
}


function setSubmitHandler(form_p_id) {
	var form_id = "#" + form_p_id;

	$(form_id + "_send").on("click", function(e) {
		e.preventDefault();

		if (appSent == true) {
			if (confirm('이미 신청된 내용이 있습니다. 신청을 다시 진행 하시겠습니까?')) {	}
			else {
			  return;
			}
		}

		grecaptcha.ready(function() {
	      grecaptcha.execute('6LfPn_UUAAAAAN-EHnm2kRY9dUT8aTvIcfrvxGy7', {action: 'homepage'}).then(function(token) {
	         sendApplicationData(form_id, token);
	      });
	  });
	});

	$('[name^=form_phone]').keypress(validateNumber);
}

function setPage() {
	setSubmitHandler("email_up");
}

function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
        return true;
    }
}

function isSet(value) {
  if (value == "" || value == null || value == "undefined") return false;

  return true;
}