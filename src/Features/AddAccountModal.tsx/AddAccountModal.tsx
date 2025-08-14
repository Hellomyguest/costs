import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useState } from "react";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
  hidden: boolean;
}

export const AddAccountModal = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);

  const onCreate = (values: Values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpen(false);
  };

  return (
    <>
      <Button
        color="primary"
        variant="text"
        size="large"
        icon={<PlusCircleOutlined />}
        onClick={() => setOpen(true)}
      >
        Добавить счет
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        open={open}
        title="Добавить новый счет"
        okText="Сохранить"
        cancelText="Отменить"
        okButtonProps={{ autoFocus: true, htmlType: "submit" }}
        onCancel={() => setOpen(false)}
        destroyOnHidden
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ hidden: false }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="hidden"
          className="collection-create-form_last-form-item"
        >
          <Checkbox>Скрытый</Checkbox>
        </Form.Item>
      </Modal>
    </>
  );
};
