import axios from 'axios';
import { useEffect, useState } from 'react';
import { Layout } from '../component/layout';
import { TItem } from '../types/itemType';
import { CustomButton } from '../component/customButton';
import { CustomForm } from '../component/customForm';

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
        description: newItemDescription,
        pictureUrl: newItemPictureUrl,
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
        <CustomForm
          buttonName="Add new item"
          onValidateClick={onAddItem}
          fields={[
            { name: 'Name', onFieldUpdate: (value) => setNewItemName(value), value: newItemName },
            {
              name: 'Description',
              onFieldUpdate: (value) => setNewItemDescription(value),
              value: newItemDescription,
            },
            { name: 'Picture url', onFieldUpdate: (value) => setNewItemPictureUrl(value), value: newItemPictureUrl },
          ]}
        />

        <section className="">
          <span>Item count: {items.length}</span>

          <ul className="w-1/2">
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <>
                  {`Item ${idx}: [name: ${item.name}, description: ${item.description}, pictureUrl: ${item.pictureUrl}]`}

                  <div>
                    <CustomButton label="Update" />
                    <CustomButton label="Remove" />
                  </div>
                </>
              </li>
            ))}
          </ul>
        </section>
      </>
    </Layout>
  );
};
