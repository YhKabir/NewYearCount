const firstDay = document.getElementById('day');
const secondHour = document.getElementById('hour');
const thirdMinut = document.getElementById('minute');
const fourthSecond = document.getElementById('second');

const newYearTime = new Date("jan 01, 2023 00:00:00");

imputCountDown()

function imputCountDown() {
	const ajkerTime = new Date().getTime();
	const bebodan = newYearTime - ajkerTime;

	const second = 1000;
	const minute = second*60;
	const hour = minute*60;
	const day = hour*24;

	const d = Math.floor(bebodan/day);
	console.log(d);

	const h = Math.floor((bebodan % day) / hour);
	const m = Math.floor((bebodan % day) / minute);
	const s = Math.floor((bebodan % minute) / second);

	firstDay.innerHTML = d;
	secondHour.innerHTML = h;
	thirdMinut.innerHTML = m;
	fourthSecond.innerHTML = s;

	setTimeout(imputCountDown,1000);
}