var scrollToTop = (function(){

	var isCanceled = false;
	var timer = null;	

	$(function(){		

		var currentHeight = $(window).height();

		$(window).scroll(function(){						
				//如果是用户操作则清除定时器,停止滚动
			if(isCanceled){
				clearInterval(timer);	// 清除定时器			
				//$(window).unbind("scroll"); // 解除绑定,如果不解除绑定就会绑定多个scroll事件,因为每次点击按钮都会绑定一次										
			}
			isCanceled = true;

			var barTop = $(document).scrollTop();		
			console.log(barTop)	;
			if(barTop > currentHeight){
				$("#btn").attr("style","display:block");
			}else{
				$("#btn").attr("style","display:none");
			}
		});

		$("#btn").click(function(){			
			clearInterval(timer);
			//$(window).unbind("scroll"); // 解除绑定,如果不解除绑定就会绑定多个scroll事件,因为每次点击按钮都会绑定一次										

			//console.log(isCanceled);
			timer = setInterval(function(){
				//console.log("timer");
				isCanceled = false;

				var $top = $(document).scrollTop();
				//控制移动速度
				var speed = $top / 3 <= 200?200:$top / 3;
				$(document).scrollTop($top - speed);	

				if($top<=0){
					clearInterval(timer);
				}
			},50);			
		});
	});	
})();