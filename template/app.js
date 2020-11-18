var logo1 = document.getElementById('github');

dynamics.animate(document.getElementById('github'), {
  translateX: 350,
  scale: 2,
  opacity: 0.5
}, {
  type: dynamics.spring,
  frequency: 200,
  friction: 200,
  duration: 1500
});
