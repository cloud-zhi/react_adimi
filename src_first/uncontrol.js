import React from 'react'
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();  //阻止默认动作
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />  {/*ref绑定输入以获取该对象信息*/}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm