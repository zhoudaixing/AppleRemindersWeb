const validKeys = ['manual', 'date', 'createdTime', 'priority', 'title']

export const listSortRule = (key) => {
  if(!validKeys.includes(key)) throw new Error('invalid sort keyword')
  const rule = (a, b) => {
    if ((a.completed && b.completed) || (!a.completed && !b.completed)) {
      if (a[key] > b[key]) return 1;
      if (a[key] === b[key]) return 0;
      if (a[key] < b[key]) return -1;
    }
    if (a.completed) return 1;
    if (b.completed) return -1;
  };
  return rule;
};

export const getListWithoutItem = (list, itemId) => ([
  ...list.filter((elment) => elment.id !== itemId)
])