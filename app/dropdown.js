import React, { useState } from 'react'; // Importing Modules
import clsx from 'clsx';
// Creating a function to track the changes in DropDown List
function DropdownList() { 
    //Using useState to set the defualt value of DropDown Menu and declare the values
    const [selectedValue, setSelectedValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="relative" onMouseOver={() => {setShowDropdown(true)}} onMouseLeave={() => {setShowDropdown(false)}}>Projects
            <div className={clsx("flex flex-col absolute top-6 left-0 bg-18181b w-[150px]", { 'visible' : showDropdown, 'hidden' : !showDropdown })}>
                <a href="projects" className={clsx("extra-small-font md:text-base")}>M2 Systems</a>
                <a href="projects" className={clsx("extra-small-font md:text-base")}>Six Questions</a>
                <a href="projects" className={clsx("extra-small-font md:text-base")}>Chess</a>
            </div>
        </div>
    );
}
export default DropdownList;