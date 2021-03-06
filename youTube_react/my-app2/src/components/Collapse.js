import React from "react";
/* ilk contructor çalışıyor
-- render metodu il defa çalıştı
-- onClick eventi çalıştı
-- setState state metodunu güncelledi
-- re-render; render metdou güncel JSXi tekrar gösteriyor;
*/
 
class Collapse extends React.Component {
  constructor(){
    super();
    this.state={
      showContent: false
    };
    //console.log(this)
  }

  //with arrow functions this works well
  showMore=()=>{
    //console.log(this)
    this.setState({showContent:!this.state.showContent})
  }

  componentDidMount(){
    console.log("Component oluşturuldu")
  }
  componentDidUpdate(){
    console.log("Component güncellendi")
  }

  render(){
    return (
      <div>
          <button className="btn btn-primary w-100" onClick={this.showMore}>
         {this.props.children.props.cardTitle}
          </button>

        {
          this.state.showContent ?(
            <div className="collapse show">
            {this.props.children}
            </div>
          ):null
        }
       
      </div>
    );
  }
 
};

export default Collapse;
