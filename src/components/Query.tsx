/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:53:11
 * @LastEditTime: 2022-12-17 19:19:29
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/src/components/Query/index.tsx
 */

import { FC, FormEventHandler, useState } from 'react';

import TextField from '@mui/material/TextField';

import { TQuery } from '@utils/interface';

const Query: FC<TQuery> = (props) => {
  const [keyword, setKeyword] = useState('');
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    props.getKeyword(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Keyword"
        variant="outlined"
        placeholder="Press enter to search GitHub"
        fullWidth
        value={keyword}
        onInput={(e) => setKeyword((e.target as HTMLInputElement).value.trim())}
      />
    </form>
  );
};

export default Query;
