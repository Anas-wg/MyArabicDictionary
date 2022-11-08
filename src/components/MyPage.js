import React, { useState , useEffect } from 'react'
import axios from 'axios'

function MyPage() {
    const [words, setWords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setWords(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.post(
              'https://gist.githubusercontent.com/Anas-wg/e55fcb800ebf6c65dea8c92b14dd7521/raw/6278614663ba469dbd940f9cb5288bce0d54ed9c/All.json'
            ,{
                mean: "축구",
                single: "كرة القدم"
            });
            setWords(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
    
        fetchUsers();
      }, []);
    
  return (
    <div>
        {words.map(data => (
            <div key={data.id}>
                {data.mean} / {data.single}
            </div>
        ))}
    </div>
  )
}

export default MyPage