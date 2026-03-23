import axios from 'axios';

const FORM_API_URL = import.meta.env.VITE_FORM_URL || 'https://application-maker.onrender.com/api';

const formClient = axios.create({
  baseURL: FORM_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export async function submitApplicant(payload) {
  try {
    const res = await formClient.post('/public/applicants', payload);
    return res.data;
  } catch (err) {
    // rethrow for caller to handle
    throw err;
  }
}

export default { submitApplicant };