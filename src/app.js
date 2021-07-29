const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};
// you can write the object name or directly whatever you want to use 
// inside of the bind function as like .bind( {name: 'Yekta'} )
const getName = obj.getName.bind(obj);

console.log(getName());

// creating React component
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer';
    const options = ['thing one', 'thing two', 'thing three'];

    return ( 
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component{
  // React.Component requires one method define : 'render'
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handle pickleee');
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  // for efficiency, we set up the binding in constructor method instead of 
  // setting it up in the render 
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    //alert('removed');
    // we cannot use 'this' because we are losing the binding.
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {
          // key is a special reserved name, it won't be available in Option component
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  // class method
  // something that is contained inside of the class
  // other classes do not this method to run
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option)
      alert(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
