import React, { useState, useEffect } from "react";
import "./style.css";


const Todo = () => {
    const forceUpdate = React.useReducer(() => ({}))[1]
    const getLocalStorage = () => {
        const lists = localStorage.getItem("mytodoList");
        if (lists)
            return JSON.parse(lists);
        else
            return [];
    }

    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState(getLocalStorage());
    const [toggle, setToggle] = useState(false);
    const [editId, setEditId] = useState();

    const addData = () => {
        if (!inputData)
            alert("please input Data");
        else {
            const newInputItem = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newInputItem]);
            setInputData("");
        }
    }
    const editGivenItem = ()=>{
        const obj = items.find(x => x.id === editId);
        if (obj) {
          obj.name = inputData;
        }
        forceUpdate();
    }
    const editItem = (id) => {
        setToggle(true);
        const editItem = items.find((currenEle) => {
             return currenEle.id === id;
        })
        setEditId(editItem.id);
        setInputData(editItem.name);
    }

    useEffect(() => {
        localStorage.setItem("mytodoList", JSON.stringify(items));
    }, [items])

    const deleteItem = (id) => {
        const updatedItems = items.filter((currenEle) => {
            return currenEle.id !== id;
        })
        setItems(updatedItems);
    }

    const removeAllItems = () => {
        setItems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍ Add Item"
                            className="form-control"
                            value={inputData}
                            onChange={(event) => {
                                setInputData(event.target.value);
                            }}
                        />
                        {!toggle ?
                            <i className="fa fa-plus add-btn" onClick={addData}></i> :
                            <i className="far fa-edit add-btn" onClick={editGivenItem}></i>
                        }

                    </div>
                    {/* show our items  */}
                    <div className="showItems">
                        {items.map((item) => {
                            return (
                                <div className="eachItem" key={item.id}>
                                    <h3 > {item.name}</h3>
                                    <div className="todo-btn">
                                        <i
                                            className="far fa-edit add-btn" onClick={() => { editItem(item.id) }} ></i>
                                        <i
                                            className="far fa-trash-alt add-btn" onClick={() => { deleteItem(item.id) }}></i>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>

                    {/* remove all button  */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All" onClick={removeAllItems}>
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Todo;