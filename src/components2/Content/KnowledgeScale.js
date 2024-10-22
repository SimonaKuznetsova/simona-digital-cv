import React from 'react';

const KnowledgeScale = ({ level }) => {
  const validLevel = Math.max(1, Math.min(level, 10));

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          style={{
            border: '0.5px solid #332032',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: index < validLevel ? '#d98cd3' : '#ccc',
          }}
        ></div>
      ))}
    </div>
  );
};

export default KnowledgeScale;