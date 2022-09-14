export default function specialAttack({ special }) {
  return special.map((attack) => ({
    description: 'Описание недоступно',
    ...attack,
  }));
}
