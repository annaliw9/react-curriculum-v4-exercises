const filterButton = ({ setFilter }) => {
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'pending', label: 'Pending' },
  ];
  return (
    <div>
      {filterOptions.map((option) => (
        <button key={option.value} onClick={() => setFilter(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default filterButton;
