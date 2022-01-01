import e from 'express';
import React from 'react';
class Update extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: "",
      };
      this.onChange = this.onChange.bind(this);
      this.update = this.update.bind(this);
    }
  
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          console.log('product updated successfully')
        } else {
          console.log("Oops updated failed!!")
        }
      }

    onChange(e) {
      this.setState({
        term: e.target.value,
      });
    }
  
    update(){
        e.preventDefault();
      this.props.onSearch(this.state.term);
    }
  
    render() {
      return (
        <form onSubmit={handleSubmit}>
        <div>
        <label> Update Product </label>        
          <input value={this.state.term} onChange={this.onChange} />
          <button onClick={this.update}> Save to Update  </button>
        </div>
        </form>
      );
    }
  }

export default Update ;

