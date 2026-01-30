fishherecheckboxes = [];

initTable = function() {
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	if (checkboxes == null) return;
	loc = localStorage.getItem("ua_fishhere");
	place = Islands.find(obj => {
		return obj.name == loc
	});

	document.getElementById("fishCount").innerText = place.name + " ("+ place.island + ")"
	table = document.getElementById("fishherediv");
	table.innerHTML = `
		<th>A+</th>
		<th>Fish</th>
		<th colspan="12">Baits</th>
		</tr>`;

	fishherecheckboxes = [];
	for (i of place.fish) {
		row = table.insertRow(-1);
		checkboxcell = row.insertCell(-1)
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.fishid = i.id;
		checkbox.checked = checkboxes[i.id];
		checkboxcell.appendChild(checkbox);
		fishherecheckboxes.push(checkbox);
		row.insertCell(-1).innerText = i.name + " #" + i.id;
		for (bait of Object.keys(i.bait)) {
			r = row.insertCell(-1)
			if (i.bait[bait]) ic = "⬤"
			else ic = "·"
			r.innerText = ic;
			r.style.color = bait;
			r.style.backgroundColor = "#AAAAAA"
			//if (bait=="white"||bait=="yellow")
		}
	}
}

saveCheckBoxes = function() {
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	if (checkboxes == null) return;
	for (i of fishherecheckboxes) {
		id = i.fishid;
		checkboxes[id] = i.checked;
	}

	//Save as Web storage
	localStorage.setItem("ua_fishcheckboxes", JSON.stringify(checkboxes));
	uploadToPHP(function() {
		initTable();
	});
}

 downloadFromPHP(function() {
	 initTable();
 });

