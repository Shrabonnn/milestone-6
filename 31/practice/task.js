const university = {
  name: "Green University",
  established: 2003,
  private: true,

  location: {
    city: "Dhaka",
    country: "Bangladesh",
    campus: {
      area: "Narshingdi",
      size: "50 acres"
    }
  },

  departments: [
    {
      name: "Computer Science",
      head: "Dr. Rahman",
      students: [
        {
          id: 101,
          name: "Rakib",
          age: 22,
          cgpa: 3.85,
          skills: ["JavaScript", "React", "Node.js"],
          address: {
            city: "Dhaka",
            area: "Mirpur"
          }
        },
        {
          id: 102,
          name: "Nadia",
          age: 21,
          cgpa: 3.95,
          skills: ["Python", "Django", "SQL"],
          address: {
            city: "Khulna",
            area: "Sonadanga"
          }
        }
      ]
    },

    {
      name: "Business Administration",
      head: "Dr. Karim",
      students: [
        {
          id: 201,
          name: "Sakib",
          age: 23,
          cgpa: 3.6,
          skills: ["Excel", "Marketing", "Communication"],
          address: {
            city: "Rajshahi",
            area: "Boalia"
          }
        }
      ]
    }
  ],

  clubs: {
    programming: {
      president: "Rakib",
      members: 120
    },
    robotics: {
      president: "Nadia",
      members: 80
    }
  },

  library: {
    totalBooks: 25000,
    open: true,
    sections: [
      "Programming",
      "Business",
      "Mathematics",
      "Physics"
    ]
  },

  cafeteria: null
};

console.log("Keys:")
const keys = Object.keys(university);
console.log(keys)

console.log("Department Name: ")
for (const deptName of university.departments){
    console.log(deptName.name)
   
}

console.log("Student Name: ")
for (const deptName of university.departments){
    for(const studentName of deptName.students){
        //console.log(studentName.name , studentName.cgpa ,studentName.address.city)
        // if(studentName.cgpa>3.8){
        //     console.log("Greater than 3.8: "+studentName.name + studentName.cgpa )
        

        // }

        for(const skill of studentName.skills){
            console.log(skill)
        }
    }
   
}