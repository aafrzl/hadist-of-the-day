import { authorMapper } from "@/lib/hadist";

export const useHadist = () => {
  const { author, min, max, filename } = authorMapper("abu-daud");
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  const data = filename[randomNumber];

  return {
    id: data?.number as number,
    hadist: data?.id as string,
    author: author,
  };
};
