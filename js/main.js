$(document).ready(function(){
  $(".testimonial").owlCarousel({
  	items: 1,
  	loop: true,
  	dots: false,
  	margin: 30,
  	autoplay: true,
  });

  $('#map')
          .gmap3({
            center:[23.9535742,90.1494988],
            zoom:12,
            mapTypeId: "shadeOfGrey", // to select it directly
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
            },
            scrollwheel: false,
          })
          .styledmaptype(
            "shadeOfGrey",
            [
              {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#8C7246"},{"lightness":40}]},
              //{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#8C7246"},{"lightness":16}]},
              {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
              {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
              {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#FFFFFF"},{"lightness":17},{"weight":1.2}]},
              {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
              {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":21}]},
              {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#EDEDED"},{"lightness":17}]},
              {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#EDEDED"},{"lightness":29},{"weight":0.2}]},
              {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":18}]},
              {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":16}]},
              {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#EDEDED"},{"lightness":19}]},
              {"featureType":"water","elementType":"geometry","stylers":[{"color":"#C2D7D4"},{"lightness":17}]}
            ],
            {name: "Shades of Grey"}
          );

});