function formatTime(num) {
	let day = Math.floor(num / 3600);
	let hour = Math.floor((num - day * 3600) / 60);
	let minute = (num - day * 3600) - hour * 60;
	return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`;
}
let result1 = formatTime(120);
console.log(result1);
let result2 = formatTime(59);
console.log(result2);
let result3 = formatTime(3601);
console.log(result3);