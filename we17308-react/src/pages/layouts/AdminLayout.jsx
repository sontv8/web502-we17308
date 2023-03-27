import React from 'react'

const AdminLayout = () => {
    return (
        <div>
            <aside></aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout