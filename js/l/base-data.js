
//分类菜单如果要添加新数据,对应的ID,title要保持一致:id不能重复
const MENU_DATA = [
	{title:'热销',id:'rexiao'},
	{title:'推荐',id:'tuijian'},
	{title:'川菜',id:'chuancai'},
	{title:'湘菜',id:'xiangcai'},
	
	{title:'套餐',id:'taocan'},
	{title:'炒饭',id:'chaofan'},
	{title:'小菜',id:'xiaocai'},
	{title:'饮料',id:'yinliao'},
];


//一个菜单分类所包含的数据
const SUB_MENU_DATA = {
	/* 热销系列*/
	'rexiao':[
		{
			title:'鱼香肉丝',
			icon:'../../images/ig/c_yuxiangrouci.jpg',
			money:'20',
			sale:'50',
		},
	
		//添加新的数据
	],
	
	/* 推荐系列*/
	'tuijian':[
		{
			title:'鱼香肉丝',
			icon:'../../images/ig/c_yuxiangrouci.jpg',
			money:'20',
			sale:'50',
		},
		
		//添加新的数据
	],
	
	/* 川菜系列*/
	'chuancai':[
		{
			title:'外婆菜炒肉',
			icon:'../../images/ig/c_waipocai.jpg',
			money:'20',
			sale:'50',
		},
		
		//添加新的数据
	],
	
	
	/* 湘菜系列*/
	'xiangcai':[
		{
			title:'外婆菜炒肉',
			icon:'../../images/ig/c_waipocai.jpg',
			money:'20',
			sale:'50',
		
		},
		
		//添加新的数据
	],
	
	/* 套餐系列*/
	'taocan':[
		{
			title:'卤肉饭',
			icon:'../../images/ig/c_luroufan.jpg',
			money:'20',
			sale:'50',
		},
		
		//添加新的数据
	],
	
	
	/* 炒饭系列*/
	'chaofan':[
		{
			title:'蛋炒饭',
			icon:'../../images/ig/c_danchaofan.jpg',
			money:'20',
			sale:'50',
		},
		
		//添加新的数据
	],
	
	/* 小菜系列*/
	'xiaocai':[
		{
			title:'清香藕片',
			icon:'../../images/ig/c_xiaocai.jpg',
			money:'10',
			sale:'50',
		},
		{
			title:'凉拌黄瓜',
			icon:'../../images/ig/c_huanggua.jpg',
			money:'9',
			sale:'50',
		},
		//添加新的数据
		
	],
	
	
	
	
	
	/* 饮料系列*/
	'yinliao':[
		{
			title:'加多宝',
			icon:'../../images/ig/c_yinliao.jpg',
			money:'4',
			sale:'10',
		},
		
		//添加新的数据
	],
}


//获取所有分类的ID,自动获取
var MENU_IDs = (function(){
	var arr =  new Array();
	for (var i = 0; i < MENU_DATA.length; i++) {
		var o =  MENU_DATA[i];
		arr.push(o['id']);
	}
	
	return arr;
})();

//根据菜单ID获取title
var MENU_TitleForId = (function(id){
	var arr = {};
	for (var i = 0; i < MENU_DATA.length; i++) {
		var o =  MENU_DATA[i];
		arr[o['id']] = o['title'];
	}
	
	return arr;
})()