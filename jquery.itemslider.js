(function($){

  $.fn.itemslider = function(options){
  
  $.fn.itemslider.defaults = {
    items_limit: 8,
    fade_time: 300
  };
  options = $.extend({}, $.fn.itemslider.defaults, options);
  
  var item_container = $(this);
  var item_container_id = $(this).attr('id'); 
  var items_limit    = options.items_limit;
  var fade_time      = options.fade_time; 
  
  var items_num = item_container.find(".Item").size();
  var items_over_num = items_num - items_limit;
   
  if (items_over_num>0) {
  
    $('#'+item_container_id+' .right').show();
    for (over_cnt=(items_over_num-1); over_cnt>=0; over_cnt--) {
      $(this).find(".Item").eq(items_num-over_cnt-1).hide();
      $(this).find(".Item").eq(items_num-over_cnt-1).attr("show", "false");
    }
                                                                     
  }else {
    $('#'+item_container_id+' .right').hide();
  }
   
  
   
   var index = 0; 
   $('#'+item_container_id+' .right').click(function () {
   
     if (index<=items_over_num-1) {
       index++;
       $(item_container).find("div[class='Item'][show='true']").eq(0).hide();
       $(item_container).find("div[class='Item'][show='true']").eq(0).attr("show", "false");
     
       $(item_container).find("div[class='Item'][show='false']").eq(index).fadeIn(fade_time);
       $(item_container).find("div[class='Item'][show='false']").eq(index).attr("show", "true");
       
       $('#'+item_container_id+' .left').css("visibility", "visible");
       if (index==items_over_num) {$(this).hide();}
     }
   });
   
   $('#'+item_container_id+' .left').click(function () {
   
     if (index>0) {
       index--;
       $(item_container).find(".Item[show='true']").last().hide();
       $(item_container).find(".Item[show='true']").last().attr("show", "false");
     
       $(item_container).find(".Item[show='false']").eq(index).fadeIn(fade_time);
       $(item_container).find(".Item[show='false']").eq(index).attr("show", "true");
     
       $('#'+item_container_id+' .right').show();
       if (index==0) {$(this).css("visibility", "hidden");}
     }
   });
   
   };

})(jQuery);