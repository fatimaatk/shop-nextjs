//Methode category Id link
const categoryById = (name: string) => {
  if (name.includes("apple")) {
    return "10";
  } else if (name.includes("huawei")) {
    return "40";
  } else if (name.includes("lg")) {
    return "30";
  } else if (name.includes("samsung")) {
    return "20";
  } else if (name.includes("sony")) {
    return "50";
  }
};

export default categoryById;
