import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframeRef = document.querySelector('#vimeo-player');
const player = new Player(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  }, 1000)
);
const time = localStorage.getItem(LOCALSTORAGE_KEY);

if (time) {
  player.setCurrentTime(time);
}
