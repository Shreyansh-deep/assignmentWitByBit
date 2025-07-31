const KEY = "skill_up_entries";

export const saveToLocal = (data) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const loadFromLocal = () => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
