import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function ReorderableItem({ children, selected, id, ...props }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...props}>
      <div className="d-flex align-items-center">
        <div {...attributes} {...listeners}>
          ::: &nbsp;
        </div>
        {children}
      </div>
    </div>
  );
}

export default ReorderableItem;
