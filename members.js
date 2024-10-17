function skillsMember()
{
    var members = [
        { name: "John", skills: ["JavaScript", "React"] },
        { name: "Jane", skills: ["JavaScript", "Angular"] }
    ];

    for (var member of members) {
        var skills = member.skills;
        console.log(member.name + " knows " + skills.join(", "));
    }
}