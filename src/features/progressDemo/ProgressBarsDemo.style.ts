import styled from "styled-components";
import breakpoint from "./Common/breakpoints";

export const StyledContainerDiv = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 5em;
  @media only screen and ${breakpoint.device.lg} {
    width: 25%;
  }
`;

export const StyledProgressDiv = styled.div`
  color: #000;
  background-color: #f1f1f1;
  text-align: center;
`;
export const StyledProgressBarDiv = styled.div<{
  width: number;
  limit: number;
}>`
  color: #fff;
  background-color: ${(props: any) =>
    props.width < props.limit ? "#2196f3" : "#FF0000"};
  margin-bottom: 2rem;
  width: ${(props: any) => (props.width < 100 ? props.width : 100)}%;
`;

export const StyledProgressDropDownDiv = styled.div`
  display: inline-block;
`;
export const StyledProgressButtonsDiv = styled.div`
  display: inline-block;
  position: relative;
  top: -1.8em;
  left: 3rem;
  @media only screen and ${breakpoint.device.sm} {
    top: 0rem;
  }
`;

export const StyledProgressBarHeading = styled.h2`
  width: 100%;
  white-space: nowrap;
  font-weight: 700;
  text-align: center;
`;
export const StyledProgessButtons = styled.button`
  margin-left: 1rem;
`;
export const StyledProgressBarParagraph = styled.p`
  color: #000000;
`;
