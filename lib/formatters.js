export function formatarData(dataString) {
  if (!dataString) return "";
  const data = new Date(dataString);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(data);
}