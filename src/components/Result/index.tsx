/*
 * @Author: fantiga
 * @Date: 2022-05-23 16:30:01
 * @LastEditTime: 2022-12-17 18:50:13
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/src/components/Result/index.tsx
 */

import { useState, FC, useEffect } from 'react';

import { Avatar, Box, Link } from '@mui/material';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import request from '@/utils/request';
import { TColumn, TResult } from '@utils/interface';

const url = 'https://api.github.com/search/repositories';

const Result: FC<TResult> = (props) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rows, setRows] = useState<GridRowsProp>([]);
  const [rowCount, setRowCount] = useState(0);
  const { keyword } = props;

  const columns: TColumn[] = [
    { field: 'id', headerName: 'ID' },
    { field: 'full_name', headerName: 'Full Name', width: 200 },
    { field: 'language', headerName: 'Language', width: 100 },
    {
      field: 'owner',
      headerName: 'Owner',
      width: 200,
      renderCell: (params) => {
        if (params.value == null) return '';
        return (
          <Link href={params.value.html_url} target="_blank">
            <Grid2 container alignItems="center">
              <Avatar alt={params.value.login} src={params.value.avatar_url} />
              <Box sx={{ marginLeft: 1 }}>{params.value.login}</Box>
            </Grid2>
          </Link>
        );
      },
    },
    {
      field: 'html_url',
      headerName: 'URL',
      width: 300,
      renderCell: (params) => {
        if (params.value == null) return '';
        return (
          <Link href={params.value} target="_blank">
            {params.value}
          </Link>
        );
      },
    },
    { field: 'description', headerName: 'Description', width: 300 },
  ];

  useEffect(() => {
    if (keyword) {
      request({
        /**
         * Because the default page is 0, the request URL here must be increased by 1.
         * Otherwise it will cause a page turning bug.
         * 因为默认的page是0，所以这里的请求地址必须加1，否则会导致翻页的bug。
         */
        url: `${url}?q=${encodeURIComponent(keyword)}&per_page=${pageSize}&page=${
          page + 1
        }`,
        method: 'get',
      })
        .then((res) => {
          setRows(res.items);
          setRowCount(Math.ceil(res.total_count / pageSize));
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [keyword, pageSize, page]);

  return (
    <DataGrid
      autoHeight
      pagination
      paginationMode="server"
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      page={page}
      rowCount={rowCount}
      onPageChange={(newPage) => setPage(newPage)}
      rowsPerPageOptions={[5, 10, 20, 50, 100]}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    />
  );
};
export default Result;
