(function($){
    $.tabControler = function(settings){
        var config = {
            'tabs': 'bar',
			
        };
		
		
		
        if (settings){$.extend(config, settings);}
 
		
		function init(){
			
			
		}
		
		var idAtivo = -1;
		var tabs = config['tabs'];
		var 	grupos = config['groups'];
		var	effect = config['effect'];
		var	timer = config['timer'];
			
			$(tabs).children().each(function(index, element) {
                
				$(this).click(function(){ 
					if(idAtivo != index){
						idAtivo = index;
						tabcontrolChange(index); 
					};
				});
            });
			$(grupos).children().each(function(index, element) {
				$(this).hide();
            });
			
			activeTab(0);
		
		function removeActive(id){
			
			$(tabs).children().each(function(index, element) {
				$(this).removeClass('active');
            });
			$(grupos).children().each(function(index, element) {
					$(this).fadeOut(timer);
            });
			
			setTimeout(function(){
				activeTab(id); 
			},timer*2);
			
		}
		
		function tabcontrolChange(id){
			if(chaveClick){
				chaveClick = false;
				removeActive(id);
				
			};
		}
		
		function activeTab(id){
			
			$(tabs).children().each(function(index, element) {
				   // console.log('tabs:',index);
				   if(index == id){
					   $(this).addClass('active');
				   }
					
				});
				$(grupos).children().each(function(index, element) {
					if(index == id){
						
						//$(this).show();
					   $(this).fadeIn(timer,function(){
						   chaveClick = true;
						   });
				   }
				});
			
		}
		
		
		
 
        return this;
    };
})(jQuery);