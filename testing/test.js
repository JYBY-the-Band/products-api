import http from 'k6/http';
import { sleep } from 'k6';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function () {
  http.get('http://localhost:3000/products/' + getRandomInt(1, 1000011) + '/styles');
}