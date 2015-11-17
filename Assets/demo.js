#pragma strict

import System.Collections.Generic;


// start with the simplest
/*
{
	"self": [
		{
			"x": 4,
			"y": 5,
			"movable_coords": [
				{"x": 5, "y": 5},
				{"x": 4, "y": 4},
				{"x": 3, "y": 5},
				{"x": 4, "y": 6}
			]

		}
	]
}
*/

// PlayerData is the data for AI measuring the best score
class PlayerData extends System.ValueType {
	var coord:Vector3;
	var is_standby:boolean;
	var reachable_coords:Vector3[]; // 220 = 2 * 10 * 11, which is movability=10
}

function Start () {
	Debug.Log('hello');
	// create an AI data
	var ai_data:PlayerData = new PlayerData();
	ai_data.coord = Vector3(4,5,0);
	ai_data.is_standby = true;
	ai_data.reachable_coords = new Vector3[220]; // 220 = 2 * 10 * 11, which is movability=10
	var i = 0;
	ai_data.reachable_coords[i++] = Vector3(5,5,0);
	ai_data.reachable_coords[i++] = Vector3(4,4,0);
	ai_data.reachable_coords[i++] = Vector3(3,5,0);
	ai_data.reachable_coords[i++] = Vector3(4,6,0);
	
	// Initial a list of Enemies
	var enemies = new PlayerData[30]; // 30 is the maximum # of enemies I consider so far.
	i = 0; // re-use iterator
	// create an Enemy data of AI
	var enemy1_data:PlayerData = new PlayerData();
	enemy1_data.coord = Vector3(5,4,0);
	enemies[i++] = enemy1_data;
	
	calculateScore(ai_data, enemies);
}

function calculateScore (ai_data:PlayerData, enemies:PlayerData[]) {
	Debug.Log(ai_data);
	//TODO add check point for `is_standby` and `reachable_coords`
	//TODO scenarios (in order): 1. if enemy is within reachable_coords; 2. if enemy is out of reachable_coords;
	var scores = new Vector4[ai_data.reachable_coords.Length];
	var i:int;
	for (i = 0; i < ai_data.reachable_coords.Length; i++) {
		var current_reachable_coord = ai_data.reachable_coords[i];
		scores[i] = current_reachable_coord; // convert Vector3 to Vector4 implicitly.
		var attack_detail = AttackDetail.buildFromParams(1, current_reachable_coord, 'scope', 3, 'single', 1); // TODO need to think over what id is for.
		Debug.Log(attack_detail.start_coords);
		
		
		// evaluate attack score
		// get attack coords
//		attackCoords()
//		attackScore()
	}
	Debug.Log(scores);
}


/*
	start_coord: the first/center coord that gets attacked.
	attack_pattern: `single`, `line`, `scope`
	attack_scope: counted with the start_coord included.
*/
function attackCoords (start_coord:Vector3, attack_pattern:String, attack_scope:int, attack_direction: Vector3) : Vector3[]{
	var coords:Vector3[];
	if (attack_pattern == 'single') {
		coords = new Vector3[1];
		coords[0] = start_coord;
	}
	if (coords == null) {
		coords = new Vector3[0];
	}
	return coords;
}
function attackScore (attack_coords:Vector3[], enemies:PlayerData[]) {
	var i:int;
	for (i = 0; i < attack_coords.Length; i++) {
		
	}
	var a = Vector3(2, 2, 1);
	var b = Vector3(2, 2, 1);
	var c = a == b;
	Debug.Log(c);
	
}



