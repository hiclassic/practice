var student = {
    name: "Rahim", age: 25, hometown: "Dhaka"
}
console.log(student);
console.log(student["name"]);
console.log(student["age"]);
console.log(student["hometown"]);
console.log(student.name);
console.log(student.age);
console.log(student.hometown);

student["occupation"] = "Teacher";
console.log(student);
student["Road No:"] = "3/D kalabagan, Dhanmondir";
console.log(student);
delete student.hometown;
console.log(student);

student = {};
console.log(student);

student.name = "Karim";
student.age = 29;
student.hometown = "nilphamari";
student.upazila = "kishoregonj";
student.post = "ranachandi";
student.post_code = "ranachandi";
student.occupation = "student";
console.log(student);

