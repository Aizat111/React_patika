import React from "react";

class SearchBar extends React.Component{
    
    render(){
        return(
       <form 
       //onSubmit={this.props.searchMovie(this.state.searchQuery)}
       >
           <div className="form-row mb-5 mt-3">
               <div className="col-12">
                   <input type="text" 
                   className="form-control" 
                   placeholder="Search a movie"
                   onChange={this.props.searchMovie}
                   />
               </div>
           </div>
       </form>
        )
    }
}

export default SearchBar;