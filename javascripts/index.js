jQuery(document).ready(function($){
	var contentSections = $('.content'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		navstart();
		updateNavigation();
		
		chart();

	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	550
        );
	}
	// nav导航
	function navstart(){
	
		if ($(window).scrollTop()>=$('#about').offset().top) {
			$('#cd-vertical-nav').css('display','block');
		}else{
			$('#cd-vertical-nav').css('display','none');
		}
	}
	// 统计图
	function chart(){
	
		if ($(window).scrollTop()>=$('#profession').offset().top-250&&$('.flex-item').width()==0) {
			$('#html').circliful(); 
	$('#css').circliful(); 
	$('#javascript').circliful(); 
	$('#nodejs').circliful(); 
	$('#anthor').circliful();
	
		};
	}
	//abiout 
	$('#abouttitle').hover(
  function () {
    $(this).css({'background-color' : 'rgba(0,0,0,0.5)','font-weight' : 'bolder' });
  },
  function () {
    $(this).css({'background-color' : 'rgba(0,0,0,0.3)','font-weight' : 'normal' });
  }
);
$('#aboutcontent').hover(
  function () {
    $(this).css({'background-color' : 'rgba(0,0,0,0.1)','font-weight' : 'bolder' });
  },
  function () {
    $(this).css({'background-color' : 'rgba(0,0,0,0.3)','font-weight' : 'normal' });
  }
);
//project
$('#projectimg1').hover(
  function () {
    $('#project1info').css({'display': 'block' });
    
  },
  function () {
    $('#project1info').css({'display': 'none' });
    
  }
);
$('#projectimg2').hover(
  function () {
    $('#project2info').css({'display': 'block' });
    
  },
  function () {
    $('#project2info').css({'display': 'none' });
    
  }
);
$('#weixin').hover(
  function () {
    $('#weixinimg').css({'display': 'block' });
    
  },
  function () {
    $('#weixinimg').css({'display': 'none' });
    
  }
);
});
var PicTotal = 4;// 当前图片总数
var CurrentIndex;// 当前鼠标点击图片索引
var ToDisplayPicNumber = 0;// 自动播放时的图片索引
$("#slide-list li").click(DisplayPic);

function DisplayPic() {
// 测试是父亲的第几个儿子
CurrentIndex = $(this).index();
// 删除所有同级兄弟的类属性
$(this).parent().children().removeClass("current-slide");
// 为当前元素添加类
$(this).addClass("current-slide");
// 隐藏全部图片
var Pic = $('.overlay').children("img");
$(Pic).hide();
// 显示指定图片
$(Pic).eq(CurrentIndex).show();
}
function PicNumClick() {
$("#slide-list li").eq(ToDisplayPicNumber).trigger("click");
ToDisplayPicNumber = (ToDisplayPicNumber + 1) % PicTotal;
setTimeout("PicNumClick()",6000);
}
setTimeout("PicNumClick()",6000);
$('#prevslide').click(function(){
	$("#slide-list li").eq(ToDisplayPicNumber).trigger("click");
ToDisplayPicNumber = (ToDisplayPicNumber -1) % PicTotal;
});
$('#nextslide').click(function(){
	$("#slide-list li").eq(ToDisplayPicNumber).trigger("click");
ToDisplayPicNumber = (ToDisplayPicNumber +1) % PicTotal;
});