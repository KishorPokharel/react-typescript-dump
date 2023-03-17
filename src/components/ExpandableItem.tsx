import React, { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}

const ExpandableItem = ({ children, maxChars = 10 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) {
    return <p>{children}</p>;
  }
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <div>
      <p>{text}...</p>
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableItem;
