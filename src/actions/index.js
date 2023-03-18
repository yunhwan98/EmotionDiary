export const onInit = (data) => {
  return {
    type: "INIT",
    data,
  };
};

export const onCreate = (dataId, date, content, emotion) => ({
  type: "CREATE",
  data: {
    id: dataId,
    date: new Date(date).getTime(),
    content,
    emotion,
  },
});

export const onRemove = (targetId) => ({
  type: "REMOVE",
  targetId,
});

export const onEdit = (targetId, date, content, emotion) => ({
  type: "EDIT",
  data: {
    id: targetId,
    date: new Date(date).getTime(),
    content,
    emotion,
  },
});
