import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import {
  Link,
  Button,
  Text,
  LargeTitle,
  makeStyles,
  shorthands,
  Title1,
  Title2,
  Title3,
  Subtitle1,
  Subtitle2,
  Body1,
  Caption1,
  Caption2,
} from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.gap("8px"),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});

export const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="https://reactjs.org" target="_blank">
        <img src={reactLogo} alt="React logo" />
      </Link>
      <LargeTitle>Hello World</LargeTitle>
      <Title1>Title1 - semibold, base800</Title1>
      <Title2>Title2 - semibold, base700</Title2>
      <Title3>Title3 - semibold, base600</Title3>
      <Subtitle1>Subtitle1 - semibold, base500</Subtitle1>
      <Subtitle2>Subtitle2 - semibold, base400</Subtitle2>
      <Body1>Body1 - regular, base300</Body1>
      <Caption1>Caption1 - regular, base200</Caption1>
      <Caption2>Caption2 - regular, base100</Caption2>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  );
};
