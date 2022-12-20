import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import axios from "axios"

function AllPosts({ category }) {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [isShow, setIsShow] = useState(false)

  function toggleShow(){
    setIsShow(!isShow)
  }

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      try {
        // 카테고리 적용
        const response = await axios.get(
          `https://gist.githubusercontent.com/Anas-wg/e55fcb800ebf6c65dea8c92b14dd7521/raw/7183bb40111b73916a81bd77239a8cd64d5dda02/All.json`,
        );
          setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [category]);



  return (
    <Layout>
      <Main>
        {posts.slice(offset, offset + limit).map(({ id, single,plural, mean, example, exmean, appendix,part }) => (
          <Article key={id}>
            <h3 style={{margin: "10px 10px;"}}>
              {single} / {plural}
            </h3>
            <p>{mean} ({part})</p>
            <p>{example}</p>
            <p className="toggle">{exmean}</p>
            <p className="toggle">{isShow&& "💡Appendix"}</p>
            <p className="toggle">{isShow && appendix}</p>
            <Button onClick={toggleShow}>{isShow ? "🔼" : "🔽"}</Button>
          </Article>
        ))}
      </Main>

      <footer>
        <Pagination 
            total={posts.length}
            limit = {limit}
            page = {page}
            setPage={setPage}
        />
      </footer>
      <label>
        패이지 당 표시할 게시물 수:
        <select
            type = "number"
            value={limit}
            onChange={({ target: {value} })=> setLimit(Number(value))}
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select>
      </label>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Main =styled.main`
  display: flex;
  flex-wrap: wrap;
`

const Article = styled.div`
  margin : 10px 10px;
  width: 350px;
  heigth: 120px;
  background : #FAFAFA;
  border-radius: 10px;
  padding-left: 10px;
  box-shadow: 2px 5px 2px 1px #D9D9D9;
`

const Button = styled.button`
  border: none;
  background: #FAFAFA;
`

export default AllPosts;
