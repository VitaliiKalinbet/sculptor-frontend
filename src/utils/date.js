/* eslint-disable */

import moment from 'moment';

const presentWeek = moment().day('Monday')._d;

export const weekNow = () => {
  const arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(moment().day(i)._d);
  }
  return arr;
};

export const weekPrev = () => {
  const arr = [];
  for (let i = 1; i < -6; i--) {
    arr.push(moment().day(i)._d);
  }
  return arr;
};

export const weekNext = () => {
  const arr = [];
  for (let i = 1; i < 8; i++) {
    arr.push(moment().day(i)._d);
  }
  return arr;
};
