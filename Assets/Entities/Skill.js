#pragma strict

/*
	By given performer's attributes, Skill renders its attributes:
	@degree: an int that THE performer uses this skill (e.g. 100, 50, 444)
	- positive or negative (positive means gain/recover, negative means lose/hurt)
	- can be random in a certain range (e.g. 90 ~ 110, 45 ~ 55, 400 ~ 488)
	@extra_attrs: TODO a list of other attributes (e.g. "poison", "fire", "enhance attack", "weaken defense")
*/
class Skill {
	var id :int;
	var name :String;
	var skill_category :SkillCategory;
	var degree :int;
	var extra_attrs :String[]; //TODO 
}