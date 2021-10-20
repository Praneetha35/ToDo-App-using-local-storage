import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";

const Data = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    const todos = localStorage.getItem("list");

    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  const removeItem = (id) => {
    console.log(id);
    const savedList = todos.filter((todo) => todo.id !== id);
    setTodos(savedList);
  };

  const deleteAll = () => {
    setTodos([]);
  };
  const columns = [
    {
      title: "Task name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Submission",
      dataIndex: "id",
      key: "id",
      render: (id) => <Button onClick={() => removeItem(id)}> Delete</Button>,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={todos} deleteItem={removeItem} />
      <Button onClick={() => deleteAll()}> Clear All</Button>
    </div>
  );
};

export default Data;
