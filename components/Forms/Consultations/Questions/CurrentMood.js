import { Form, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

export const CurrentMoodQuestion = () => {
  return (
    <Form.Item
      label="What's your current mood?"
      name='current-mood'
      rules={[{ required: true, message: 'Required' }]}
    >
      <Rate
        defaultValue={3}
        character={({ index }) => customIcons[index + 1]}
      />
    </Form.Item>
  );
};
