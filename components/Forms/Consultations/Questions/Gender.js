import { Form, Radio } from 'antd';

export const GenderQuestion = () => {
  return (
    <Form.Item
      label='Gender at birth'
      name='gender'
      rules={[{ required: true, message: 'Required' }]}
    >
      <Radio.Group>
        <Radio.Button value='male'>Male</Radio.Button>
        <Radio.Button value='female'>Female</Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};
