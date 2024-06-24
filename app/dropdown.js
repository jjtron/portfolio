import React, { useState } from 'react'; // Importing Modules
import clsx from 'clsx';
import { redirect } from 'next/navigation';

// Creating a function to track the changes in DropDown List
function DropdownList() { 
    //Using useState to set the defualt value of DropDown Menu and declare the values
    const [selectedValue, setSelectedValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleClick = (anchor) => () => { redirect(`/${anchor}`); };

    return (
        <div className="relative" onMouseOver={() => {setShowDropdown(true)}} onMouseLeave={() => {setShowDropdown(false)}}>
            <p className='cursor-default'>Projects</p>
            <div className={clsx("flex flex-col absolute top-6 left-2 bg-18181b w-[120px]", { 'visible' : showDropdown, 'hidden' : !showDropdown })}>
                <a href="projects-corporate" onClick={handleClick("projects-corporate")} className={clsx("extra-small-font md:text-base")}>Corporate</a>
                <a href="projects-personal" onClick={handleClick("projects-personal")} className={clsx("extra-small-font md:text-base")}>Personal</a>
            </div>
        </div>
    );
}
export default DropdownList;