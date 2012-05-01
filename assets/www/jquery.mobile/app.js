$('#api-page').live('pageshow',function(event, ui){
    
    //REMEMBER TO CHANGE URL! 
    $.ajax({
        type: 'GET',
        url: 'http://10.21.24.117:8080/niths/api',
        contentType: 'application/json',
        cache: false,
        success:function(data){
        	for (var i = 0; i < data.length; i++){
        		var html = '';
//        		alert(data[i].path);
        		var path = data[i].path;
        		path = /.+:8080(.+)/.exec(path)[1];
        		html += '<div data-role="collapsible" data-mini="true" id="list'+i+'" data-theme="b" data-content-theme="d">'+
        				'<h3><strong>'+path+'</strong></h3>';
        		
        		for (var j = 0; j < data[i].methods.length; j++){
        			
        			html += '<h4>'+data[i].methods[j].path+'</h4>';
        			html += '<p>Method: '+data[i].methods[j].method+'<br />';
        			html += 'Headers: '+data[i].methods[j].headers+'<br />';
        			html += 'Code: '+data[i].methods[j].code+'<br />';
        			html += 'Message: '+data[i].methods[j].message+'<br />';
        			html += 'Authorization: '+data[i].methods[j].authorization+'</p>';

        			
        		}
        		
        		
        		html += '</div>';
        		$('#maincontent').append(html);
        		$('#list'+i).collapsible();
        		
        	}
//        	<div data-role="collapsible" data-theme="a" data-content-theme="a">
//        	   <h3>Header swatch A</h3>
//        	   <p>I'm the collapsible content with a themed content block set to "A".</p>
//        	</div>
        	
        	
           // alert(JSON.stringify(data));
        },
        error: function(jqXHR, status){
            alert('Ikke kontakt med server');
        },
        timeout:10000
      });
    
    
 });
