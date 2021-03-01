//=======global var======//
const clockDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
let amPm;

function displayTime() {
  const theTime = new Date();
  const hour = displayAmPm(theTime.getHours());
  const minute = addLeadingZero(theTime.getMinutes());
  const second = addLeadingZero(theTime.getSeconds());

  clockDisplay.textContent = `${hour}:${minute}:${second} ${amPm}`;
}

function displayDate() {
  const theDate = new Date();
  const day = days[theDate.getDay() - 1];
  const month = months[theDate.getMonth()];
  const date = convertToOrdinal(theDate.getDate());
  const year = theDate.getFullYear();

  dateDisplay.textContent = `${day}, ${month} ${date} ${year}`;
}

const days = [
  'Monday',
  'Tuseday',
  'Wensday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
//checks if number needs leeing zero
function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}
// sets global var ('toD' =to am/pm), along with change time to 1-12hr dispaly;
function displayAmPm(hour) {
  const isAm = hour < 12 || hour === 0;
  amPm = isAm ? 'AM' : 'PM';
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

// adds ending suffix to the date
function convertToOrdinal(number) {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}
// creates date with all needed time stamp plus displaying to document
displayDate();
displayTime();
setInterval(displayTime, 1000);
