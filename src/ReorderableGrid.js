import React from 'react';
import { SortableContext } from '@dnd-kit/sortable';
import ReorderableContainer from './ReorderableContainer';

const ReorderableGrid = ({ children, id, items, onReorder }) => {
  return (
    <ReorderableContainer items={items} onReorder={onReorder}>
      <SortableContext id={id} items={items}>
        <div style={{ background: 'red', padding: 20 }}>{children}</div>
      </SortableContext>
    </ReorderableContainer>
  );
};

export default ReorderableGrid;
