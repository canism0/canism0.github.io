function iePNGtoGIF(){
	if($.browser.msie){
		var v = $.browser.version;
		if(v.indexOf('6') == 0){
			$('.slide img').each( function(){
				
				var s = new String($(this).attr('src'));
				s = s.replace("png", "gif");
				$(this).attr('src', s);
			});			
		}
	}
}

$(document).ready( function(){ iePNGtoGIF(); });