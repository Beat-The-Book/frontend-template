import axios from "axios";
import React from "react";
import useSWR from "swr";

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface SWRTestProps {}

const fetchTodo = async (): Promise<TodoResponse> =>
  (await axios.get<TodoResponse>(URL)).data;

const SWRTest: React.FC<SWRTestProps> = () => {
  const { data, error } = useSWR("todos/1", fetchTodo);

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return <div>SWR+axios loaded: {data.title}</div>;
};

export default SWRTest;
