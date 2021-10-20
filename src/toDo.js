import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { Table, Tag, Space } from "antd";
// import Data from "./table";
const { TextArea } = Input;

// const {Option}=Select
const ToDoApp = () => {
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [item, setItem] = useState([]);
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([
      ...item,
      { name: name, category: category, description: description, date: date },
    ]);
  };

  useEffect(() => {
    const list = localStorage.getItem("item");

    if (list) {
      setItem(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(item);
    localStorage.setItem("list", json);
  }, [item]);

  const onFinish = (values) => {
    setItem([
      ...item,
      {
        id: item.length + 1,
        name: values.name,
        category: values.category,
        description: values.description,
        date: new Date(values.date),
      },
    ]);
    //Resetting the state for every new entry
    setName("");
    setCategory("");
    setDescription("");
    setDate("");

    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          remember: true,
        }}
        onSubmit={handleSubmit}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        autoComplete="off"
      >
        <header className="App-header">TODO APP</header>
        <Form.Item
          label="Task name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input task name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Select>
            <Select.Option value="work">Work</Select.Option>
            <Select.Option value="fitness">Fitness</Select.Option>
            <Select.Option value="study">Study</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="description" label="Description">
          <TextArea showCount maxLength={200} style={{ width: 500 }} />
        </Form.Item>
        <Form.Item label="DatePicker" name="date">
          <DatePicker showTime value={date} />
        </Form.Item>

        <Form.Item label="Button">
          <Button htmlType="submit">Submit</Button>
          <Button onClick={onReset}>Clear All</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ToDoApp;
