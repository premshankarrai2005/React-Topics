import React from 'react';
import Child from './Child';

export default function Parent() {
  return (
    <div>
      <h2>This is the Parent Component of child component. no need to touch this one directly we can use in the child Component.</h2>
      <Child />
    </div>
  );
}
