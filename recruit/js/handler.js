
function showDialog(msg) {
	$('#askModalContent').text(msg);
	$('#askModal').modal('show');
}

function showPrivacyDialog() {
	$('#modal-3').modal('show');
}

var appSent = false;
function sendApplicationData(form_id, token)
{
	if ($(form_id).find('input[name="min_type_1"]').is(":checked")) {
		min_type = "조종";
	}
	else if ($(form_id).find('input[name="min_type_2"]').is(":checked")) {
		min_type = "코딩";
	}
	else if ($(form_id).find('input[name="min_type_3"]').is(":checked")) {
		min_type = "제작";
	}
	else if ($(form_id).find('input[name="min_type_4"]').is(":checked")) {
		min_type = "체험";
	}

	if ($(form_id).find('input[name="form_name"]').val() == "") {
		showDialog("성함을 입력해 주세요.");
		return false;
	}

	if ($(form_id).find('input[name="form_phone"]').val() == "") {
		showDialog("전화번호를 입력해 주세요.");
		return false;
	}

	if ($(form_id).find('input[name="form_email"]').val() == "") {
		showDialog("이메일을 입력해 주세요.");
		return false;
	}

	if ($(form_id).find("#agree_1").length > 0 && $(form_id).find("#agree_1").is(":checked") == false) {
		showDialog("개인정보 처리방침에 동의해주세요.");
		return false;
	}

	$(form_id).find('input[name="min_type"]').val(min_type);
	$(form_id).find('input[name="form_token"]').val(token);
	var ref = $('<input type="hidden" value="' + document.referrer + '" name="ref">');
	$(form_id).append(ref);

	var sed = new FormData($(form_id)[0]);

	$.ajax({
		type: "POST",
		dataType : "jsonp",
		url: 'https://duni.io/handler/handler.php',
		data:sed,
		enctype: 'multipart/form-data', // 필수
		processData: false,
    contentType: false,
		crossDomain:true,
    cache: false,
		success: function (data) {
			if (data.result == "success") {
				appSent = true;
				showDialog("신청이 완료되었습니다. 채용계획이 발생할 경우 검토 후 연락드리겠습니다!");

				$(form_id)[0].reset();
				location.href="/index.html";
				return;
			}

			$(form_id + " input").last().remove();
		},
		error: function(jqXHR, text, error){
			showDialog("죄송합니다, 일시적인 오류가 발생하였습니다. 다시 시도 부탁드립니다.");
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
