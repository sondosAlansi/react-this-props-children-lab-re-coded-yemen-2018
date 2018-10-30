// Code Invitation Component Here
export default class Invitation extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <h1>Youve been invited!</h1>
        <div className="some-component-special-class">{child}</div>
      );
    });

    return (
      <div className="some-component">
        <p>This component has {React.Children.count(this.props.children)} children.</p>
        {childrenWithWrapperDiv}
      </div>
    );
  }
}
