import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchProgressData, changeProgressBar } from "./ProgressBarsDemoSlice";
import {
  StyledContainerDiv,
  StyledProgressDiv,
  StyledProgressBarDiv,
  StyledProgressDropDownDiv,
  StyledProgressButtonsDiv,
  StyledProgressBarHeading,
  StyledProgessButtons,
  StyledProgressBarParagraph,
} from "./ProgressBarsDemo.style";
import { AppDispatch, RootState } from "../../app/store";

export function ProgressBarsDemo() {
  const {
    bars,
    buttons: barButtons,
    maxLimit,
  } = useSelector((state: RootState) => state.progressBarData);

  const dispatch = useDispatch<AppDispatch>();
  const [selectedProgressBar, setSelectedProgressBar] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchProgressData());
  }, []);

  const getBarValue = (barValue: number) => {
    return barValue > 0 ? barValue : 0;
  };

  const handleDrodownChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    setSelectedProgressBar(Number(event.target.value));
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(
      changeProgressBar(selectedProgressBar, Number(event.currentTarget.value))
    );
  };

  return (
    <StyledContainerDiv>
      <StyledProgressBarHeading>Progress Bars Demo</StyledProgressBarHeading>
      {bars?.map((barValue, index) => (
        <StyledProgressDiv key={index} data-testid="progressbars">
          <StyledProgressBarDiv width={getBarValue(barValue)} limit={maxLimit}>
            <StyledProgressBarParagraph>
              {getBarValue(barValue)}%
            </StyledProgressBarParagraph>
          </StyledProgressBarDiv>
        </StyledProgressDiv>
      ))}
      <StyledProgressDropDownDiv>
        <select onChange={handleDrodownChange}>
          {bars?.map((bar, index) => (
            <option key={index} value={index}>
              #progress{index + 1}
            </option>
          ))}
        </select>
      </StyledProgressDropDownDiv>
      <StyledProgressButtonsDiv>
        {barButtons?.map((buttonValue, index) => (
          <StyledProgessButtons
            key={index}
            value={buttonValue}
            onClick={handleButtonClick}
          >
            {buttonValue}
          </StyledProgessButtons>
        ))}
      </StyledProgressButtonsDiv>
    </StyledContainerDiv>
  );
}
