        function TweetUpdate(){
        var html = '<ul class="tweet_list">';
        var tweeturl = "http://nullpointers.com/twitter.json.php?q=Texas Rangers";
        console.log( "start" );
        $.getJSON(tweeturl, function(d) {
            console.log (d);
            $.each(d.statuses, function(i, tweet) {
                console.log (tweet);
                if(tweet.text !== undefined) {
                    // Calculate how many hours ago was the tweet posted
                    html += '<li>';
        
                    html    += ' <a href="http://twitter.com/' + tweet.user.screen_name + '"> ' + tweet.user.screen_name + '</a> - ';
                    html    += tweet.text + '</li>';    
                }
					
            });

            html += "</ul>";
            $('#twitter_feed').append(html);
        })
    }

 $( document ).on( "pageinit","#twitter", function( event) {
     TweetUpdate();
    });

 $(function() {
            // Bind the swipeleftHandler callback function to the swipe event on div.box
            $( "#twitter_feed" ).on( 'swipeleft', swipeleftHandler );
 
            // Callback function references the event target and adds the 'swipe' class to it
            function swipeleftHandler( event ) {
                    $(event.target).css( "background-color","red" );
                }
      });