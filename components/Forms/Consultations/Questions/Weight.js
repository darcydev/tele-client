import { Form, InputNumber } from 'antd';

export const WeightQuestion = () => {
  return (
    <Form.Item
      label='Weight? (kg)'
      name='weight'
      rules={[{ required: true, message: 'Required' }]}
    >
      <InputNumber size='large' min={0} max={1000} defaultValue={0} />
    </Form.Item>
  );
};
