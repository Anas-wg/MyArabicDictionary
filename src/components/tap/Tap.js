import React, { useState } from 'react';
import styled from 'styled-components';
import MyPage from '../MyPage';
import AllPosts from '../paginate/AllPosts';
import NounPosts from '../paginate/NounPosts';
import VerbPosts from '../paginate/VerbPosts';
import Search from '../Search';
import Test from '../Test';

export default function Tab() {
	const [activeIndex, setActiveIndex] = useState(0);

	const tabClickHandler = index => [setActiveIndex(index)];

	const tabContArr = [
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(0)}>Noun</TabTitle>,
			tabCont: <TabCont>
				<NounPosts />
			</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(1)}>Verb</TabTitle>,
			tabCont: <TabCont>
				<VerbPosts />
			</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(2)}>Harf</TabTitle>,
			tabCont: 
			<TabCont>
				DataSet 준비중
			</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(3)}>All</TabTitle>,
			tabCont: <TabCont>
				<AllPosts />
			</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(4)}>🔍</TabTitle>,
			tabCont: <TabCont>
				<Search />
			</TabCont>,
		},
		{
			tabTitle: <TabTitle onClick={() => tabClickHandler(5)}>Test</TabTitle>,
			tabCont: <TabCont>
				<Test />
			</TabCont>,
		},
	];
	return (
		<Container>
			<TabBoxed>
				{tabContArr.map((section, index) => {
					return section.tabTitle;
				})}
			</TabBoxed>
			<TabContentBox>{tabContArr[activeIndex].tabCont}</TabContentBox>
		</Container>
	);
}

const Container = styled.div`
`;

const TabBoxed = styled.div`
	display: flex;
	margin : 10px;
`;

const TabContentBox = styled.div``;

const TabTitle = styled.div`
	padding: 10px;
	color: #003260;
	&:hover{
		color: red;
	}
	&:active{
		color: red;
	}
	&:focus-within{
		color: red;
	}
`;

const TabCont = styled.div`
	
`;