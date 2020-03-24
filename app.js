console.log('%cMy Console Resume', 'color: red; background: #0091; padding: 5px; border: 2px solid black;');
var name = "Guido Magaldi";
var UpperCase = name.toUpperCase();
console.log("Name: " + UpperCase)
var prof = "Career: Doctor | full stack student";
console.log(prof)
// Description : Finished medicine school in Argentina, but decided to take another path on my life, I love programming!
var description = "Description : Finished medicine school in Argentina, but decided to take another path on my life, I love programming!"
console.log(description)
var interesTitle = "My interests";
console.log(interesTitle)


var interest = ["* Programming", '* Music', '* Soccer']
for (let i = 0; i < interest.length; i++) {
    console.log(interest[i]);
    
}
var exp = "My Previous experience"
console.log(exp)
function displayPosition(companyName, jobTitle, description) {
    console.log("*" + companyName + "-" + jobTitle +"-" + description) 
}
displayPosition("Aspen Ski Co", " Ski instructor", " Tought people how to ski")
displayPosition('San Carlos', 'Doctor', 'Worked as a radiologist')
displayPosition('Australia demo', 'Demolition', 'worked as a demolition worker')


var skills = "My Skills"
console.log(skills)
function displaySkill(skillName, boolean) {
    if (boolean == true) {
        console.log("*" + "BAM " + skillName)
    }else{
        console.log('*' + skillName)
    }
        
    }
    
displaySkill("Kitesurfing", true)
displaySkill("Ski", true)
displaySkill("English", false)
displaySkill("Spanish", false)
displaySkill("Radiologist", true)
// My skills:
// BAM Kitesurfing
// BAM Ski
// English
// Spanish
// BAM radiologist


//You must have a function called displaySkill that takes parameters for
// skill name and a boolean value for whether the skill is cool (true/false). 
//Inside the function, you should print BAM: in front of the skill name only if the skill is cool.
// If you don't have any cool skills, make some up.
