import { useState } from 'react';

export const useCount = (type, count) => {
    const [value, setValue] = useState({})
    // const setter = (value) => {
    //     return setValue(value);
    // }
    return [value, setValue]
}

