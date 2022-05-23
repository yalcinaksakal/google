const specChars = new Set(["#", "@", "*", "&"]),
	getNewPwd = (old, length) => {
		let isUp = false,
			isLow = false,
			isSpec = false,
			isDigit = false,
			add = "";
		for (const ch of old) {
			if (+ch < 10) isDigit = true;
			else if (specChars.has(ch)) isSpec = true;
			else ch === ch.toUpperCase() ? (isUp = true) : (isLow = true);
			if (isDigit && isLow && isUp && isSpec) break;
		}
		!isUp && (add += "A");
		!isLow && (add += "a");
		!isSpec && (add += "#");
		!isDigit && (add += "1");
		return add + "a".repeat(Math.max(0, 7 - length - add.length));
	},
	processData = data => {
		let t = +data[0],
			line = 2;
		while (t--) {
			console.log(
				`Case #${line / 2}: ` +
					data[line] +
					getNewPwd(
						Array.from(new Set(data[line].split(""))),
						data[line].length
					)
			);
			line += 2;
		}
	};
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData(_input.split(/\r?\n/));
});
// console.log();
// const s = "1234567";
// console.log(s + getNewPwd(Array.from(s.split("")), s.length));
