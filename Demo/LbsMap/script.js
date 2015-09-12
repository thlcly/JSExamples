var lbsMap = (function(){

	$(function(){		
		var map = new AMap.Map('map',{
		 	zoom: 10,	//设置地图的缩放级别
        	center: [116.39,39.9]	//地图中心点坐标        	
		});

		/*
		var marker = new AMap.Marker({
        	position: [116.480983, 39.989628],	//设置标记点
        	map:map 	//立即在地图上显示标记点
    	});
		*/

		//可以在逻辑中添加maker,如果在maker中不指定position则默认是当前地图的中心点
		var marker = new AMap.Marker({
			//position: [116.480983, 39.989628],	//设置标记点
		});
    	marker.setMap(map);

    	//marker.setMap();	//删除maker,不要传入map就是删除maker

    	/*消息窗口*/
    	var infowindow = new AMap.InfoWindow({
  		 	content: '<h3>高德地图</h3><div>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
     	 	offset: new AMap.Pixel(0, -30),
     	 	size:new AMap.Size(230,0),     	 //设置为0则内容会完全显示,不会出现滑块
		});

    	//infowindow.open(map,new AMap.LngLat(116.480983, 39.989628));	//打开消息窗口
    	var infowindow2 = new AMap.InfoWindow();
    	infowindow2.setSize(new AMap.Size(150,50));    	
    	var contentDiv = document.createElement('div');
    	contentDiv.innerText='我是信息窗体';
    	infowindow2.setContent(contentDiv);
    	infowindow2.open(map, [0,0]);
    	
    	//将maker和infowindow进行绑定,当点击maker再弹出infowindow
    	var clickHandle = AMap.event.addListener(marker, 'click', function() {
    		infowindow.open(map, marker.getPosition());
		});

		//AMap.event.removeListener(clickHandle);	//解除事件绑定

		//加载控件,并且加载完成后会自动调用回调函数
		AMap.plugin('AMap.AdvancedInfoWindow',function(){
		  var infowindow = new AMap.AdvancedInfoWindow({
		    content: '<h3 class="title">高德地图</h3>'+
		             '<div class="content">'+
		             '<img src="http://webapi.amap.com/images/amap.jpg">'+
		             '<span>高德是中国领先的数字地图内容、'+
		             '导航和位置服务解决方案提供商。</span></div>',
		    offset: new AMap.Pixel(0, -30),
		    asOrigin:false,
		    panel:path
		  });
		  infowindow.open(map,new AMap.LngLat(116.480983, 39.989628));
		});

		AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    		var toolBar = new AMap.ToolBar();
    		var scale = new AMap.Scale();
    		map.addControl(toolBar);
    		map.addControl(scale);
		});

		map.removeControl(toolBar);	//移出控件

	});


})()