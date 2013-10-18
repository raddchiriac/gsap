// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "_/js/lib",
    "paths": {
      "front": "../front",
      'gsap' : "http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min",
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

// Load the main app module to start the app
requirejs(["front/main"]);
