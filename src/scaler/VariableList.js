import React, { useState } from 'react';
 
import * as faker from 'faker';
import { VariableSizeList } from 'react-window';
 
function VApp() {
  const [data, setData] = useState(() =>
    Array.from({ length: 10000 }, faker.lorem.lines)
  );
 
  // Item size is based on the length of the data.
  const getItemSize = (index) => data[index].length;
 
  return (
    <main>
      <h1>Example for Variable Size List</h1>
      <VariableSizeList
        innerElementType='ul'
        itemCount={data.length}
        itemSize={getItemSize}
        height={400}
        width={400}
      >
        {({ index, style }) => {
          return <li style={style}>{data[index]}</li>;
        }}
      </VariableSizeList>
    </main>
  );
}
 
export default VApp;