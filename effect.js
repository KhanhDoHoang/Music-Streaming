// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".album-poster").on("click", function (e) {
  var dataSwitchId = $(this).attr("data-switch");
  //console.log(dataSwitchId);

  // and now i use aplayer switch function see
  ap.list.switch(dataSwitchId); //this is static id but i use dynamic

  // aplayer play function
  // when i click any song to play
  ap.play();

  // click to slideUp player see
  $("#aplayer").addClass("showPlayer");
});

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  audio: [
    {
      name: "Believer",
      artist: "Imagine Dragon",
      url: "./music/Believer.mp3",
      cover: "./img/01.jpg",
    },
    {
      name: "Bet On Me", // SONG NAME
      artist: "Suboi", //ARTIST NAME
      url: "./music/BetOnMe.mp3", // PATH NAME AND SONG URL
      cover: "./img/02.jpg",
    },
    {
      name: "N-Sao?",
      artist: "Suboi",
      url: "./music/N-SAO.mp3",
      cover: "./img/03.jpg",
    },
    {
      name: "Thunder",
      artist: "Imagine Dragon",
      url: "./music/Thunder.mp3",
      cover: "./img/04.jpg",
    },
    {
      name: "Cho khong",
      artist: "Suboi",
      url: "./music/CHO KHÔNG.mp3",
      cover: "./img/05.jpg",
    },
    {
      name: "CÔNG", // SONG NAME
      artist: "Suboi", //ARTIST NAME
      url: "./music/CÔNG.mp3", // PATH NAME AND SONG URL
      cover: "./img/06.jpg",
    },
    {
      name: "I'm so tired...",
      artist: "Lauv, Troye Sivan",
      url: "./music/I'm so tired....mp3",
      cover: "./img/07.jpg",
    },
    {
      name: "God Damnit",
      artist: "Illenium",
      url: "./music/Goddamnit.mp3",
      cover: "./img/08.jpg",
    },
  ],
});
