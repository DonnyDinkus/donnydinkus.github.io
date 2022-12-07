

// modal

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// filtering

var getFilter = function (category) {
  var filter = $("#filters ." + category + ":checked").map(function () {
      return '[data-filter*="' + this.value + '"]';
  }).get().join(",");
  filter = (filter.length > 0) ? filter : "*";
  return filter;
}

$("#filters :checkbox").click(function () {
  var all = $(".filterme");
  var tgts = all.filter(getFilter("project-type")).filter(getFilter("year"));
  all.not(tgts).hide();
  tgts.show();
});

// animated favicon

function iconChange() {
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame0.png";}, 333);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame1.png";}, 667);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame2.png";}, 1000);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame3.png";}, 1333);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame4.png";}, 1667);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame5.png";}, 2000);  
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame6.png";}, 2333);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame7.png";}, 2667);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame8.png";}, 3000);  
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame9.png";}, 3333);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame10.png";}, 3667);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame11.png";}, 4000);
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame11.png";}, 4333);  
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame11.png";}, 4667);  
  setTimeout(function(){ document.getElementById("icon").href = "./images/frame11.png";}, 5000);     
  }

  // lightswitch

const audio = new Audio("./images/light.wav");
const button = document.getElementById('button');

  button.addEventListener("click", () => {
    audio.play();
  });

function lights() {
  $( "body" ).toggleClass( "lights" );
  $( "header" ).toggleClass( "lights" );
  $( "a" ).toggleClass( "night-link" );
  $( ".green" ).toggleClass( "night-line" );
  $( ".orange" ).toggleClass( "night-line" );
  $( ".logo" ).toggleClass( "header-lights" );
  $( ".lightbulb" ).toggleClass( "night-bulb" );
  $( ".logo-type" ).toggleClass( "night-logo" );
}

  // Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


// bolding of selected labels, calling favicon

window.onload = function() {
  var checkBox = document.querySelectorAll("input");
  var label = document.querySelectorAll(".selectit");

var label = [...label]

label.forEach((el) => {
el.addEventListener("click", () => {
  if(el.firstElementChild.nodeName === "INPUT"){
  if (el.firstElementChild.checked === true) {
      el.style.fontWeight = "bold"
    } else {
      el.style.fontWeight = "300";
    }
}
})

  });
  setInterval(function() {
    iconChange();
    }, 5000);

}
