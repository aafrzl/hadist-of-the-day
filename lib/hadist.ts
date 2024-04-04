import hadistAbuDaud from "@/data/hadist/abu-daud";

export const authorMapper = (name: string) => {
  let author = "Abu Daud";
  let min = 0;
  let max = 4590;
  let filename = hadistAbuDaud;

  switch (name) {
    case "abu-daud": {
      author = "Abu Daud";
      min = 0;
      max = 4590;
      filename = hadistAbuDaud;
      break;
    }
    default: {
      author = "Abu Daud";
      min = 0;
      max = 4590;
      filename = hadistAbuDaud;
      break;
    }
  }

  return { author, min, max, filename };
};
