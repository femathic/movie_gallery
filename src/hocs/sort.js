import moment from 'moment';

export const compareDates = (a, b) => {
  const bandA = moment(a.premiered).format('YYYY');
  const bandB = moment(b.premiered).format('YYYY');

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
};

export const compareUpdatedTime = (a, b) => {
  const bandA = Date(a.updated);
  const bandB = Date(b.updated);

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
};

export const compareRatings = (a, b) => {
  const bandA = a.show.rating.average;
  const bandB = b.show.rating.average;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
};

export const compareTimestamps = (a, b) => {
  const bandA = moment(a.premiered).format('YYYY');
  const bandB = moment(b.premiered).format('YYYY');

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
};