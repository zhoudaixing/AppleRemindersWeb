import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const createItem = ({ title, notes, list, manual }) => {
  return {
    id: uuidv4(),
    createdTime: dayjs().unix(),
    lastModified: "",
    title: title,
    notes: notes || "",
    url: "",
    date: "",
    time: "",
    tags: [],
    location: "",
    flag: false,
    completed: false,
    priority: 0,
    list,
    subtasks: [],
    images: [],
    manual,
  };
};

/** 
* @param item
* @param diff
*/
export const editItem = (item, diff) => {
  const { title } = diff;
  return {
    ...item,
    title,
    lastModified: dayjs().unix(),
  };
};

export const checkItem = (item, checked) => {
  return {
    ...item,
    completed: checked
  };
};
