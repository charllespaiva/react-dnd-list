import React, { useState } from 'react';
import ReorderableGrid from './ReorderableGrid';
import Item from './ReorderableItem';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Alpha', selected: false },
    { id: 2, name: 'Bravo', selected: false },
    { id: 3, name: 'Charlie', selected: false },
    { id: 4, name: 'Delta', selected: false },
    { id: 5, name: 'Echo', selected: false },
    { id: 6, name: 'Foxtrot', selected: false },
  ]);

  return (
    <div>
      <ReorderableGrid
        id="broken"
        items={items}
        onReorder={(newItems) => {
          setItems(newItems);
        }}
      >
        {items.map((item) => (
          <Item id={item.id} key={item.id}>
            {item.name}
          </Item>
        ))}
      </ReorderableGrid>
    </div>
  );
};

export default App;
