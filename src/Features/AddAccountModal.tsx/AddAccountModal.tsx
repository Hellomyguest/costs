import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, Modal } from "antd";
import { useState } from "react";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
  hidden: boolean;
}

export const AddAccountModal = ({ middle }: { middle?: boolean }) => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);

  console.log(formValues);

  const onCreate = (values: Values) => {
    console.log("Received values of form: ", values);
    setFormValues(values);
    setOpen(false);
  };

  return (
    <>
      <Button
        color="primary"
        variant={middle ? "outlined" : "text"}
        shape={middle ? "circle" : undefined}
        size={middle ? "middle" : "large"}
        icon={middle ? <PlusOutlined /> : <PlusCircleOutlined />}
        onClick={() => setOpen(true)}
      >
        {middle ? undefined : "Добавить счет"}
      </Button>
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
        <Form.Item name="title" help="Название счета">
          <Input />
        </Form.Item>
        <Card>
          <Form.Item
            name="bank"
            label="Банк"
            help="Название Банка, в котором открыт счет"
          >
            <Input />
          </Form.Item>
          <Form.Item name="currency" label="Валюта счета">
            <Input />
          </Form.Item>
          <Form.Item name="balance" label="Начальный баланс">
            <Input />
          </Form.Item>
          <Form.Item name="hidden">
            <Checkbox>Скрытый</Checkbox>
          </Form.Item>
        </Card>
      </Modal>
    </>
  );
};
