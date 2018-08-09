import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dino } from './../src/dino-back.js';

$(function(){
  $(".dinoButton").click(function(){

    let dino = new Dino();
    let dinoPromise = dino.getDino();
      let gifPromise = dino.getGiphy();

    dino.getGiphy()  
    .then(function(response){
      var name = JSON.parse(response);
      return dino.getGiphy(name);

    })
    .then(function(response){
      var test = JSON.parse(response);
      $('.gif').append(`<img src ="${test.data[0].images.original.url}"/>`);
    });
  });
});
