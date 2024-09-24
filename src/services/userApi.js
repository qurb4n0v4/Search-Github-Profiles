import axios from "axios";
import { githubUrl } from "../config/api";

export const fetchGithubUsers = async (user) => {
    if (!user) return null;

    const res = await axios.get(`${githubUrl}/${user}`);

    const reposRes = await axios.get(res.data.repos_url);
    return { ...res.data, repos: reposRes.data };
};