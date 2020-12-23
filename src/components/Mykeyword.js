import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { randomCreatedDate } from "@material-ui/x-grid-data-generator";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const columns = [
  { field: "id", headerName: "NO", width: 70 },
  { field: "keyword", headerName: "키워드", width: 130 },
  {
    field: "title",
    headerName: "제목",
    type: "string",
    width: 400,
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
    width: 120,
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




export default function DataTable() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        데이터 입력
      </p>
    </div>
  );


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        추가
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

      <div style={{ height: 400, width: "100%" }} >
      <DataGrid rows={rows} columns={columns} pageSize={10} />
    </div>
    </div>
    
  );
}