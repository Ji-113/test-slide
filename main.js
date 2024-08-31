document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#card-carousel', {
		perPage    : 2,
	        cover      : true,
		heightRatio: 0.5,
	        width : '100vw',
		height: '100vh',
		breakpoints: {
			640: {
				perPage: 1,
			},
		},
  } ).mount();
} );
