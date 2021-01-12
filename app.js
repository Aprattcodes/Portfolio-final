//type animation
new Typed('#text-span', {
    strings: [':)','lyssa Hardwick', 'n artist','_gamer', '_developer', 'n animal lover', '_designer', '_self learner', '_creative' ],
    typeSpeed: 80,
    backSpeed: 40,
    cursorChar: '_',
    loop: true
});
//logo click animation
var gitLogo = document.getElementById('github');
var linkLogo = document.getElementById('linkedin');
var codeLogo = document.getElementById('codepen');
var twLogo = document.getElementById('twitter');

const logoClick =
logo.addEventListener('click', () => {
  var tl =
 anime.timeline({
   targets: '.logo-default',
   height: '5rem', 
   duration: 300
 });
  tl
  .add({
    targets: gitLogo,
    height: 40,
    translateX: -85 
    })
  .add({
    targets: linkLogo,
    height: 30,
    translateX: -80,
    translateY: 50
    })
  .add({
    targets: codeLogo,
    height: 25,
    translateX: -50,
    translateY: 70
    })
  .add({
    targets: twLogo,
    height: 23,
    translateX: -12,
    translateY: 75
    });

});

