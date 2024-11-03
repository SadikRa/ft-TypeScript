{
  //Constraints in typescript

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "next level web developer";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "zoro",
    email: "zoro@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 333,
    name: "sanji",
    email: "sanji@gmail.com",
    hasWatch: "apple watch",
    devType: "NLWD",
  });

  const student3 = addCourseToStudent({
    id: 22,
    name: "luffy",
    email: "luffy@gmail.com",
  });

  //
}
