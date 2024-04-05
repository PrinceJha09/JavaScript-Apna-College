let DATA = "INFORMATION";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data is : ", DATA);
    }
}

let student1 = new User("Prince", "pkj@mail.com");
let student2 = new User("Jha", "jha@mail.com");

let teacher1 = new User("Abhi", "abhi@colloege.in");

class Admin extends User {
    editData(){
        DATA = "NEW INFORMATION";
    }
}

let admin1 = new Admin("admin", "admin@college.in");