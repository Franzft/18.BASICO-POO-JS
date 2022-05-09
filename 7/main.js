//reto
class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoJS,
      cursoReact,
      cursoNextJS,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoPython,
      CursoMatematicas,
      CursoExcel,
    ],
});


class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const franz2 = new Student({
  name: "FranzFT",
  username: "FRANZFT",
  email: "FRANZ@FRANZ.com",
  twitter: "franzft",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@FRANZ.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});