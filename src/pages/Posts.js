import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from '../pages'; 

const Posts = ({match}) => {
    return (
        <div>
           <h2>상품 리스트</h2> 
           <ul>
                <li><Link to={`${match.url}/1`}>DP-900MII</Link></li>
                <li><Link to={`${match.url}/2`}>DP-57L</Link></li>
           </ul>
           <Route exact path={match.url} render={()=>(<h3>상품을 선택하면 상세정보 페이지로 이동합니다.</h3>)}/>
           <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;
