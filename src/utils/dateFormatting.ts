export const formatDateTime = (timeIso: string) => {
  return new Date(timeIso).toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
