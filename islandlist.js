/**
 *Possibly load a JSON of all the
 * data rather than running this each time (keep it to help
 * regen though.)
 */

genFish = function(id, name, bk, wt, br, pr, pk, lb, bl, gr, lg, yl, or, rd, mystery) {
	fish = {
		id: id,
		name: name,
		mysterySpecies: (mystery == "x"),
		bait: {
			red: (rd == "x"),
			orange: (or == "x"),
			yellow: (yl == "x"),
			lightgreen: (lg == "x"),
			green: (gr == "x"),
			blue: (bl == "x"),
			lightblue: (lb == "x"),
			pink: (pk == "x"),
			purple: (pr == "x"),
			brown: (br == "x"),
			white: (wt == "x"),
			black: (bk == "x"),
		}
	}
	return fish;
}

Islands = [{
	name: "Beginner's Bay", island: "Prelude Island", fish: [
		genFish(1, "Sardine", "", "x", "", "", "x", "x", "", "", "x", "", "x", "x", ""),
		genFish(2, "Black rockfish", "x", "", "", "", "", "x", "x", "x", "", "", "x", "", ""),
		genFish(3, "Largescale Blackfish", "", "", "", "", "x", "x", "x", "", "x", "", "x", "", ""),
		genFish(63, "Japanese Sea Bass", "", "", "", "x", "", "", "", "x", "x", "", "", "x", ""),
		genFish(64, "Black Sea Bream", "x", "x", "x", "", "x", "x", "", "", "", "x", "", "", "")]
},
{
	name: "Sylvana River", island: "Prelude Island", fish: [
		genFish(4, "Dace", "", "", "", "", "x", "x", "", "", "", "", "x", "x", ""),
		genFish(5, "Pale Chub", "", "", "x", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(6, "Dark Chub", "", "", "", "x", "", "x", "x", "x", "", "", "", "", ""),
		genFish(65, "Rainbow Trout", "", "x", "", "", "", "", "x", "x", "", "x", "", "", "")]
},
{
	name: "Cypress Lake", island: "Prelude Island", fish: [
		genFish(7, "Bluegill", "x", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(9, "Crayfish", "", "x", "", "", "", "x", "", "", "x", "x", "", "x", ""),
		genFish(66, "Smallmouth Bass", "x", "", "", "x", "", "", "x", "", "x", "", "", "", "")]
},
{
	name: "Prelude Deep-Sea Cruise", island: "Prelude Island", fish: [
		genFish(10, "Japanese Whiting", "", "", "x", "", "", "x", "", "", "", "", "", "x", ""),
		genFish(11, "Pacific Saury", "", "x", "", "", "", "x", "x", "", "x", "", "", "", ""),
		genFish(12, "Chicken Grunt", "", "", "", "", "", "", "", "x", "x", "", "", "x", ""),
		genFish(67, "Skipjack Tuna", "", "", "", "", "", "x", "x", "", "x", "", "", "", ""),
		genFish(99, "Red Sea Bream", "", "", "", "", "", "", "x", "", "", "x", "", "", ""),
		genFish(135, "Leedsichthys", "x", "", "", "x", "", "", "", "x", "", "", "", "x", "")]
},
{
	name: "Ariana Beach", island: "Giovanna Island", fish: [
		genFish(13, "Blue Bat Star", "", "", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(14, "Filefish", "x", "", "x", "x", "x", "", "", "x", "", "x", "", "", ""),
		genFish(15, "Barracuda", "x", "", "", "", "", "x", "x", "", "", "", "x", "", ""),
		genFish(68, "Righteye Flounder", "x", "", "", "x", "x", "", "x", "", "", "", "", "", "")]
},
{
	name: "Fernhollow Pond", island: "Giovanna Island", fish: [
		genFish(16, "Tadpole", "", "", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(17, "Spined Loach", "", "", "", "x", "", "", "", "", "", "", "x", "x", ""),
		genFish(18, "Dark Sleeper", "", "", "", "", "", "", "x", "", "", "", "x", "x", ""),
		genFish(69, "Carp", "", "", "", "x", "", "", "", "x", "", "x", "", "x", "")]
},
{
	name: "Coleville Pier", island: "Giovanna Island", fish: [
		genFish(19, "Mackerel", "", "x", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(20, "Pacific Herring", "x", "", "", "x", "", "", "x", "", "", "", "x", "", ""),
		genFish(21, "Japanese Horse Mackerel", "", "x", "x", "", "", "x", "", "x", "", "", "x", "x", ""),
		genFish(70, "Largehead Hairtail", "", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(71, "Japanese Spanish Mackerel", "", "", "", "x", "x", "", "", "x", "x", "", "x", "", "")]
},
{
	name: "Shangri Lake", island: "Giovanna Island", fish: [
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(7, "Bluegill", "x", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(36, "Chinese Softshell Turtle", "x", "", "", "x", "", "", "", "", "", "x", "x", "", ""),
		genFish(72, "Catfish", "x", "", "x", "", "", "", "", "", "", "x", "", "x", "")]
},
{
	name: "Emberwood River", island: "Giovanna Island", fish: [
		genFish(5, "Pale Chub", "", "", "x", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(6, "Dark Chub", "", "", "", "x", "", "x", "x", "x", "", "", "", "", ""),
		genFish(22, "Iwana Trout", "", "x", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(65, "Rainbow Trout", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(136, "Rhizodus", "", "", "x", "", "", "x", "", "", "x", "x", "", "", "")]
},
{
	name: "Clifton Cove", island: "Memento Island", fish: [
		genFish(23, "Forktongue Goby", "x", "", "", "", "x", "", "", "", "x", "", "", "x", ""),
		genFish(24, "Lionfish", "", "", "", "x", "x", "", "x", "", "x", "", "", "", ""),
		genFish(14, "Filefish", "x", "", "x", "x", "x", "", "", "x", "", "x", "", "", ""),
		genFish(37, "Blue tang", "", "x", "", "", "", "", "x", "", "", "x", "", "", ""),
		genFish(80, "Moray Eel", "x", "", "", "", "x", "", "", "", "x", "", "x", "", "")]
},
{
	name: "Mossmeadow Pond", island: "Memento Island", fish: [
		genFish(17, "Spined Loach", "", "", "", "x", "", "", "", "", "", "", "x", "x", ""),
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(25, "American Bullfrog", "x", "", "x", "", "", "", "", "", "", "", "", "x", ""),
		genFish(66, "Smallmouth Bass", "x", "", "", "x", "", "", "x", "", "x", "", "", "", ""),
		genFish(73, "Largemouth Bass", "", "x", "", "", "", "", "x", "", "", "x", "", "x", "")]
},
{
	name: "Rainhaven Pond", island: "Memento Island", fish: [
		genFish(4, "Dace", "", "", "", "", "x", "x", "", "", "", "", "x", "x", ""),
		genFish(22, "Iwana Trout", "", "x", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(38, "Sweetfish", "", "x", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(81, "Chum Salmon", "", "x", "", "", "x", "", "", "", "x", "", "x", "", "")]
},
{
	name: "Matsunoa Pier", island: "Memento Island", fish: [
		genFish(20, "Pacific Herring", "x", "", "", "x", "", "", "x", "", "", "", "x", "", ""),
		genFish(21, "Japanese Horse Mackerel", "", "x", "x", "", "", "x", "", "x", "", "", "x", "x", ""),
		genFish(26, "Black Rabbitfish", "", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(74, "Okhotsk Atka Mackerel", "", "x", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(82, "Tiger Blowfish", "x", "x", "x", "", "", "", "", "", "", "", "", "", "")]
},
{
	name: "Memento Deep-Sea Cruise", island: "Memento Island", fish: [
		genFish(11, "Pacific Saury", "", "x", "", "", "", "x", "x", "", "x", "", "", "", ""),
		genFish(27, "Spear Squid", "", "x", "", "x", "", "", "", "", "x", "", "", "x", ""),
		genFish(39, "Red King Crab", "", "", "", "x", "", "x", "", "", "", "", "x", "", ""),
		genFish(75, "Alaska Pollack", "", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(78, "Yellowtail", "", "", "x", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(137, "Dunkleosteus", "", "x", "", "x", "", "", "x", "", "", "", "", "", "")]
},
{
	name: "Sanzaneeta Reef", island: "Mermaid Island", fish: [
		genFish(14, "Filefish", "x", "", "x", "x", "x", "", "", "x", "", "x", "", "", ""),
		genFish(28, "Pennant Coralfish", "x", "x", "x", "", "", "", "x", "x", "", "", "", "", ""),
		genFish(29, "Convict Tang", "x", "x", "", "", "", "", "x", "", "", "x", "", "", ""),
		genFish(64, "Black Sea Bream", "x", "x", "x", "", "x", "x", "", "", "", "x", "", "", ""),
		genFish(79, "Barred Knifejaw", "x", "", "x", "x", "", "", "", "x", "", "x", "", "", "")]
},
{
	name: "Steelsbay Rock", island: "Mermaid Island", fish: [
		genFish(26, "Black Rabbitfish", "", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(15, "Barracuda", "x", "", "", "", "", "x", "x", "", "", "", "x", "", ""),
		genFish(40, "Boxfish", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(74, "Okhotsk Atka Mackerel", "", "x", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(76, "Flathead Mullet", "", "", "", "", "", "", "", "x", "", "x", "", "x", "")]
},
{
	name: "Parker Lake", island: "Mermaid Island", fish: [
		genFish(25, "American Bullfrog", "x", "", "x", "", "", "", "", "", "", "", "", "x", ""),
		genFish(18, "Dark Sleeper", "", "", "", "", "", "", "x", "", "", "", "x", "x", ""),
		genFish(30, "Yellow Perch", "x", "", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(83, "Northern Pike", "", "", "", "", "", "x", "", "x", "", "", "x", "", "")]
},
{
	name: "Marshview Pond", island: "Mermaid Island", fish: [
		genFish(16, "Tadpole", "", "", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(17, "Spined Loach", "", "", "", "x", "", "", "", "", "", "", "x", "x", ""),
		genFish(36, "Chinese Softshell Turtle", "x", "", "", "x", "", "", "", "", "", "x", "x", "", ""),
		genFish(84, "Snakehead", "", "x", "", "x", "", "x", "", "", "x", "", "", "", ""),
		genFish(146, "Golden Bass", "", "", "x", "", "x", "x", "", "", "", "", "", "x", "x")]
},
{
	name: "Maple River", island: "Mermaid Island", fish: [
		genFish(22, "Iwana Trout", "", "x", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(38, "Sweetfish", "", "x", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(41, "Cherry Salmon", "", "x", "", "", "", "", "x", "x", "x", "", "", "", ""),
		genFish(65, "Rainbow Trout", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(85, "Iridescent Shark", "", "", "x", "", "", "", "x", "", "", "", "x", "", "")]
},
{
	name: "Highland Lake", island: "Mermaid Island", fish: [
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(7, "Bluegill", "x", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(30, "Yellow Perch", "x", "", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(84, "Snakehead", "", "x", "", "x", "", "x", "", "", "x", "", "", "", ""),
		genFish(83, "Northern Pike", "", "", "", "", "", "x", "", "x", "", "", "x", "", ""),
		genFish(138, "Nessie", "", "", "", "", "", "", "", "x", "", "", "x", "x", "")]
},
{
	name: "Dayton Point", island: "Atlantis Island", fish: [
		genFish(19, "Mackerel", "", "x", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(40, "Boxfish", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(42, "Porcupinefish", "", "", "", "x", "", "", "", "x", "x", "x", "", "", ""),
		genFish(93, "Common Octopus", "", "x", "x", "", "x", "", "", "", "", "x", "x", "", ""),
		genFish(86, "Flounder", "", "x", "", "x", "", "", "", "", "", "x", "x", "", "")]
},
{
	name: "Beauford Pond", island: "Atlantis Island", fish: [
		genFish(16, "Tadpole", "", "", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(25, "American Bullfrog", "x", "", "x", "", "", "", "", "", "", "", "", "x", ""),
		genFish(9, "Crayfish", "", "x", "", "", "", "x", "", "", "x", "x", "", "x", ""),
		genFish(66, "Smallmouth Bass", "x", "", "", "x", "", "", "x", "", "x", "", "", "", ""),
		genFish(87, "Eel", "", "", "", "x", "", "", "x", "x", "", "", "", "", "")]
},
{
	name: "Kohu Lake", island: "Atlantis Island", fish: [
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(18, "Dark Sleeper", "", "", "", "", "", "", "x", "", "", "", "x", "x", ""),
		genFish(36, "Chinese Softshell Turtle", "x", "", "", "x", "", "", "", "", "", "x", "x", "", ""),
		genFish(108, "Koi", "", "", "", "", "x", "", "", "", "x", "", "", "", ""),
		genFish(147, "Golden Koi", "", "", "x", "", "x", "", "x", "", "x", "", "", "", "x")]
},
{
	name: "Mistfall River", island: "Atlantis Island", fish: [
		genFish(22, "Iwana Trout", "", "x", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(38, "Sweetfish", "", "x", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(41, "Cherry Salmon", "", "x", "", "", "", "", "x", "x", "x", "", "", "", ""),
		genFish(65, "Rainbow Trout", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(88, "King Salmon", "", "", "x", "", "x", "x", "", "", "", "", "", "", "")]
},
{
	name: "Graydale Lake", island: "Atlantis Island", fish: [
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(7, "Bluegill", "x", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(30, "Yellow Perch", "x", "", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(66, "Smallmouth Bass", "x", "", "", "x", "", "", "x", "", "x", "", "", "", ""),
		genFish(89, "Lake Trout", "x", "", "", "", "x", "", "", "", "x", "", "x", "", "")]
},
{
	name: "Kastamoor Pond", island: "Atlantis Island", fish: [
		genFish(16, "Tadpole", "", "", "", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(17, "Spined Loach", "", "", "", "x", "", "", "", "", "", "", "x", "x", ""),
		genFish(9, "Crayfish", "", "x", "", "", "", "x", "", "", "x", "x", "", "x", ""),
		genFish(90, "Saddled Bichir", "x", "", "x", "", "", "", "", "", "x", "", "x", "", ""),
		genFish(120, "Wels Catfish", "x", "", "", "", "x", "", "", "", "", "", "x", "", "")]
},
{
	name: "Atlantis Deep-Sea Cruise", island: "Atlantis Island", fish: [
		genFish(11, "Pacific Saury", "", "x", "", "", "", "x", "x", "", "x", "", "", "", ""),
		genFish(27, "Spear Squid", "", "x", "", "x", "", "", "", "", "x", "", "", "x", ""),
		genFish(43, "Snow Crab", "", "", "x", "", "x", "x", "", "", "", "", "x", "", ""),
		genFish(91, "Pacific Cod", "", "x", "", "x", "x", "", "", "", "", "x", "", "", ""),
		genFish(139, "Kronosaurus", "", "", "", "", "", "x", "", "x", "", "", "", "", ""),
		genFish(144, "Giant Squid", "x", "", "", "", "", "", "", "", "", "", "x", "x", "x")]
},
{
	name: "Seraphia Pier", island: "Poseidon Island", fish: [
		genFish(3, "Largescale Blackfish", "", "", "", "", "x", "x", "x", "", "x", "", "x", "", ""),
		genFish(26, "Black Rabbitfish", "", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(42, "Porcupinefish", "", "", "", "x", "", "", "", "x", "x", "x", "", "", ""),
		genFish(70, "Largehead Hairtail", "", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(92, "Japanese Bullhead Shark", "", "x", "", "x", "", "", "", "x", "x", "x", "", "", ""),
		genFish(121, "North Pacific Giant Octopus", "", "", "x", "", "", "", "x", "", "", "", "", "", "")]
},
{
	name: "Clearwater Lake", island: "Poseidon Island", fish: [
		genFish(8, "Crucian Carp", "", "", "", "", "", "x", "x", "", "", "", "x", "x", ""),
		genFish(7, "Bluegill", "x", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(55, "Stickleback", "", "", "x", "", "", "", "", "x", "", "x", "", "", ""),
		genFish(66, "Smallmouth Bass", "x", "", "", "x", "", "", "x", "", "x", "", "", "", ""),
		genFish(94, "Alligator Snapping Turtle", "", "", "", "x", "", "", "", "x", "", "x", "", "", "")]
},
{
	name: "Eureka Lake", island: "Poseidon Island", fish: [
		genFish(5, "Pale Chub", "", "", "x", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(6, "Dark Chub", "", "", "", "x", "", "x", "x", "x", "", "", "", "", ""),
		genFish(41, "Cherry Salmon", "", "x", "", "", "", "", "x", "x", "x", "", "", "", ""),
		genFish(65, "Rainbow Trout", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(95, "Taimen", "", "", "", "", "x", "", "", "", "x", "", "x", "", "")]
},
{
	name: "Aruna Rock", island: "Poseidon Island", fish: [
		genFish(29, "Convict Tang", "x", "x", "", "", "", "", "x", "", "", "x", "", "", ""),
		genFish(28, "Pennant Coralfish", "x", "x", "x", "", "", "", "x", "x", "", "", "", "", ""),
		genFish(31, "Indo-Pacific Sergeant", "x", "x", "", "", "", "x", "", "", "x", "", "x", "", ""),
		genFish(96, "Garfish", "", "", "", "", "", "", "", "", "", "", "", "x", ""),
		genFish(97, "Longtooth Grouper", "", "", "", "", "x", "x", "", "x", "", "x", "", "", ""),
		genFish(98, "Tarpon", "x", "", "x", "", "x", "", "", "", "", "", "", "", "")]
},
{
	name: "Poseidon Deep-Sea Cruise", island: "Poseidon Island", fish: [
		genFish(12, "Chicken Grunt", "", "", "", "", "", "", "", "x", "x", "", "", "x", ""),
		genFish(44, "Red Gurnard", "", "", "", "", "x", "", "", "", "", "", "", "x", ""),
		genFish(100, "Japanese Spider Crab", "", "", "", "", "", "x", "", "", "", "", "x", "", ""),
		genFish(101, "Mahimahi", "x", "", "", "", "x", "", "", "x", "", "x", "", "", ""),
		genFish(124, "Pacific Bluefin Tuna", "x", "", "x", "", "", "", "", "", "x", "", "x", "", ""),
		genFish(151, "Golden Tuna", "", "x", "", "x", "", "", "x", "", "x", "", "", "", "x")]
},
{
	name: "Wyverdun Lake", island: "Poseidon Island", fish: [
		genFish(7, "Bluegill", "x", "", "", "", "x", "x", "x", "", "", "", "", "", ""),
		genFish(36, "Chinese Softshell Turtle", "x", "", "", "x", "", "", "", "", "", "x", "x", "", ""),
		genFish(45, "Clown Loach", "x", "", "", "", "x", "", "", "", "x", "", "x", "", ""),
		genFish(87, "Eel", "", "", "", "x", "", "", "x", "x", "", "", "", "", ""),
		genFish(89, "Lake Trout", "x", "", "", "", "x", "", "", "", "x", "", "x", "", ""),
		genFish(140, "Dragon", "", "", "", "x", "", "", "", "", "x", "x", "", "", "")]
},
{
	name: "Yunali Reef", island: "Oceanora Island", fish: [
		genFish(32, "Butterfly Fish", "", "", "", "", "x", "", "", "", "", "x", "x", "x", ""),
		genFish(46, "Clownfish", "", "x", "", "", "", "", "", "x", "x", "", "x", "", ""),
		genFish(47, "Little Dragonfish", "", "", "", "x", "", "", "", "x", "x", "x", "", "", ""),
		genFish(92, "Japanese Bullhead Shark", "", "x", "", "x", "", "", "", "x", "x", "x", "", "", ""),
		genFish(122, "Scalloped Hammerhead", "", "", "", "x", "", "", "", "", "x", "", "", "x", "")]
},
{
	name: "Foxmere Lake", island: "Oceanora Island", fish: [
		genFish(18, "Dark Sleeper", "", "", "", "", "", "", "x", "", "", "", "x", "x", ""),
		genFish(9, "Crayfish", "", "x", "", "", "", "x", "", "", "x", "x", "", "x", ""),
		genFish(30, "Yellow Perch", "x", "", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(66, "Smallmouth Bass", "x", "", "", "x", "", "", "x", "", "x", "", "", "", ""),
		genFish(123, "Alligator Gar", "x", "", "", "", "", "x", "", "x", "", "", "", "", "")]
},
{
	name: "Bridgecliff Beach", island: "Oceanora Island", fish: [
		genFish(42, "Porcupinefish", "", "", "", "x", "", "", "", "x", "x", "x", "", "", ""),
		genFish(56, "Spiny Lobster", "x", "", "", "", "", "", "", "x", "x", "", "", "", ""),
		genFish(57, "Sea Horse", "", "", "x", "", "", "", "", "x", "", "x", "", "", ""),
		genFish(96, "Garfish", "", "", "", "", "", "", "", "", "", "", "", "x", ""),
		genFish(109, "Humphead Wrasse", "", "", "x", "", "", "", "", "x", "x", "", "", "", ""),
		genFish(154, "Cheep Cheep", "", "x", "", "", "", "", "x", "", "", "x", "x", "", "x")]
},
{
	name: "Oceanora Deep-Sea Cruise 1", island: "Oceanora Island", fish: [
		genFish(10, "Japanese Whiting", "", "", "x", "", "", "x", "", "", "", "", "", "x", ""),
		genFish(27, "Spear Squid", "", "x", "", "x", "", "", "", "", "x", "", "", "x", ""),
		genFish(102, "Amberjack", "x", "", "", "x", "", "", "", "", "", "", "x", "", ""),
		genFish(103, "Splendid Alfonsino", "", "", "", "", "x", "", "", "", "", "x", "x", "", ""),
		genFish(111, "Coelacanth", "", "", "", "", "x", "", "", "", "x", "", "", "", ""),
		genFish(148, "Golden Bream", "", "", "x", "", "", "x", "x", "", "", "", "", "x", "x")]
},
{
	name: "Arcana Beach", island: "Oceanora Island", fish: [
		genFish(23, "Forktongue Goby", "x", "", "", "", "x", "", "", "", "x", "", "", "x", ""),
		genFish(48, "Orange-Striped Emperor", "x", "", "", "x", "", "", "x", "", "", "", "", "", ""),
		genFish(58, "Pinecone Fish", "", "", "x", "x", "", "", "", "x", "", "x", "", "", ""),
		genFish(110, "Horseshoe Crab", "", "x", "", "", "", "", "", "x", "", "", "", "", ""),
		genFish(125, "Great White Shark", "x", "x", "", "x", "", "", "", "x", "", "", "", "", ""),
		genFish(153, "Golden Shark", "", "x", "", "", "", "x", "", "", "", "x", "x", "", "x")]
},
{
	name: "Hazeldown River", island: "Oceanora Island", fish: [
		genFish(4, "Dace", "", "", "", "", "x", "x", "", "", "", "", "x", "x", ""),
		genFish(5, "Pale Chub", "", "", "x", "", "", "", "x", "", "", "", "", "x", ""),
		genFish(6, "Dark Chub", "", "", "", "x", "", "x", "x", "x", "", "", "", "", ""),
		genFish(112, "Stringfish", "", "", "x", "", "x", "", "", "", "", "", "", "", ""),
		genFish(149, "Golden Rainbow Trout", "x", "", "", "x", "", "x", "", "", "", "", "x", "", "x")]
},
{
	name: "Oceanora Deep-Sea Cruise 2", island: "Oceanora Island", fish: [
		genFish(11, "Pacific Saury", "", "x", "", "", "", "x", "x", "", "x", "", "", "", ""),
		genFish(39, "Red King Crab", "", "", "", "x", "", "x", "", "", "", "", "x", "", ""),
		genFish(43, "Snow Crab", "", "", "x", "", "x", "x", "", "", "", "", "x", "", ""),
		genFish(114, "Frilled Shark", "", "x", "x", "", "", "", "", "", "", "", "", "", ""),
		genFish(113, "Football Fish", "", "", "x", "", "", "x", "", "", "", "", "", "", ""),
		genFish(141, "Leviathan", "x", "x", "", "", "", "x", "x", "", "", "", "", "", "")]
},
{
	name: "Mythroll Deep-Sea Cruise 1", island: "Mythroll Island", fish: [
		genFish(59, "Flapjack Octopus", "", "x", "", "x", "", "", "", "", "", "x", "", "", ""),
		genFish(60, "Giant Isopod", "", "", "x", "", "", "", "", "", "", "", "x", "", ""),
		genFish(51, "Flying Fish", "x", "x", "", "x", "", "x", "", "", "", "", "", "", ""),
		genFish(104, "Sawshark", "", "", "", "", "x", "x", "", "", "", "", "", "", ""),
		genFish(126, "Swordfish", "", "x", "", "", "", "", "", "", "x", "x", "", "", ""),
		genFish(152, "Golden Swordfish", "", "", "", "x", "", "", "", "x", "", "", "", "x", "x")]
},
{
	name: "Cutty's Cave", island: "Mythroll Island", fish: [
		genFish(56, "Spiny Lobster", "x", "", "", "", "", "", "", "x", "x", "", "", "", ""),
		genFish(49, "Longnose Hawkfish", "", "x", "", "", "x", "", "x", "", "", "", "", "", ""),
		genFish(50, "Koran Angelfish", "", "", "", "", "x", "", "x", "", "x", "x", "", "", ""),
		genFish(96, "Garfish", "", "", "", "", "", "", "", "", "", "", "", "x", ""),
		genFish(127, "Tawny Nurse Shark", "", "", "", "", "", "", "", "x", "", "", "x", "", ""),
		genFish(155, "Blooper", "x", "", "x", "x", "", "", "", "", "", "", "", "x", "x")]
},
{
	name: "Bangaban River", island: "Mythroll Island", fish: [
		genFish(33, "Piranha", "x", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(34, "Siamese Fighting Fish", "", "", "", "", "", "x", "", "", "", "", "", "x", ""),
		genFish(35, "Dwarf Gourami", "", "", "", "", "x", "", "", "", "", "", "", "x", ""),
		genFish(77, "Northern Barramundi", "", "", "x", "", "x", "", "", "", "", "", "", "x", ""),
		genFish(105, "Arowana", "", "", "", "", "", "x", "", "", "", "x", "x", "", "")]
},
{
	name: "Abunda Jungle", island: "Mythroll Island", fish: [
		genFish(33, "Piranha", "x", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(35, "Dwarf Gourami", "", "", "", "", "x", "", "", "", "", "", "", "x", ""),
		genFish(53, "Angelfish", "", "", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(106, "Dorado", "", "", "x", "", "x", "", "", "x", "", "x", "x", "", ""),
		genFish(115, "Gigantic Carp", "x", "", "", "", "", "", "", "", "x", "", "", "", "")]
},
{
	name: "Mythroll Deep-Sea Cruise 2", island: "Mythroll Island", fish: [
		genFish(10, "Japanese Whiting", "", "", "x", "", "", "x", "", "", "", "", "", "x", ""),
		genFish(51, "Flying Fish", "x", "x", "", "x", "", "x", "", "", "", "", "", "", ""),
		genFish(116, "Mediterranean Dealfish", "", "x", "x", "", "", "", "", "", "", "", "", "", ""),
		genFish(131, "Whale Shark", "", "", "x", "x", "", "", "", "", "x", "", "", "", ""),
		genFish(142, "Kraken", "", "", "", "", "x", "", "", "", "x", "x", "", "", ""),
		genFish(145, "Oarfish", "", "x", "", "", "", "", "x", "x", "", "", "", "", "x")]
},
{
	name: "Mysteria Deep-Sea Cruise", island: "Mysteria Island", fish: [
		genFish(44, "Red Gurnard", "", "", "", "", "x", "", "", "", "", "", "", "x", ""),
		genFish(61, "Viperfish", "", "", "x", "", "", "", "", "x", "", "x", "", "", ""),
		genFish(117, "Pelican Eel", "x", "", "", "", "", "", "x", "", "", "", "", "", ""),
		genFish(128, "Sunfish", "x", "", "", "x", "", "", "", "x", "", "", "", "", ""),
		genFish(129, "Manta Ray", "", "", "", "", "x", "", "", "x", "", "", "", "x", ""),
		genFish(134, "Spotted Eagle Ray", "", "x", "", "", "x", "", "x", "", "", "", "", "", "")]
},
{
	name: "Sellbrook River", island: "Mysteria Island", fish: [
		genFish(22, "Iwana Trout", "", "x", "", "", "", "", "", "", "", "x", "", "x", ""),
		genFish(38, "Sweetfish", "", "x", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(41, "Cherry Salmon", "", "x", "", "", "", "", "x", "x", "x", "", "", "", ""),
		genFish(65, "Rainbow Trout", "", "x", "", "", "", "", "x", "x", "", "x", "", "", ""),
		genFish(132, "Sturgeon", "x", "", "", "", "x", "", "", "x", "", "", "", "", ""),
		genFish(150, "Golden Salmon", "", "x", "", "", "x", "", "", "", "x", "", "x", "", "x")]
},
{
	name: "Mahtori Jungle", island: "Mysteria Island", fish: [
		genFish(33, "Piranha", "x", "", "x", "x", "", "", "", "", "", "", "", "x", ""),
		genFish(34, "Siamese Fighting Fish", "", "", "", "", "", "x", "", "", "", "", "", "x", ""),
		genFish(62, "Ocellate River Stingray", "x", "", "", "x", "", "", "", "", "", "", "", "", ""),
		genFish(107, "Nile Perch", "", "x", "", "x", "x", "", "", "", "", "", "x", "", ""),
		genFish(130, "Giant Freshwater Stingray", "", "x", "", "", "", "", "", "", "x", "", "", "", "")]
},
{
	name: "Sulani River", island: "Mysteria Island", fish: [
		genFish(35, "Dwarf Gourami", "", "", "", "", "x", "", "", "", "", "", "", "x", ""),
		genFish(52, "Elephantnose Fish", "x", "", "", "", "", "x", "", "", "", "", "x", "", ""),
		genFish(53, "Angelfish", "", "", "", "", "", "x", "x", "", "", "", "", "", ""),
		genFish(118, "Electric Eel", "", "", "x", "", "", "x", "", "", "", "", "", "", ""),
		genFish(133, "Arapaima", "", "", "x", "", "", "", "", "", "x", "x", "", "", "")]
},
{
	name: "Enigma Cave", island: "Mysteria Island", fish: [
		genFish(55, "Stickleback", "", "", "x", "", "", "", "", "x", "", "x", "", "", ""),
		genFish(54, "Giant Pikehead", "", "", "", "", "", "", "x", "x", "x", "x", "", "", ""),
		genFish(94, "Alligator Snapping Turtle", "", "", "", "x", "", "", "", "x", "", "x", "", "", ""),
		genFish(90, "Saddled Bichir", "x", "", "x", "", "", "", "", "", "x", "", "x", "", ""),
		genFish(119, "African Lungfish", "", "", "x", "", "", "x", "", "", "", "", "", "", ""),
		genFish(143, "UFO", "", "", "x", "", "", "x", "", "x", "", "", "", "", "")]
}];

GlobalFish = [
    "Old Boot",
    "Empty Can",
    "Driftwood",
    "Seaweed",
    "Jellyfish",
]
