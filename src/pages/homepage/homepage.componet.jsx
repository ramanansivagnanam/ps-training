import React from "react";
import PageMenuContainer from "../../components/page-menu-container/pageMenuContainer";
import { HomePageContainer } from "./homepage.styled";

export default function Homepage() {
  return (
    <>
      <HomePageContainer>
       <PageMenuContainer />
      </HomePageContainer>
    </>
  );
}
