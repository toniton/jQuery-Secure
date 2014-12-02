/**
*Author: Akinjiola Toni
*Nickname: Toniton
*Copyright: 2014 (c) jQuery Secure-Panel 
*
*****************CHEERS******************
**/

(function($){
	$.fn.secure = function(options){
		//Default colors and Hexadecimals
		var color = {
			"green":"#94A82A",
			"red":"#D11E00",
			"blue":"#502CA7",
			"purple":"#A53692",
			"pink":"#E71E62",
			"brown":"#DBA67C"
		};
        // Establish default settings
        var settings = $.extend({
            scramble     : false,
            count    	 : 4,
            theme		 : "green",
            radius 		 : "2px",
            width  		 : 200,
            height		 : 30
        }, options);



			//CSS styling
			var css = document.createElement("style");
			css.type = "text/css";
			css.innerHTML = "@font-face {font-family: 'MyLock';src:url('lock.svg') format('svg');}.secure-container{position:relative;"+
							"padding:0px;}.secure-input{background:#F7F7F7;border-radius:"+settings.radius+";border:1px solid lightgray;border-right-color: white;width:"+settings.width+"px;"+
							"height:"+settings.height+"px;padding:0px 5px;outline:none !important;pointer-events: none;text-align: center;float:left;}.secure-input[text]{display:none;}.secure-side{background:"+color.valueOf()[settings.theme]+";border:1px solid lightgray;border-left-color: white;width:"+settings.height+"px;height:"+settings.height+"px;text-align: center;float:left;}.secure-icon{width:20px;height:20px;margin-top:"+(settings.height/6)+"px;}.secure-ico{fill: white;}.secure-panel{width:"+(settings.width+settings.height+20)+"px;padding:5px 5px;text-align: center;display:none;position: absolute;left:0px;top:"+settings.height+"px;}.secure-table{background:#F7F7F7;width:200px;border-radius: 1px;border:0.5px solid lightgray;padding:20px;}.secure-table td{text-align: center;}.secure-table td button{border-radius: 3px;margin:5px 0px;}.secure-action-button{width:70px;height:30px;margin:0px 10px;}.secure-action-button.accept{background: #2E933D;border:0.5px solid lightgray;color: white;}.secure-action-button.clear{background: #D84A38;border:0.5px solid lightgray;color: white;}.secure-button{background:lightgray;text-align:center;min-width:40px;height:40px;}.secure-show-code{}.secure-show-code a{color:green;text-decoration: none;}";
			document.body.appendChild(css);



        var shuffle = function (o){ //v1.0
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		};



		var button = ['<button data-secure class="secure-button">0</button>',
						'<button data-secure class="secure-button">1</button>',
						'<button data-secure class="secure-button">2</button>',
						'<button data-secure class="secure-button">3</button>',
						'<button data-secure class="secure-button">4</button>',
						'<button data-secure class="secure-button">5</button>',
						'<button data-secure class="secure-button">6</button>',
						'<button data-secure class="secure-button">7</button>',
						'<button data-secure class="secure-button">8</button>',
						'<button data-secure class="secure-button">9</button>'];
		this.each(function(e,v) {
        var id = $(v).attr("id");
        console.log(v);
        var current = $(v).attr("id","secure"+id);
        console.log(current);
			
			// console.log(this);
			if(settings.scramble==true){
						buttons = shuffle(button);
			}

						var scrambled = ('<tr data-secure>'+
										'		<td data-secure>'+buttons[0]+'</td>'+
										'		<td data-secure>'+buttons[1]+'</td>'+
										'		<td data-secure>'+buttons[2]+'</td>'+
										'	</tr>'+
										'	<tr data-secure>'+
										'		<td data-secure>'+buttons[3]+'</td>'+
										'		<td data-secure>'+buttons[4]+'</td>'+
										'		<td data-secure>'+buttons[5]+'</td>'+
										'	</tr>'+
										'	<tr data-secure>'+
										'		<td data-secure>'+buttons[6]+'</td>'+
										'		<td data-secure>'+buttons[7]+'</td>'+
										'		<td data-secure>'+buttons[8]+'</td>'+
										'	</tr>'+
										'	<tr data-secure>'+
										'		<td data-secure><button data-secure class="secure-action-button clear">Clear</button></td>'+
										'		<td data-secure>'+buttons[9]+'</td>'+
										'		<td data-secure><button data-secure class="secure-action-button accept">Accept</button></td>'+
										'	</tr>');

						current.html('<input type="password" id="'+id+'" password class="secure-input"/><input text type="text" class="secure-input"/>'+
										'<div data-secure class="secure-side">'+
										'	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
										'		 width="28px" height="32px" data-secure class="secure-icon" viewBox="0 0 28 32" enable-background="new 0 0 28 32" xml:space="preserve">'+
										'	<g>'+
										'		<path fill="#828282" class="secure-ico" d="M14,0C8.486,0,4,4.486,4,10v3H2.5C1.122,13,0,14.122,0,15.5v14C0,30.878,1.122,32,2.5,32h23'+
										'			c1.378,0,2.5-1.122,2.5-2.5v-14c0-1.378-1.122-2.5-2.5-2.5H24v-3C24,4.486,19.514,0,14,0z M5,10c0-4.962,4.038-9,9-9s9,4.038,9,9v3'+
										'			h-3v-3c0-3.309-2.691-6-6-6s-6,2.691-6,6v3H5V10z M19,13H9v-3c0-2.757,2.243-5,5-5s5,2.243,5,5V13z M12.293,21l-5,5H2.707l5-5'+
										'			H12.293z M18.293,21l-5,5H8.707l5-5H18.293z M24.293,21l-5,5h-4.586l5-5H24.293z M27,21v5h-6.293l5-5H27z M1.293,26H1v-5h5.293'+
										'			L1.293,26z M25.5,31h-23C1.673,31,1,30.327,1,29.5V27h26v2.5C27,30.327,26.327,31,25.5,31z M27,15.5V20H1v-4.5'+
										'			C1,14.673,1.673,14,2.5,14h23C26.327,14,27,14.673,27,15.5z"/>'+
										'	</g>'+
										'	</svg>'+
										'</div><div class="secure-container">'+
							'<div data-secure class="secure-panel" z-index="99999">'+
							'<table data-secure class="secure-table">'+
							scrambled+
							'<tr><td><small class="secure-show-code"><a href="#" id="showcode">Show Code</a></small></td></tr>'+
							'</table>'+
						'</div></div>');
				current.find('.secure-input,.secure-side').click(function(){
				    $('.secure-panel').hide();
					current.find('.secure-panel').show();
				});
				$(document).click(function(event) {
				    if((!$(event.target).is('[data-secure]'))&&(!$(event.target).is('.secure-container'))) {
				        if($('.secure-panel').is(":visible")) {
				            current.find('.secure-panel').hide();
				        }
				    }        
				});

				current.find(".secure-button").click(function(e){
					var input = e.target.textContent;
					current.find('.secure-input').val(function(i,val){
						if((val.length)!=settings.count){
							return val + input
						}else{
							return val;
							// alert('Maximum PIN count reached!');						
						}
					});
				});

				current.find("#showcode").click(function(){
					if($("[text]").is(":visible")){
						current.find("[text]").hide();
						current.find("[password]").show();
						$(this).html("Show Code");
					}else{
						current.find("[text]").show();
						current.find("[password]").hide();
						$(this).html("Hide Code");
					}
					return false;
				});

				current.find(".clear").click(function(){
						current.find("[text]").val("");
						current.find("[password]").val("");
				});
				current.find(".accept").click(function(){
				        current.find('.secure-panel').hide();
				});
        });
	};
}(jQuery));