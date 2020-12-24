import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { randomCreatedDate } from "@material-ui/x-grid-data-generator";

const columns = [
  { field: "id", headerName: "NO", width: 70 },
  { field: "group", headerName: "그룹", width: 130 },
  { field: "keyword", headerName: "키워드", width: 130 },
  {
    field: "category",
    headerName: "분류",
    type: "string",
    width: 90,
  },
  {
    field: "created",
    headerName: "등록일",
    type: "date",
    width: 130,
  },

  {
    field: "url",
    headerName: "URL",
    sortable: false,
    width: 300,
  },
  {
    field: "keyword_amount",
    headerName: "등록수",
    type: "number",
    width: 80,
  },
];

const rows = [
  {
    id: 1,
    group: "축구",
    keyword: "호날두",
    category: "블로그",
    created: randomCreatedDate(),
    url: "https://blog.naver.com/bakmhljh/222179524786",
    keyword_amount: 150,
  },
  {
    id: 2,
    group: "축구",
    keyword: "호날두",
    category: "포스트",
    created: randomCreatedDate(),
    url:
      "https://post.naver.com/viewer/postView.nhn?volumeNo=30255562&memberNo=863&vType=VERTICAL",
    keyword_amount: 150,
  },
  {
    id: 3,
    group: "축구",
    keyword: "호날두",
    category: "블로그",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
    keyword_amount: 150,
  },
  {
    id: 4,
    group: "축구",
    keyword: "호날두",
    category: "블로그",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
    keyword_amount: 150,
  },
  {
    id: 5,
    group: "축구",
    keyword: "호날두",
    category: "포스트",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
    keyword_amount: 150,
  },
];

export default function MygroupCreate() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
