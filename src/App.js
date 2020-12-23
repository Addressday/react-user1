import React from 'react';
import Routes from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { Navbar, Nav} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";

function NavbarControl() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            홈
          </Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/mykeyword">
          <Navbar.Brand className=" text-muted">
          나의 키워드
          </Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/mykeyword_group">
          <Navbar.Brand className=" text-muted">
          나의 키워드 그룹
          </Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/mykeyword_create">
          <Navbar.Brand className=" text-muted">
          키워드 생성
          </Navbar.Brand>
        </LinkContainer>

        <LinkContainer to="/mykeyword_group_create">
          <Navbar.Brand className=" text-muted">
          키워드 그룹 생성
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          <LinkContainer to="/myinfo">
          <Nav.Link>회원정보</Nav.Link>
          </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>회원가입</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>로그인</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default NavbarControl;
