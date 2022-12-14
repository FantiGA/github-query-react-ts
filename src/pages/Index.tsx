/*
 * @Author: fantiga
 * @Date: 2022-12-13 20:53:04
 * @LastEditTime: 2022-12-14 21:31:42
 * @LastEditors: fantiga
 * @Description:
 * @FilePath: /react-github-ts/src/pages/Index.tsx
 */

import Query from '@components/Query';
import Result from '@components/Result';

import Box from '@mui/material/Box';
// import request from '@/utils/request';

const Index: React.FC = () => {
  const getKeyword = (keyword: any) => {
    console.log(keyword);
  };

  return (
    <>
      <Box
        sx={{
          m: '2em',
        }}
      >
        <Query getKeyword={getKeyword} />
      </Box>
      <Box
        sx={{
          m: '2em',
        }}
      >
        <Result />
      </Box>
    </>
  );
};

export default Index;
