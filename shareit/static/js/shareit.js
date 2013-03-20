(function($){
	$.fn.shareIt = function(){
		var $datas = $(".datas");
		var $input = $(".text", $datas);
		var $button = $(".button", $datas);
		var $loading = $(".loading");
		var $qrCode = $(".qr-code");
		var up_datas = "-50px";

		var show_image = function(data){
			$datas.animate({'opacity': 1}, 'slow');
			$loading.css("opacity", 0);
			$qrCode.html(
					$('<img/>', {
				        src: data.url,
				        alt: ''
				    })		
			);
		};
		var show_erro = function(){
			alert(":(");
		};
		var do_ajax = function(){
			$loading.animate({"margin-top":"50px", "opacity": 1}, 'slow');
			$datas.animate({'opacity': 0.5, 'margin-top': up_datas}, 'slow', null, function(){
					$.ajax({
						url: "http://10.71.11.214:8888/qrcode",
						type:"get",
						data: {"msg": $input.val()},
						dataType: "jsonp",
						jsonpCallback: 'response',
						cache: "true",
						success:show_image,
						error: show_erro
					});
			});
		};
		
		
		
		$input.focus();
		
		$button.click(function(){
			do_ajax();
		});
		
	};
})(jQuery);


$(document).ready(function(){
	$(".content").shareIt();
});