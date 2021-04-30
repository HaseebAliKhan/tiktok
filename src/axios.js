import React from 'react'
import axios from "axios";
const intance = axios.create({
    baseURL: "https://tiktok-mern-backend125.herokuapp.com/"
});

export default intance
