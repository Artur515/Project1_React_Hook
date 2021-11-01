import {useEffect, useState} from "react";

export const useRequest = (request) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        setLoading(true)
        request()
            .then(response => {
                setData(response.data)
                setError('')
            })
            .catch(error => setError(error))
            .finally(() => setLoading(false))
        // eslint-disable-next-line
    }, [])

    return [data, loading, error]
}
