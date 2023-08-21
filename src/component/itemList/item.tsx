import { ItemCountByLineTypes } from '.';
import { TItem } from '../../types/itemType';

export const Item = ({
  item,
  itemCountByLine,
}: {
  item: TItem;
  itemCountByLine: ItemCountByLineTypes;
}): JSX.Element => {
  return (
    <div className={itemCountByLine.toString()}>
      <img src={item.pictureUrl || '/default.png'} />

      <span className="p-2 block text-center">{item.name}</span>
    </div>
  );
};
