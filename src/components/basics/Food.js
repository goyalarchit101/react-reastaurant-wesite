import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './menuCard.js';

const Food = () => {
    var categoryData = [...new Set(Menu.map((currenEle) => {
        return currenEle.category ;
    })), "All"];
    const [menuData, setMenuData] = useState(Menu);
    // const [category, setCategoryData] = useState(categoryData);
    const filerCategory = (event) => {
        if (event.target.value.toLocaleLowerCase() === String("All").toLocaleLowerCase()) {
            setMenuData(Menu);
        }
        else {
            const updatedList = (Menu.filter(menuItem => menuItem.category.toLocaleLowerCase() === event.target.value.toLocaleLowerCase()));
            setMenuData(updatedList);
        }
    }

    return (
        <div>
            <nav className='navbar '>
                <div className='btn-group'>
                    {categoryData.map((currentCtgry, index) => {
                        return (
                            <button key={index} onClick={filerCategory} value={currentCtgry} className='btn-group__item'>{currentCtgry}</button>
                        )
                    })}
                </div>
            </nav>
            <MenuCard menuItem={menuData} />
        </div>
    )
}

export default Food;