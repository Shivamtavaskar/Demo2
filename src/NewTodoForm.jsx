import React, { useState } from 'react';

function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (newItem.trim() === "") return; // Ensure newItem is not empty
        onSubmit(newItem); // Call onSubmit function with newItem as argument
        setNewItem(""); // Clear the input field after adding a new todo item
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='new-item-form p-4 border rounded-md shadow-md'>
                <div className='form-row mb-4'>
                    <label htmlFor="item" className="block text-gray-700">New Item</label>
                    <input
                        type="text"
                        id="item"
                        className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500 bg-white text-black"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                    />
                </div>
                <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Item</button>
            </form>
        </div>
    );
}

export default NewTodoForm;
