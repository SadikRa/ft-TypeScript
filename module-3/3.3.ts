{
  // Type guard using typeof & in

  type alpha = string | number;

  const add = (param1: alpha, param2: alpha): alpha => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  console.log(result1);

  type NormalUser = {
    name: string;
  };

  //   in guard

  type AdminUse = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUse) => {
    if ("role" in user) {
      console.log("admin user");
    } else {
      console.log("normal user");
    }
  };

  const normalUser: NormalUser = {
    name: "sadik",
  };

  const adminUser: NormalUser = {
    name: "boss",
  };

  getUser(normalUser)

  ///
}
