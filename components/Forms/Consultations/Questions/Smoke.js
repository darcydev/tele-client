import { Form, Radio } from 'antd';

export const SmokeQuestion = () => {
  return (
    <Form.Item
      label='Do you smoke?'
      name='smoke'
      rules={[{ required: true, message: 'Required' }]}
    >
      <Radio.Group>
        <Radio.Button value='yes'>Yes</Radio.Button>
        <Radio.Button value='no'>No</Radio.Button>
        <Radio.Button value='sometimes'>Sometimes</Radio.Button>
      </Radio.Group>
    </Form.Item>
  );
};
