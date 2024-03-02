//write an basic self introduction

//personal information
const perName: string = "Mehak Alamgir"
const age: number = 27
const education: string [] = ["Bachelor/Master In Power Electric As A Gold Medalist"]
const skills: string [] = ["HTML","CSS","JAVASCRIPT","PYTHON","TYPESCRIPT"]
const experience: string = "less then 6 months"
const project: string [] = ["hello world","calculator","45 assignments of node js and typescript"]

//print personal information
console.log(`My name is ${perName}, and I am ${age} years old.`)
console.log(`I am a self-taught developer with educational background as ${education}.`)
console.log("I have skills in :")
skills.forEach(skills => console.log("- " + skills))
console.log(`I have  ${experience} experience in web developement field.`)
console.log("Some of my projects includes")
project.forEach(project => console.log("* " + project))

/conclusion
console.log("Thank you for getting to know me as a web developer.. please do like share and subscribe to my youtube channel for more interesting videos regarding typescript")
