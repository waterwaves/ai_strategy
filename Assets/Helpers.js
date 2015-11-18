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
}
