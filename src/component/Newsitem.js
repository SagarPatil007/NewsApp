import React, { Component } from 'react'

export class Newsitem extends Component {
    
    render() {
        let {title , description ,imageurl ,newsurl, author , date ,source} = this.props; 
        return ( 
            <div className="my-3">
                <div className="card">
                    <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
                <span className=" rounded-pill badge bg-danger" style={{zIndex:'1',left:'90%'}}> {source}
                    </span>
                    </div>
                <img  style={{width: "100%",height: "auto"}} src={imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btm-sm btn-primary">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
