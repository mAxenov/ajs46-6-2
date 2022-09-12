export default function specialAttack(obj) {
  for (let i = 0; i < obj.special.length; i++) {
    if (!('description' in obj.special[i])) {
      obj.special[i].description = 'Описание недоступно';
    }
  }
  return [...obj.special];
}
