export const FolderTitle = (name: string) => {
  if (name.includes("apple")) {
    return "products-img/Apple";
  } else if (name.includes("huawei")) {
    return "products-img/Huawei";
  } else if (name.includes("lg")) {
    return "products-img/LG";
  } else if (name.includes("samsung")) {
    return "products-img/Samsung";
  } else if (name.includes("sony")) {
    return "products-img/Sony";
  }
};
