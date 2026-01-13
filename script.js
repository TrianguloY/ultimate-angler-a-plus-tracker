baitThisRun = {};
mysterySpeciesThisRun = Object.fromEntries(Islands
	.flatMap(i=>i.fish)
	.filter(f=>f.mysterySpecies)
	.map(f=>f.name)
	.map(name => [name, false]));


CLEANUP_WEIGHT = 0;
function scoreCompare(a, b) {
	if (a.score < b.score) {
		return 1;
	}
	if (a.score > b.score) {
		return -1;
	}
	return 0;
}

baitMap = {
	red: 1,
	orange: 2,
	yellow: 3,
	lightgreen: 4,
	green: 5,
	blue: 6,
	lightblue: 7,
	pink: 8,
	purple: 9,
	brown: 10,
	white: 11,
	black: 12,
}


resetBait = function() {
	baitThisRun = {
		red: 0,
		orange: 0,
		yellow: 0,
		lightgreen: 0,
		green: 0,
		blue: 0,
		lightblue: 0,
		pink: 0,
		purple: 0,
		brown: 0,
		white: 0,
		black: 0,
	}
	updateBaitDisplay();
}

initButtons = function() {
	buttonDiv = document.getElementById("baitadder");
	for (bait of Object.keys(baitMap)) {
		//Create button
		var button = document.createElement("button");
		button.id = "bait" + bait;
		button.onclick = function() { updateBait(this.bait) };
		button.innerText = bait;
		button.bait = bait;
		button.style.color = bait;
		buttonDiv.appendChild(button);
	}

	mysteryButtonDiv = document.getElementById("mysteryadder");
	for (fish of Object.keys(mysterySpeciesThisRun)) {
		//Create button
		var button = document.createElement("button");
		button.id = "mystery" + fish;
		button.onclick = function() { updateMystery(this.fish) };
		button.innerText = fish;
		button.fish = fish;
		mysteryButtonDiv.appendChild(button);
	}
}

cleanupToggle = function() {
	if (CLEANUP_WEIGHT == 0) CLEANUP_WEIGHT = 100;
	else CLEANUP_WEIGHT = 0;
	updateBaitDisplay();
}

toggleMysterySpecies = function() {
	mysterySpeciesTotalState = false
	for (fish in mysterySpeciesThisRun) {
		if (mysterySpeciesThisRun[fish]) {
			mysterySpeciesTotalState = true
		}
	}

	for (fish in mysterySpeciesThisRun) {
		mysterySpeciesThisRun[fish] = !mysterySpeciesTotalState;
	}
	updateBaitDisplay();
}

updateBait = function(baitname) {
	baitCount = 0;
	for (i of Object.values(baitThisRun)) {
		baitCount += i;
	}
	if (baitCount < 10) {
		baitThisRun[baitname]++;
	}
	updateBaitDisplay();
}

updateMystery = function(fishname) {
	mysterySpeciesThisRun[fishname] = !mysterySpeciesThisRun[fishname]
	updateBaitDisplay();
}

fishHere = function(place) {
	localStorage.setItem("ua_fishhere", place);
	window.location.href = "fishhere.html";
}

rankIslands = function() {
	baitLists = Object.keys(baitMap);
	islandRanks = [];
	checkboxes = JSON.parse(localStorage.getItem("ua_fishcheckboxes"));
	document.getElementById("instructions").style.display = checkboxes==null ? 'block' : 'none';
	if (checkboxes == null) return;
	
	for (i in Islands) {
		islandToRank = {};
		islandToRank.name = Islands[i].name;
		islandToRank.island = Islands[i].island;
		islandScore = 0;
		hasMysterySpecies = false
		baitRank = {};
		//0=not used, 1 = non-exclusive, 2 = exclusive
		for (baitName of baitLists) {
			baitExistsAtIslandAPlus = false;
			baitExistsAtIslandNonAPlus = false;
			for (fish of Islands[i].fish) {
				fishHasBait = fish.bait[baitName];
				fishAlreadyAPlus = checkboxes[fish.id];
				if (fishHasBait) {
					if (fish.mysterySpecies) {
						isSpotted = mysterySpeciesThisRun[fish.name];
						hasMysterySpecies = true
					} else {
						isSpotted = true;
					}
					if (isSpotted) {
						if (fishAlreadyAPlus) {
							baitExistsAtIslandAPlus = true;
						} else {
							baitExistsAtIslandNonAPlus = true;
						}
					}
				}
			}
			baitRankInt = 0;
			if (baitExistsAtIslandNonAPlus) {
				baitRankInt = 2;
				if (baitExistsAtIslandAPlus) {
					baitRankInt = 1;
				}
			}
			baitRank[baitName] = baitRankInt;
		}
		//Determine how many a+ there are
		islandAplus = 0;
		islandTotalFish = 0;
		islandAPlusList = [];
		for (fish of Islands[i].fish) {
			islandTotalFish++;
			fishAlreadyAPlus = checkboxes[fish.id];
			if (fishAlreadyAPlus) {
				islandAplus++;
				islandAPlusList.push(fish.name);
			}
		}
		islandToRank.islandAplusFish = islandAPlusList;
		islandToRank.fishCount = islandTotalFish;
		islandToRank.aplusCount = islandAplus;
		//Determine Island Rank
		islandToRank.rank = baitRank;
		islandExclusives = 0;
		islandNonExclusives = 0
		for (baitName of Object.keys(baitThisRun)) {
			baitsOfThisType = baitThisRun[baitName];
			rank = baitRank[baitName];
			if (rank == 2) islandExclusives += baitsOfThisType;
			else if (rank == 1) islandNonExclusives += baitsOfThisType;
		}
		islandScore += islandExclusives * 100 * (1 + (islandAplus / islandTotalFish) * CLEANUP_WEIGHT);
		islandScore += islandNonExclusives * 30 * (1 + (islandAplus / islandTotalFish) * CLEANUP_WEIGHT);
		islandToRank.exclusives = islandExclusives;
		islandToRank.nonExclusives = islandNonExclusives;
		islandToRank.hasMysterySpecies = hasMysterySpecies;
		//Use already caught A+ as part of rank
		for (fish of Islands[i].fish) {
			fishAlreadyAPlus = checkboxes[fish.id];
			if (fishAlreadyAPlus) {
				islandScore += 5;
			}
		}


		islandToRank.score = islandScore;



		islandRanks.push(islandToRank);
	}

	islandRanks.sort(scoreCompare);
	return islandRanks;
}

updateBaitDisplay = function() {
	for (baitName of Object.keys(baitThisRun)) {
		button = document.getElementById("bait" + baitName);
		button.innerText = baitName + ": " + baitThisRun[baitName];
	}	
	
	locRanks = rankIslands();

	document.getElementById("cleanup").innerText = "Toggle Cleanup: " + (CLEANUP_WEIGHT != 0);

	table = document.getElementById("islandranks");
	table.innerHTML = `
		<th></th>
		<th>Location</th>
			<th>Island</th>
			<th>Baits</th>
			<th>A+</th>
			<th colspan="12">Colors</th>
		</tr>`;

	for (i in locRanks) {
		row = table.insertRow(-1);
		fishherecell = row.insertCell(-1)
		fishherebutton = document.createElement("button");
		fishherebutton.innerText = "Fish Here";
		fishherebutton.onclick = function() { fishHere(this.local) }
		fishherebutton.local = locRanks[i].name;
		fishherecell.appendChild(fishherebutton);
		isMysteryIslandText = ""
		if (locRanks[i].hasMysterySpecies) isMysteryIslandText = "*"
		row.insertCell(-1).innerText = locRanks[i].name + isMysteryIslandText;
		row.insertCell(-1).innerText = locRanks[i].island;
		row.insertCell(-1).innerText = locRanks[i].exclusives + "/" + locRanks[i].nonExclusives;
		row.insertCell(-1).innerText = locRanks[i].aplusCount + "/" + locRanks[i].fishCount;
		for (bait of Object.keys(locRanks[i].rank)) {
			r = row.insertCell(-1)
			if (locRanks[i].rank[bait] == 2) ic = "⬤"
			else if (locRanks[i].rank[bait] == 1) ic = "○"
			else ic = "·"
			r.innerText = ic;
			r.style.color = bait;
			r.style.backgroundColor = "#AAAAAA"
			//if (bait=="white"||bait=="yellow")
		}
	}

	for (fish of Object.keys(mysterySpeciesThisRun)) {
		button = document.getElementById("mystery" + fish);
		if (mysterySpeciesThisRun[fish]) button.style.fontWeight = 'bold';
		else button.style.fontWeight = '';
	}
}
 downloadFromPHP(function() {
	 initButtons();
	 resetBait();
 });

initializeEmpty = function() {
	localStorage.setItem("ua_fishcheckboxes", JSON.stringify([]));
	uploadToPHP(function() {});
	updateBaitDisplay();
}