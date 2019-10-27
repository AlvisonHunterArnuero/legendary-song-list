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
        "https://coverartarchive.org/release-group/bf682e09-a800-3064-bbcc-6cebdf073cdc/front.jpg"
    },
    {
      title: "Ordinary World",
      album: "Beautiful Garbage",
      artist: "Duran Duran",
      duration: "4:42",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Duran%20Duran/Duran%20Duran%20'Ordinary%20World'.mp3",
      url:
        "https://coverartarchive.org/release/b036c809-9e60-3bd2-ad52-41c6d07ccb96/2981106404-500.jpg"
    },
    {
      title: "Wonderwall",
      album: "(What's the Story) Morning Glory?",
      artist: "Oasis",
      duration: "4:17",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Oasis/Oasis%20'Wonderwall'.mp3",
      url:
        "https://coverartarchive.org/release-group/cc7e6348-cc55-31fa-aeb2-748a46a81cb3/front-500.jpg"
    },
    {
      title: "Drive",
      album: "Make Yourself",
      artist: "Incubus",
      duration: "3:52",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Incubus/Incubus%20-%20Drive%20(1).mp3",
      url:
        "https://coverartarchive.org/release-group/387aca0c-d34a-3d0c-b7e4-c1b0f73e2dae/front-500.jpg"
    },
    {
      title: "High and Dry",
      album: "The Bends",
      artist: "Radiohead",
      duration: "4:17",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/(6)%20Radiohead%20-%20High%20And%20Dry.mp3",
      url:
        "https://coverartarchive.org/release-group/b8048f24-c026-3398-b23a-b5e50716cbc7/front.jpg"
    },
    {
      title: "Bullet With Butterfly Wings",
      album: "Mellon Collie and the Infinite Sadness ",
      artist: "The Smashing Pumpkins",
      duration: "4:17",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Smashing%20Pumpkins%20-%20Bullet%20With%20Butterfly%20Wings.mp3",
      url:
        "https://coverartarchive.org/release-group/1af599c9-0b44-3a5a-a06b-39e8db6b2b4e/front-500.jpg"
    },
    {
      title: "Chop Suey!",
      album: "Toxicity",
      artist: "System of a Down",
      duration: "3:30",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/System%20Of%20A%20Down/System%20Of%20A%20Down%20'Chop%20Suey'.mp3",
      url:
        "https://coverartarchive.org/release-group/9cb50ffe-c5cf-338d-8833-f5fc5572f45f/front-500.jpg"
    },
    {
      title: "Blurry",
      album: "Come Clean",
      artist: "Puddle of Mudd",
      duration: "3:30",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Puddle%20of%20Mudd/Puddle%20of%20Mud%20-%20Blurry.MP3",
      url:
        "https://coverartarchive.org/release-group/7fa56d89-60ee-48eb-868c-5ac068ac09be/front-500.jpg"
    },
    {
      title: "Que Onda Guero?",
      album: "Mellow Gold",
      artist: "Beck",
      duration: "3:29",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Beck/Beck%20'Que%20Onda%20Guero'.mp3",
      url:
        "https://coverartarchive.org/release-group/e49e2f8a-94c0-3dcf-8ce6-9bc52a1a7867/front-500.jpg"
    },
    {
      title: "Animal Instinct",
      album: "Bury the Hatchet",
      artist: "The Cranberries",
      duration: "3:31",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Cranberries/Cranberries%20'Animal%20Instinct'.mp3",
      url:
        "https://coverartarchive.org/release-group/97e9c8bf-711c-32df-971d-2ad1a2d7036f/front-500.jpg"
    },
    {
      title: "Don't Speak",
      album: "Tragic Kingdom",
      artist: "No Doubt",
      duration: "4:25",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/No%20Doubt/10-Don't%20Speak.mp3",
      url:
        "https://coverartarchive.org/release-group/44920790-1478-3368-bc98-8cb53f7b3e0f/front-500.jpg"
    },
    {
      title: "Black Hole Sun",
      album: "Superunknown",
      artist: "Soundgarden",
      duration: "5:17",
      audio:
        "https://www.sinj.com/sounds/mp3s/Rock/Soundgarden%20-%20Black%20Hole%20Sun.mp3",
      url:
        "https://coverartarchive.org/release-group/8300fe9c-0022-3c55-8a3e-8dc61f282e8c/front-500.jpg"
    },
    {
      title: "Pretty Fly (For a White Guy)",
      album: "Americana",
      artist: "The Offspring",
      duration: "3:08",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Offspring/Offspring%20'Pretty%20Fly'.mp3",
      url:
        "https://coverartarchive.org/release-group/fb43ac3a-8d28-3686-8653-bbf15a5e4389/front-500.jpg"
    },
    {
      title: "Smells Like Teen Spirit",
      album: "Nevermind",
      artist: "Nirvana",
      duration: "5:01",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Nirvana/Nirvana%20'Smells%20Like%20Teen%20Spirit'.mp3",
      url:
        "https://coverartarchive.org/release/b52a8f31-b5ab-34e9-92f4-f5b7110220f0/7400041214-500.jpg"
    },
    {
      title: "Scar Tissue",
      album: "Californication",
      artist: "Red Hot Chili Peppers",
      duration: "3:36",
      audio:
        "http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Red%20Hot%20Chili%20Peppers/Red%20Hot%20Chili%20Peppers%20'Scar%20Tissue'.mp3",
      url:
        "https://coverartarchive.org/release-group/ca5dfcc3-83fb-3eee-9061-c27296b77b2c/front-500.jpg"
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
