/*
 * @Author: fantiga
 * @Date: 2022-12-13 20:53:04
 * @LastEditTime: 2022-12-17 19:19:18
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/src/pages/Index.tsx
 */

import { FC, useState } from 'react';

import Box from '@mui/material/Box';

import Query from '@components/Query';
import Result from '@components/Result';

const Index: FC = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <Box sx={{ m: '2em' }}>
        <Query getKeyword={(keyword) => setKeyword(keyword)} />
      </Box>
      <Box sx={{ m: '2em' }}>
        <Result keyword={keyword} />
      </Box>
    </>
  );
};

export default Index;
