import React from "react";
import Link from "next/link";

import { MaintenceContainer } from "./styles";

interface Props {
  pageName: string;
}

const MaintenceWrapper: React.FC<Props> = ({
  pageName,
}) => {
  return (
    <MaintenceContainer>
      <h1>{pageName} under construction</h1>
      <Link href="/">
        <a>Click here to back to home!</a>
      </Link>
    </MaintenceContainer>
  );
};

export default MaintenceWrapper;
