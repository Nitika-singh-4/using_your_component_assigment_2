import React, {useState} from "react";

const LikeButton = () =>{
    const [liked, setLiked] = useState(false);

    const toggleLike = () =>{
        setLiked(!liked);
    }
    return (
        <button
        onClick={toggleLike}
        style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: liked ? "red" : "gray",
            fontSize: "20px",
        }}>
            ❤️ {liked ? "Liked" : "Like"}
        </button>
    )
}
export default LikeButton;