$(document).ready(function(){
   

mouseevent();
});
function mouseevent(){
	var sideli=$("#sidebar> ul >li");
	var showli=$("#show>ul>li");
	var listarray=['htmllist','csslist','jslist','nodelist','sharelist','essaylist'];

	var color=["#569597","#DA9558","#2B5E7D","#D54B44","#008E59","#A71368","#4E1892"];
//--------------------------------sidebar mouseevent------------------------------------------

	$(sideli).hover(
  function () {
  	$(sideli).css('color','rgba(103, 104, 99, 0.9)');
  	$('#sidebar').css('border-right','');
    $(this).css('color',color[$(this).index()]).click(function(){
	$(this).css('color',color[$(this).index()]);
	$("."+$(this).attr("id")).css('display','');
	$("."+$(this).attr("id")+">.time").css({'color':color[$(this).index()]});
	$('#share').css({'border-bottom':"1px solid"+color[$(this).index()]});
	$(showli).not($("."+$(this).attr("id"))).css('display','none');
	$('.sk-double-bounce1, .sk-double-bounce2').css('background-color',color[$(this).index()]);
    $('#sidebar').css('border-right',"0px dashed"+color[$(this).index()]);
});
    
  },
  function () {
  	if($('#sidebar').css('border-right').slice(4,8)=="none"){
  		$(this).css('color','rgba(103, 104, 99, 0.9)');
    	$('#sidebar').css('border-right','');
  	}else{
    
    }
  }
);
//--------------------------------show mouseevent------------------------------------------
	$(showli).hover(
		function(){
			var i=$.trim($(this).attr("class").slice(8));
			j=$(this).children('.time').css('color');
			
			$(this).children('.time').css('color',color[$.inArray( i, listarray )+1]);
			$(this).children('.showinfo').children('h1').css('color',color[$.inArray( i, listarray )+1]);
		},
		function(){
		
			

			
			$(this).children('.time').css('color',''+j);
			$(this).children('.showinfo').children('h1').css('color','');

		}
		);
//-------------------------------------------mousescroll event--------------------------------
// 	$(window).on('scroll',function(){
		

// 		if ($('#show').height()<$(window).height()||$(window).scrollTop()*2>=$('#show').offset().top ){
// 			$("#sidebar").show();
// 		}else{
// 			$("#sidebar").hide();

// 		}
// 	})
// // ------------------------------------------upbar-------------------------------
$('#upbar').click(function(){
	$("html,body").animate({scrollTop:0},200);
});
}