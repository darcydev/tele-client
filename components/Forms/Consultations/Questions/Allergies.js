import { useState } from 'react';
import { Form, Input, Radio } from 'antd';

export const AllergiesQuestion = () => {
  const [allergies, setAllergies] = useState(false);

  return (
    <>
      <Form.Item
        label='Do you have any allergies?'
        name='allergies'
        rules={[{ required: true, message: 'Required' }]}
        onChange={(e) => setAllergies(e.target.value === 'yes' ? true : false)}
      >
        <Radio.Group>
          <Radio.Button value='yes'>Yes</Radio.Button>
          <Radio.Button value='no'>No</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {allergies && (
        <Form.Item label='Allergies description' name='allergies-desc'>
          <Input.TextArea rows={6} />
        </Form.Item>
      )}
    </>
  );
};
