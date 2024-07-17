$(function() {
 $('.type-it').typeIt({
   speed: 120,
   deleteSpeed: 80,
   lifeLike: false,
   autoStart: false,
   loop: true,
   loopDelay: 750,
   breakLines: true,
   breakDelay: 750
 })
  .tiType(' &#10047;Fresher &#10047; ')
  .tiSettings({speed: 140})
  .tiDelete(18)
  .tiType(' &#10047; Final Year Computer Science Engineering Student at Adhiparasakthi Engineering College -melmaruvathur  &#10047;');
 
});
