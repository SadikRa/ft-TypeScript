{
  //Constraint using key of

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof Vehicle;

  const person: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(
    obj: X,
    key: Y
  ) => {
    return obj[key];
  };

  const User = {
    name: "sadik",
    age: "22",
    address: "ctg",
  };

  const car = {
    model : 'xd',
    year: 2024
  }

  const result1 = getPropertyValue(car, "model");

  //
}
