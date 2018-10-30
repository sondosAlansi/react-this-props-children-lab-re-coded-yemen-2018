// Code Invitation Component Here
export default class Invitation extends React.Component {
  render() {
    const childrenWithWrapperDiv = React.Children.map(this.props.children, child => {
      return (
        <h1>Youve been invited!</h1>
        <h2>{this.props.children}</h2>
      
      );
    });

  
  }
}
