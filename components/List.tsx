import React from 'react';

class orderlist extends React.Component {
  render() {
    return (
      <ol className='list-none arguments mt-5'>
        <li className='argument'><p>1. Obscures important information.</p></li>
        <li className='argument'><p>2. People can't copy and edit it.</p></li>
      </ol>
    );
  }
}

export default orderlist;
