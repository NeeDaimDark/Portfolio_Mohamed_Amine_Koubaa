const asset = (file) => process.env.PUBLIC_URL + "/img/portfolio/" + file;
const sequence = (folder, from, to, extension) =>
  Array.from({ length: to - from + 1 }, (_, index) => asset(`${folder}/${from + index}.${extension}`));

export const projectCategories = ["MOBILE", "BOTS", "GAMES", "VR", "ML"];

export const projects = [
  {
    key: "CHAT",
    title: "Chat App",
    category: "MOBILE",
    media: [...sequence("ChatApp", 1, 3, "jpg"), asset("ChatApp/4.mp4"), asset("ChatApp/5.mp4")],
  },
  {
    key: "PLACES",
    title: "Favorite Places",
    category: "MOBILE",
    media: [...sequence("FavPlaces", 1, 5, "jpg"), asset("FavPlaces/3.mp4")],
  },
  {
    key: "NUVIO",
    title: "Nuvio",
    category: "MOBILE",
    media: sequence("Novio", 0, 11, "png"),
  },
  {
    key: "MEALS",
    title: "Meals App",
    category: "MOBILE",
    media: [...sequence("MealsApp", 1, 4, "jpg"), asset("MealsApp/0.mp4")],
  },
  {
    key: "EXPENSES",
    title: "Expenses App",
    category: "MOBILE",
    media: [...sequence("ExpansesApp", 1, 4, "jpg"), asset("ExpansesApp/0.mp4")],
  },
  {
    key: "SHOPPING",
    title: "Shopping List App",
    category: "MOBILE",
    media: [...sequence("ShoppingListApp", 1, 3, "jpg"), asset("ShoppingListApp/0.mp4")],
  },
  {
    key: "QUIZ",
    title: "Quiz App",
    category: "MOBILE",
    media: [...sequence("QuizApp", 1, 3, "jpg"), asset("QuizApp/1.mp4")],
  },
  {
    key: "DICE",
    title: "Dice Driven Journey",
    category: "GAMES",
    media: [...sequence("DiceDriven", 0, 16, "png"), asset("DiceDriven/trailer.mp4")],
  },
  {
    key: "HAVEN",
    title: "Haven",
    category: "VR",
    media: [...sequence("Haven", 0, 11, "png"), asset("Haven/trailer.mp4")],
  },
  {
    key: "MUSIC",
    title: "Music Genre Recognition",
    category: "ML",
    media: sequence("MusGenRec", 0, 21, "png"),
  },
];
