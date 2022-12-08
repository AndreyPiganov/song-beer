const CountBottle = (count) => {
  const remainder = count % 10;
  if ((remainder === 1) && (count !== 11)) {
    return `${count} бутылка`;
  }
  if ((remainder >= 2) && (remainder <= 4) && (!((count >= 12) && (count <= 14)))) {
    return `${count} бутылки`;
  }
  return `${count} бутылок`;
};
const final = () => {
  console.log('Нет больше бутылок пива на стене!');
  console.log('Нет бутылок пива на стене!');
  console.log('Нет бутылок пива!');
  console.log('Пойди в магазин и купи ещё');
  console.log('99 бутылок пива на стене!');
};
export { CountBottle, final };
