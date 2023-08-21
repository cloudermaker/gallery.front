import { useEffect, useState } from 'react';
import { Layout } from '../component/layout';
import { TItem } from '../types/itemType';
import axios from 'axios';
import { ItemList } from '../component/itemList';
import { CustomButton } from '../component/customButton';

export const Gallery = (): JSX.Element => {
  const [items, setItems] = useState<TItem[]>([]);
  const [currentItems, setCurrentItems] = useState<TItem[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5262/Item');
        setItems(response.data);
        setCurrentItems(response.data);
      } catch (ex) {
        console.error(ex);
      }
    };

    fetchData();
  }, []);

  const onSearch = (): void => {
    setCurrentItems(items.filter((item) => item.name.toLowerCase().includes(inputSearch)));
  };

  return (
    <Layout>
      <>
        <div className="flex w-1/5">
          <input
            className="form__field"
            placeholder="Search me"
            onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
          />

          <button className="btn" type="submit" onClick={onSearch}>
            Search
          </button>
        </div>

        <section className="">
          <span>Item count: {currentItems.length}</span>

          <ItemList items={currentItems} />
        </section>
      </>
    </Layout>
  );
};
