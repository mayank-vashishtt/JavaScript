// inheritance 
// classes ka bhaichara


class Person{
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    welcome(){
        console.log(`Welcome to ${this.name}`)
    }
}

class student extends Person{
    constructor(name,age,gender,marks){
        super(name,age,gender)
        this.marks = marks
    }

    test(){
        super.welcome()
    }

}

class Teacher{
    constructor(studentstrength){
        this.studentstrength = studentstrength
    }

}

let student1 = new student('Aman',18,'M',99)
student1.welcome()