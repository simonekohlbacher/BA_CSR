import React, { useEffect, useState } from 'react';

export default function UserList() {
    // state to hold user data and to update loading state
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch user data from API
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(data => {
                setUsers(data.results);
                setLoading(false);
            })
            .catch(err => {
                console.error('Fehler beim Laden der Mitarbeiter:innen', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="p-4">Lade Mitarbeiter:innen...</div>;
    }
    return (
        <div className="p-4 mx-12 mt-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Mitarbeiterübersicht</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users.map((user, index) => (
                    <div key={user.login.uuid} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-6">
                        <img
                            src={user.picture.large}
                            alt={`${user.name.first} ${user.name.last}`}
                            className="w-32 h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"/>
                        <div className="flex flex-col justify-between h-full">
                            <div className="font-semibold text-lg">{user.name.title} {user.name.first} {user.name.last}</div>
                            <div className="text-sm text-gray-600">{user.email}</div>
                            <div className="text-sm">{user.location.city}, {user.location.street.name} {user.location.street.number}</div>
                            <div className="text-sm text-gray-500">{user.phone}</div>
                            <button className="mt-4 bg-gray-800 rounded px-4 py-2 text-white hover:bg-gray-600 w-fit">Kontaktieren</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
