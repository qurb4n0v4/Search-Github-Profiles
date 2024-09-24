import { useState, useEffect } from "react";
import { fetchGithubUsers } from "../services/userApi";

const useGithubProfiles = (user) => {
    const [profile, setProfile] = useState('');
    
    useEffect(() => {
        if(!user) return;

        const getProfile = async () => {
            const data = await fetchGithubUsers(user);
            setProfile(data);
        }
        getProfile()
    }, [user]);

    return { profile }
}

export default useGithubProfiles