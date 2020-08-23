"use strict";

// NOW I CLICK album-poster TO GET CURRENT SONG ID
var currentDataSwitch = -1;
var play = document.querySelector(".play");
var pause = document.querySelector(".pause");
$(".album-poster").on("click", function (e) {
  var dataSwitchId = $(this).attr("data-switch"); //console.log(dataSwitchId);
  // and now i use aplayer switch function see

  if (currentDataSwitch != dataSwitchId) {
    //remove old pause and play
    currentDataSwitch = dataSwitchId;
    $(document).ready(function () {
      $(".pause").remove();
      $(".play").remove();
    });
    $(document).ready(function () {
      $(".app" + dataSwitchId).append(' <div class="pause "></div> <div class="play active"></div>');
    }); //this is static id but i use dynamic
    //create pause

    ap.list["switch"](dataSwitchId);
    $(document).ready(function () {
      $(".pause").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div>");
      $(".play").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div> <div class=\"line line_3\"></div>");
    }); // pause.classList.remove("active");
    // play.classList.add("active");
    // ap.play();
  } else {
    //change play
    if (play.classList.contains('active')) {
      play.classList.remove('active');
      pause.classList.add('active'); //add active for pause

      ap.pause();
    } else {
      pause.classList.remove('active');
      play.classList.add('active');
      ap.play();
    }
  } //remove play line
  //add pause line
  // aplayer play function
  // when i click any song to play
  //should have condition for turn on play and pause
  // click to slideUp player see


  ap.play();
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
});
var dataSwitchId = $(void 0).attr("data-switch");

if (currentDataSwitch != dataSwitchId) {
  autoSwitchPlay();
}

function autoSwitchPlay() {
  currentDataSwitch = dataSwitchId;
  $(document).ready(function () {
    $(".pause").remove();
    $(".play").remove();
  });
  $(document).ready(function () {
    $(".app" + dataSwitchId).append(' <div class="pause "></div> <div class="play active"></div>');
  }); //this is static id but i use dynamic
  //create pause

  ap.list["switch"](dataSwitchId);
  $(document).ready(function () {
    $(".pause").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div>");
    $(".play").append("<div class=\"line line_1\"></div> <div class=\"line line_2\"></div> <div class=\"line line_3\"></div>");
  });
}