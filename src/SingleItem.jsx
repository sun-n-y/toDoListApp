import { useState } from 'react';

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p style={{ textDecoration: isChecked && 'line-through' }}>{item.name}</p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
