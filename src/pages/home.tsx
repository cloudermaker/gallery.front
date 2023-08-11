import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../component/layout';

type TItem = {
  name: string;
  description: string;
  pictureUrl: string;
};

export const Home = (): JSX.Element => {
  const [newItemName, setNewItemName] = useState<string>('');
  const [items, setItems] = useState<TItem[]>([]);

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

      setNewItemName('');
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <Layout>
      <>
        <section>
          <h1>This is the home</h1>
        </section>

        <section className="flex">
          <span>Item count: {items.length}</span>
          <ul>
            {items.map((item, idx) => (
              <li
                key={idx}
              >{`Item ${idx}: [name: ${item.name}, description: ${item.description}, pictureUrl: ${item.pictureUrl}]`}</li>
            ))}
          </ul>
        </section>

        <section className="flex">
          <span>Item name:</span>
          <input value={newItemName} onChange={(e) => setNewItemName(e.target.value)} required />
          <button onClick={onAddItem}>Add new item</button>
        </section>
      </>
    </Layout>
  );
};
