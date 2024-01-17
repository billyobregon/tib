// TagFilter.jsx
import { useState } from 'react';

const Filter = ({ availableTags, onFilterChange }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const handleTagChange = (event) => {
    const newTag = event.target.value;
    setSelectedTag(newTag);
    onFilterChange(newTag);
  };

  return (
    <div className="tag-filter">
      <label>Filtrar por etiqueta:</label>
      <select value={selectedTag} onChange={handleTagChange}>
        <option value="">Todos</option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
