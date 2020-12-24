import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { randomCreatedDate } from "@material-ui/x-grid-data-generator";


const columns = [
  { field: "id", headerName: "NO", width: 70 },
  { field: "keyword", headerName: "키워드", width: 100 },
  {
    field: "title",
    headerName: "제목",
    type: "string",
    width: 200,
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
    field: "now_rank",
    headerName: "현재순위",
    type: "number",
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    keyword: "메시",
    title: "챔스 16강 대진표 추첨, '메시vs네이마르' 빅매치",
    created: randomCreatedDate(),
    url: "https://blog.naver.com/bakmhljh/222179524786",
    now_rank: 24,
  },
  {
    id: 2,
    keyword: "호날두",
    title: "'41골 호날두' 유벤투스, 파르마에 4대0 대승...선두와 승점 1점차",
    created: randomCreatedDate(),
    url: "https://post.naver.com/viewer/postView.nhn?volumeNo=30255562&memberNo=863&vType=VERTICAL",
    now_rank: 12,
  },
  {
    id: 3,
    keyword: "호날두",
    title: "챔스 16강 대진표 추첨, 메시vs네이마르 빅매치",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
    now_rank: 150,
  },
  {
    id: 4,
    keyword: "호날두",
    title: "챔스 16강 대진표 추첨, 메시vs네이마르 빅매치",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
    now_rank: 150,
  },
  {
    id: 5,
    keyword: "호날두",
    title: "챔스 16강 대진표 추첨, 메시vs네이마르 빅매치",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
    now_rank: 150,
  },
];




export default function Mykeyword() {

 
  return (
    <div>
      <div style={{ height: 400, width: "50%" , margin: '200px auto'}} >
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
    </div>

    
  );
}