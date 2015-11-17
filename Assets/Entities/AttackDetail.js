#pragma strict

class AttackDetail {

	var id :int;
	var start_coords :Vector3[]; // all possible relative action start coords (length can be 0)
	var attack_pattern :String;
	var attack_scope :int;
	
		
	static public function buildFromParams (
		id:int, 
		start_coord:Vector3, render_pattern:String, render_scope:int,
		attack_pattern:String, attack_scope:int
	) {
		return new AttackDetail(id, new Vector3[0], start_coord, render_pattern, render_scope, Vector3.zero, attack_pattern, attack_scope);
	}
	
	static public function buildFromGiven (
		id:int,
		start_coords:Vector3[],
		attack_pattern:String, attack_scope:int
	) {
		return new AttackDetail(id, start_coords, Vector3.zero, '', 0, Vector3.zero, attack_pattern, attack_scope);
	}


	//	var start_coord :Vector3; // RENDER start_coords (start point)
	//	var render_pattern :String; // HOW to render start_coords
	//	var render_scope :int; // how MANY to render start_coords, ***including*** start_coord (1)
	//	var render_direction :Vector3; // VERY RARE, render start_coords direction
	function AttackDetail (
		id:int, 
		start_coords:Vector3[], start_coord:Vector3, render_pattern:String, render_scope:int, render_direction:Vector3, // either start_coords or the other 4
		attack_pattern:String, attack_scope:int
	) {
		this.id = id;
		this.attack_pattern = attack_pattern;
		this.attack_scope = attack_scope;
		if (start_coords.Length > 0) {
			this.start_coords = start_coords;
		} else {
			// render start_coords from the attributes
			if (render_pattern == 'scope') {
				// total number = 1 + 2n(n-1)
				var total_number = 1+2*render_scope*(render_scope-1);
				this.start_coords = new Vector3[total_number];
				var start_coords_index = 0;
				var i:int;
				var j:int;
				for(i = -total_number + 1; i < total_number; i++) {
					for(j = -total_number + 1; j < total_number; j++) {
						if (Mathf.Abs(i) + Mathf.Abs(j) < render_scope) {
							this.start_coords[start_coords_index++] = Vector3(i, j, 0) + start_coord;
						}
					}
				}
			}
		}
	}

}