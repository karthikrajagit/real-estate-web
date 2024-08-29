import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
    const [landlord, setLandlord] = useState(null);
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        const fetchLandlord = async () => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                setLandlord(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchLandlord();
    }, [listing.userRef]);

    return (
        <>
            {landlord && (
                <div className='flex flex-col'>
                    <p>
                        Contact: <span className='font-semibold text-black'>{landlord.username}</span> for{' '}
                        <span className='font-semibold text-black'>{listing.name.toLowerCase()}</span>
                    </p>
                    <textarea
                        name='message'
                        id='message'
                        placeholder='Enter your message here...'
                        rows='2'
                        value={message}
                        onChange={onChange}
                        className='w-full border p-3 rounded-lg'
                    ></textarea>
                    <Link
                        to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
                        className='bg-green-600 text-white text-center p-3 rounded-lg uppercase hover:opacity-80 '
                    >
                        Send Message
                    </Link>
                </div>
            )}
        </>
    );
}
