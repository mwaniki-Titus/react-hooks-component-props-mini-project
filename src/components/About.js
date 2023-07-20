import React from "react";
function About(props){
    const image= props.image;
    const about = props.about; 

    return (
    <aside>
        <img src={image ? image:"https://via.placeholder.com/215"}alt="blog logo"/>
        <p>{about}</p>
    </aside>
   );
}
export default About;