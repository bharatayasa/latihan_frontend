import React from 'react'

function NavbarUsers({logout}) {
    return (
        <div>
            <div>
                <button className='px-5 py-5 bg-pink-700 rounded-xl mx-5 my-5' onClick={logout}>logout</button>
            </div>
            <h1>ini bagian navbar</h1>
        </div>
    )
}

export default NavbarUsers
