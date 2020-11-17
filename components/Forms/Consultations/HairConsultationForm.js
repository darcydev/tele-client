import { Button, Form } from 'antd';

import { GenderQuestion } from './Questions/Gender';
import { SmokeQuestion } from './Questions/Smoke';
import { HeightQuestion } from './Questions/Height';
import { WeightQuestion } from './Questions/Weight';
import { AllergiesQuestion } from './Questions/Allergies';
import { CurrentMoodQuestion } from './Questions/CurrentMood';

export default function HairConsultationForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='vertical'
      name='hair-consultation'
    >
      <GenderQuestion />
      <SmokeQuestion />
      <HeightQuestion />
      <WeightQuestion />
      <AllergiesQuestion />
      <CurrentMoodQuestion />
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
