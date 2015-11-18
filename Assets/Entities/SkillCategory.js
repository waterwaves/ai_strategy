#pragma strict

class SkillCategory {
	var id :int;
	var name :String;
	var trigger_coords :Vector3[];
	var perform_coords :Vector3[];

	function SkillCategory (id:int, name:String, trigger_coords:Vector3[], perform_coords:Vector3[]) {
		this.id = id;
		this.name = name;
		this.trigger_coords = trigger_coords;
		this.perform_coords = perform_coords;
	}

	static function readFromCSV (data:String[]) :SkillCategory{

	}
}