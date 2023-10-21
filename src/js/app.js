export default function retrieveSpecialAttacks(obj) {
  const { special } = obj;
  const specialAttacks = Array.from(Object.values(special));
  specialAttacks.forEach(specialAttack => {
    if (!specialAttack.description) {
        specialAttack.description = 'Описание недоступно';
    }
  })
  return specialAttacks;
}