export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You don't have any packing items in the list, add it </em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have completed your packing, you're ready to go ✈️ "
          : `💼You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
