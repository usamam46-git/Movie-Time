import React from 'react'

const search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='search'>
            <div>
                <img src="search.svg" alt="search icon" />
                <input type="text"
                    value={searchTerm}
                    placeholder='Search through thousands of movies'
                    onChange={(event) => setSearchTerm(event.target.value)} />
            </div>
        </div>
    )
}

export default search
