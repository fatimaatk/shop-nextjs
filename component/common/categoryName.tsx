//Méthode category Name
const category = (name: string) => {
  if (name.includes("apple")) {
    return "Apple";
  } else if (name.includes("huawei")) {
    return "Huawei";
  } else if (name.includes("lg")) {
    return "LG";
  } else if (name.includes("samsung")) {
    return "Samsung";
  } else if (name.includes("sony")) {
    return "/Sony";
  }
};

export default category;
