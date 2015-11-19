#pragma strict

class Helpers {
	/*
		Simply parse csv file and render/return String[][]
		- # is a escapor
		- empty line doesn't not count
	*/
	static function csvReader (path:String) :List.<String[]> {
		var fileData : String  = System.IO.File.ReadAllText(path);
		var lines : String[] = fileData.Split("\r"[0]);
				
		var data = new List.<String[]>();
		for (var i = 0; i < lines.Length; i++) {
			if (lines[i].Trim() == '' || lines[i][0] == '#') {
				continue;
			}
			var line_data = (lines[i].Trim()).Split(','[0]);
			for (var j = 0; j < line_data.Length; j++) {
				line_data[j] = line_data[j].Trim();
			}
			data.Add(line_data);
		}
		return data;
	}

	static function skillCategoriesFromCSV (path:String) :Hashtable {
		var data = csvReader(path);
		var skillCategories = new Hashtable();
		for (var skillcategory_data in data) {

			var skillCategory = SkillCategory.readFromCSV(skillcategory_data);
			skillCategories.Add(skillCategory.id, skillCategory);
		}
		return skillCategories;
	}

	/*
		Gets coords from a set of variables, including type, scope, and direction;
		We can also simply pass `coords` through.
		type: 'scope', 'line', etc
		scope: includes the start point (>=1)
	*/
	static function getRelativeCoordsFromParams (coords:Vector3[], type:String, scope:int, direction:Vector3) {
		if (coords.Length > 0) {
			return coords;
		}

		var total_number:int;
		var index:int;
		var relativeCoords :Vector3[];

		if (type == 'scope') {
			// total number = 1 + 2n(n-1)
			total_number = 1+2*scope*(scope-1);
			relativeCoords = new Vector3[total_number];
			index = 0;
			var i:int;
			var j:int;
			for(i = -total_number + 1; i < total_number; i++) {
				for(j = -total_number + 1; j < total_number; j++) {
					if (Mathf.Abs(i) + Mathf.Abs(j) < scope) {
						relativeCoords[index++] = Vector3(i, j, 0);
					}
				}
			}
			return relativeCoords;
		}
		if (type == 'line') {
			total_number = (scope-1)*4;
			relativeCoords = new Vector3[total_number];
			index = 0;
			for (i = 1; i < scope; i++) {
				relativeCoords[index++] = Vector3.up * i;
				relativeCoords[index++] = Vector3.left * i;
				relativeCoords[index++] = Vector3.down * i;
				relativeCoords[index++] = Vector3.right * i;
			}
			return relativeCoords;
		}
	}

	/*
		Parses string into Vector3[];
		A single Vector3 is still in the array.
	*/
	static function getVector3FromString (str:String) {
		return new Vector3[1];
	}
}
