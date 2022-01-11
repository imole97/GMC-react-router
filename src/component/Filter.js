import React from 'react'

const Filter = ({handleInput,search, results,rating}) => {
    return (
        <div>
            <section>
                <input
                type='text'
                className='searchbox'
                placeholder='Time to search for a movie!'
                onChange={handleInput}
                onKeyPress={search} 
                />
                
                    <select onChange={rating}>
                        <option value='0'>Rating Filter:</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select> 
                
            </section>
        </div>
    )
}

export default Filter
