const moodMap = {
  happy: [
    { name: "Kala Chashma", link: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
    { name: "Kar Gayi Chull", link: "https://www.youtube.com/watch?v=NTHz9ephYTw" },
    { name: "London Thumakda", link: "https://www.youtube.com/watch?v=udra3Mfw2oo" }
  ],

  sad: [
    { name: "Channa Mereya", link: "https://www.youtube.com/watch?v=284Ov7ysmfA" },
    { name: "Agar Tum Saath Ho", link: "https://www.youtube.com/watch?v=sK7riqg2mr4" },
    { name: "Kabira", link: "https://www.youtube.com/watch?v=jHNNMj5bNQw" }
  ],

  gym: [
    { name: "Sultan", link: "https://www.youtube.com/watch?v=wPxqcq6Byq0" },
    { name: "Zinda", link: "https://www.youtube.com/watch?v=Ax0G_P2dSBw" },
    { name: "Kar Har Maidaan Fateh", link: "https://www.youtube.com/watch?v=5Wgq6Hn9C3Y" }
  ],

  chill: [
    { name: "Ilahi", link: "https://www.youtube.com/watch?v=fdubeMFwuGs" },
    { name: "Safarnama", link: "https://www.youtube.com/watch?v=8tM1jiyYdZs" },
    { name: "Iktara", link: "https://www.youtube.com/watch?v=fSS_R91Nimw" }
  ],

  romantic: [
    { name: "Tum Hi Ho", link: "https://www.youtube.com/watch?v=IJq0yyWug1k" },
    { name: "Raataan Lambiyan", link: "https://www.youtube.com/watch?v=gvyUuxdRdR4" },
    { name: "Janam Janam", link: "https://www.youtube.com/watch?v=-cPc4F7uZQg" }
  ],

  party: [
    { name: "Nashe Si Chadh Gayi", link: "https://www.youtube.com/watch?v=Wd2B8OAotUo" },
    { name: "Ghungroo", link: "https://www.youtube.com/watch?v=qFkNATtc3mc" },
    { name: "Bom Diggy Diggy", link: "https://www.youtube.com/watch?v=7wtfhZwyrcc" }
  ],

  study: [
    { name: "Lofi Beats", link: "https://www.youtube.com/watch?v=5qap5aO4i9A" },
    { name: "Deep Focus", link: "https://www.youtube.com/watch?v=DWcJFNfaw9c" },
    { name: "Calm Piano", link: "https://www.youtube.com/watch?v=1ZYbU82GVz4" }
  ],

  travel: [
    { name: "Phir Se Ud Chala", link: "https://www.youtube.com/watch?v=8M5mYx3X4yA" },
    { name: "Safarnama", link: "https://www.youtube.com/watch?v=8tM1jiyYdZs" },
    { name: "Ilahi", link: "https://www.youtube.com/watch?v=fdubeMFwuGs" }
  ],

  breakup: [
    { name: "Tadap Tadap", link: "https://www.youtube.com/watch?v=8bM2sY0xK3g" },
    { name: "Phir Bhi Tumko Chahunga", link: "https://www.youtube.com/watch?v=_iktURk0X-A" },
    { name: "Channa Mereya", link: "https://www.youtube.com/watch?v=284Ov7ysmfA" }
  ],

  devotional: [
    { name: "Hanuman Chalisa", link: "https://www.youtube.com/watch?v=AETFvQonfV8" },
    { name: "Shiv Tandav", link: "https://www.youtube.com/watch?v=O9x1d4z0i0k" },
    { name: "Gayatri Mantra", link: "https://www.youtube.com/watch?v=Rr6Z4xVZc8E" }
  ],
  bhojpuri: [
    {
    name: "Lollipop Lagelu",
    link: "https://www.youtube.com/watch?v=Gr8G_ldltDE" },
    {
    name: "Rinkiya Ke Papa",
    link: "https://www.youtube.com/watch?v=1jF9Zz0sGkQ" },
    {
    name: "Kamariya Kare Lapalap",
    link: "https://www.youtube.com/watch?v=JY3r8WlJXJQ" },
  ] 
};


function getRandomSongs(songArray) {
  let shuffled = songArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

const button = document.getElementById("btn");

button.addEventListener("click", function() {
  const mood = document.getElementById("moodInput").value.toLowerCase().trim();
  const output = document.getElementById("output");

  if (moodMap[mood]) {
    const songs = getRandomSongs(moodMap[mood]);

    let songList = songs.map(song => {
      return `<li>
        <a href="${song.link}" target="_blank">
          🎵 ${song.name}
        </a>
      </li>`;
    });

    output.innerHTML =
      "<h3 style='color:#1db954'>🎵 Your Playlist</h3>" +
      "<ul>" + songList.join("") + "</ul>";

  } else {
    output.innerHTML =
      "<p style='color:red;'>❌ Mood not recognized</p>";
  }
});