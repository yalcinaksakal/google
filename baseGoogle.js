const processData = data => {
	const res = [];
	let t = +data[0],
		line = 1;
	while (t--) {
		const n = data[line++],
			synonym = [],
			queries = [];
		for (let i = 0; i < n; i++)
			synonym.push(data[line++].split(" ").map(w => w.toLowerCase()));
		const q = data[line++];
		for (let i = 0; i < q; i++)
			queries.push(data[line++].split(" ").map(w => w.toLowerCase()));
		res.push(...isSynonym(synonym, queries));
	}
	return res;
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
