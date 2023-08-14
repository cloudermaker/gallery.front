import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../component/layout';
import { TItem } from '../types/itemType';
import { CustomButton } from '../component/customButton';

export const Backoffice = (): JSX.Element => {
  const [items, setItems] = useState<TItem[]>([]);

  const [newItemName, setNewItemName] = useState<string>('');
  const [newItemDescription, setNewItemDescription] = useState<string>('');
  const [newItemPictureUrl, setNewItemPictureUrl] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5262/Item');
        setItems(response.data);
      } catch (ex) {
        console.error(ex);
      }
    };

    fetchData();
  }, []);

  const onAddItem = async () => {
    try {
      const response = await axios.post('http://localhost:5262/Item', {
        name: newItemName,
        description: '',
        pictureUrl: '',
      });

      if (response.status === 200) {
        setNewItemName('');
        setNewItemDescription('');
        setNewItemPictureUrl('');
      } else {
        console.log(response.status);
      }
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <Layout>
      <>
        {/* ITEMS */}
        <section>
          <section className="inline-grid">
            <span>
              Item name:
              <input value={newItemName} onChange={(e) => setNewItemName(e.target.value)} required />
            </span>

            <span>
              Description:
              <input value={newItemDescription} onChange={(e) => setNewItemDescription(e.target.value)} required />
            </span>

            <span>
              Picture Url:
              <input value={newItemPictureUrl} onChange={(e) => setNewItemPictureUrl(e.target.value)} required />
            </span>

            <CustomButton label="Add new item" onClick={onAddItem} />
          </section>

          <hr className="my-5" />

          <section className="flex">
            <span>Item count: {items.length}</span>

            <ul>
              {items.map((item, idx) => (
                <li key={idx}>
                  <>
                    {`Item ${idx}: [name: ${item.name}, description: ${item.description}, pictureUrl: ${item.pictureUrl}]`}
                    <CustomButton label="Remove" />
                  </>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section></section>
      </>
    </Layout>
  );
};
