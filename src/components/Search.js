import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"


function Search() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {
        // 카테고리 적용
        const response = await axios.get(
          `https://gist.githubusercontent.com/Anas-wg/e55fcb800ebf6c65dea8c92b14dd7521/raw/6278614663ba469dbd940f9cb5288bce0d54ed9c/All.json`,
        );
          setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
        <SearchBar
        type="text"
        placeholder = "한글 뜻을 입력하세요."
        onChange = {(e) => {
          setSearchTerm(e.target.value)
        }}
        >
        </SearchBar>
        {posts.filter(list => {
          return list.mean.toLowerCase().includes(searchTerm.toLowerCase())
          ? list : null;
        })
        .map(list => (
          <div key={list.id}>
              <h3>{list.single} / {list.plural} </h3>
              <p>{list.mean}</p>
          </div>
        ))
        }
      </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const SearchBar = styled.input`
  outline: none;
  border: none;
  &:focus{
    outline: none;
    width: 30%;
    border-bottom: 0.5px solid #003260;
  }
  
  
`

export default Search
