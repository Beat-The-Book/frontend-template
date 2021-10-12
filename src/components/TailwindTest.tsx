import React from "react";

interface TailwindTestProps {}

const TailwindTest: React.FC<TailwindTestProps> = () => (
  <div className="text-green-500">Tailwind is working if this is green</div>
);

export default TailwindTest;
