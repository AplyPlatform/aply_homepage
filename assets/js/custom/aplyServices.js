const targetsInfo = [
	["aply", "https://aply.biz/"],
	["aqr", "https://aqr.aplx.link"],
	["recruit", "https://home.aply.biz/?p=recruit"],
	["duni", "https://duni.io"],
	["dunipilot", "https://pilot.duni.io"],
	["dunistock", "https://dunistock.com"],
	["dromi", "https://dromi.aply.biz"],
	["aplx", "https://home.aplx.link"],
	["dkdk", "https://dkdk.io"],
	["drdr", "https://drdr.io"],
	["blog", "https://blog.naver.com/PostList.naver?blogId=jebo78&categoryNo=38&from=postList"],
	["catchme", "https://catchme.aply.biz"],
	["kiosk", "https://kiosk.aply.biz/index_2022.html"],
	["polaris", "https://polarisconsulting.modoo.at"],
	["gps", "https://gps.aply.biz"],	
	["store", "https://smartstore.naver.com/aqr"],
	["qr", "https://qr.aply.biz"],
];

$(function() {
	let selContents = '<option selected>Family Sites</option> \
			<option>--------------------</option> \
			<option value="aply">APLY Inc.</option> \
			<option value="recruit">Recruit</option> \
			<option value="blog">Blog</option> \
			<option>--------------------</option> \
			<option value="aqr">AQR : 간편 송금 서비스</option> \
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

		targetsInfo.forEach(function (t) {
			if (t[0] == targetVal) {
				targetUrl = t[1];
			}
		});

		if (targetUrl != "")
			window.open(targetUrl, "_blank");
	});
});