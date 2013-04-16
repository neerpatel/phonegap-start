       function TweetUpdate(){
        var html = '<ul class="tweet_list">';
        var tweeturl = "http://nullpointers.com/twitter.json.php?q=MultiValue";
        $.getJSON(tweeturl, function(d) {
            $.each(d.statuses, function(i, tweet) {
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
            $( "div.box" ).on( 'swipeleft', swipeleftHandler );
 
            // Callback function references the event target and adds the 'swipe' class to it
            function swipeleftHandler( event ) {
                    $(event.target).addClass( "swipeleft" );
                }
      });


$(document ).on("pageinit","#gps-map", function(event) {
                var mapdata = { destination: new google.maps.LatLng(32.7509, -97.3287) };
                 if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position) {
                           
                                var mapdata = { destination: new google.maps.LatLng(position.coords.latitude, position.coords.longitude) };
                                $('#map_square').gmap(
                    { 'center' : mapdata.destination, 
                      'zoom' : 12, 
                      'mapTypeControl' : false, 
                      'navigationControl' : false,
                      'streetViewControl' : false 
                    })
                    .bind('init', function(evt, map) { 
                        $('#map_square').gmap('addMarker', 
                            { 'position': map.getCenter(), 
                              'animation' : google.maps.Animation.DROP
             });                                                                                                                                                                                                               
                    });
                        });
                    } else {
                        //error('not supported');
                        var mapdata = { destination: new google.maps.LatLng(32.7509, -97.3287) };
                        $('#map_square').gmap(
                    { 'center' : mapdata.destination, 
                      'zoom' : 12, 
                      'mapTypeControl' : false, 
                      'navigationControl' : false,
                      'streetViewControl' : false 
                    })
                    .bind('init', function(evt, map) { 
                        $('#map_square').gmap('addMarker', 
                            { 'position': map.getCenter(), 
                              'animation' : google.maps.Animation.DROP
             });                                                                                                                                                                                                               
                    });
                    }
                
                $('#map_square').click( function() { 
                    $.mobile.changePage($('#gps-map'), {});
                });              

            });
