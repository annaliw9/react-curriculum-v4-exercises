const snacks = [
  { name: 'Cheetos', rank: 5 },
  {
    name: 'Caramel Popcorn',
    rank: 4,
  },
  {
    name: 'Granola Bars',
    rank: 3,
  },
  {
    name: 'Yogurt',
    rank: 2,
  },
  {
    name: 'Potato Chips',
    rank: 1,
  },
];

const SnackList = () => {
  const sorted = snacks.toSorted((a, b) => a.rank - b.rank);
  return (
    <div>
      <ol>
        {sorted.map((snack) => (
          <li key={snack.name}>{snack.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default SnackList;
