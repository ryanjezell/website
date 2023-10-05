// Youtube video ID list for each hour of the day
const videoIds = [
    "3p8jLMz0lu8", // 12am-1am, Taverns
    "bQXbsVQotFc", // 1am-2am, Arathi/STV
    "jpb1nH2q_0k", // 2am-3am, Duskwood
    "oSF4keDUM5E", // 3am-4am, Tirisfal
    "HKnBT3sWUjg", // 4am-5am, Ghostlands
    "YfMn7UfZzGc", // 5am-6am, Dun Morogh
    "ragRR5r7k9w", // 6am-7am, Durotar
    "MW4fASDkQXA", // 7am-8am, Elwynn
    "VRE1WjivRaU", // 8am-9am, Mulgore
    "pWTSK5waNs8", // 9am-10am, Grizzly Hills
    "50EOOzhovjg", // 10am-11am, Valley of the Four Winds
    "K3hjVijzrtM", // 11am-12pm, Boralus
    "YONdeDeSgrQ", // 12pm-1pm, Barrens
    "FU_yNE2MMOU", // 1pm-2pm, Eversong Woods
    "L_QA-ZUAOHk", // 2pm-3pm, Orgrimmar
    "roMWEeV2P4U", // 3pm-4pm, Stormwind
    "9OnXtA31mM0", // 4-5pm, Dragonflight
    "HrvA2eAHcJ4", // 5pm-6pm, Horde Taverns
    "BV7mKCgKhZY", // 6pm-7pm, Dalaran (Northrend)
    "4IrA6af0SJs", // 7pm-8pm, Nagrand
    "ACgoXvkhlPE", // 8pm-9pm, Suramar
    "xTPn_Nk_KrM", // 9pm-10pm, Ashenvale
    "a2FUqpDdvH8", // 10pm-11pm, Darkmoon Faire
    "4KFZe4iUgdg" // 11pm-12am, Drustvar
];

// Get the current hour of the day
const currentHour = new Date().getHours();

// Get the video ID for the current hour
const videoId = videoIds[currentHour];

// Set the video player's source to the YouTube video with the current video ID
document.getElementById("player").src = `https://www.youtube.com/embed/${videoId}`;
 
/*
function updateVideo() {
    const now = new Date();
    const hour = now.getHours();
    const videoId = videoIds[hour];
    document.getElementById("player").src = `https://www.youtube.com/embed/${videoId}`;
} */