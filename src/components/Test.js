import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"
import Toggle from "./Toggle";




function Test() {
    const [posts, setPosts] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    function setChecked(){
        setIsShow(!isShow)
      }


    const fetchUsers = async () => {
        try{
            setLoading(true);
            const response = await axios.get(
                "https://gist.githubusercontent.com/Anas-wg/e55fcb800ebf6c65dea8c92b14dd7521/raw/6278614663ba469dbd940f9cb5288bce0d54ed9c/All.json"
            );
            setPosts(response.data);
        } catch (e) {
            setError(e)
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
        console.log("retry")
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    
  return (
    <Layout>
        <Container>
            {posts.map(data => (
                <Articles>
                    <div>
                        {data.single}
                        <p>{isShow && data.mean}</p>
                        <Toggle 
                            left="공개"
                            right="비밀"
                            leftBgColor="var(--first)"
                            rightBgColor="var(--purple)"
                            setChecked={()=> setChecked()}
                        ></Toggle>
                    </div>
                </Articles>
                        ))}
            <button onClick={fetchUsers}>다시 불러오기</button>
        </Container>
    </Layout>
  )
}

export default Test

const Layout = styled.div`
`
const Articles = styled.div``
const Container = styled.div``
const Button = styled.button``