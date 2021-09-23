import React from 'react';
interface Props {
  name: string;
};
export default function Welcome({name}: Props) {
  return (
      <>
      <div className="w-full text-red-900 bg-black h-9" > Hello, Welcome To: 
      {name.length > 0 ? name : "Unknown" }
      </div>
      </>
  );
}
