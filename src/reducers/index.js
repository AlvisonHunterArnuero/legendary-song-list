import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Cherry Lips (Go Baby Go)",
      album: "Beautiful Garbage",
      artist: "Garbage",
      duration: "3:45",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Garbage/Garbage%20'Cherry%20Lips%20(Go%20Baby%20Go)'.mp3",
      url:
        "https://i.ibb.co/9VKc4df/1.jpg"
    },
    {
      title: "Ordinary World",
      album: "Beautiful Garbage",
      artist: "Duran Duran",
      duration: "4:42",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Duran%20Duran/Duran%20Duran%20'Ordinary%20World'.mp3",
      url:
        "https://i.ibb.co/y8tJkj3/2.jpg"
    },
    {
      title: "Wonderwall",
      album: "(What's the Story) Morning Glory?",
      artist: "Oasis",
      duration: "4:17",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Oasis/Oasis%20'Wonderwall'.mp3",
      url:
        "https://i.ibb.co/8bNRPFs/3.jpg"
    },
    {
      title: "Drive",
      album: "Make Yourself",
      artist: "Incubus",
      duration: "3:52",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Incubus/Incubus%20-%20Drive%20(1).mp3",
      url:
        "https://i.ibb.co/3mqx8yM/4.jpg"
    },
    {
      title: "High and Dry",
      album: "The Bends",
      artist: "Radiohead",
      duration: "4:17",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/(6)%20Radiohead%20-%20High%20And%20Dry.mp3",
      url:
        "https://i.ibb.co/f18PNBJ/5.jpg"
    },
    {
      title: "Bullet With Butterfly Wings",
      album: "Mellon Collie and the Infinite Sadness ",
      artist: "The Smashing Pumpkins",
      duration: "4:17",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Smashing%20Pumpkins%20-%20Bullet%20With%20Butterfly%20Wings.mp3",
      url:
        "https://i.ibb.co/xLkxmx9/6.jpg"
    },
    {
      title: "Chop Suey!",
      album: "Toxicity",
      artist: "System of a Down",
      duration: "3:30",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/System%20Of%20A%20Down/System%20Of%20A%20Down%20'Chop%20Suey'.mp3",
      url:
        "https://i.ibb.co/Jd7KJck/7.jpg"
    },
    {
      title: "Blurry",
      album: "Come Clean",
      artist: "Puddle of Mudd",
      duration: "3:30",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Puddle%20of%20Mudd/Puddle%20of%20Mud%20-%20Blurry.MP3",
      url:
        "https://i.ibb.co/BNxM4Cf/8.jpg"
    },
    {
      title: "Que Onda Guero?",
      album: "Mellow Gold",
      artist: "Beck",
      duration: "3:29",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Beck/Beck%20'Que%20Onda%20Guero'.mp3",
      url:
        "https://i.ibb.co/1QJJ2Dt/9.jpg"
    },
    {
      title: "Animal Instinct",
      album: "Bury the Hatchet",
      artist: "The Cranberries",
      duration: "3:31",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Cranberries/Cranberries%20'Animal%20Instinct'.mp3",
      url:
        "https://i.ibb.co/C1VtbMm/10.jpg"
    },
    {
      title: "Don't Speak",
      album: "Tragic Kingdom",
      artist: "No Doubt",
      duration: "4:25",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/No%20Doubt/10-Don't%20Speak.mp3",
      url:
        "https://i.ibb.co/nBqGGyy/11.jpg"
    },
    {
      title: "Black Hole Sun",
      album: "Superunknown",
      artist: "Soundgarden",
      duration: "5:17",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Soundgarden%20-%20Black%20Hole%20Sun.mp3",
      url:
        "https://i.ibb.co/yFGdn03/12.jpg"
    },
    {
      title: "Pretty Fly (For a White Guy)",
      album: "Americana",
      artist: "The Offspring",
      duration: "3:08",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Offspring/Offspring%20'Pretty%20Fly'.mp3",
      url:
        "https://i.ibb.co/3Bgq7Nv/13.jpg"
    },
    {
      title: "Smells Like Teen Spirit",
      album: "Nevermind",
      artist: "Nirvana",
      duration: "5:01",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Nirvana/Nirvana%20'Smells%20Like%20Teen%20Spirit'.mp3",
      url:
        "https://i.ibb.co/2vknTs1/14.jpg"
    },
    {
      title: "Scar Tissue",
      album: "Californication",
      artist: "Red Hot Chili Peppers",
      duration: "3:36",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Red%20Hot%20Chili%20Peppers/Red%20Hot%20Chili%20Peppers%20'Scar%20Tissue'.mp3",
      url:
        "https://i.ibb.co/gM9cfx1/15.jpg"
    }
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
  selectedSong: selectedSongReducer
});
