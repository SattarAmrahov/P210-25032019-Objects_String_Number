function Person(ad, yas, boy, ceki, seher, ushaqlari = []) {
    this.name = ad;
    this.age = yas;
    this.height = boy;
    this.weight = ceki;
    this.city = seher;
    this.children = ushaqlari;
    this.welcomeMessage = function(){
        return "Welcome " + this.name;
    };
    this.calculateIndex = function(){
        let index = this.weight / (this.height * this.height);
        let message = "";
        if(index > 35){
            message = "Obesity. Ozunu hekime goster";
        } else if(index > 26){
            message = "You are overweight";
        } else {
            message = "You are fit";
        }
        return message;
    }
}

function City(name, population, country) {
    this.name = name;
    this.population = population;
    this.country = country;
}

let personArray = [];

let ayazinUshaqlari = [];
ayazinUshaqlari.push(new Person("Ushaq 1", 1,  new City("Ordubad", 41284, "Naxcivan MR")));
ayazinUshaqlari.push(new Person("Ushaq 2", 2,  new City("Ordubad2", 41284, "Naxcivan MR")));
ayazinUshaqlari.push(new Person("Ushaq 3", 3,  new City("Ordubad", 41284, "Naxcivan MR")));

personArray.push(new Person("Ekber", 18, 1.79, 96, new City("Salyan", 30000, "Azerbaycan")));
personArray.push(new Person("Pervin", 22, 1.75, 58,  new City("Kurdemir", 30000, "Azerbaycan")));
personArray.push(new Person("Heyder", 24,  new City("Salyan", 30000, "Azerbaycan")));
personArray.push(new Person("Ayaz", 28,  new City("Ordubad", 41284, "Naxcivan MR"), ayazinUshaqlari));
personArray.push(new Person("Elnur", 24,  new City("Naxcivan", 30000, "Naxcivan MR")));

console.log(personArray[1].calculateIndex());
