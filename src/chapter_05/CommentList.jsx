import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이명규",
        comment:"안녕하세요 . 이명규입니다."
    },
    {
        name: "이명규2",
        comment:"안녕하세요 . 이명규2입니다."
    },
    {
        name: "이명규3",
        comment:"안녕하세요 . 이명규3입니다."
    },
]
function CommentList(props) {
    return (
        <div>
            {comments.map((foo) => {
                return (
                    <Comment name={foo.name} Comment={foo.comment} />
                )
            })}
        
        </div>
    );
}

export default CommentList;