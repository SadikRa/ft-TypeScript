{
  ///

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  function calculateAverageGrade(std: Student): number {
    const totalGrade = std.grades.reduce((acc, grades) => acc + grades, 0);
    return totalGrade / std.grades.length;
  }

  console.log(
    calculateAverageGrade({ name: "sadik", age: 20, grades: [20, 30, 20, 44] })
  );

  ///
}
