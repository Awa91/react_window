// Using React Window to Virtualize Large Lists
// There are quite a few ways of using React Window or the react-window library for virtualizing large lists:

// Using Fixed Sized List
// Using Variably Sized List
// Using Grids
// Applying Lazy Loading on Scroll
// Overscanning
// Let’s take a look at each of them and understand how and when to use them with examples.

// When to Use Fixed Sized List?
// In case we have a long, one-dimensional list of equally sized items, then we use FixedSizedList Components. Let’s take a look at the code now.

import React, { useState } from 'react';
 
import * as faker from 'faker';
import { FixedSizeList } from 'react-window';
 
function SApp() {
  const [data, setData] = useState(() =>
    Array.from({ length: 10000 }, faker.animal.bird)
  );
 
  return (
    <main>
      <h1>List of Bird Species</h1>
      <FixedSizeList
        innerElementType='ul'
        itemCount={data.length}
        itemSize={20}
        height={400}
        width={400}
      >
        {({ index, style }) => {
          return <li style={style}>{data[index]}</li>;
        }}
      </FixedSizeList>
    </main>
  );
}
 
export default SApp;
