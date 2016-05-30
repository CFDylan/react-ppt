require('base/theme/black.css');
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
var config = {
	controls: true, // Display controls in the bottom right corner
	progress: false, // Display a presentation progress bar
	history: false, // Push each slide change to the browser history
	center: true, // Vertical centering of slides
	width: 1200,
	height: 700,
	// Transition style
	transition: 'convex', // none/fade/slide/convex/concave/zoom
    // Display the page number of the current slide
    slideNumber: false,
    // Enable keyboard shortcuts for navigation
    keyboard: true,
    // Enable the slide overview mode
    overview: true,
    // Enables touch navigation on devices with touch input
    touch: true,
    // Loop the presentation
    loop: false,
    // Change the presentation direction to be RTL
    rtl: false,
    // Turns fragments on and off globally
    fragments: true,
    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,
    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,
    // Flags if speaker notes should be visible to all viewers
    showNotes: false,
    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,
    // Stop auto-sliding after user input
    autoSlideStoppable: true,
    // Enable slide navigation via mouse wheel
    mouseWheel: false,
    // Hides the address bar on mobile devices
    hideAddressBar: true,
    // Opens links in an iframe preview overlay
    previewLinks: false,
    // Transition speed
    transitionSpeed: 'default', // default/fast/slow
    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom
    // Number of slides away from the current that are visible
    viewDistance: 3,
    // Parallax background image
    parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"
    // Parallax background size
    parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"
    // Number of pixels to move the parallax background per slide
    // - Calculated automatically unless specified
    // - Set to 0 to disable movement along an axis
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null
};

module.exports = config;
