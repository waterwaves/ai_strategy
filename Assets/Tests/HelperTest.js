#pragma strict

function Start () {
	var skill_categories = SkillCategory.loadSkillCategoriesFromCSV('Assets/Data/skill_categories.csv');
	Debug.Log(skill_categories);
}

function Update () {

}