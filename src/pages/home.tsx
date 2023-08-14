import { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout } from '../component/layout';
import { TItem } from '../types/itemType';

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <>
        <section>
          <h1>This is the home</h1>
        </section>
      </>
    </Layout>
  );
};
