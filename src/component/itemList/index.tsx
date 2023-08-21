import { useState } from 'react';
import { TItem } from '../../types/itemType';
import { Item } from './item';

export enum ItemCountByLineTypes {
  x3 = 'item-3',
  x4 = 'item-4',
}

export const ItemList = ({ items }: { items: TItem[] }): JSX.Element => {
  const [itemCountByLine, setItemCountByLine] = useState<ItemCountByLineTypes>(ItemCountByLineTypes.x3);

  return (
    <>
      <div className="flex">
        Display by:
        <span className="px-2">
          x3:
          <input
            className="ml-1"
            type="radio"
            checked={itemCountByLine === ItemCountByLineTypes.x3}
            onClick={() => setItemCountByLine(ItemCountByLineTypes.x3)}
          />
        </span>
        <span className="px-2">
          x4:
          <input
            className="ml-1"
            type="radio"
            checked={itemCountByLine === ItemCountByLineTypes.x4}
            onClick={() => setItemCountByLine(ItemCountByLineTypes.x4)}
          />
        </span>
      </div>

      <div className="flex flex-wrap">
        {items.map((item, idx) => (
          <Item key={`item_${idx}`} item={item} itemCountByLine={itemCountByLine} />
        ))}
      </div>
    </>
  );
};
