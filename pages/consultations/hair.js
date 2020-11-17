import Link from 'next/link';
import styled from 'styled-components';
import { Button } from 'antd';

import HairConsultationForm from '../../components/Forms/Consultations/HairConsultationForm';

export default function HairConsultation() {
  return (
    <div className='hair-page-wrp'>
      <h1>Hair Consultation Page</h1>
      <HairConsultationForm />
    </div>
  );
}
