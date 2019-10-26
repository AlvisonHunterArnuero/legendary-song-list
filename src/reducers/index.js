import {combineReducers} from 'redux';

const songsReducer = () => {
  return [
    { title: "Doomsday Clock", album:"Zeitgeist", artist: "The Smashing Pumpkins", duration: "3:45", url:"https://coverartarchive.org/release/fec5638d-18f1-34da-b629-35f01a1e1f17/7222113620-500.jpg" },
    { title: "Drive", album:"Make Yourself", artist: "Incubus", duration: "3:54" , url:"https://coverartarchive.org/release-group/387aca0c-d34a-3d0c-b7e4-c1b0f73e2dae/front-500.jpg" },
    { title: "You Oughta Know", album:"Jagged Little Pill", artist: "Alanis Morissette", duration: "4:09" , url:"https://coverartarchive.org/release-group/ee3d18ed-d6a8-37c7-a964-41bbdb6d59f1/front-500.jpg" },
    { title: "The World I Know", album:"Blue", artist: "Collective Soul", duration: "4:19" , url:"https://coverartarchive.org/release/9017e412-1c03-47a5-9ad5-6eb758361b2e/20546202482-500.jpg" },
    { title: "Butterfly", album:"The Gift of Game", artist: "Crazytown",duration: "3:37" , url:"https://coverartarchive.org/release-group/db47b821-bded-36cc-977c-514e6ecc2618/front-500.jpg" },
    { title: "In the End", album:"Hybrid Theory: Live Around the World", artist: "Linkin Park", duration: "3:30" , url:"https://coverartarchive.org/release-group/7fa56d89-60ee-48eb-868c-5ac068ac09be/front-500.jpg" },
    { title: "Loser", album:"Mellow Gold", artist: "Beck", duration: "3:58" , url:"https://coverartarchive.org/release-group/9439429f-1c78-3cf5-99cb-d1b86ed6ff02/front-500.jpg" },
    { title: "Slaughterhouse", album:"Goo Goo Dolls", artist: "Goo Goo Dolls", duration: "3:38" , url:"https://coverartarchive.org/release-group/fa9811d8-e884-393e-a740-73b54f300c23/front-500.jpg" },
    { title: "Don't Speak", album:"Tragic Kingdom", artist: "No Doubt", duration: "4:25" , url:"https://coverartarchive.org/release-group/44920790-1478-3368-bc98-8cb53f7b3e0f/front-500.jpg" },
    { title: "My Sacrifice", album:"Weathered", artist: "Creed", duration: "4:57" , url:"https://coverartarchive.org/release-group/c25a923a-04a9-3ca2-a551-ed0578907999/front-500.jpg" },
    { title: "Pretty Fly (For a White Guy)", album:"Americana", artist: "The Offspring",duration: "3:10" , url:"https://coverartarchive.org/release-group/fb43ac3a-8d28-3686-8653-bbf15a5e4389/front-500.jpg" },
    { title: "Smells Like Teen Spirit", album:"Nevermind", artist: "Nirvana", duration: "5:01", url:"https://coverartarchive.org/release/b52a8f31-b5ab-34e9-92f4-f5b7110220f0/7400041214-500.jpg" },
    { title: "Scar Tissue", album:"Californication", artist: "Red Hot Chili Peppers",duration: "3:36" , url:"https://coverartarchive.org/release-group/ca5dfcc3-83fb-3eee-9061-c27296b77b2c/front-500.jpg" }
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