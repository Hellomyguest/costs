import { PlusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Select,
} from "antd";
import { useState } from "react";
import locale from "antd/locale/ru_RU";

interface Values {
  title?: string;
  description?: string;
  modifier?: string;
  hidden: boolean;
}

export const AddOperationModal = ({ middle }: { middle?: boolean }) => {
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
        {middle ? undefined : "Добавить операцию"}
      </Button>
      <Modal
        open={open}
        title="Добавить новую операцию"
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
        <Form.Item name="title" help="Название операции">
          <Input />
        </Form.Item>
        <Card>
          <Flex gap="16px">
            <Form.Item name="account" label="Операция по счету">
              <Select placeholder="Выберите счет" />
            </Form.Item>
            <Form.Item name="date" label="Дата совершения операции">
              <ConfigProvider locale={locale}>
                <DatePicker placeholder="Выберите дату" />
              </ConfigProvider>
            </Form.Item>
          </Flex>
          <Form.Item name="value" label="Сумма операции">
            <Input placeholder="Введите сумму" />
          </Form.Item>
          <Flex gap="16px">
            <Form.Item
              name="category"
              label="Категория"
              style={{ width: "100%" }}
            >
              <Select placeholder="Выберите категорию" />
            </Form.Item>
            <Form.Item name="project" label="Проект" style={{ width: "100%" }}>
              <Select placeholder="Выберите проект" />
            </Form.Item>
          </Flex>
        </Card>
      </Modal>
    </>
  );
};
