
function animateLogo() {
	TweenMax.fromTo("#react-logo",3, {
		css: { y: "-20px" }
	},{
		css: { y: "20px" } ,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
	});
}

function animateRobot() {
	var ROBOT_ANIMATE_TIME = 0.3 ;
	var t = new TimelineMax({
		repeat: -1
	});
	t.to( "#android-robot" , ROBOT_ANIMATE_TIME , { rotation: "-55deg" } )
	.to( "#android-robot" , ROBOT_ANIMATE_TIME , { rotation: "-35deg" } )
	.to( "#android-robot" , ROBOT_ANIMATE_TIME , { rotation: "-45deg" } )
	.to( "#android-robot" , 1 , { rotation: "-45deg" } ) ;
}

function updateSliderControl() {
	// 获得所有的 slider 链接
	var links = document.querySelectorAll("#slider-control a")

	for(var i = 0; i < links.length; i ++) {
		var link = links[i];

		// 获取被链接指向的部分
		var section = document.querySelectorAll(".section") [ i ];
		var sectiontTop = section.offsetTop ;
		var sectionBottom = section.offsetTop + window.innerHeight ;

		// 检查 window.scrollY 是否在这部分中
		if(window.scrollY >= sectiontTop && window.scrollY < sectionBottom) {
			link.className = "active";
		} else {
			link.className = "";
		}
	}
}

function scrollWindowToPosition( position ) {
	TweenMax.to(window,1,{
		scrollTo: { y: position },
		ease: Power2.easeInOut,
	});
}

function addSmoothScrolling() {
	var links = document.querySelectorAll("#slider-control a")

	for(var i = 0; i < links.length; i ++) {
		var link = links[i];
		var p = window.innerHeight * i ;

		( function( _p ) {
			link.addEventListener("click",function(event) {
				scrollWindowToPosition( _p ) ;
				event.preventDefault() ;
				return false;
			});
		} ) ( p ) ;
	}
}


window.onscroll = function() {
  updateSliderControl();
}


// 当页面加载完毕时开始动画。
window.onload = function() {
	animateLogo();
	animateRobot();
	addSmoothScrolling();
	updateSliderControl();
};