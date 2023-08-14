import { useEffect, useState } from 'react';
import { Layout } from '../component/layout';
import { TItem } from '../types/itemType';
import axios from 'axios';

export const Gallery = (): JSX.Element => {
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

  return (
    <Layout>
      <>
        <section className="flex">
          <input />

          <button>Search</button>
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
      </>
    </Layout>
  );
};
