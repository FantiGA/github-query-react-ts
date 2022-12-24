/*
 * @Author: fantiga
 * @Date: 2022-12-13 20:53:04
 * @LastEditTime: 2022-12-24 18:53:48
 * @LastEditors: fantiga
 * @FilePath: /github-query-react-ts/src/pages/Index.tsx
 */

import { FC, useState } from 'react';

import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Link, Typography } from '@mui/material';

import Query from '@components/Query';
import Result from '@components/Result';

const Index: FC = () => {
  const [keyword, setKeyword] = useState('');

  return (
    <>
      <Box sx={{ textAlign: 'center', m: '2em' }}>
        <Typography variant="h3" gutterBottom>
          GitHub Query React TS
        </Typography>
      </Box>
      <Box sx={{ m: '2em' }}>
        <Query getKeyword={(keyword) => setKeyword(keyword)} />
      </Box>
      <Box sx={{ m: '2em' }}>
        <Result keyword={keyword} />
      </Box>
      <Grid2 container xs={12}>
        <Grid2 container xs={12} sx={{ textAlign: 'center', m: '1em' }}>
          <Grid2 display="flex" justifyContent="center" alignItems="center" xs={12}>
            <Link href="https://github.com/FantiGA/github-query-react-ts/blob/master/README.md">
              README(English)
            </Link>
            <Link
              href="https://github.com/FantiGA/github-query-react-ts/blob/master/README.zh-CN.md"
              marginLeft={2}
            >
              README(Simplified Chinese)
            </Link>
            <Link href="https://github.com/FantiGA" marginLeft={2}>
              @FantiGA
            </Link>
          </Grid2>
        </Grid2>
        <Grid2 container xs={12} sx={{ textAlign: 'center', m: '1em' }}>
          <Grid2 display="flex" justifyContent="center" alignItems="center" xs={12}>
            Written in React18.2 / Typescript / Material UI.
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Index;
