import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { DataGrid } from "@material-ui/data-grid";
import { randomCreatedDate } from "@material-ui/x-grid-data-generator";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  tableHead: {
    height: 44,
  }
}));

const columns = [
  { field: "id", headerName: "NO", width: 70 },
  {
    field: "title",
    headerName: "제목",
    type: "string",
    width: 400,
  },
  {
    field: "content",
    headerName: "내용",
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
];

const rows = [
  {
    id: 1,
    title: "챔스 16강 대진표 추첨, '메시vs네이마르' 빅매치",
    content: "리오넬 메시(33·FC바르셀로나)가 ‘축구 황제’ 펠레를 넘어 새로운 기록의 주인공이 됐다.",
    created: randomCreatedDate(),
    url: "https://blog.naver.com/bakmhljh/222179524786",
    now_rank: 24,
  },
  {
    id: 2,
    title: "'41골 호날두' 유벤투스, 파르마에 4대0 대승...선두와 승점 1점차",
    content: "리오넬 메시(33·FC바르셀로나)가 ‘축구 황제’ 펠레를 넘어 새로운 기록의 주인공이 됐다.",
    created: randomCreatedDate(),
    url:
      "https://post.naver.com/viewer/postView.nhn?volumeNo=30255562&memberNo=863&vType=VERTICAL",
  },
  {
    id: 3,
    title: "챔스 16강 대진표 추첨, 메시vs네이마르 빅매치",
    content: "리오넬 메시(33·FC바르셀로나)가 ‘축구 황제’ 펠레를 넘어 새로운 기록의 주인공이 됐다.",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
  },
  {
    id: 4,
    title: "챔스 16강 대진표 추첨, 메시vs네이마르 빅매치",
    content: "리오넬 메시(33·FC바르셀로나)가 ‘축구 황제’ 펠레를 넘어 새로운 기록의 주인공이 됐다.",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
  },
  {
    id: 5,
    title: "챔스 16강 대진표 추첨, 메시vs네이마르 빅매치",
    content: "리오넬 메시(33·FC바르셀로나)가 ‘축구 황제’ 펠레를 넘어 새로운 기록의 주인공이 됐다.",
    created: randomCreatedDate(),
    url: "https://www.naver.com/https://www.naver.com/",
  },
];

const cards = [1];

export default function Home() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      나의 키워드 갯수
                    </Typography>
                    <Typography align="center">50</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      내 키워드 보기
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      나의 키워드 그룹 갯수
                    </Typography>
                    <Typography align="center">10</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      내 키워드 그룹 보기
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Typography variant="h6" align="center" gutterBottom>
        최고 상승이 높은 키워드
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        <div style={{ height: 400 , width: "100%" }}>
          <DataGrid className={classes.tableHead}
            rows={rows}
            columns={columns}
            pageSize={10}
            checkboxSelection
          />
        </div>
      </Typography>


      </main>


      

    </React.Fragment>
  );
}
