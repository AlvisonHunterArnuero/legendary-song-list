import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Cherry Lips (Go Baby Go)",
      album: "Beautiful Garbage",
      artist: "Garbage",
      duration: "3:14",
      rating: "★★★★☆",
      audio: "../mp3/Cherry_Lips.mp3",
      url: "https://i.ibb.co/9VKc4df/1.jpg",
    },
    {
      title: "Ordinary World",
      album: "Beautiful Garbage",
      artist: "Duran Duran",
      duration: "4:42",
      rating: "★☆☆☆☆",
      audio: "../mp3/Ordinary_World.mp3",
      url: "https://i.ibb.co/y8tJkj3/2.jpg",
    },
    {
      title: "Wonderwall",
      album: "(What's the Story) Morning Glory?",
      artist: "Oasis",
      duration: "4:17",
      rating: "★★☆☆☆",
      audio: "../mp3/Wonderwall.mp3",
      url: "https://i.ibb.co/8bNRPFs/3.jpg",
    },
    {
      title: "Drive",
      album: "Make Yourself",
      artist: "Incubus",
      duration: "3:52",
      rating: "★★★☆☆",
      audio: "../mp3/Drive.mp3",
      url: "https://i.ibb.co/3mqx8yM/4.jpg",
    },
    {
      title: "High and Dry",
      album: "The Bends",
      artist: "Radiohead",
      duration: "4:17",
      rating: "★☆☆☆☆",
      audio: "../mp3/High_And_Dry.mp3",
      url: "https://i.ibb.co/f18PNBJ/5.jpg",
    },

    {
      title: "Asche Zu Asche",
      album: "Herzeleid",
      artist: "Rammstein",
      duration: "3:51",
      rating: "★★★★☆",
      audio: "../mp3/Asche_Zu_Asche.mp3",
      url: "https://i.ibb.co/2FCL37H/herzeleid.jpg",
    },

    {
      title: "Road Trippin",
      album: "Californication",
      artist: "Red Hot Chili Peppers",
      duration: "3:23",
      rating: "★★★★☆",
      audio: "../mp3/Road_Trippin.MP3",
      url: "https://i.ibb.co/gM9cfx1/15.jpg",
    },

    {
      title: "Bullet With Butterfly Wings",
      album: "Mellon Collie and the Infinite Sadness ",
      artist: "The Smashing Pumpkins",
      duration: "4:17",
      rating: "★★★★☆",
      audio: "../mp3/Bullet_With_Butterfly_Wings.mp3",
      url: "https://i.ibb.co/xLkxmx9/6.jpg",
    },
    {
      title: "Chop Suey!",
      album: "Toxicity",
      artist: "System of a Down",
      duration: "3:30",
      rating: "★★★☆☆",
      audio: "../mp3/Chop_Suey.mp3",
      url: "https://i.ibb.co/Jd7KJck/7.jpg",
    },
    {
      title: "Blurry",
      album: "Come Clean",
      artist: "Puddle of Mudd",
      duration: "5:02",
      rating: "★★☆☆☆",
      audio: "../mp3/Blurry.MP3",
      url: "https://i.ibb.co/BNxM4Cf/8.jpg",
    },
    {
      title: "By the Way",
      album: "By The Way",
      artist: "Red Hot Chili Peppers",
      duration: "3:37",
      rating: "★★★★☆",
      audio: "../mp3/By_The_Way.mp3",
      url: "https://i.ibb.co/6XhR5j2/by-the-way.jpg",
    },

    {
      title: "Brass Monkey",
      album: "Licensed to Ill",
      artist: "Beastie Boys",
      duration: "2:37",
      rating: "★★★★★",
      audio: "../mp3/Brass_Monkey.MP3",
      url: "https://i.ibb.co/mX3ssDv/licensed-to-ill.jpg",
    },

    {
      title: "I think I am paranoid",
      album: "Version 2.0",
      artist: "Garbage",
      duration: "3:38",
      rating: "★★★★☆",
      audio: "../mp3/Paranoid.mp3",
      url: "https://i.ibb.co/72x3jQ3/version2-garbage.jpg",
    },

    {
      title: "Que Onda Guero?",
      album: "Mellow Gold",
      artist: "Beck",
      duration: "3:29",
      rating: "★☆☆☆☆",
      audio: "../mp3/Que_Onda_Guero.mp3",
      url: "https://i.ibb.co/1QJJ2Dt/9.jpg",
    },

    {
      title: "Under The Bridge",
      album: "Blood Sugar Sex Magik",
      artist: "Red Hot Chili Peppers",
      duration: "4:23",
      rating: "★★★★★",
      audio: "../mp3/Under_The_Bridge.mp3",
      url: "https://i.ibb.co/LPjnvnS/blood-sugar-sex.jpg",
    },

    {
      title: "Animal Instinct",
      album: "Bury the Hatchet",
      artist: "The Cranberries",
      duration: "3:31",
      rating: "★☆☆☆☆",
      audio: "../mp3/Animal_Instinct.mp3",
      url: "https://i.ibb.co/C1VtbMm/10.jpg",
    },
    {
      title: "Don't Speak",
      album: "Tragic Kingdom",
      artist: "No Doubt",
      duration: "4:21",
      rating: "★★☆☆☆",
      audio: "../mp3/Dont_Speak.mp3",
      url: "https://i.ibb.co/nBqGGyy/11.jpg",
    },

    {
      title: "Wicked Game",
      album: "Greatest Lovesongs Vol. 666",
      artist: "HIM",
      duration: "3:54",
      rating: "★★★★☆",
      audio: "../mp3/Wicked_Game.mp3",
      url: "https://i.ibb.co/YjzVjMN/greatest-love-songs.jpg",
    },

    {
      title: "Black Hole Sun",
      album: "Superunknown",
      artist: "Soundgarden",
      duration: "5:17",
      rating: "★★☆☆☆",
      audio: "../mp3/Black_Hole_Sun.mp3",
      url: "https://i.ibb.co/yFGdn03/12.jpg",
    },

    {
      title: "Pretty Fly (For a White Guy)",
      album: "Americana",
      artist: "The Offspring",
      duration: "3:08",
      rating: "★★★☆☆",
      audio: "../mp3/Pretty_Fly.mp3",
      url: "https://i.ibb.co/3Bgq7Nv/13.jpg",
    },
    {
      title: "Smells Like Teen Spirit",
      album: "Nevermind",
      artist: "Nirvana",
      duration: "5:01",
      rating: "★★★★☆",
      audio: "../mp3/Smells_Like_Teen_Spirit.mp3",
      url: "https://i.ibb.co/2vknTs1/14.jpg",
    },
    {
      title: "Scar Tissue",
      album: "Californication",
      artist: "Red Hot Chili Peppers",
      duration: "3:37",
      rating: "★★★★☆",
      audio: "../mp3/Scar_Tissue.mp3",
      url: "https://i.ibb.co/gM9cfx1/15.jpg",
    },

    {
      title: "My friends",
      album: "One Hot Minute",
      artist: "Red Hot Chili Peppers",
      duration: "4:02",
      rating: "★★★★☆",
      audio: "../mp3/my_friends.mp3",
      url: "https://i.ibb.co/NYBmJJX/one-hot-minute.jpg",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
