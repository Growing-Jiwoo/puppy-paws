"use client";

import * as styles from "./_style/writing.css";
import { useRecoilValue } from "recoil";
import { convertedValuesState } from "@/app/_store/community/atoms";
import { useEffect } from "react";

export default function CompleteButton() {
  const convertedValues = useRecoilValue(convertedValuesState);

  useEffect(() => {
    console.log(convertedValues);
  }, [convertedValues]);

  const isAllTrue = Object.values(convertedValues).every(
    (value) => value === true
  );

  const buttonClassName = isAllTrue
    ? styles.completeActiveButton
    : styles.completeNonActiveButton;

  return <button className={buttonClassName}>완료</button>;
}