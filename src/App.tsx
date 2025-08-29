import { Card, Input } from "antd";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { TitleUI } from "./components/Title/Title";
import { useState } from "react";
import { ControllerTab } from "./components/ControllerTab/ControllerTab";
import { ButtonUI } from "./components/ButtonUI/ButtonUI";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addTodo, removeCompleted } from "./features/todo/todoSlice";

function App() {
  const [activeKey, setActiveKey] = useState("all");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.todo);
  const [inputValue, setInputValue] = useState("");

  const todo = data.data.filter((item) => {
    if (activeKey === "all") {
      return item;
    } else if (activeKey === "active") {
      return !item.completed;
    } else if (activeKey === "completed") {
      return item.completed;
    }
  });

  const notCompleted = data.data.filter((item) => !item.completed).length;
  const completed = data.data.filter((item) => item.completed).length;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!inputValue) return;
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };

  return (
    <>
      <TitleUI title="To do list" />
      <Card title="Мои задачи" style={{  width: '55%', margin: "0 auto" }}>
        <Input
          value={inputValue}
          placeholder="Добавить задачу"
          variant="underlined"
          onChange={onChange}
          onKeyDown={onAddTodo}
        />
        <ItemsList data={todo} />
        <ControllerTab>
          {activeKey === "completed" ? <p>{completed} items done</p> : <p>{(notCompleted) ? notCompleted : "No"} items left</p>}
          <ButtonUI
            type="all"
            activeKey={activeKey}
            onClick={() => setActiveKey("all")}
            title="Все"
          />
          <ButtonUI
            type="active"
            activeKey={activeKey}
            onClick={() => setActiveKey("active")}
            title="Активные"
          />
          <ButtonUI
            type="completed"
            activeKey={activeKey}
            onClick={() => setActiveKey("completed")}
            title="Выполненные"
          />
          <ButtonUI
            activeKey={activeKey}
            onClick={() => dispatch(removeCompleted())}
            title="Очистить выполненные"
            isRed={true}
          />
        </ControllerTab>
      </Card>
    </>
  );
}

export default App;
