/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:53:11
 * @LastEditTime: 2022-12-16 21:57:38
 * @LastEditors: fantiga
 * @Description:
 * @FilePath: /react-github-ts/src/components/Query/index.tsx
 */

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';

import './index.scss';

const Query = (props: any) => {
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.getKeyword(keyword);
    setKeyword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid sx={{ width: '100%' }}>
          <TextField
            id="outlined-basic"
            label="Keyword"
            variant="outlined"
            placeholder="Press enter to search GitHub"
            fullWidth
            value={keyword}
            onInput={(e) => setKeyword((e.target as HTMLInputElement).value)}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Query;
