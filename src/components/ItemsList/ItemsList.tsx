import React from 'react';
import { List } from 'antd';

import styles from "./itemsList.module.scss";
import { Item } from '../Item/Item';
import type { TToDo } from '../../app/types';
import { useAppDispatch } from '../../app/hooks';
import { toggleTodo } from '../../features/todo/todoSlice';


interface IItemsList {
    data: TToDo[];
}

export const ItemsList: React.FC<IItemsList> = ({data}) => {
const dispatch = useAppDispatch();
const handleToggle = (index: number) => () => {
    dispatch(toggleTodo(index));
  };
return (    
  <List
    className={styles.itemsList}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <Item title={item.title} index={item.id} onChange={handleToggle(item.id)} completed={item.completed}/>
    )}
  />
)};