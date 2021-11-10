import oddOccurences from "./oddOccurences";

const favourites = [
  {
    id: 58,
    name: "Aayan",
    sex: "m",
  },
  {
    id: 89,
    name: "Abdul",
    sex: "m",
  },
  {
    id: 69,
    name: "Aashi",
    sex: "f",
  },
  {
    id: 147,
    name: "Aida",
    sex: "f",
  },
  {
    id: 82,
    name: "Aharon",
    sex: "m",
  },
  {
    id: 58,
    name: "Aayan",
    sex: "m",
  },
  {
    id: 58,
    name: "Aayan",
    sex: "m",
  },
  {
    id: 69,
    name: "Aashi",
    sex: "f",
  },
  {
    id: 82,
    name: "Aharon",
    sex: "m",
  },
  {
    id: 147,
    name: "Aida",
    sex: "f",
  },
  {
    id: 154,
    name: "Agata",
    sex: "f",
  },
  {
    id: 47,
    name: "Aditi",
    sex: "f",
  },
  {
    id: 7,
    name: "Abbas",
    sex: "m",
  },
];

test("Odd amount of favourites:", () => {
  expect(oddOccurences(favourites, "Abbas")).toBe(true);
});

test("Even amount of favourites:", () => {
  expect(oddOccurences(favourites, "Aashi")).toBe(false);
});
