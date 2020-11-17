import { Form, InputNumber } from 'antd';

export const HeightQuestion = () => {
  return (
    <Form.Item
      label='Height? (cm)'
      name='height'
      rules={[{ required: true, message: 'Required' }]}
    >
      <InputNumber size='large' min={0} max={1000} defaultValue={0} />
    </Form.Item>
  );
};
