import Link from 'next/link';
import styled from 'styled-components';
import { Button } from 'antd';

export default function Hair() {
  return (
    <div className='hair-page-wrp'>
      <h1>Hair Page</h1>
      <Link href='/consultations/hair'>
        <Button type='primary' size='large'>
          Start assessment
        </Button>
      </Link>
    </div>
  );
}
