"use strict";

// NOW I CLICK album-poster TO GET CURRENT SONG ID
var currentDataSwitch = -1; // var play1 = document.querySelector(".play");

var play = $('div.play').hasClass("active"); // var pause1 = document.querySelector(".pause");

var pause = $('div.pause').hasClass("active");
$(".album-poster").on("click", function (e) {
  var dataSwitchId = $(this).attr("data-switch"); //console.log(dataSwitchId);
  // and now i use aplayer switch function see

  if (currentDataSwitch != dataSwitchId) {
    //remove old pause and play
    currentDataSwitch = dataSwitchId;
    $(document).ready(function () {
      $(".pause").remove();
      $(".play").remove();
      $(".app" + dataSwitchId).append(' <div class="pause"></div> <div class="play active"></div>');
      $(".pause").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div>");
      $(".play").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div> <div class=\"line line_3\"></div>");
    }); //this is static id but i use dynamic
    //create pause

    ap.list["switch"](dataSwitchId);
    ap.play();
  } else {
    //change play
    //if play has active
    if ($('div.pause').hasClass("active")) {
      //$(".play").attr('play active', 'play');
      $('.pause').removeClass("active"); //play.classList.add('active');

      $('.play').addClass("active");
      ap.play();
    } else if ($('div.play').hasClass("active")) {
      //pause.classList.remove('active');
      $('.play').removeClass('active'); //play.classList.remove('active');
      //pause.classList.add('active');

      $('.pause').addClass('active'); //add active for pause

      ap.pause();
    } //if pause is active

  }

  $("#aplayer").addClass("showPlayer");
});
var ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  audio: [{
    name: "Believer",
    artist: "Imagine Dragon",
    url: "./music/Believer.mp3",
    cover: "./img/01.jpg"
  }, {
    name: "Bet On Me",
    // SONG NAME
    artist: "Suboi",
    //ARTIST NAME
    url: "./music/BetOnMe.mp3",
    // PATH NAME AND SONG URL
    cover: "./img/02.jpg"
  }, {
    name: "N-Sao?",
    artist: "Suboi",
    url: "./music/N-SAO.mp3",
    cover: "./img/03.jpg"
  }, {
    name: "Thunder",
    artist: "Imagine Dragon",
    url: "./music/Thunder.mp3",
    cover: "./img/04.jpg"
  }, {
    name: "Cho khong",
    artist: "Suboi",
    url: "./music/CHO KHÔNG.mp3",
    cover: "./img/05.jpg"
  }, {
    name: "CÔNG",
    // SONG NAME
    artist: "Suboi",
    //ARTIST NAME
    url: "./music/CÔNG.mp3",
    // PATH NAME AND SONG URL
    cover: "./img/06.jpg"
  }, {
    name: "I'm so tired...",
    artist: "Lauv, Troye Sivan",
    url: "./music/I'm so tired....mp3",
    cover: "./img/07.jpg"
  }, {
    name: "God Damnit",
    artist: "Illenium",
    url: "./music/Goddamnit.mp3",
    cover: "./img/08.jpg"
  }]
}); // var dataSwitchId = $(this).attr("data-switch");
// if (currentDataSwitch != dataSwitchId) {
//   autoSwitchPlay();
// }
// function autoSwitchPlay() {
//   currentDataSwitch = dataSwitchId;
//   $(document).ready(function () {
//     $(".pause").remove();
//     $(".play").remove();
//   });
//   $(document).ready(function () {
//     $(".app" + dataSwitchId).append(' <div class="pause "></div> <div class="play active"></div>');
//   });
//   //this is static id but i use dynamic
//   //create pause
//   ap.list.switch(dataSwitchId);
//   $(document).ready(function () {
//     $(".pause").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div>");
//     $(".play").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div> <div class=\"line line_3\"></div>");
//   });
// }