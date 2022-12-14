/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:53:11
 * @LastEditTime: 2022-12-14 21:28:09
 * @LastEditors: fantiga
 * @Description:
 * @FilePath: /react-github-ts/src/components/Query/index.tsx
 */

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './index.scss';

const Query = (props: any) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Keyword"
        variant="outlined"
        placeholder="Input a keyword to search GitHub"
        sx={{ width: '100%' }}
        onChange={(event) => props.getKeyword(event.target.value)}
      />
    </Box>
  );
};

export default Query;
