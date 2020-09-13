import React, { Fragment } from 'react';

const ContentGen=(props)=>{
    
    
    const createElem=(tag,body,fc,fw,fs,key)=>{
        switch(tag){
            case "h1":return <h1 key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</h1>;
            case "h2":return <h2 key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</h2>;
            case "h3":return <h3 key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</h3>;
            case "h4":return <h4 key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</h4>;
            case "h5":return <h5 key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</h5>;
            case "h6":return <h6 key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</h6>;
            case "p":return <p key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</p>;
            default:return <p key={key} style={{fontWeight:fw,color:fc,fontSize:fs}}>{body}</p>;
        }
    }


    return (<Fragment>
        {props.data.map((item,i)=>createElem(Object.keys(item)[0],item[Object.keys(item)[0]],item.font_color,item.font_weight,item.size,i))}
        </Fragment>);
}

export default ContentGen;